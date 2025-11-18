import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Lawsons CloudWorks',
  description: 'Terms of service for Lawsons CloudWorks, a trading name of Lawsons Enterprises Ltd.',
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-neutral-600">
              <strong>Last updated:</strong> November 2025
            </p>

            <h2>About These Terms</h2>
            <p>
              These terms govern your use of the Lawsons CloudWorks website and any services we provide.
              By using this website or engaging our services, you agree to these terms.
            </p>

            <h2>Who We Are</h2>
            <p>
              Lawsons CloudWorks is a trading name of Lawsons Enterprises Ltd, a company registered in
              England and Wales (Company No: 16433965, VAT: GB495884223).
            </p>

            <h2>Our Services</h2>
            <p>
              We provide cloud consulting, workspace architecture, automation, and advisory services.
              Specific terms for each engagement are agreed separately in writing before work begins.
            </p>

            <h2>Website Use</h2>
            <p>You may use this website for:</p>
            <ul>
              <li>Learning about our services</li>
              <li>Contacting us about potential projects</li>
              <li>Reading case studies and information</li>
            </ul>

            <p>You agree not to:</p>
            <ul>
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorised access to our systems</li>
              <li>Copy or reproduce content without permission</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, images, and logos, is owned by Lawsons
              Enterprises Ltd unless otherwise stated.
            </p>

            <h2>Liability</h2>
            <p>
              Information on this website is provided for general guidance only. We make no warranties
              about the completeness or accuracy of this information. For specific advice about your
              situation, please contact us directly.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of the website after changes
              indicates acceptance of the new terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of England and Wales.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about these terms, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> hello@lawsonscloudworks.co.uk
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}
