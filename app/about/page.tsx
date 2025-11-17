import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Lawsons CloudWorks | Cloud Consulting Kent UK',
  description: 'Meet the team behind Lawsons CloudWorks. Enterprise cloud expertise for UK businesses, part of Lawsons Enterprises Ltd.',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Page Intro */}
      <section className="section-spacing bg-gradient-to-br from-brand-light to-white">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="mb-6">About Lawsons CloudWorks</h1>
          <p className="text-xl text-neutral-700 leading-relaxed">
            We're a small cloud and workspace consultancy helping UK businesses modernise their
            infrastructure without the overhead of big firms.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-8">Who We Are</h2>

          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              Lawsons CloudWorks is a trading name under <strong>Lawsons Enterprises Ltd</strong>, a
              UK-based company that also operates Lawsons Creative, a web design service for small
              businesses.
            </p>

            <p>
              While Lawsons Creative focuses on helping SMEs get professional websites quickly and
              affordably, CloudWorks is the "grown-up infrastructure cousin" – we help organisations
              with their cloud architecture, modern workplace challenges, and automation needs.
            </p>

            <p>
              Think of us as the cloud consulting arm of a small, focused business that understands
              how to deliver enterprise-quality work without enterprise drama or pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Principal Consultant */}
      <section className="section-spacing bg-brand-light">
        <div className="container-custom max-w-5xl">
          <h2 className="text-center mb-12">Meet Andy</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-brand-navy to-brand-sky rounded-lg aspect-square flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">👤</div>
                  <p className="text-sm opacity-75">Professional photo placeholder</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6 text-lg text-neutral-700 leading-relaxed">
              <p>
                <strong className="text-brand-navy">Andy Lawson</strong> is the principal consultant
                behind CloudWorks, with over 30 years' experience in IT infrastructure, systems, and
                cloud architecture.
              </p>

              <p>
                Most recently, Andy was responsible for running AWS WorkSpaces environments supporting
                approximately 4,000 developers at scale – the kind of experience that teaches you what
                actually works in production, not just in theory.
              </p>

              <p>
                His background spans Microsoft-focused infrastructure, modern workplace technologies,
                cloud migrations, and automation. Andy has worked across organisations of all sizes,
                from small businesses to large enterprises, giving him a practical understanding of
                what's realistic at different scales.
              </p>

              <p>
                Based in Kent, Andy serves clients across the UK. CloudWorks was created to bring
                enterprise-level cloud and workplace expertise to organisations who need it but don't
                have enterprise budgets or patience for corporate nonsense.
              </p>

              <div className="pt-4">
                <Link
                  href="https://www.linkedin.com/in/andrewlawson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-sky hover:text-brand-navy font-semibold transition-colors"
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

      {/* Our Values */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-12">How We Work</h2>

          <div className="space-y-8">
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                Clarity Over Jargon
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                We explain technical decisions in plain English. You should understand the trade-offs,
                not just be impressed by buzzwords.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                Realistic Scopes
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                No over-promising. We'd rather under-promise and over-deliver than leave you with
                unfinished projects and vague explanations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                Documentation & Knowledge Transfer
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                You should own and understand your systems. Our goal is to make you less dependent
                on consultants (including us), not more.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                Independence
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                We're not tied to any vendors. Our recommendations are based on what actually fits
                your situation, not what earns us commission.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                Pragmatic Solutions
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Enterprise thinking scaled for SMBs. We'll help you adopt the good parts of enterprise
                practices without the bureaucracy and waste.
              </p>
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
            <p className="text-lg font-semibold text-brand-navy mb-2">
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
          <Link href="/contact" className="btn-primary inline-block text-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
