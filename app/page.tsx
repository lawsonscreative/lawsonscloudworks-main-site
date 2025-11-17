import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import OutcomesSection from '@/components/OutcomesSection';
import CredibilityStrip from '@/components/CredibilityStrip';
import CaseStudyTeaser from '@/components/CaseStudyTeaser';

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
                      Running AWS WorkSpaces at scale for 4,000+ developers
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
                      Deep expertise in AWS and Microsoft ecosystems
                    </li>
                  </ul>
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
              />
              <ServiceCard
                icon="shield"
                title="Modern Endpoint & Identity"
                description="Secure your laptops and user access without creating friction. Intune, SSO, conditional access."
                link="/services#endpoint-identity"
              />
              <ServiceCard
                icon="automation"
                title="Automation & Dev Tooling"
                description="Build GitHub workflows, automate repetitive tasks, and improve developer experience."
                link="/services#automation"
              />
              <ServiceCard
                icon="advisory"
                title="Advisory & Project Rescue"
                description="Second opinions, health checks, and roadmaps when you need independent expertise."
                link="/services#advisory"
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
                Real projects, real outcomes. Details anonymised where necessary.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <CaseStudyTeaser
                title="Modernising Remote Development Environment"
                industry="Software Development"
                size="200-person company"
                problem="Legacy VPN-based dev environment causing friction for remote developers."
                outcome="Migration to AWS WorkSpaces reduced connection issues by 80% and improved developer satisfaction."
                link="/case-studies/remote-dev-modernisation"
              />
              <CaseStudyTeaser
                title="Cloud Migration & Cost Optimisation"
                industry="Professional Services"
                size="50-person consultancy"
                problem="Mixed on-prem and cloud setup with unpredictable costs and manual patching."
                outcome="Full cloud migration to Microsoft 365 with documented processes and 30% cost reduction."
                link="/case-studies/cloud-migration"
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
            <p className="text-xl mb-8 max-w-2xl mx-auto text-brand-light">
              Book a no-obligation discovery call. We&apos;ll listen to your challenges and explore whether we&apos;re the right fit.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-brand-navy font-semibold rounded-lg hover:bg-brand-light transition-all duration-200 text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
