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
        <section className="relative bg-page-bg overflow-hidden">
          <div className="container-custom relative z-10 py-16 md:py-20">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-brand-ink">
                Managed cloud workspaces for 20-250 person UK teams
              </h1>

              <p className="text-xl md:text-2xl text-brand-slate font-medium">
                Specialist MSP for Microsoft 365, AWS WorkSpaces, Intune and AVD – giving your remote and hybrid staff a secure, reliable place to work without the enterprise drama.
              </p>

              <div className="text-base md:text-lg text-neutral-600 space-y-2">
                <p className="font-medium">Best fit for:</p>
                <ul className="space-y-1">
                  <li>• 20-250 person teams</li>
                  <li>• Remote and hybrid-heavy organisations</li>
                  <li>• Regulated and security-sensitive sectors</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/contact" className="inline-block px-8 py-4 bg-brand-teal text-white font-semibold rounded-lg hover:bg-brand-teal-dark transition-all duration-200 text-lg shadow-lg">
                  Book a Discovery Call
                </Link>
                <Link href="/services" className="inline-block px-8 py-4 border-2 border-brand-teal text-brand-teal font-semibold rounded-lg hover:bg-brand-teal hover:text-white transition-all duration-200 text-lg">
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
              {/* Card 1 - Multi-Thousand User Experience */}
              <div className="bg-white p-8 rounded-lg border border-brand-border hover:shadow-lg transition-all duration-300 text-center">
                <div className="text-5xl mb-4 text-brand-teal">☁️</div>
                <div className="text-xl font-bold text-brand-ink mb-2">Multi-Thousand User Environments</div>
                <p className="text-sm text-brand-slate leading-relaxed">
                  Multi-thousand user experience – distilled for 20-250 person teams. We've operated large-scale platforms in regulated sectors and now bring that thinking to mid-sized organisations.
                </p>
              </div>

              {/* Card 2 - Platform Expertise */}
              <div className="bg-white p-8 rounded-lg border border-brand-border hover:shadow-lg transition-all duration-300 text-center">
                <div className="text-5xl mb-4 text-brand-teal">⚡</div>
                <div className="text-xl font-bold text-brand-ink mb-2">AWS + M365 + Intune</div>
                <p className="text-sm text-brand-slate leading-relaxed">
                  AWS + Microsoft 365 + Intune – joined-up, not stitched together. Cloud workspaces that actually work with your identity, endpoints and compliance needs.
                </p>
              </div>

              {/* Card 3 - Years */}
              <div className="bg-white p-8 rounded-lg border border-brand-border hover:shadow-lg transition-all duration-300 text-center">
                <div className="text-5xl mb-4 text-brand-teal">📅</div>
                <div className="text-xl font-bold text-brand-ink mb-2">30+ Years</div>
                <p className="text-sm text-brand-slate leading-relaxed">
                  30+ years in IT infrastructure – senior hands on your environment, not juniors learning on it. You get experienced thinking applied to day-to-day operations.
                </p>
              </div>

              {/* Card 4 - Battle-Tested Processes */}
              <div className="bg-white p-8 rounded-lg border border-brand-border hover:shadow-lg transition-all duration-300 text-center">
                <div className="text-5xl mb-4 text-brand-teal">🛡️</div>
                <div className="text-xl font-bold text-brand-ink mb-2">Battle-Tested Processes</div>
                <p className="text-sm text-brand-slate leading-relaxed">
                  Battle-tested processes for keeping things running. Baseline, patch, back up, document, repeat. Boring reliability instead of exciting drama.
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
                description="Keep Microsoft 365, AWS WorkSpaces and AVD running smoothly, securely and cost-effectively for your remote and hybrid teams.

Model: Monthly managed service • Best for: 20-250 users in remote/hybrid teams"
                link="/services#managed-cloud-workspace"
                offerReference="Monthly Managed Service"
              />
              <ServiceCard
                icon="shield"
                title="Managed Endpoint & Identity Service"
                description="Modern endpoint management via Intune, with security baselines, patching and user lifecycle automation handled for you.

Model: Monthly managed service • Best for: Teams moving away from manual device management"
                link="/services#managed-endpoint-identity"
                offerReference="Monthly Managed Service"
              />
              <ServiceCard
                icon="automation"
                title="Automation & Dev Tooling Service"
                description="CI/CD pipeline management, infrastructure-as-code and tooling that lets developers focus on building instead of wrestling deployments.

Model: Managed or project-based • Best for: Development teams with growing complexity"
                link="/services#automation-dev-tooling"
                offerReference="Managed or Project-Based"
              />
              <ServiceCard
                icon="advisory"
                title="Advisory & Project Rescue"
                description="Fractional technical leadership, roadmap steering and governance. Regular senior-level thinking without hiring a full-time lead.

Model: Monthly retainer • Best for: Growing teams needing strategic guidance"
                link="/services#on-ramp-projects"
                offerReference="Monthly Retainer"
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
                Real results from environments like yours. Every environment is different – we'll be clear about what's realistic for you.
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
        <section className="section-spacing bg-gradient-to-br from-brand-ink to-brand-teal text-white">
          <div className="container-custom text-center">
            <h2 className="text-white mb-6">
              Let&apos;s Untangle Your Cloud and Workspace
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-brand-teal-soft">
              Most clients start with an on-ramp health check or migration, then transition into monthly managed services. <Link href="/approach" className="text-white underline hover:text-brand-teal-soft">See how we work →</Link>
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-brand-ink font-semibold rounded-lg hover:bg-brand-teal-soft transition-all duration-200 text-lg shadow-lg"
            >
              Book a 30-Minute Discovery Call
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
