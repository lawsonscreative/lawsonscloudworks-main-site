import type { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { organizationSchema, getBreadcrumbSchema } from '@/lib/structuredData';

export const metadata: Metadata = {
  title: 'VPN vs AWS WorkSpaces vs AVD: Which Remote Access Solution? | Lawsons CloudWorks',
  description: 'Compare VPN, AWS WorkSpaces and Azure Virtual Desktop for remote teams. Cost, performance, security analysis for 20-250 person UK organisations.',
};

export default function InsightPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.lawsonscloudworks.co.uk' },
    { name: 'Insights', url: 'https://www.lawsonscloudworks.co.uk/insights' },
    { name: 'VPN vs WorkSpaces vs AVD', url: 'https://www.lawsonscloudworks.co.uk/insights/vpn-vs-workspaces-vs-avd' },
  ]);

  return (
    <div className="pt-20">
      <StructuredData data={[organizationSchema, breadcrumbs]} />

      <article className="section-spacing bg-white">
        <div className="container-custom max-w-4xl">
          {/* Back Link */}
          <Link href="/insights" className="text-brand-teal hover:text-brand-ink mb-8 inline-flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Insights
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-brand-teal-soft text-brand-teal text-sm font-semibold rounded mr-3">
                Cloud Workspaces
              </span>
              <span className="text-sm text-neutral-500">8 min read · 15 January 2025</span>
            </div>
            <h1 className="mb-6">VPN vs AWS WorkSpaces vs AVD: Which is Right for Your Remote Team?</h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              If your remote or hybrid team is still relying on VPN for access to development environments, design tools or line-of-business apps, you're probably feeling the pain: slow connections, frequent drops, and a constant stream of "I can't connect" support tickets.
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2>The Three Options</h2>
              <p>
                For organisations with 20–250 people, there are three main approaches to remote access:
              </p>
              <ul>
                <li><strong>Traditional VPN</strong> – Everyone connects through a VPN gateway to access on-premises or cloud resources</li>
                <li><strong>AWS WorkSpaces</strong> – Fully managed virtual desktops running in AWS</li>
                <li><strong>Azure Virtual Desktop (AVD)</strong> – Microsoft's cloud-hosted desktop solution, tightly integrated with Microsoft 365</li>
              </ul>
            </section>

            <section>
              <h2>When VPN Still Makes Sense</h2>
              <p>
                VPN isn't dead. It's still the right choice if:
              </p>
              <ul>
                <li>You have minimal remote workers (fewer than 10% of staff)</li>
                <li>Your infrastructure is primarily on-premises with no cloud migration plans</li>
                <li>Users only need occasional access to file shares or simple line-of-business apps</li>
                <li>Your budget is extremely constrained and you already have VPN infrastructure</li>
              </ul>
              <p>
                But if you're hybrid-heavy, have distributed teams, or run resource-intensive workloads (development, CAD, video editing), VPN becomes a bottleneck quickly.
              </p>
            </section>

            <section>
              <h2>AWS WorkSpaces: When It Works Best</h2>
              <p>
                <Link href="/services#managed-cloud-workspace" className="text-brand-teal hover:underline">AWS WorkSpaces</Link> are a good fit for organisations that:
              </p>
              <ul>
                <li><strong>Already use AWS</strong> for hosting, storage or other services</li>
                <li><strong>Need high-performance remote desktops</strong> for developers, designers or engineers</li>
                <li><strong>Want predictable per-user pricing</strong> without complex licensing</li>
                <li><strong>Have teams across multiple regions</strong> who need consistent low-latency access</li>
              </ul>

              <h3>Real-World Example</h3>
              <p>
                We helped a 200-person software company migrate from VPN to AWS WorkSpaces for their development team. Connection issues dropped by around 80%, and developers reported significantly better performance for builds and testing. Read the full <Link href="/case-studies/remote-dev-modernisation" className="text-brand-teal hover:underline">remote development modernisation case study</Link>.
              </p>

              <h3>Cost Considerations</h3>
              <p>
                Expect roughly £25–£45 per user per month for standard WorkSpaces (varies by region and bundle). For 50 users, that's £1,250–£2,250/month before management costs.
              </p>
            </section>

            <section>
              <h2>Azure Virtual Desktop (AVD): The M365 Native Option</h2>
              <p>
                If you're already invested in Microsoft 365, AVD might be the natural choice:
              </p>
              <ul>
                <li><strong>Native M365 integration</strong> – Licensing, identity and security all within the Microsoft ecosystem</li>
                <li><strong>Windows 11 multi-session</strong> – More cost-effective than one desktop per user</li>
                <li><strong>Conditional Access and Intune integration</strong> – Leverage existing security policies</li>
                <li><strong>Flexible sizing</strong> – Scale compute up or down based on workload</li>
              </ul>

              <h3>When to Choose AVD Over WorkSpaces</h3>
              <p>
                AVD tends to be the better choice if:
              </p>
              <ul>
                <li>You're primarily Microsoft 365 and Azure (not AWS-heavy)</li>
                <li>You want tighter integration with <Link href="/services#managed-endpoint-identity" className="text-brand-teal hover:underline">Intune and Conditional Access policies</Link></li>
                <li>You need Windows-specific applications and don't need Linux desktops</li>
                <li>You prefer Azure billing and management over AWS</li>
              </ul>
            </section>

            <section>
              <h2>What About Hybrid Models?</h2>
              <p>
                Some organisations run both: AVD for office workers who need Microsoft apps, and AWS WorkSpaces for developers or design teams who need specific tooling. This adds complexity but can be the right answer if different user groups have genuinely different needs.
              </p>
              <p>
                Just make sure you've got clear reasoning – don't default to "both" because you couldn't decide. Each platform has ongoing management overhead.
              </p>
            </section>

            <section>
              <h2>Decision Framework</h2>
              <p>
                Here's a simple framework for 20–250 person UK organisations:
              </p>

              <div className="bg-brand-teal-soft p-6 rounded-lg my-6">
                <h3 className="text-xl font-semibold text-brand-ink mb-4">Stick with VPN if:</h3>
                <ul className="space-y-2">
                  <li>Fewer than 10% remote workers</li>
                  <li>On-premises infrastructure with no cloud plans</li>
                  <li>Simple file/app access only</li>
                </ul>
              </div>

              <div className="bg-brand-teal-soft p-6 rounded-lg my-6">
                <h3 className="text-xl font-semibold text-brand-ink mb-4">Choose AWS WorkSpaces if:</h3>
                <ul className="space-y-2">
                  <li>Already using AWS for hosting/services</li>
                  <li>Need high-performance Linux or Windows desktops</li>
                  <li>Want simple per-user pricing</li>
                  <li>Global teams needing regional presence</li>
                </ul>
              </div>

              <div className="bg-brand-teal-soft p-6 rounded-lg my-6">
                <h3 className="text-xl font-semibold text-brand-ink mb-4">Choose Azure Virtual Desktop if:</h3>
                <ul className="space-y-2">
                  <li>Primarily Microsoft 365 and Azure</li>
                  <li>Want Intune/Conditional Access integration</li>
                  <li>Windows-only workloads</li>
                  <li>Prefer Microsoft billing/ecosystem</li>
                </ul>
              </div>
            </section>

            <section>
              <h2>Getting Started</h2>
              <p>
                Whichever route you choose, start with a pilot:
              </p>
              <ol>
                <li><strong>Identify 5–10 pilot users</strong> with varied workloads</li>
                <li><strong>Run a 4-week trial</strong> with proper baseline metrics (connection quality, app performance, user satisfaction)</li>
                <li><strong>Document costs</strong> including licensing, compute and management overhead</li>
                <li><strong>Get feedback</strong> from actual users, not just IT</li>
              </ol>
              <p>
                If you'd like help scoping a pilot or running a <Link href="/services#on-ramp-projects" className="text-brand-teal hover:underline">Cloud & Workspace Health Check</Link> to evaluate your options, we're happy to talk through your specific situation.
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <div className="bg-brand-teal-soft p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-brand-ink mb-4">
                Need Help Choosing the Right Solution?
              </h3>
              <p className="text-lg text-neutral-700 mb-6 max-w-2xl mx-auto">
                Book a discovery call to discuss your remote access challenges. We'll help you evaluate VPN, AWS WorkSpaces and AVD based on your actual environment and team needs.
              </p>
              <Link href="/contact?cta=insight-vpn-vs-workspaces" className="btn-primary inline-block">
                Book a 30-Minute Discovery Call
              </Link>
            </div>
          </div>

          {/* Related Content */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <h3 className="text-xl font-semibold text-brand-ink mb-6">Related Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/case-studies/remote-dev-modernisation" className="p-6 border border-brand-border rounded-lg hover:border-brand-teal hover:shadow-lg transition-all group">
                <span className="text-sm text-brand-teal font-semibold mb-2 block">Case Study</span>
                <h4 className="text-lg font-semibold text-brand-ink mb-2 group-hover:text-brand-teal">
                  AWS WorkSpaces Migration for Remote Developers
                </h4>
                <p className="text-neutral-600 text-sm">
                  How we helped a 200-person software company modernise remote development →
                </p>
              </Link>
              <Link href="/services#managed-cloud-workspace" className="p-6 border border-brand-border rounded-lg hover:border-brand-teal hover:shadow-lg transition-all group">
                <span className="text-sm text-brand-teal font-semibold mb-2 block">Service</span>
                <h4 className="text-lg font-semibold text-brand-ink mb-2 group-hover:text-brand-teal">
                  Managed Cloud Workspace Service
                </h4>
                <p className="text-neutral-600 text-sm">
                  Ongoing management of Microsoft 365, AWS WorkSpaces and AVD →
                </p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
