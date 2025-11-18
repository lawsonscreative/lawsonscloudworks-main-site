import type { Metadata } from 'next';
import { Suspense } from 'react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch | Lawsons CloudWorks MSP',
  description: 'Contact Lawsons CloudWorks for managed cloud workspace and endpoint services. Book a discovery call to discuss your managed service needs or on-ramp project.',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Page Intro */}
      <section className="relative bg-gradient-to-br from-neutral-900 to-brand-ink text-white py-16">
        <div className="container-custom max-w-4xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Get in Touch</h1>
          <p className="text-xl text-white">
            Book a discovery call or send a message. We reply within one business day.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-brand-ink mb-4">Contact Information</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  We&apos;re here to help. Whether you&apos;re looking for ongoing managed services, considering switching MSPs, or need an on-ramp project, we&apos;re happy to chat.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-brand-ink mb-2">Email</h4>
                  <a
                    href="mailto:hello@lawsonscloudworks.co.uk"
                    className="text-brand-teal hover:text-brand-ink transition-colors"
                  >
                    hello@lawsonscloudworks.co.uk
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-ink mb-2">Location</h4>
                  <p className="text-neutral-600">
                    Based in Kent, UK<br />
                    Serving clients across the United Kingdom
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-ink mb-2">Response Time</h4>
                  <p className="text-neutral-600">
                    We typically respond to enquiries within one business day.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-200">
                <h4 className="font-semibold text-brand-ink mb-3">Part of Lawsons Enterprises</h4>
                <p className="text-sm text-neutral-600 mb-3">
                  CloudWorks is a trading name of Lawsons Enterprises Ltd
                </p>
                <a
                  href="https://lawsonscreative.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-teal hover:text-brand-ink transition-colors"
                >
                  Visit Lawsons Creative →
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-neutral-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-brand-ink mb-6">Send Us a Message</h3>
                <Suspense fallback={
                  <div className="text-center py-8">
                    <p className="text-neutral-600 mb-4">Loading form...</p>
                    <p className="text-sm text-neutral-500">
                      If the form doesn&apos;t appear within a few seconds, please email us directly at{' '}
                      <a href="mailto:hello@lawsonscloudworks.co.uk" className="text-brand-teal hover:text-brand-ink underline">
                        hello@lawsonscloudworks.co.uk
                      </a>
                    </p>
                  </div>
                }>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section-spacing bg-brand-teal-soft">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-12">What Happens Next?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                1
              </div>
              <h3 className="text-xl font-semibold text-brand-ink mb-3">Step 1: We&apos;ll Review</h3>
              <p className="text-neutral-600">
                We'll read your message and review your requirements carefully.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                2
              </div>
              <h3 className="text-xl font-semibold text-brand-ink mb-3">Step 2: Quick Response</h3>
              <p className="text-neutral-600">
                You'll hear back from us within one business day to arrange a call.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                3
              </div>
              <h3 className="text-xl font-semibold text-brand-ink mb-3">Step 3: Discovery Call</h3>
              <p className="text-neutral-600">
                We'll have a no-obligation conversation to explore if we're the right fit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
