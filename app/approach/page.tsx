import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Approach | How We Work | Lawsons CloudWorks',
  description: 'Learn how Lawsons CloudWorks engages with clients. Clear scopes, plain English documentation, and hands-on delivery without enterprise drama.',
};

export default function ApproachPage() {
  const engagementSteps = [
    {
      number: 1,
      title: 'Discovery Call',
      description: 'We start with a conversation to understand your situation, challenges, and what good looks like for you.',
    },
    {
      number: 2,
      title: 'Short Diagnostic',
      description: 'A remote or on-site assessment (where appropriate) to understand your current setup and identify priorities.',
    },
    {
      number: 3,
      title: 'Proposal & Options',
      description: 'Clear recommendations with rationale, options, and realistic timelines. No mystery meat proposals.',
    },
    {
      number: 4,
      title: 'Delivery & Check-ins',
      description: 'Hands-on work with regular communication. You\'ll know what\'s happening and why.',
    },
    {
      number: 5,
      title: 'Handover & Support',
      description: 'Documentation, knowledge transfer, and optional ongoing relationship if needed.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Page Intro */}
      <section className="section-spacing bg-gradient-to-br from-brand-light to-white">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="mb-6">Our Approach</h1>
          <p className="text-xl text-neutral-700 leading-relaxed">
            We're not a typical MSP or a big consultancy. Here's how we work with clients and
            what makes us different.
          </p>
        </div>
      </section>

      {/* How We Engage */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4">How We Work With You</h2>
            <p className="text-lg text-neutral-600">
              Our typical engagement follows this pattern, adapted to your needs.
            </p>
          </div>

          <div className="space-y-8">
            {engagementSteps.map((step) => (
              <div key={step.number} className="flex items-start space-x-6 bg-neutral-50 p-6 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-sky text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-brand-navy mb-2">{step.title}</h3>
                  <p className="text-neutral-700 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Small Consultancy, Big Experience */}
      <section className="section-spacing bg-brand-light">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-8">Small Consultancy, Big Experience</h2>

          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              Lawsons CloudWorks is a small consultancy led by an experienced principal consultant
              with over 30 years in IT. For specialised work, we bring in trusted partners and
              contractors who we've worked with before.
            </p>

            <p>
              Everything is owned and coordinated by CloudWorks. You have one point of contact,
              clear accountability, and consistent quality.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-sm mt-8">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">This approach delivers:</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Lower overhead</strong> than big consultancies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Direct access</strong> to senior expertise (not junior consultants)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Flexibility</strong> without sacrificing quality</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Realistic pricing</strong> that reflects actual value, not brand tax</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation and Handover */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-8">You Get More Than Just Done Work</h2>

          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              When we finish an engagement, you don't just get working systems. You get the
              knowledge and documentation to understand and maintain them.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-brand-navy mb-3">What We Deliver</h3>
                <ul className="space-y-2 text-base">
                  <li className="flex items-start space-x-2">
                    <span className="text-brand-sky">•</span>
                    <span>Architecture diagrams</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-brand-sky">•</span>
                    <span>Written summaries in plain English</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-brand-sky">•</span>
                    <span>Clear next steps and recommendations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-brand-sky">•</span>
                    <span>Runbooks where appropriate</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-brand-sky">•</span>
                    <span>Knowledge transfer sessions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-brand-navy mb-3">What This Means</h3>
                <p className="text-base">
                  You're not dependent on us (or anyone else) to understand your own systems.
                  This is the opposite of "mystery meat" IT support where you're locked in forever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work Best With */}
      <section className="section-spacing bg-neutral-900 text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-8 text-white">Who We Work Best With</h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-neutral-300">
              We're not the right fit for everyone. Here's the profile of clients where we do our best work:
            </p>

            <ul className="space-y-4 mt-8">
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-200">
                  <strong className="text-white">Willing to invest time and attention.</strong> The best
                  outcomes happen when you're engaged in the process, not just delegating completely.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-200">
                  <strong className="text-white">Open to honest conversations about trade-offs.</strong> Every
                  technical decision involves compromise. We'll explain the options clearly.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-200">
                  <strong className="text-white">Value clarity and documentation.</strong> You want to
                  understand your systems, not just have them work mysteriously.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-200">
                  <strong className="text-white">Ready to modernise.</strong> You're looking to improve and
                  invest, not just patch and firefight.
                </span>
              </li>
            </ul>

            <p className="text-neutral-300 pt-6">
              If this sounds like you, let's talk.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Start a Conversation?</h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Book a discovery call and we'll explore whether we're the right fit.
          </p>
          <Link href="/contact" className="btn-primary inline-block text-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
