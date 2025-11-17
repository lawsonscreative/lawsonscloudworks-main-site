import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cloud Migration & Cost Optimisation | Case Study | Lawsons CloudWorks',
  description: 'How we helped a professional services firm migrate to Microsoft 365, reducing costs by 30% while improving security and reliability.',
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
            <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-4">
              <span className="bg-brand-light text-brand-navy px-3 py-1 rounded-full font-medium">
                Professional Services
              </span>
              <span>50-person consultancy</span>
            </div>
            <h1 className="mb-6">Cloud Migration & Cost Optimisation</h1>
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

          {/* CTA */}
          <div className="mt-16 p-8 bg-brand-light rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-brand-navy mb-4">
              Ready to Modernise Your Infrastructure?
            </h3>
            <p className="text-neutral-700 mb-6">
              We can help you migrate to the cloud and optimise your IT costs.
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
