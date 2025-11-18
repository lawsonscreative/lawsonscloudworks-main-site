import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import OutcomesSection from '@/components/OutcomesSection';
import CredibilityStrip from '@/components/CredibilityStrip';
import CaseStudyTeaser from '@/components/CaseStudyTeaser';

export const metadata: Metadata = {
  title: 'Lawsons CloudWorks | Cloud, Workspace & Automation Consulting for UK Teams',
  description: 'Boutique cloud and workspace consultancy helping 20-250 person UK organisations modernise infrastructure without enterprise drama. AWS, Microsoft 365, modern endpoints, automation.',
};

export default function Home() {
  return (
    <>
      {/* Add top padding to account for fixed nav */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-br from-brand-light to-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="leading-tight">
                  Cloud, workspaces and automation for teams who need enterprise thinking without enterprise drama
                </h1>
                <p className="text-xl text-neutral-700 leading-relaxed">
                  We help small and mid-sized UK organisations modernise their cloud infrastructure,
                  secure their endpoints, and automate the tedious stuff. Real expertise, realistic scopes,
                  plain English.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  We&apos;re best suited to teams of roughly 20–250 people, especially those with remote developers or distributed knowledge workers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/contact" className="btn-primary text-center">
                    Book a Discovery Call
                  </Link>
                  <Link href="/services" className="btn-secondary text-center">
                    Explore Our Services
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-gradient-to-br from-brand-sky to-brand-navy rounded-lg p-8 text-white shadow-xl">
                  <p className="text-lg font-semibold mb-4">
                    Built on real-world experience:
                  </p>
                  <ul className="space-y-3 text-base">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 mr-2 flex-shrink-0 text-brand-light" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Designed and operated an AWS-hosted developer platform for 3,000+ developers at a major UK insurer
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 mr-2 flex-shrink-0 text-brand-light" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Rolled out remote access solutions for 14,000+ users during COVID-19 lockdowns
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 mr-2 flex-shrink-0 text-brand-light" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      30+ years in IT infrastructure and systems
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 mr-2 flex-shrink-0 text-brand-light" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Deep expertise in AWS and Microsoft ecosystems, including hybrid enterprise environments
                    </li>
                  </ul>
                  <p className="text-sm text-white/80 mt-4 pt-4 border-t border-white/20">
                    CloudWorks is a new consultancy brand founded in 2025, built on Andy&apos;s three decades of hands-on infrastructure, workspace and cloud experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Pillars */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">How We Help</h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                We focus on four core areas where small consultancies can deliver real value without the overhead of big firms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ServiceCard
                icon="cloud"
                title="Cloud & Workspace Architecture"
                description="Design and implement cloud environments that actually work for remote teams. AWS, Microsoft 365, hybrid setups."
                link="/services#cloud-workspace"
                offerReference="Typical engagement: Cloud & Workspace Health Check – a short, fixed-scope review with a clear action plan."
              />
              <ServiceCard
                icon="shield"
                title="Modern Endpoint & Identity"
                description="Secure your laptops and user access without creating friction. Intune, SSO, conditional access."
                link="/services#endpoint-identity"
                offerReference="Typical engagement: Modern Endpoint Quickstart – establish baselines, policies and onboarding playbooks."
              />
              <ServiceCard
                icon="automation"
                title="Automation & Dev Tooling"
                description="Build GitHub workflows, automate repetitive tasks, and improve developer experience."
                link="/services#automation"
                offerReference="Typical engagement: Automation & Dev Tooling Accelerator – improve developer workflows and key automations."
              />
              <ServiceCard
                icon="advisory"
                title="Advisory & Project Rescue"
                description="Second opinions, health checks, and roadmaps when you need independent expertise."
                link="/services#advisory"
                offerReference="Typical engagement: Fractional Cloud & Workspace Lead – ongoing advisory support for growing teams."
              />
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <OutcomesSection />

        {/* Credibility Strip */}
        <CredibilityStrip />

        {/* Case Studies Teaser */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Recent Work</h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Real projects and outcomes from Andy&apos;s work in senior consulting, contracting and technical lead roles. Some examples pre-date Lawsons CloudWorks and are anonymised as representative scenarios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <CaseStudyTeaser
                title="Modernising Remote Development Environment"
                industry="Software Development"
                size="200-person company"
                problem="Legacy VPN-based dev environment causing friction for remote developers."
                outcome="Moving to an AWS-hosted virtual desktop platform reduced connection issues by around 80% in that engagement and improved developer satisfaction scores."
                link="/case-studies/remote-dev-modernisation"
                engagementType="Cloud & Workspace Health Check + rollout support"
              />
              <CaseStudyTeaser
                title="Cloud Migration & Cost Optimisation"
                industry="Professional Services"
                size="50-person consultancy"
                problem="Mixed on-prem and cloud setup with unpredictable costs and manual patching."
                outcome="A full migration to Microsoft 365 with documented processes reduced monthly costs by roughly a third. Clear security baselines and automated patching freed up around 15 hours per week of IT time for more valuable work."
                link="/case-studies/cloud-migration"
                engagementType="Cloud & Workspace Health Check + full migration"
              />
            </div>

            <div className="text-center mt-12">
              <Link href="/case-studies" className="btn-secondary">
                View All Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-spacing bg-gradient-to-br from-brand-navy to-brand-sky text-white">
          <div className="container-custom text-center">
            <h2 className="text-white mb-6">
              Let&apos;s Untangle Your Cloud and Workspace
            </h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto text-brand-light">
              Most new clients start with a Cloud & Workspace Health Check – a short engagement that gives you a clear view of what&apos;s working, what isn&apos;t, and what to do next.
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
              Book a no-obligation discovery call. We&apos;ll listen to your challenges and explore whether we&apos;re the right fit.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-brand-navy font-semibold rounded-lg hover:bg-brand-light transition-all duration-200 text-lg"
            >
              Book a Discovery Call
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
