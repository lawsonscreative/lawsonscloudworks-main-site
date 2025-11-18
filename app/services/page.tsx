import type { Metadata } from 'next';
import Link from 'next/link';
import ProductisedOffer from '@/components/ProductisedOffer';
import AdvisoryOffers from '@/components/AdvisoryOffers';
import StructuredData from '@/components/StructuredData';
import { organizationSchema, servicesSchema, faqSchema, getBreadcrumbSchema } from '@/lib/structuredData';

export const metadata: Metadata = {
  title: 'Managed Services & On-Ramp Projects | Lawsons CloudWorks',
  description: 'Managed Microsoft 365, AWS WorkSpaces, Intune & automation for 20-250 person UK teams. Monthly retainers from £1,000. Health checks from £2,000. Book a discovery call.',
};

export default function ServicesPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.lawsonscloudworks.co.uk' },
    { name: 'Services', url: 'https://www.lawsonscloudworks.co.uk/services' },
  ]);

  return (
    <div className="pt-20">
      <StructuredData data={[organizationSchema, ...servicesSchema, faqSchema, breadcrumbs]} />
      {/* Page Intro */}
      <section className="relative bg-gradient-to-br from-neutral-900 to-brand-ink text-white py-16">
        <div className="container-custom max-w-3xl relative z-10 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Managed Services & On-Ramp Projects</h1>
          <p className="text-xl text-white">
            Managed services and projects for 20–250 person UK organisations.
          </p>
          <p className="text-lg text-white/90">
            Most clients start with an on-ramp project (often a Health Check), then continue with monthly managed services or advisory. We're not trying to be everything to everyone – we focus on cloud workspaces, modern endpoints and automation, done well.
          </p>
        </div>
      </section>

      {/* Managed Cloud Workspace Service */}
      <ProductisedOffer
        id="managed-cloud-workspace"
        pillarTitle="Managed Cloud Workspace Service"
        overview="Ongoing management of Microsoft 365, AWS Workspaces, AVD (Azure Virtual Desktop) and hybrid environments. SLA-backed support for day-to-day operations, change management and continuous improvement."
        atAGlance={[
          'Monthly managed service for Microsoft 365, AWS Workspaces, AVD and hybrid infrastructure',
          'SLA-backed UK business hours support (9am–6pm)',
          'Monthly change windows and quarterly roadmap reviews',
          'From £2,500/month for 20–50 users',
        ]}
        offerTitle="Monthly Managed Service"
        whoItsFor={[
          'Organisations with 20–250 users needing consistent, proactive management of cloud workspaces',
          'Teams using Microsoft 365, AWS Workspaces, AVD or hybrid infrastructure who want senior-led support without enterprise MSP overhead',
        ]}
        whatWeDo={[
          'Day-to-day management of cloud workspace environments (M365, AWS, Azure, hybrid)',
          'Monthly change windows for updates, patches and improvements – so changes happen predictably, not randomly',
          'Proactive monitoring of configuration drift (spotting when settings have changed without authorisation) and security posture',
          'Quarterly roadmap reviews and continuous improvement planning',
        ]}
        whatYouGet={[
          'SLA-backed support during UK business hours (9am–6pm) – meaning guaranteed response times when you need help',
          'Monthly reporting on environment health, changes and upcoming recommendations',
          'Direct access to senior infrastructure team (not a helpdesk)',
          'Continuous improvement to keep environments secure, resilient and cost-effective',
        ]}
        duration="Monthly retainer"
        investment="Priced by environment size and complexity. Typically from £2,500/month for 20–50 users"
        imagePosition="right"
        ctaLabel="Book a workspace health check"
        ctaHref="/contact?service=managed-cloud-workspace&cta=workspace-health-check"
      />

      {/* Managed Endpoint & Identity Service */}
      <ProductisedOffer
        id="managed-endpoint-identity"
        pillarTitle="Managed Endpoint & Identity Service"
        overview="Continuous management of Intune (device management), Autopilot (zero-touch device setup), Conditional Access (controlling who can access what) and device compliance. Keep endpoints secure, users productive, and onboarding/offboarding smooth."
        atAGlance={[
          'Monthly managed service for Intune, Autopilot and device compliance',
          'Monthly patching cycles and security baseline updates',
          'SLA-backed support during UK business hours',
          'From £1,500/month for 20–50 devices',
        ]}
        offerTitle="Monthly Managed Service"
        whoItsFor={[
          'Organisations managing Windows or macOS devices via Intune, Autopilot or similar',
          'Teams who need consistent endpoint security baselines (common security settings across all devices) without manual overhead',
        ]}
        whatWeDo={[
          'Ongoing management of Intune policies, Autopilot profiles and device compliance',
          'Monthly patching cycles and security baseline updates – keeping devices protected against new threats',
          'Conditional Access policy management (controlling access based on device health, location, etc.) and identity governance',
          'Device provisioning support for new starters and leavers – making setup and offboarding faster and more secure',
        ]}
        whatYouGet={[
          'SLA-backed support for endpoint and identity issues during UK business hours',
          'Monthly compliance reporting and security posture reviews',
          'Proactive policy updates to address emerging threats – so you stay ahead of security risks',
          'Faster, smoother onboarding/offboarding processes',
        ]}
        duration="Monthly retainer"
        investment="Priced by device count. Typically from £1,500/month for 20–50 devices"
        securityNote={{
          title: 'Security note:',
          content:
            "Security is baked into this work, but we don't run a 24/7 SOC (Security Operations Centre). For MDR (Managed Detection and Response), SOC or deep penetration testing, we collaborate with specialist partners rather than pretending to do it all ourselves.",
        }}
        imagePosition="left"
        ctaLabel="Book an endpoint quickstart call"
        ctaHref="/contact?service=managed-endpoint-identity&cta=endpoint-quickstart"
      />

      {/* Automation & Dev Tooling */}
      <ProductisedOffer
        id="automation-dev-tooling"
        pillarTitle="Automation & Dev Tooling"
        overview="GitHub Actions, CI/CD pipelines (automated testing and deployment) and workflow automation. Available as ongoing managed service or fixed-scope project depending on your needs."
        atAGlance={[
          'Build and maintain CI/CD pipelines using GitHub Actions',
          'Managed service or project-based engagement',
          'Ongoing improvements (managed) or documented handoff (project)',
          'Managed: from £1,000/month | Projects: £2,500–£5,000',
        ]}
        offerTitle="Managed Service or Project-Based"
        whoItsFor={[
          'Teams using GitHub, cloud and SaaS who want reliable, maintained automation',
          'Organisations where developer experience is slowed by fragile or manual infrastructure',
        ]}
        whatWeDo={[
          'Build and maintain CI/CD pipelines (automated build, test and deployment workflows) using GitHub Actions and IaC (Infrastructure as Code)',
          'Ongoing management of deployment workflows and release processes – so new features reach users predictably',
          'Proactive improvements to automation and developer tooling',
          'Documentation and runbooks for handoff (if project-based)',
        ]}
        whatYouGet={[
          'Reliable, documented pipelines with clear ownership',
          'Monthly improvements to automation (managed service) or completed implementation (project)',
          'More predictable release process and faster developer workflows – less time firefighting deployments, more time building features',
        ]}
        duration="Monthly retainer or 2–6 week project"
        investment="Managed: from £1,000/month. Projects: £2,500–£5,000 depending on complexity"
        imagePosition="right"
        ctaLabel="Discuss automation options"
        ctaHref="/contact?service=automation-dev-tooling&cta=automation-discussion"
      />

      {/* Advisory & Project Rescue */}
      <ProductisedOffer
        id="advisory-project-rescue"
        pillarTitle="Advisory & Project Rescue"
        overview="Fractional technical leadership, roadmap steering and governance for growing teams. Get senior infrastructure thinking without hiring a full-time technical lead. Also available for rescuing stuck or failing infrastructure projects."
        atAGlance={[
          'Fractional technical leadership and strategic guidance',
          'Monthly planning sessions and architecture governance',
          'Project rescue for stuck or failing infrastructure work',
          'From £2,000/month (typically 2-4 days per month)',
        ]}
        offerTitle="Monthly Retainer"
        whoItsFor={[
          'Growing organisations (20–250 people) who need strategic technical guidance but aren&apos;t ready for a full-time infrastructure lead',
          'Teams with stalled or problematic infrastructure projects that need experienced intervention',
          'Organisations needing independent review of technical decisions, vendor proposals or architecture plans',
        ]}
        whatWeDo={[
          'Monthly strategic planning sessions and roadmap reviews – keeping infrastructure aligned with business goals',
          'Review and challenge technical proposals from suppliers or internal teams',
          'Architecture governance: ensuring new projects follow sensible patterns and don&apos;t create future technical debt',
          'Project rescue: stepping into stuck or failing infrastructure work to stabilise, redirect or complete',
          'Act as a sounding board for senior stakeholders making infrastructure decisions',
        ]}
        whatYouGet={[
          'Regular access to senior technical thinking without full-time overhead',
          'Independent, pragmatic advice focused on business outcomes, not vendor preferences',
          'Confidence that infrastructure decisions are sound before committing budget',
          'Quarterly roadmap and governance documentation',
          'Emergency project rescue support when things go wrong',
        ]}
        duration="Monthly retainer (typically 2-4 days per month)"
        investment="From £2,000/month depending on time commitment"
        imagePosition="left"
        ctaLabel="Discuss advisory needs"
        ctaHref="/contact?service=advisory-project-rescue&cta=advisory-discussion"
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
        ctaLabel="Book a discovery call"
        ctaHref="/contact?service=on-ramp-projects&cta=discovery-call"
      />

      {/* FAQ Section */}
      <section className="section-spacing bg-brand-teal-soft">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-250">
              <h3 className="text-xl font-semibold text-brand-ink mb-3">
                Are you a full-service MSP or a specialist MSP?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                We're a <strong>specialist MSP.</strong> We focus on cloud workspaces, modern endpoints and automation. We don't run helpdesks or SOCs – instead we work alongside your existing providers. Think of us as owning the platforms your team actually works on, while others handle day-to-day tickets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-250">
              <h3 className="text-xl font-semibold text-brand-ink mb-3">
                Are you our MSP?
              </h3>
              <div className="text-neutral-700 leading-relaxed space-y-3">
                <p>We offer two engagement models:</p>
                <p><strong>1. As your specialist MSP for cloud workspaces and endpoints</strong> – we own and manage these platforms day-to-day, often working alongside a more generalist provider who handles other IT needs.</p>
                <p><strong>2. As a project and advisory layer on top of your existing MSP or internal team</strong> – we design, improve, or rescue specific platforms, then hand over.</p>
                <p><strong>What we don't do:</strong> We don't run a 24/7 first-line helpdesk for password resets and basic support tickets. Our managed services focus on platform-level infrastructure – keeping your cloud workspaces, endpoints and automation running reliably.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-250">
              <h3 className="text-xl font-semibold text-brand-ink mb-3">
                Do you provide 24/7 support?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                No. Our SLAs cover UK business hours (9am–6pm). For 24/7 requirements, we can work alongside a provider who offers that, or help you design resilient systems that reduce out-of-hours emergencies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-250">
              <h3 className="text-xl font-semibold text-brand-ink mb-3">
                Do you handle SOC/MDR/cybersecurity?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                We ensure sensible security baselines in everything we do (identity, endpoints, cloud configurations).
                For deep SOC, MDR or penetration testing, we work with specialist security partners.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-250">
              <h3 className="text-xl font-semibold text-brand-ink mb-3">
                Do you work only with AWS and Microsoft?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Those are our core ecosystems and where we have the most depth. We can work with other platforms,
                but AWS and Microsoft are where we&apos;re strongest.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-250">
              <h3 className="text-xl font-semibold text-brand-ink mb-3">
                What if we&apos;re smaller than 20 people or larger than 250?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                We&apos;re flexible. The 20-250 range is where we see the best fit, but we&apos;re happy to discuss
                your situation if you&apos;re outside that band.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-250">
              <h3 className="text-xl font-semibold text-brand-ink mb-3">
                How do managed services start?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Most clients start with an on-ramp project (Health Check, Quickstart or Migration). This gives both of us a clear view of the environment. From there, we transition to monthly managed services for ongoing operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="mb-4">See These Services in Action</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Real examples of how we've helped UK organisations modernise their <Link href="/case-studies/remote-dev-modernisation" className="text-brand-teal hover:underline">cloud workspaces</Link>, optimise <Link href="/case-studies/cloud-migration" className="text-brand-teal hover:underline">Microsoft 365 environments</Link>, and reduce infrastructure costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/case-studies/remote-dev-modernisation" className="card group h-full flex flex-col hover:border-brand-teal transition-all">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-brand-teal-soft text-brand-teal text-sm font-semibold rounded">
                  Cloud Workspace Modernisation
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-brand-ink mb-3 group-hover:text-brand-teal transition-colors">
                AWS WorkSpaces Migration for Remote Development Team
              </h3>
              <p className="text-neutral-600 mb-4 flex-grow">
                How we helped a 200-person software company move from legacy VPN to AWS-hosted virtual desktops, reducing connection issues by 80% and improving developer satisfaction.
              </p>
              <div className="text-brand-teal font-semibold group-hover:underline">
                Read case study →
              </div>
            </Link>

            <Link href="/case-studies/cloud-migration" className="card group h-full flex flex-col hover:border-brand-teal transition-all">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-brand-teal-soft text-brand-teal text-sm font-semibold rounded">
                  Cloud Migration & Cost Optimisation
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-brand-ink mb-3 group-hover:text-brand-teal transition-colors">
                Microsoft 365 Migration & Security Baseline
              </h3>
              <p className="text-neutral-600 mb-4 flex-grow">
                Full migration to Microsoft 365 for a 50-person consultancy, reducing monthly costs by a third and freeing up 15 hours per week of IT time through automation.
              </p>
              <div className="text-brand-teal font-semibold group-hover:underline">
                Read case study →
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link href="/case-studies" className="text-brand-teal hover:text-brand-ink font-semibold text-lg hover:underline">
              View all case studies →
            </Link>
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
          <Link href="/contact?cta=services-page-bottom" className="btn-primary inline-block text-lg">
            Book a 30-Minute Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
