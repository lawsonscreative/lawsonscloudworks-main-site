import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import OutcomesSection from '@/components/OutcomesSection';
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
        {/* Hero Section - Dark with Visual Impact */}
        <section className="relative bg-gradient-to-br from-neutral-900 via-brand-navy to-neutral-900 text-white overflow-hidden">
          {/* Background pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="container-custom relative z-10 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Cloud, workspaces and automation for teams who need enterprise thinking without enterprise drama
              </h1>

              <p className="text-xl md:text-2xl text-brand-light font-medium">
                We help UK organisations modernise infrastructure, secure endpoints, and automate the tedious stuff.
              </p>

              <p className="text-base md:text-lg text-white/80">
                Best suited to teams of 20–250 people with remote developers or distributed workers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/contact" className="inline-block px-8 py-4 bg-brand-sky text-white font-semibold rounded-lg hover:bg-brand-light hover:text-brand-navy transition-all duration-200 text-lg shadow-lg">
                  Book a Discovery Call
                </Link>
                <Link href="/services" className="inline-block px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 text-lg border border-white/20">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Visual Cards with Icons */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Built on Real-World Experience</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Stat 1 - Developers */}
              <div className="bg-gradient-to-br from-brand-light to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center border border-brand-sky/20">
                <div className="text-5xl mb-4">☁️</div>
                <div className="text-4xl font-bold text-brand-navy mb-2">3,000+</div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  developers supported on AWS platform at Direct Line Group
                </p>
              </div>

              {/* Stat 2 - Users */}
              <div className="bg-gradient-to-br from-brand-light to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center border border-brand-sky/20">
                <div className="text-5xl mb-4">👥</div>
                <div className="text-4xl font-bold text-brand-navy mb-2">14,000+</div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  users enabled for remote work during COVID lockdowns
                </p>
              </div>

              {/* Stat 3 - Years */}
              <div className="bg-gradient-to-br from-brand-light to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center border border-brand-sky/20">
                <div className="text-5xl mb-4">📅</div>
                <div className="text-4xl font-bold text-brand-navy mb-2">30+</div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  years in IT infrastructure and systems
                </p>
              </div>

              {/* Stat 4 - Platforms */}
              <div className="bg-gradient-to-br from-brand-light to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center border border-brand-sky/20">
                <div className="text-5xl mb-4">⚡</div>
                <div className="text-4xl font-bold text-brand-navy mb-2">AWS + M365</div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Deep expertise in both cloud ecosystems
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-500 text-center mt-12 max-w-3xl mx-auto">
              CloudWorks is a new consultancy brand founded in 2025, built on Andy&apos;s three decades of hands-on infrastructure, workspace and cloud experience.
            </p>
          </div>
        </section>

        {/* Service Pillars */}
        <section className="section-spacing bg-neutral-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">How We Help</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Four core services. Clear outcomes. No enterprise overhead.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <ServiceCard
                icon="cloud"
                title="Cloud & Workspace"
                description="Migrate to modern cloud workspaces that work for distributed teams."
                link="/services#cloud-workspace"
                offerReference="Cloud & Workspace Health Check"
              />
              <ServiceCard
                icon="shield"
                title="Modern Endpoint & Identity"
                description="Secure laptops and user access without creating friction."
                link="/services#endpoint-identity"
                offerReference="Modern Endpoint Quickstart"
              />
              <ServiceCard
                icon="automation"
                title="Automation & Dev Tooling"
                description="Build GitHub workflows and automate repetitive tasks."
                link="/services#automation"
                offerReference="Automation & Dev Tooling Accelerator"
              />
              <ServiceCard
                icon="advisory"
                title="Advisory & Rescue"
                description="Second opinions, health checks, and fractional leadership."
                link="/services#advisory"
                offerReference="Fractional Cloud & Workspace Lead"
              />
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <OutcomesSection />

        {/* Case Studies Teaser */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Recent Work</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Real projects from Andy&apos;s senior consulting and technical lead roles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <CaseStudyTeaser
                title="AWS Developer Platform"
                industry="Software Development"
                size="200-person company"
                problem="Legacy VPN causing friction for remote developers."
                outcome="AWS-hosted platform reduced connection issues by ~80% and improved developer satisfaction."
                link="/case-studies/remote-dev-modernisation"
                engagementType="Cloud & Workspace Health Check"
              />
              <CaseStudyTeaser
                title="Cloud Migration & Cost Cut"
                industry="Professional Services"
                size="50-person consultancy"
                problem="Mixed on-prem setup with unpredictable costs."
                outcome="Microsoft 365 migration cut monthly costs by ~30% and freed 15 hours/week of IT time."
                link="/case-studies/cloud-migration"
                engagementType="Cloud & Workspace Health Check"
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
              Most clients start with a Health Check. Book a discovery call to explore whether we&apos;re the right fit.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-brand-navy font-semibold rounded-lg hover:bg-brand-light transition-all duration-200 text-lg shadow-lg"
            >
              Book a Discovery Call
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
