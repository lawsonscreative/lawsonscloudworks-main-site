import type { Metadata } from 'next';
import Link from 'next/link';
import ServicePillar from '@/components/ServicePillar';

export const metadata: Metadata = {
  title: 'Services | Cloud, Workspace & Automation Consulting | Lawsons CloudWorks',
  description: 'Cloud architecture, modern endpoint management, automation, and advisory services for UK businesses. AWS, Microsoft 365, Intune, and GitHub workflows expertise.',
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Page Intro */}
      <section className="section-spacing bg-gradient-to-br from-brand-light to-white">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="mb-6">Services</h1>
          <p className="text-xl text-neutral-700 leading-relaxed">
            We focus on consulting and delivery work that helps small and mid-sized organisations
            modernise their technology without the overhead of big consultancies. Our engagements
            are outcome-focused, clearly scoped, and documented in plain English.
          </p>
        </div>
      </section>

      {/* Service Pillar 1: Cloud & Workspace Architecture */}
      <ServicePillar
        id="cloud-workspace"
        title="Cloud & Workspace Architecture"
        imagePosition="right"
        problems={[
          'Legacy on-premises infrastructure and VPN-heavy remote access',
          'Slow, unreliable remote work experience frustrating your team',
          'Confusing mix of cloud providers and tools with no clear strategy',
          'Unpredictable costs and manual scaling requirements',
        ]}
        services={[
          'Cloud strategy and architecture review for AWS and Microsoft Azure',
          'AWS WorkSpaces design and implementation for remote development teams',
          'Microsoft 365 and Azure environment planning and optimisation',
          'Hybrid environment design balancing office and remote requirements',
          'Cloud cost analysis and optimisation recommendations',
        ]}
        outcomes={[
          'Faster, more reliable access for remote and hybrid teams',
          'Clear architecture diagrams and decision documentation',
          'Predictable monthly running costs with recommendations for optimisation',
          'Reduced dependence on legacy infrastructure',
        ]}
      />

      {/* Service Pillar 2: Modern Endpoint & Identity */}
      <ServicePillar
        id="endpoint-identity"
        title="Modern Endpoint & Identity"
        imagePosition="left"
        problems={[
          'Manually built laptops with inconsistent configurations',
          'Weak or inconsistent security policies across devices',
          'Painful onboarding and offboarding processes',
          'No clear view of device compliance or security posture',
        ]}
        services={[
          'Endpoint management strategy using Microsoft Intune or similar platforms',
          'Identity and access design including SSO and conditional access',
          'Baseline security policies that protect without frustrating users',
          'Device compliance monitoring and reporting',
          'Automated deployment and configuration management',
        ]}
        outcomes={[
          'Faster device rollout for new starters (hours instead of days)',
          'Stronger security posture without annoying your team',
          'Clear documentation of "how we do it here"',
          'Visibility into device compliance and potential risks',
        ]}
      />

      {/* Service Pillar 3: Automation & Dev Tooling */}
      <ServicePillar
        id="automation"
        title="Automation & Dev Tooling"
        imagePosition="right"
        problems={[
          'Manual, repetitive tasks eating up valuable time',
          'Poor GitHub workflow practices or non-existent CI/CD',
          'Ad hoc scripts scattered across the organisation with no ownership',
          'Integration gaps between tools (e.g., Notion, Xero, Slack)',
        ]}
        services={[
          'GitHub Actions pipelines and workflow automation',
          'CI/CD setup for faster, safer deployments',
          'Custom automation between business systems',
          'Infrastructure-as-code implementation (Terraform, CloudFormation)',
          'Developer environment standardisation and documentation',
        ]}
        outcomes={[
          'Fewer manual steps means fewer errors and faster delivery',
          'Clear ownership and documentation for automation',
          'Better developer experience and productivity',
          'Reduced time spent on repetitive tasks',
        ]}
      />

      {/* Service Pillar 4: Advisory & Project Rescue */}
      <ServicePillar
        id="advisory"
        title="Advisory & Project Rescue"
        imagePosition="left"
        problems={[
          '"We\'ve started a project and it\'s going sideways"',
          '"We think our setup is fragile but aren\'t sure where to start"',
          '"We\'ve received a vendor proposal and need a second opinion"',
          'Unclear technology roadmap and competing priorities',
        ]}
        services={[
          'Architecture and infrastructure health checks',
          'Independent review of vendor proposals and quotes',
          'Technology roadmapping and prioritisation workshops',
          'Project rescue and course correction',
          'Interim CTO or technical leadership support',
        ]}
        outcomes={[
          'Clear, prioritised action plan with rationale',
          'Independent technical perspective without vendor bias',
          'Better chance of projects landing successfully',
          'Documented recommendations you can act on immediately',
        ]}
      />

      {/* FAQ Section */}
      <section className="section-spacing bg-brand-light">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                How do you price your services?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Most engagements are project-based with fixed scopes. We provide clear proposals
                with options, so you can choose what makes sense for your budget. For ongoing work,
                we offer monthly retainers with agreed deliverables.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Do you provide ongoing support?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Our focus is on consulting and project delivery, not day-to-day support. However,
                we can provide ongoing advisory services or periodic health checks if that's what
                you need.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                What size organisations do you work with?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                We work best with organisations between 20 and 250 people who need enterprise-quality
                thinking but don't have enterprise budgets. Typically these are tech-forward SMEs,
                professional services firms, or scale-ups.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Do you only work with UK clients?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                We're based in the UK and primarily serve UK clients. For cloud and remote work
                projects, we can work with clients elsewhere, but our focus and expertise is in
                the UK market.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                What if we need specialists you don't have?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                CloudWorks is a small consultancy led by an experienced principal consultant. For
                specialised work, we bring in trusted partners and contractors. Everything is
                coordinated and quality-controlled by CloudWorks, so you have one point of contact.
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
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
