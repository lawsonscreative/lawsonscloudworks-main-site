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
      title: 'Discovery & Fit Check',
      description: 'Brief conversation to understand your situation and see if there\'s a fit. Usually a 30-minute call. No pressure, no sales pitch.',
    },
    {
      number: 2,
      title: 'Short Diagnostic',
      description: 'Remote or on-site (where appropriate) assessment to understand current state. Typical duration: 1-2 weeks depending on complexity.',
    },
    {
      number: 3,
      title: 'Proposal & Options',
      description: 'Clear recommendations with rationale, trade-offs and realistic timelines. We present options, not single "solutions".',
    },
    {
      number: 4,
      title: 'Delivery & Check-Ins',
      description: 'Hands-on work with regular communication. You\'re never left wondering what\'s happening. Frequency depends on engagement type.',
    },
    {
      number: 5,
      title: 'Handover & Next Steps',
      description: 'Documentation, training, clear handover. Optional ongoing relationship if it makes sense. You own your systems, not us.',
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
              CloudWorks is led by principal consultant Andy, with 30+ years in IT and experience running
              AWS WorkSpaces for 4,000+ developers.
            </p>

            <p>
              For specialist areas (e.g. deep networking, heavy security, certain app stacks), we bring in
              trusted partners.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-sm mt-8">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">This means:</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>You get one accountable owner who knows your situation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>You benefit from a wider network when needed</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>You don&apos;t pay for overhead of a large firm</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>You get direct access to senior expertise, not juniors</span>
                </li>
              </ul>
            </div>

            <p className="pt-4">
              This approach sits between one-person freelancers (who do everything ad hoc) and large firms
              like Intelliworx (where you might feel like a ticket number).
            </p>
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

      {/* Security & Responsibility */}
      <section className="section-spacing bg-brand-light">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-8">Security & Responsibility</h2>

          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              We ensure sensible security baselines in everything we do:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Identity and access patterns (SSO, MFA, conditional access)</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Endpoint security policies</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Cloud configuration security</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sensible defaults and hardening</span>
              </li>
            </ul>

            <p>
              For regulatory-heavy or high-risk environments, we collaborate with specialist security partners.
            </p>

            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-sky mt-6">
              <p className="font-semibold text-brand-navy mb-2">
                This is by design:
              </p>
              <p>
                We stay excellent in cloud, workspace and automation rather than becoming a mediocre SOC or MDR provider.
              </p>
            </div>

            <p>
              If you need 24/7 monitoring, threat hunting, or deep penetration testing, we&apos;ll help you find the
              right specialist partner and work alongside them.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Work Best With */}
      <section className="section-spacing bg-neutral-900 text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-8 text-white">Who We Work Best With</h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-neutral-300">
              We work best with:
            </p>

            <ul className="space-y-4 mt-8">
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-200">
                  Leadership willing to engage with trade-offs and make informed decisions
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-200">
                  Teams open to documentation and process improvements
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-200">
                  Organisations that prefer clarity and honesty over hype
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-200">
                  Companies ready to modernise (not just looking for quick fixes)
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-200">
                  Teams of roughly 20–250 people, especially tech-heavy or remote/hybrid
                </span>
              </li>
            </ul>

            <p className="text-neutral-300 pt-6">
              If that sounds like you, let&apos;s talk.
            </p>

            <div className="pt-6 text-center">
              <Link href="/contact" className="inline-block px-8 py-4 bg-brand-sky text-white font-semibold rounded-lg hover:bg-brand-light hover:text-brand-navy transition-all duration-200 text-lg">
                Get in touch
              </Link>
            </div>
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
