'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    companySize: '',
    currentMSP: '',
    services: [] as string[],
    urgency: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        companySize: '',
        currentMSP: '',
        services: [],
        urgency: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try emailing us directly at hello@lawsonscloudworks.co.uk');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <svg
          className="w-16 h-16 text-green-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-2xl font-semibold text-green-900 mb-2">Message Sent!</h3>
        <p className="text-green-700">
          Thank you for contacting us. We'll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block font-semibold text-neutral-700 mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-colors"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-semibold text-neutral-700 mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-colors"
        />
      </div>

      {/* Company & Role */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block font-semibold text-neutral-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-colors"
          />
        </div>

        <div>
          <label htmlFor="role" className="block font-semibold text-neutral-700 mb-2">
            Your Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-colors"
          />
        </div>
      </div>

      {/* Company Size & Current MSP */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="companySize" className="block font-semibold text-neutral-700 mb-2">
            Company size
          </label>
          <select
            id="companySize"
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-colors"
          >
            <option value="">Select size</option>
            <option value="1-19">1-19 people</option>
            <option value="20-49">20-49 people</option>
            <option value="50-99">50-99 people</option>
            <option value="100-249">100-249 people</option>
            <option value="250+">250+ people</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>

        <div>
          <label htmlFor="currentMSP" className="block font-semibold text-neutral-700 mb-2">
            Are you currently using an MSP?
          </label>
          <select
            id="currentMSP"
            name="currentMSP"
            value={formData.currentMSP}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-colors"
          >
            <option value="">Select option</option>
            <option value="yes-happy">Yes, and happy with them</option>
            <option value="yes-looking">Yes, but looking to switch</option>
            <option value="no-internal">No, we have internal IT</option>
            <option value="no-nothing">No, we need help</option>
          </select>
        </div>
      </div>

      {/* Services */}
      <div>
        <label className="block font-semibold text-neutral-700 mb-2">
          What do you need help with?
        </label>
        <p className="text-sm text-neutral-600 mb-3">
          Choose the closest option; we'll discuss details on the call.
        </p>
        <div className="space-y-2">
          {[
            'Managed Cloud Workspace Service',
            'Managed Endpoint & Identity Service',
            'Automation & Dev Tooling (managed or project)',
            'On-Ramp Project (Health Check, Migration)',
            'Not sure – please advise',
          ].map((service) => (
            <label key={service} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={() => handleCheckboxChange(service)}
                className="w-5 h-5 text-brand-teal border-neutral-300 rounded focus:ring-brand-teal"
              />
              <span className="text-neutral-700">{service}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Urgency */}
      <div>
        <label htmlFor="urgency" className="block font-semibold text-neutral-700 mb-2">
          How urgent is this?
        </label>
        <select
          id="urgency"
          name="urgency"
          value={formData.urgency}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-colors"
        >
          <option value="">Select urgency</option>
          <option value="urgent">Urgent (days)</option>
          <option value="soon">Soon (weeks)</option>
          <option value="planning">Planning ahead (months)</option>
          <option value="exploring">Just exploring</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-semibold text-neutral-700 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-colors resize-vertical"
          placeholder="Tell us about your project or challenges..."
        />
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full btn-primary text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-neutral-600 text-center">
          We usually reply within one UK business day. Prefer email?{' '}
          <a href="mailto:hello@lawsonscloudworks.co.uk" className="text-brand-teal hover:text-brand-ink">
            hello@lawsonscloudworks.co.uk
          </a>
        </p>
        <p className="text-xs text-neutral-500 text-center">
          We'll only use your details to respond to your enquiry. For more, see our{' '}
          <a href="/privacy" className="text-brand-teal hover:text-brand-ink underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
