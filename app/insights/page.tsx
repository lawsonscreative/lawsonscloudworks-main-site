import type { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { organizationSchema, getBreadcrumbSchema } from '@/lib/structuredData';

export const metadata: Metadata = {
  title: 'Insights & Resources | Cloud Workspace & MSP Guidance | Lawsons CloudWorks',
  description: 'Practical insights on cloud workspaces, Microsoft 365, AWS WorkSpaces, Intune and modern endpoint management for 20-250 person UK organisations.',
};

export default function InsightsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.lawsonscloudworks.co.uk' },
    { name: 'Insights', url: 'https://www.lawsonscloudworks.co.uk/insights' },
  ]);

  const insights = [
    {
      title: 'VPN vs AWS WorkSpaces vs AVD: Which is Right for Your Remote Team?',
      slug: 'vpn-vs-workspaces-vs-avd',
      category: 'Cloud Workspaces',
      description: 'Comparing legacy VPN, AWS WorkSpaces and Azure Virtual Desktop for 20-250 person UK organisations. Cost, performance, security and management considerations.',
      readTime: '8 min read',
      date: '2025-01-15',
    },
    {
      title: 'What to Ask an MSP About Intune Management',
      slug: 'questions-to-ask-msp-about-intune',
      category: 'Endpoint Management',
      description: 'Essential questions for evaluating managed Intune services. Coverage, SLAs, security baselines, patching cycles and what "good" endpoint management looks like.',
      readTime: '6 min read',
      date: '2025-01-15',
    },
    {
      title: 'Cloud Migration Without Surprises: Cost Baselining Before You Move',
      slug: 'cloud-migration-cost-baselining',
      category: 'Cloud Migration',
      description: 'How to estimate Microsoft 365 or AWS costs accurately before migration. Avoiding bill shock and understanding the real TCO of cloud workspaces.',
      readTime: '10 min read',
      date: '2025-01-15',
    },
    {
      title: 'When to Switch from General MSP to Specialist Cloud Workspace Provider',
      slug: 'when-to-switch-to-specialist-msp',
      category: 'MSP Strategy',
      description: 'Signs your current MSP isn\'t equipped for modern cloud workspaces. When specialist expertise in M365, AWS and Intune delivers better value than generalist support.',
      readTime: '7 min read',
      date: '2025-01-15',
    },
  ];

  return (
    <div className="pt-20">
      <StructuredData data={[organizationSchema, breadcrumbs]} />

      {/* Page Intro */}
      <section className="relative bg-gradient-to-br from-neutral-900 to-brand-ink text-white py-16">
        <div className="container-custom max-w-4xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Insights & Resources</h1>
          <p className="text-xl text-white">
            Practical guidance on cloud workspaces, endpoint management and infrastructure for growing UK teams.
          </p>
          <p className="text-lg text-white/90">
            Written by our senior infrastructure team, not marketing. Real-world experience distilled into actionable insights for 20-250 person organisations.
          </p>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insights.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="card group h-full flex flex-col hover:border-brand-teal transition-all"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-brand-teal-soft text-brand-teal text-sm font-semibold rounded">
                    {insight.category}
                  </span>
                  <span className="text-sm text-neutral-500">{insight.readTime}</span>
                </div>
                <h2 className="text-2xl font-semibold text-brand-ink mb-3 group-hover:text-brand-teal transition-colors">
                  {insight.title}
                </h2>
                <p className="text-neutral-600 mb-4 flex-grow leading-relaxed">
                  {insight.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-200">
                  <span className="text-sm text-neutral-500">{insight.date}</span>
                  <span className="text-brand-teal font-semibold group-hover:underline">
                    Read article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-brand-teal-soft">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="mb-4">Have a Specific Question?</h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Book a discovery call to discuss your cloud workspace, endpoint or automation challenges with our senior team.
          </p>
          <Link href="/contact?cta=insights-page" className="btn-primary inline-block text-lg">
            Book a 30-Minute Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
