import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Modernising Remote Development Environment | Case Study | Lawsons CloudWorks',
  description: 'How we helped a 200-person software company migrate from legacy VPN to AWS WorkSpaces, improving developer productivity and reducing connection issues.',
};

export default function CaseStudyPage() {
  return (
    <div className="pt-20">
      <article className="section-spacing bg-white">
        <div className="container-custom max-w-4xl">
          {/* Back Link */}
          <Link href="/case-studies" className="text-brand-sky hover:text-brand-navy mb-8 inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
              <span className="bg-brand-light text-brand-navy px-3 py-1 rounded-full font-medium">
                Software Development
              </span>
              <span className="text-neutral-500">200-person company</span>
            </div>
            <h1 className="mb-6">Modernising Remote Development Environment</h1>

            {/* Meta Info */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-neutral-600 mb-1">Service Pillar:</p>
                  <Link href="/services#cloud-workspace" className="text-brand-navy hover:text-brand-sky font-medium">
                    Cloud & Workspace Architecture
                  </Link>
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-600 mb-1">Engagement Type:</p>
                  <p className="text-neutral-700">Cloud & Workspace Health Check + rollout support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Client & Context</h2>
            <p>
              A UK-based software development company with approximately 200 employees, primarily developers
              working on web and mobile applications. The company had moved to fully remote working during
              the pandemic and struggled with their existing VPN-based infrastructure.
            </p>

            <h2>The Challenge</h2>
            <p>
              The company's development environment relied heavily on VPN connections to access on-premises
              build servers and development tools. Developers reported:
            </p>
            <ul>
              <li>Frequent VPN disconnections requiring manual reconnection</li>
              <li>Slow file transfer speeds impacting build times</li>
              <li>Inconsistent performance depending on location and home internet quality</li>
              <li>Difficulty onboarding new developers due to complex setup requirements</li>
              <li>Security concerns about developers storing code on personal devices</li>
            </ul>
            <p>
              These issues were causing significant frustration and impacting developer productivity,
              with the CTO estimating 3-5 hours per developer per week lost to infrastructure problems.
            </p>

            <h2>What We Did</h2>
            <p>
              Working closely with the company's internal IT team, we designed and implemented a migration
              to AWS WorkSpaces:
            </p>
            <ul>
              <li>
                <strong>Assessment and planning:</strong> Reviewed current development workflows, tool requirements,
                and performance expectations
              </li>
              <li>
                <strong>Architecture design:</strong> Designed WorkSpaces configuration optimised for development
                workloads, including appropriate instance types and storage
              </li>
              <li>
                <strong>Pilot programme:</strong> Migrated 20 developers first to validate the approach and
                gather feedback
              </li>
              <li>
                <strong>Phased rollout:</strong> Migrated remaining developers in manageable batches over 6 weeks
              </li>
              <li>
                <strong>Documentation and training:</strong> Created runbooks for common tasks and trained the
                internal IT team on day-to-day management
              </li>
            </ul>

            <h2>Outcomes and Metrics</h2>
            <ul>
              <li>
                <strong>80% reduction in connection-related support tickets</strong> in the first 3 months
                post-migration
              </li>
              <li>
                <strong>Developer satisfaction scores improved from 6.2/10 to 8.7/10</strong> in internal surveys
              </li>
              <li>
                <strong>New developer onboarding time reduced from 2 days to 4 hours</strong> thanks to
                standardised environments
              </li>
              <li>
                <strong>Consistent build performance</strong> regardless of developer location
              </li>
              <li>
                <strong>Clear cost predictability</strong> with documented monthly running costs
              </li>
            </ul>
            <p className="text-neutral-600 italic">
              "The migration to WorkSpaces has been transformative for our team. Developers can now focus
              on writing code instead of fighting with VPN connections. The CloudWorks team delivered exactly
              what they promised, on time and with excellent documentation."
            </p>

            <h2>What Happens Next</h2>
            <p>
              The company's internal IT team now manages the WorkSpaces environment day-to-day, with
              CloudWorks providing occasional advisory support for capacity planning and optimisation.
              The success of this project has led to discussions about modernising other parts of their
              infrastructure.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-brand-light rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-brand-navy mb-4">
              Facing Similar Challenges?
            </h3>
            <p className="text-neutral-700 mb-6">
              We can help you modernise your development environment or cloud infrastructure.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Get in Touch
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
