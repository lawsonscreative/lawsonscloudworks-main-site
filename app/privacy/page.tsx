import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Lawsons CloudWorks',
  description: 'Privacy policy for Lawsons CloudWorks, a trading name of Lawsons Enterprises Ltd.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-neutral-600">
              <strong>Last updated:</strong> November 2025
            </p>

            <p>
              This privacy policy explains how Lawsons CloudWorks (a trading name of Lawsons Enterprises Ltd)
              collects, uses, and protects your personal information.
            </p>

            <h2>Who We Are</h2>
            <p>
              Lawsons CloudWorks is a trading name of Lawsons Enterprises Ltd, a company registered in
              England and Wales (Company No: 16433965, VAT: GB495884223).
            </p>

            <h2>Information We Collect</h2>
            <p>When you contact us through our website, we collect:</p>
            <ul>
              <li>Your name and email address</li>
              <li>Your company name and role (if provided)</li>
              <li>Information about your enquiry</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to your enquiries</li>
              <li>Provide information about our services</li>
              <li>Maintain records of our business communications</li>
            </ul>

            <h2>How We Protect Your Information</h2>
            <p>
              We take appropriate technical and organisational measures to protect your personal information
              from unauthorised access, loss, or misuse.
            </p>

            <h2>Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy or want to exercise your rights, please contact us at:
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
