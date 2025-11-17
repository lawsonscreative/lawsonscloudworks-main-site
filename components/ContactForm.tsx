'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    companySize: '',
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
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-sky focus:border-brand-sky transition-colors"
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
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-sky focus:border-brand-sky transition-colors"
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
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-sky focus:border-brand-sky transition-colors"
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
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-sky focus:border-brand-sky transition-colors"
          />
        </div>
      </div>

      {/* Company Size */}
      <div>
        <label htmlFor="companySize" className="block font-semibold text-neutral-700 mb-2">
          Company Size
        </label>
        <select
          id="companySize"
          name="companySize"
          value={formData.companySize}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-sky focus:border-brand-sky transition-colors"
        >
          <option value="">Select size</option>
          <option value="1-20">1-20 employees</option>
          <option value="21-50">21-50 employees</option>
          <option value="51-100">51-100 employees</option>
          <option value="101-250">101-250 employees</option>
          <option value="250+">250+ employees</option>
        </select>
      </div>

      {/* Services */}
      <div>
        <label className="block font-semibold text-neutral-700 mb-3">
          What do you need help with?
        </label>
        <div className="space-y-2">
          {[
            'Cloud & workspace architecture',
            'Modern endpoint & identity',
            'Automation & dev tooling',
            'Advisory & project rescue',
            'Not sure / general enquiry',
          ].map((service) => (
            <label key={service} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={() => handleCheckboxChange(service)}
                className="w-5 h-5 text-brand-sky border-neutral-300 rounded focus:ring-brand-sky"
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
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-sky focus:border-brand-sky transition-colors"
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
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-sky focus:border-brand-sky transition-colors resize-vertical"
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

      <p className="text-sm text-neutral-600 text-center">
        We typically reply within one business day. Prefer email?{' '}
        <a href="mailto:hello@lawsonscloudworks.co.uk" className="text-brand-sky hover:text-brand-navy">
          hello@lawsonscloudworks.co.uk
        </a>
      </p>
    </form>
  );
}
