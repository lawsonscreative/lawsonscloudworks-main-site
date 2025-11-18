import type { Metadata } from 'next';
import Link from 'next/link';
import ProductisedOffer from '@/components/ProductisedOffer';
import AdvisoryOffers from '@/components/AdvisoryOffers';

export const metadata: Metadata = {
  title: 'Managed Services & On-Ramp Projects | Lawsons CloudWorks',
  description: 'Managed cloud workspace, endpoint and automation services for UK organisations. Monthly retainers backed by senior expertise. AWS, Microsoft 365, Intune, and GitHub workflows.',
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Page Intro */}
      <section className="relative bg-gradient-to-br from-neutral-900 to-brand-navy text-white py-16">
        <div className="container-custom max-w-3xl relative z-10 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Managed Services & On-Ramp Projects</h1>
          <p className="text-xl text-white">
            Specialist MSP for 20–250 person UK organisations with remote and hybrid teams.
          </p>
          <p className="text-lg text-white/90">
            Most clients start with an on-ramp project, then transition to monthly managed services.
          </p>
        </div>
      </section>

      {/* Managed Cloud Workspace Service */}
      <ProductisedOffer
        id="managed-cloud-workspace"
        pillarTitle="Managed Cloud Workspace Service"
        overview="Ongoing management of Microsoft 365, AWS Workspaces, AVD and hybrid environments. SLA-backed support for day-to-day operations, change management and continuous improvement."
        offerTitle="Monthly Managed Service"
        whoItsFor={[
          'Organisations with 20–250 users needing consistent, proactive management of cloud workspaces',
          'Teams using Microsoft 365, AWS Workspaces, AVD or hybrid infrastructure who want senior-led support without enterprise MSP overhead',
        ]}
        whatWeDo={[
          'Day-to-day management of cloud workspace environments (M365, AWS, Azure, hybrid)',
          'Monthly change windows for updates, patches and improvements',
          'Proactive monitoring of configuration drift and security posture',
          'Quarterly roadmap reviews and continuous improvement planning',
        ]}
        whatYouGet={[
          'SLA-backed support during UK business hours (9am–6pm)',
          'Monthly reporting on environment health, changes and upcoming recommendations',
          'Direct access to senior infrastructure team (not a helpdesk)',
          'Continuous improvement to keep environments secure, resilient and cost-effective',
        ]}
        duration="Monthly retainer"
        investment="Priced by environment size and complexity. Typically from £2,500/month for 20–50 users"
        imagePosition="right"
      />

      {/* Managed Endpoint & Identity Service */}
      <ProductisedOffer
        id="managed-endpoint-identity"
        pillarTitle="Managed Endpoint & Identity Service"
        overview="Continuous management of Intune, Autopilot, Conditional Access and device compliance. Keep endpoints secure, users productive, and onboarding/offboarding smooth."
        offerTitle="Monthly Managed Service"
        whoItsFor={[
          'Organisations managing Windows or macOS devices via Intune, Autopilot or similar',
          'Teams who need consistent endpoint security baselines without manual overhead',
        ]}
        whatWeDo={[
          'Ongoing management of Intune policies, Autopilot profiles and device compliance',
          'Monthly patching cycles and security baseline updates',
          'Conditional Access policy management and identity governance',
          'Device provisioning support for new starters and leavers',
        ]}
        whatYouGet={[
          'SLA-backed support for endpoint and identity issues during UK business hours',
          'Monthly compliance reporting and security posture reviews',
          'Proactive policy updates to address emerging threats',
          'Faster, smoother onboarding/offboarding processes',
        ]}
        duration="Monthly retainer"
        investment="Priced by device count. Typically from £1,500/month for 20–50 devices"
        securityNote={{
          title: 'Security note:',
          content:
            "Security is baked into this work, but we don't run a 24/7 SOC. For MDR, SOC or deep penetration testing, we collaborate with specialist partners rather than pretending to do it all ourselves.",
        }}
        imagePosition="left"
      />

      {/* Automation & Dev Tooling */}
      <ProductisedOffer
        id="automation-dev-tooling"
        pillarTitle="Automation & Dev Tooling"
        overview="GitHub Actions, CI/CD pipelines and workflow automation. Available as ongoing managed service or fixed-scope project depending on your needs."
        offerTitle="Managed Service or Project-Based"
        whoItsFor={[
          'Teams using GitHub, cloud and SaaS who want reliable, maintained automation',
          'Organisations where developer experience is slowed by fragile or manual infrastructure',
        ]}
        whatWeDo={[
          'Build and maintain CI/CD pipelines (GitHub Actions, IaC)',
          'Ongoing management of deployment workflows and release processes',
          'Proactive improvements to automation and developer tooling',
          'Documentation and runbooks for handoff (if project-based)',
        ]}
        whatYouGet={[
          'Reliable, documented pipelines with clear ownership',
          'Monthly improvements to automation (managed service) or completed implementation (project)',
          'More predictable release process and faster developer workflows',
        ]}
        duration="Monthly retainer or 2–6 week project"
        investment="Managed: from £1,000/month. Projects: £2,500–£5,000 depending on complexity"
        imagePosition="right"
      />

      {/* On-Ramp Projects */}
      <AdvisoryOffers
        id="on-ramp-projects"
        title="On-Ramp Projects"
        overview="Health checks, migrations and implementations designed to transition into ongoing managed services. Start with a project, continue with monthly management."
        offers={[
          {
            title: 'Cloud & Workspace Health Check',
            description: [
              'Review current cloud/workspace setup (AWS, Azure, M365, VPN, identity)',
              'Identify bottlenecks, fragility and risk. Map target architecture',
              'Deliverables: diagrams, plain-English summary, prioritised action list',
              'Typical on-ramp to Managed Cloud Workspace Service',
            ],
            duration: '2–4 weeks',
            investment: '£2,000–£4,000',
          },
          {
            title: 'Modern Endpoint Quickstart',
            description: [
              'Assess device and identity setup. Design baseline policies for Intune/Autopilot',
              'Define onboarding/offboarding processes and rollout phases',
              'Deliverables: documented strategy, baseline policies, process outline',
              'Typical on-ramp to Managed Endpoint & Identity Service',
            ],
            duration: '3–6 weeks',
            investment: '£3,000–£6,000',
          },
          {
            title: 'Cloud Migration or Implementation',
            description: [
              'Execute specific migration or implementation (M365, AWS Workspaces, Intune rollout)',
              'Fixed scope with clear deliverables and timeline',
              'Can transition to managed service for ongoing operations',
            ],
            duration: 'Varies by scope',
            investment: 'Depends on scope',
          },
        ]}
        imagePosition="left"
      />

      {/* FAQ Section */}
      <section className="section-spacing bg-brand-light">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Are you a full-service MSP or a specialist MSP?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Specialist MSP. We focus on cloud workspaces, modern endpoints and automation. We don&apos;t do everything - we do these areas well. For general helpdesk or 24/7 support, we can work alongside your existing IT provider.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Can you replace our existing MSP?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Possibly, if your needs align with our specialist services. Most clients use us alongside their existing MSP - we handle cloud workspaces and endpoints, they handle general IT support. We&apos;re flexible.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Do you provide 24/7 support?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                No. Our SLAs cover UK business hours (9am–6pm). For 24/7 requirements, we can work alongside a provider who offers that, or help you design resilient systems that reduce out-of-hours emergencies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Do you handle SOC/MDR/cybersecurity?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                We ensure sensible security baselines in everything we do (identity, endpoints, cloud configurations).
                For deep SOC, MDR or penetration testing, we work with specialist security partners.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Do you work only with AWS and Microsoft?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Those are our core ecosystems and where we have the most depth. We can work with other platforms,
                but AWS and Microsoft are where we&apos;re strongest.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                What if we&apos;re smaller than 20 people or larger than 250?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                We&apos;re flexible. The 20-250 range is where we see the best fit, but we&apos;re happy to discuss
                your situation if you&apos;re outside that band.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                How do managed services start?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Most clients start with an on-ramp project (Health Check, Quickstart or Migration). This gives both of us a clear view of the environment. From there, we transition to monthly managed services for ongoing operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Discuss Your Project?</h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Book a discovery call and we'll explore whether we're the right fit for your needs.
          </p>
          <Link href="/contact" className="btn-primary inline-block text-lg">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
