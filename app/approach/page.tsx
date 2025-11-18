import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Approach | How We Work | Lawsons CloudWorks MSP',
  description: 'Learn how Lawsons CloudWorks manages client environments. Clear scopes, plain English documentation, senior-led support and continuous improvement without enterprise drama.',
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
      title: 'On-Ramp Project',
      description: 'Health check, migration or implementation to baseline your environment. Typical duration: 2-6 weeks depending on scope.',
    },
    {
      number: 3,
      title: 'Transition to Managed Services',
      description: 'Move to monthly managed service for ongoing operations. Clear SLAs, regular reporting, and direct access to senior team.',
    },
    {
      number: 4,
      title: 'Monthly Operations',
      description: 'Day-to-day management of cloud workspaces, endpoints and automation. Monthly change windows, proactive monitoring, and regular communication.',
    },
    {
      number: 5,
      title: 'Quarterly Reviews',
      description: 'Quarterly roadmap reviews and continuous improvement planning. We look ahead, not just react to issues.',
    },
    {
      number: 6,
      title: 'Continuous Improvement',
      description: 'Ongoing improvements to security, resilience and cost-effectiveness. Your environment gets better every month, not just maintained.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Page Intro */}
      <section className="relative bg-gradient-to-br from-neutral-900 to-brand-navy text-white py-16">
        <div className="container-custom max-w-4xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Approach</h1>
          <p className="text-xl text-white">
            Specialist MSP with senior-led support. Here&apos;s how we work.
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

      {/* Specialist MSP, Senior-Led Support */}
      <section className="section-spacing bg-brand-light">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-8">Specialist MSP, Senior-Led Support</h2>

          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              Lawsons CloudWorks is led by principal consultant Andy Lawson, bringing over 30 years of infrastructure, cloud and workspace experience from large UK organisations in regulated sectors.
            </p>

            <p>
              Experience includes designing and operating cloud workspace platforms for multi-thousand user environments in large UK insurers, NHS organisations and critical infrastructure. CloudWorks brings that enterprise-level expertise to small and mid-sized organisations without the enterprise overhead.
            </p>

            <p>
              For specialist areas outside our core expertise (e.g. deep networking, SOC/MDR, application development), we work with trusted partners rather than stretching beyond our strengths.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-sm mt-8">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">This means:</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>You get senior-led support, not a helpdesk</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>One accountable owner who knows your environment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No enterprise MSP overhead or multi-tier support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-sky flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Access to wider network when needed for specialist areas</span>
                </li>
              </ul>
            </div>

            <p className="pt-4">
              This approach sits between commodity MSPs (where you get a ticketing system and tier 1 support) and enterprise-grade providers (where you pay for overhead you don&apos;t need).
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
                  You understand your own systems and can operate them confidently. For managed service clients, we maintain and improve your environment while ensuring you&apos;re never locked in by lack of knowledge.
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
                Book a Discovery Call
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
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
