import type { Metadata } from 'next';
import CaseStudyTeaser from '@/components/CaseStudyTeaser';

export const metadata: Metadata = {
  title: 'Case Studies | Client Work | Lawsons CloudWorks',
  description: 'See how Lawsons CloudWorks has helped UK businesses modernise their cloud infrastructure, workspace environments, and automation workflows.',
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-20">
      {/* Page Intro */}
      <section className="relative bg-gradient-to-br from-neutral-900 to-brand-ink text-white py-16">
        <div className="container-custom max-w-4xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Case Studies</h1>
          <p className="text-xl text-white">
            Real projects and managed service engagements from our senior infrastructure team.
          </p>
          <p className="text-lg text-white/90">
            These anonymised case studies are representative of recent work. Every environment is different – we'll be clear about what's realistic for yours.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <CaseStudyTeaser
              title="Modernising Remote Development Environment"
              industry="Software Development"
              size="200-person company"
              problem="Legacy VPN-based development environment causing friction for remote developers. Slow connection speeds, frequent disconnections, and inconsistent build performance were impacting productivity."
              outcome="Moving to an AWS-hosted virtual desktop platform reduced connection issues by around 80% in that engagement and improved developer satisfaction scores. Documented architecture and runbooks enable the internal team to manage the environment independently."
              link="/case-studies/remote-dev-modernisation"
              engagementType="Cloud & Workspace Health Check + rollout support"
            />
            <CaseStudyTeaser
              title="Cloud Migration & Cost Optimisation"
              industry="Professional Services"
              size="50-person consultancy"
              problem="Mixed on-premises and cloud setup with unpredictable costs, manual patching, and no clear disaster recovery plan. IT team spending too much time on maintenance instead of strategic work."
              outcome="A full migration to Microsoft 365 with documented processes reduced monthly costs by roughly a third. Clear security baselines and automated patching freed up around 15 hours per week of IT time for more valuable work."
              link="/case-studies/cloud-migration"
              engagementType="Cloud & Workspace Health Check + full migration"
            />
          </div>
        </div>
      </section>

      {/* Selected Examples */}
      <section className="section-spacing bg-brand-teal-soft">
        <div className="container-custom max-w-4xl text-center">
          <div className="bg-white p-12 rounded-lg shadow-sm">
            <svg
              className="w-16 h-16 text-brand-teal mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h2 className="mb-4">More Case Studies Coming</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Additional examples will be added as recent engagements complete and anonymisation is finalised.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Want Similar Results?</h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Get in touch to discuss your cloud, workspace, or automation challenges.
          </p>
          <a href="/contact?cta=case-studies-page" className="btn-primary inline-block text-lg">
            Book a 30-Minute Discovery Call
          </a>
        </div>
      </section>
    </div>
  );
}
