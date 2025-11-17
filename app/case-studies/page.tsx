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
      <section className="section-spacing bg-gradient-to-br from-brand-light to-white">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="mb-6">Case Studies</h1>
          <p className="text-xl text-neutral-700 leading-relaxed">
            Real projects, real outcomes. Details are anonymised where necessary to protect client confidentiality.
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
              outcome="Migration to AWS WorkSpaces reduced connection issues by 80% and improved developer satisfaction scores. Documented architecture and runbooks enable the internal team to manage the environment independently."
              link="/case-studies/remote-dev-modernisation"
            />
            <CaseStudyTeaser
              title="Cloud Migration & Cost Optimisation"
              industry="Professional Services"
              size="50-person consultancy"
              problem="Mixed on-premises and cloud setup with unpredictable costs, manual patching, and no clear disaster recovery plan. IT team spending too much time on maintenance instead of strategic work."
              outcome="Full migration to Microsoft 365 with documented processes reduced monthly costs by 30%. Clear security baseline and automated patching freed up 15 hours per week of IT time."
              link="/case-studies/cloud-migration"
            />
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section-spacing bg-brand-light">
        <div className="container-custom max-w-4xl text-center">
          <div className="bg-white p-12 rounded-lg shadow-sm">
            <svg
              className="w-16 h-16 text-brand-sky mx-auto mb-4"
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
            <h2 className="mb-4">More Case Studies Coming Soon</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              We're currently working with several clients on exciting projects. More case studies
              will be published here as projects complete and clients give permission to share anonymised details.
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
          <a href="/contact" className="btn-primary inline-block text-lg">
            Book a Discovery Call
          </a>
        </div>
      </section>
    </div>
  );
}
