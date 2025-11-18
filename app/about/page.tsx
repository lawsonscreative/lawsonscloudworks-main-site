import type { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { organizationSchema, getBreadcrumbSchema } from '@/lib/structuredData';

export const metadata: Metadata = {
  title: 'About Us | Lawsons CloudWorks | Specialist MSP Kent UK',
  description: 'Specialist MSP based in Kent serving 20-250 person UK teams. Senior infrastructure expertise in Microsoft 365, AWS, Intune & automation. Part of Lawsons Enterprises Ltd.',
};

export default function AboutPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.lawsonscloudworks.co.uk' },
    { name: 'About', url: 'https://www.lawsonscloudworks.co.uk/about' },
  ]);

  return (
    <div className="pt-20">
      <StructuredData data={[organizationSchema, breadcrumbs]} />
      {/* Page Intro */}
      <section className="relative bg-gradient-to-br from-neutral-900 to-brand-ink text-white py-16">
        <div className="container-custom max-w-4xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Lawsons CloudWorks</h1>
          <p className="text-xl text-white">
            A specialist MSP brand founded in 2025, built on three decades of hands-on infrastructure experience.
          </p>
          <p className="text-lg text-white/90">
            The brand is new; the lessons and experience are not.
          </p>
        </div>
      </section>

      {/* What CloudWorks Is */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-8">What CloudWorks Is</h2>

          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              CloudWorks is a <strong>specialist MSP</strong> focused exclusively on cloud workspaces, modern endpoints and automation for 20-250 person UK organisations.
            </p>

            <p>
              We're not a full-service MSP trying to do everything. We focus on the platforms your team actually works on – Microsoft 365, AWS WorkSpaces, Azure Virtual Desktop, Intune and dev tooling – and we do those things well.
            </p>

            <p>
              The CloudWorks brand launched in 2025, drawing on extensive infrastructure experience across regulated UK sectors including financial services, NHS and critical national infrastructure.
            </p>

            <p>
              CloudWorks is a trading name of <strong>Lawsons Enterprises Ltd</strong> (Company No: 16433965, VAT: GB495884223), which also operates <strong>Lawsons Creative</strong> (professional websites for small service businesses). This means CloudWorks benefits from being part of a small group rather than a one-off side project.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-spacing bg-brand-teal-soft">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-8">Who We Serve</h2>

          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              CloudWorks is built for <strong>20-250 person UK organisations</strong> with remote and hybrid teams who need enterprise-quality infrastructure without enterprise-level complexity or cost.
            </p>

            <p>
              <strong>Best fit sectors:</strong>
            </p>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start space-x-3">
                <span className="text-brand-teal mt-1">•</span>
                <span>Professional services (consultancies, agencies, legal, financial advisory)</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-brand-teal mt-1">•</span>
                <span>Software and technology companies with dev teams</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-brand-teal mt-1">•</span>
                <span>Regulated and security-sensitive organisations (healthcare, finance)</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-brand-teal mt-1">•</span>
                <span>Growing businesses transitioning from basic IT to managed infrastructure</span>
              </li>
            </ul>

            <p>
              <strong>Common challenges we solve:</strong>
            </p>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start space-x-3">
                <span className="text-brand-teal mt-1">•</span>
                <span>Outgrowing basic IT but not ready for enterprise MSPs</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-brand-teal mt-1">•</span>
                <span>Remote/hybrid teams struggling with fragile VPN and on-prem infrastructure</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-brand-teal mt-1">•</span>
                <span>Manual device management and patching creating security risk</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-brand-teal mt-1">•</span>
                <span>Developer workflows slowed by unreliable or manual deployment processes</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-12">How We Work</h2>

          <div className="space-y-8">
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-brand-ink mb-4">
                Clarity over jargon
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                We explain things in plain English and honest trade-offs.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-brand-ink mb-4">
                Realistic scopes
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                No over-promising. We tell you what&apos;s achievable and what&apos;s not.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-brand-ink mb-4">
                Documentation & knowledge transfer
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                You own your systems. We make sure you understand them and can operate them confidently.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-brand-ink mb-4">
                Respect for in-house teams
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                No &quot;we&apos;re the heroes, your IT is wrong&quot; attitude. We work alongside existing teams, not against them.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-brand-ink mb-4">
                Continuous improvement, not lock-in
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Managed services focused on making your environment better every month, not creating dependency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Consultant */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-8">Principal Consultant</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-brand-ink to-brand-teal rounded-lg aspect-square flex items-center justify-center text-white">
                <div className="text-center p-8">
                  <div className="text-7xl mb-2">👤</div>
                  <p className="text-lg font-semibold">Andy Lawson</p>
                  <p className="text-sm opacity-90 mt-1">Principal Consultant</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6 text-lg text-neutral-700 leading-relaxed">
              <p>
                Andy founded CloudWorks in 2025 after decades working across large UK organisations including financial services, NHS, and critical national infrastructure. His focus areas include cloud workspaces (AWS, Microsoft 365, AVD), modern endpoint management (Intune, Autopilot), identity governance and dev tooling automation.
              </p>

              <p>
                CloudWorks blends strategic planning with hands-on operations, emphasising documentation, knowledge transfer and continuous improvement. For specialist areas outside core expertise, we work with trusted partners to ensure clients get the best outcome without compromise.
              </p>

              <div className="pt-4">
                <Link
                  href="https://www.linkedin.com/in/andrewlawson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-teal hover:text-brand-ink font-semibold transition-colors"
                >
                  Connect on LinkedIn
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-200">
        <div className="container-custom max-w-4xl">
          <div className="text-center text-neutral-600">
            <p className="mb-2">
              <strong>Lawsons CloudWorks</strong> is a trading name of
            </p>
            <p className="text-lg font-semibold text-brand-ink mb-2">
              Lawsons Enterprises Ltd
            </p>
            <p className="text-sm">
              Company registered in England and Wales
            </p>
            <p className="text-sm">
              Company No: 16433965 | VAT: GB495884223
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Want to Work With Us?</h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Get in touch for a discovery call. We'll listen to your challenges and explore whether
            we're the right fit.
          </p>
          <Link href="/contact?cta=about-page" aria-label="Book a 30-minute discovery call to discuss your needs" className="btn-primary inline-block text-lg">
            Book a 30-Minute Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
