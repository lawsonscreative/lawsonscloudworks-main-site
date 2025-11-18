import type { Metadata } from 'next';
import Link from 'next/link';
import ProductisedOffer from '@/components/ProductisedOffer';
import AdvisoryOffers from '@/components/AdvisoryOffers';

export const metadata: Metadata = {
  title: 'Services | Cloud, Workspace & Automation Consulting | Lawsons CloudWorks',
  description: 'Cloud architecture, modern endpoint management, automation, and advisory services for UK businesses. AWS, Microsoft 365, Intune, and GitHub workflows expertise.',
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Page Intro */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-brand-navy to-neutral-900 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container-custom max-w-3xl relative z-10 text-center space-y-6">
          <h1 className="text-5xl font-bold mb-6">Services</h1>
          <p className="text-xl text-brand-light">
            Consulting and project delivery for 20–250 person UK organisations.
          </p>
          <p className="text-lg text-white/80">
            Most clients start with a Health Check. From there, we execute or advise.
          </p>
        </div>
      </section>

      {/* Cloud & Workspace Health Check */}
      <ProductisedOffer
        id="cloud-workspace"
        pillarTitle="Cloud & Workspace Architecture"
        overview="For organisations with a mix of on-prem, VPN and cloud who need a clear path forward for their remote and hybrid teams."
        offerTitle="Typical Engagement: Cloud & Workspace Health Check"
        whoItsFor={[
          'Organisations with a mix of on-prem, VPN and cloud',
          'Teams where remote developers complain about access, performance or reliability',
        ]}
        whatWeDo={[
          'Review your current cloud/workspace setup (AWS, Azure, M365, VPN, identity)',
          'Identify bottlenecks, fragility and risk',
          'Map out target architecture for next 12–24 months',
          'Provide clear, prioritised recommendations',
        ]}
        whatYouGet={[
          '1–2 diagrams summarising current and target state',
          'Written, plain-English summary of issues and options',
          'Prioritised action list (quick wins, medium-term, longer-term)',
        ]}
        duration="2–4 weeks"
        investment="Typically £2,000–£4,000 for a 20–250 person organisation"
        imagePosition="right"
      />

      {/* Modern Endpoint Quickstart */}
      <ProductisedOffer
        id="endpoint-identity"
        pillarTitle="Modern Endpoint & Identity"
        overview="For organisations building machines manually or inconsistently, with weak security policies and painful onboarding/offboarding."
        offerTitle="Typical Engagement: Modern Endpoint Quickstart"
        whoItsFor={[
          'Organisations building machines manually or inconsistently',
          'Teams with weak security policies and painful onboarding/offboarding',
        ]}
        whatWeDo={[
          'Assess current device and identity setup (Intune, GPO, manual builds)',
          'Design baseline policies for devices and identities',
          'Define golden image / autopilot approach where applicable',
          'Plan realistic rollout phases',
        ]}
        whatYouGet={[
          'Documented endpoint and identity strategy',
          'Baseline policies (templated Intune profiles, conditional access, SSO outline)',
          'Onboarding/offboarding process outline',
        ]}
        duration="3–6 weeks"
        investment="Typically £3,000–£6,000 depending on scope"
        securityNote={{
          title: 'Security note:',
          content:
            "Security is baked into this work, but we don't run a 24/7 SOC. For MDR, SOC or deep penetration testing, we collaborate with specialist partners rather than pretending to do it all ourselves.",
        }}
        imagePosition="left"
      />

      {/* Automation & Dev Tooling Accelerator */}
      <ProductisedOffer
        id="automation"
        pillarTitle="Automation & Dev Tooling"
        overview="For teams using GitHub, cloud, SaaS but relying on manual deployments and where developer experience is slowed by infrastructure."
        offerTitle="Typical Engagement: Automation & Dev Tooling Accelerator"
        whoItsFor={[
          'Teams using GitHub, cloud, SaaS but relying on manual deployments',
          'Organisations where developer experience is slowed by infrastructure',
        ]}
        whatWeDo={[
          'Review current CI/CD pipelines, release processes and automations',
          'Identify critical automation opportunities (deployment, testing, provisioning)',
          'Implement or improve 1–3 key pipelines (GitHub Actions, IaC)',
          'Create simple runbooks and documentation',
        ]}
        whatYouGet={[
          'Improved pipelines with clear ownership and docs',
          'List of next automation opportunities for future phases',
          'More predictable release process',
        ]}
        duration="2–6 weeks"
        investment="Typically £2,500–£5,000 depending on complexity"
        imagePosition="right"
      />

      {/* Advisory & Project Rescue */}
      <AdvisoryOffers
        id="advisory"
        title="Advisory & Project Rescue"
        overview="For organisations who need independent expertise, second opinions, or help getting projects back on track."
        offers={[
          {
            title: 'Architecture & Roadmap Review',
            description: [
              'Short engagement to review existing plan, vendor proposal or internal architecture',
              'Deliverables: written second opinion, risks and trade-offs, alternative options',
            ],
            duration: '1–2 weeks',
            investment: '£1,500–£3,000',
          },
          {
            title: 'Project Rescue',
            description: [
              'For in-flight projects that are stuck or going sideways',
              'Focus: realistic plan that\'s acceptable to stakeholders (not assigning blame)',
            ],
            duration: 'Varies by situation',
            investment: 'Depends on scope',
          },
          {
            title: 'Fractional Cloud & Workspace Lead',
            description: [
              'Ongoing monthly retainer (1–4 days per month)',
              'Responsibilities: steer roadmap, review changes, support internal IT/MSP, technical sounding board for leadership',
              'Cadence: Monthly check-ins + ad-hoc availability',
            ],
            duration: 'Monthly retainer',
            investment: 'From £1,200 per month (depending on days)',
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
                Do you replace our MSP or IT team?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                No. We typically work alongside existing IT teams or MSPs. We bring specialist expertise in cloud,
                workspace and automation, but we&apos;re not aiming to be your day-to-day support.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Can you work alongside our existing IT provider?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Absolutely. Many clients have us work collaboratively with their MSP or internal IT team. We focus
                on strategy, architecture and specific projects while they handle day-to-day operations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Do you provide 24/7 support?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                No. We&apos;re a consultancy focused on project-based work and advisory. If you need 24/7 support,
                we can help you choose and work with a provider who offers that.
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
                How do projects start?
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Most clients begin with a Cloud & Workspace Health Check. This gives both of us a clear view of
                what&apos;s needed. From there, we can execute the plan or simply hand it off to your team.
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
