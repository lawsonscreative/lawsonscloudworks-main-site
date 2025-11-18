import type { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { organizationSchema, getCaseStudySchema, getBreadcrumbSchema } from '@/lib/structuredData';

export const metadata: Metadata = {
  title: 'Microsoft 365 Migration Case Study | Cloud Cost Optimisation | Lawsons CloudWorks',
  description: 'Microsoft 365 migration for 50-person consultancy. Reduced monthly costs by 33%, saved 15 hours/week IT time. UK managed cloud workspace case study.',
};

export default function CaseStudyPage() {
  const caseStudySchema = getCaseStudySchema({
    url: 'https://www.lawsonscloudworks.co.uk/case-studies/cloud-migration',
    title: 'Cloud Migration & Cost Optimisation: Microsoft 365 Implementation',
    description: 'Full migration to Microsoft 365 for a 50-person consultancy, reducing monthly costs by roughly a third and freeing up around 15 hours per week of IT time through automation and documented processes.',
    industry: 'Professional Services',
    companySize: '50 employees',
    datePublished: '2025-01-15',
    keywords: ['Microsoft 365 migration', 'cloud cost optimisation', 'IT automation', 'managed service provider UK', 'security baseline', 'disaster recovery'],
  });

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.lawsonscloudworks.co.uk' },
    { name: 'Case Studies', url: 'https://www.lawsonscloudworks.co.uk/case-studies' },
    { name: 'Cloud Migration', url: 'https://www.lawsonscloudworks.co.uk/case-studies/cloud-migration' },
  ]);

  return (
    <div className="pt-20">
      <StructuredData data={[organizationSchema, caseStudySchema, breadcrumbs]} />
      <article className="section-spacing bg-white">
        <div className="container-custom max-w-4xl">
          {/* Back Link */}
          <Link href="/case-studies" className="text-brand-teal hover:text-brand-ink mb-8 inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
              <span className="bg-brand-teal-soft text-brand-ink px-3 py-1 rounded-full font-medium">
                Professional Services
              </span>
              <span className="text-neutral-500">50-person consultancy</span>
            </div>
            <h1 className="mb-6">Cloud Migration & Cost Optimisation</h1>

            {/* Meta Info */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-neutral-600 mb-1">Service Pillar:</p>
                  <Link href="/services#cloud-workspace" className="text-brand-ink hover:text-brand-teal font-medium">
                    Cloud & Workspace Architecture
                  </Link>
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-600 mb-1">Engagement Type:</p>
                  <p className="text-neutral-700">Cloud & Workspace Health Check + full migration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Before/After Snapshot */}
          <div className="mb-12 bg-neutral-50 border-2 border-neutral-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-brand-ink mb-6 text-center">Before → After</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Before
                </h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>£4,200/month in unpredictable IT costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Manual patching and maintenance burden</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>2-3 unplanned downtime incidents per year</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>No disaster recovery plan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Mixed license confusion across the team</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  After
                </h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>£2,900/month with predictable costs (30% reduction)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>15 hours/week freed up for strategic work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Zero unplanned downtime in 12 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Cyber Essentials-ready security baseline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Clear visibility of all IT resources and costs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Client & Context</h2>
            <p>
              A UK professional services consultancy with 50 employees working in a hybrid model
              (office and remote). The company had grown organically over 10 years and accumulated
              a mix of on-premises servers, cloud services, and SaaS tools with no coherent strategy.
            </p>

            <h2>The Challenge</h2>
            <p>
              The company's IT infrastructure had several pain points:
            </p>
            <ul>
              <li>On-premises file server requiring manual patching and maintenance</li>
              <li>Email hosted on an ageing Exchange server with no disaster recovery plan</li>
              <li>Mix of Office 2016 licenses and Office 365 subscriptions creating confusion</li>
              <li>Unpredictable monthly costs due to ad-hoc Azure resources</li>
              <li>Two-person IT team spending most time on maintenance instead of strategic work</li>
              <li>No clear security baseline or documented procedures</li>
            </ul>
            <p>
              The Managing Director wanted to modernise but was concerned about disruption to
              client-facing work and worried about hidden costs.
            </p>

            <h2>What We Did</h2>
            <p>
              We approached this as a consulting and delivery project with clear milestones:
            </p>
            <ul>
              <li>
                <strong>Current state assessment:</strong> Documented all infrastructure, licenses,
                and monthly costs to create a baseline
              </li>
              <li>
                <strong>Options and recommendations:</strong> Presented three approaches (lift-and-shift,
                hybrid, full cloud) with honest trade-offs
              </li>
              <li>
                <strong>Phased migration:</strong> Moved to Microsoft 365 E3 for all users, migrated
                files to SharePoint and OneDrive, decommissioned on-premises servers
              </li>
              <li>
                <strong>Security baseline:</strong> Implemented conditional access, MFA, and basic
                threat protection
              </li>
              <li>
                <strong>Cost optimisation:</strong> Cleaned up unused Azure resources and documented
                a process for approving new cloud spending
              </li>
              <li>
                <strong>Documentation and training:</strong> Created runbooks for common tasks and
                trained the IT team on managing the new environment
              </li>
            </ul>

            <h2>Outcomes and Metrics</h2>
            <ul>
              <li>
                <strong>30% reduction in monthly IT costs</strong> (£4,200 to £2,900 per month)
                after first 6 months
              </li>
              <li>
                <strong>15 hours per week of IT time freed up</strong> from reduced maintenance burden
              </li>
              <li>
                <strong>Zero unplanned downtime</strong> in the 12 months following migration
                (previously 2-3 incidents per year)
              </li>
              <li>
                <strong>Documented security baseline</strong> meeting Cyber Essentials requirements
              </li>
              <li>
                <strong>Clear visibility</strong> of all IT costs and resources
              </li>
            </ul>
            <p className="text-neutral-600 italic">
              "CloudWorks helped us get our IT house in order. We now have predictable costs, better
              security, and our IT team can focus on helping the business instead of babysitting servers.
              The documentation they provided means we're not dependent on them, which was important to us."
            </p>

            <h2>What Happens Next</h2>
            <p>
              The company's IT team now manages the Microsoft 365 environment independently, with
              quarterly check-ins from CloudWorks to review security reports and discuss any upcoming
              changes. The success of this project has built confidence for future modernisation work.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="mt-12 bg-brand-teal-soft border-l-4 border-brand-teal rounded-r-lg p-8">
            <h3 className="text-2xl font-semibold text-brand-ink mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Key Takeaways
            </h3>
            <ul className="space-y-4 text-neutral-700">
              <li className="flex items-start">
                <span className="text-brand-teal font-bold mr-3 mt-1">1.</span>
                <div>
                  <strong>Baseline first:</strong> Understanding current costs and infrastructure before making recommendations prevented surprises and set realistic expectations.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-teal font-bold mr-3 mt-1">2.</span>
                <div>
                  <strong>Phased approach reduces risk:</strong> Breaking the migration into stages (assessment, pilot, migration, optimisation) meant the business could continue serving clients throughout.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-teal font-bold mr-3 mt-1">3.</span>
                <div>
                  <strong>Cost savings came from cleanup, not just migration:</strong> A third of the savings came from simply removing unused Azure resources and rationalising licenses.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-teal font-bold mr-3 mt-1">4.</span>
                <div>
                  <strong>Independence through documentation:</strong> Thorough runbooks and training meant the client wasn't locked into ongoing CloudWorks support – exactly what they wanted.
                </div>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-brand-teal-soft rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-brand-ink mb-4">
              Ready to Modernise Your Infrastructure?
            </h3>
            <p className="text-neutral-700 mb-6">
              We can help you migrate to the cloud and optimise your IT costs.
            </p>
            <Link href="/contact?cta=case-study-cloud-migration" aria-label="Book a 30-minute discovery call about cloud migration" className="btn-primary inline-block">
              Book a 30-Minute Discovery Call
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
