import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import OutcomesSection from '@/components/OutcomesSection';
import CaseStudyTeaser from '@/components/CaseStudyTeaser';

export const metadata: Metadata = {
  title: 'Lawsons CloudWorks | Managed Cloud Workspaces & Endpoints for UK Teams',
  description: 'Specialist MSP for small and mid-sized UK organisations with remote and hybrid teams. Managed cloud workspaces, modern endpoints, automation. AWS, Microsoft 365, Intune expertise.',
};

export default function Home() {
  return (
    <>
      {/* Add top padding to account for fixed nav */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-neutral-900 to-brand-navy text-white overflow-hidden">
          <div className="container-custom relative z-10 py-16 md:py-20">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Managed cloud workspaces and endpoints without the enterprise drama
              </h1>

              <p className="text-xl md:text-2xl text-white font-medium">
                Specialist MSP for small and mid-sized UK organisations with remote and hybrid teams. Real expertise, realistic scopes, plain English.
              </p>

              <p className="text-base md:text-lg text-white/90">
                Best suited to teams of 20–250 people who need ongoing management of Microsoft 365, AWS workspaces, Intune endpoints and dev tooling.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/contact" className="inline-block px-8 py-4 bg-brand-sky text-white font-semibold rounded-lg hover:bg-white hover:text-brand-navy transition-all duration-200 text-lg shadow-lg">
                  Book a Discovery Call
                </Link>
                <Link href="/services" className="inline-block px-8 py-4 bg-white/20 text-white font-semibold rounded-lg hover:bg-white hover:text-brand-navy transition-all duration-200 text-lg border border-white/30">
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
              {/* Capability 1 - Multi-thousand User Experience */}
              <div className="bg-gradient-to-br from-brand-light to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center border border-brand-sky/20">
                <div className="text-5xl mb-4">☁️</div>
                <div className="text-xl font-bold text-brand-navy mb-2">Multi-Thousand User Environments</div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Experience operating cloud workspaces and remote access platforms for large UK organisations in regulated sectors
                </p>
              </div>

              {/* Capability 2 - Platform Expertise */}
              <div className="bg-gradient-to-br from-brand-light to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center border border-brand-sky/20">
                <div className="text-5xl mb-4">⚡</div>
                <div className="text-xl font-bold text-brand-navy mb-2">AWS + M365 + Intune</div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Deep expertise across AWS, Azure, Microsoft 365, Intune, AVD and hybrid infrastructure estates
                </p>
              </div>

              {/* Capability 3 - Years */}
              <div className="bg-gradient-to-br from-brand-light to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center border border-brand-sky/20">
                <div className="text-5xl mb-4">📅</div>
                <div className="text-xl font-bold text-brand-navy mb-2">30+ Years</div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  IT infrastructure design, implementation and day-to-day operations
                </p>
              </div>

              {/* Capability 4 - Battle-Tested Processes */}
              <div className="bg-gradient-to-br from-brand-light to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center border border-brand-sky/20">
                <div className="text-5xl mb-4">🛡️</div>
                <div className="text-xl font-bold text-brand-navy mb-2">Battle-Tested Processes</div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Endpoint baselines, patching, backup/DR and change management for critical environments
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-500 text-center mt-12 max-w-3xl mx-auto">
              CloudWorks is a specialist MSP brand founded in 2025, built on three decades of hands-on infrastructure, workspace and cloud experience.
            </p>
          </div>
        </section>

        {/* Service Pillars */}
        <section className="section-spacing bg-neutral-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Managed Services & On-Ramp Projects</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Monthly managed services backed by senior expertise. Start with a project, continue with ongoing management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <ServiceCard
                icon="cloud"
                title="Managed Cloud Workspace Service"
                description="Ongoing management of Microsoft 365, AWS Workspaces, AVD and hybrid environments. SLA-backed support for day-to-day operations."
                link="/services#managed-cloud-workspace"
                offerReference="Monthly Managed Service"
              />
              <ServiceCard
                icon="shield"
                title="Managed Endpoint & Identity Service"
                description="Continuous management of Intune, Autopilot, Conditional Access and device compliance. Keep endpoints secure and users productive."
                link="/services#managed-endpoint-identity"
                offerReference="Monthly Managed Service"
              />
              <ServiceCard
                icon="automation"
                title="Automation & Dev Tooling"
                description="GitHub Actions, CI/CD pipelines and workflow automation. Available as managed service or fixed-scope project."
                link="/services#automation-dev-tooling"
                offerReference="Managed or Project-Based"
              />
              <ServiceCard
                icon="advisory"
                title="On-Ramp Projects"
                description="Health checks, migrations and implementations designed to transition into ongoing managed services."
                link="/services#on-ramp-projects"
                offerReference="2-6 Week Projects"
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
                Real projects and managed service engagements from our senior infrastructure team.
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
              Most clients start with an on-ramp project, then transition to monthly managed services. Book a discovery call to explore whether we&apos;re the right fit.
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
