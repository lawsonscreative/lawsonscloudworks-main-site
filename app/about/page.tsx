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
          <p className="text-xl text-neutral-700 leading-relaxed mb-4">
            Lawsons CloudWorks is a new consultancy brand founded in 2025, built on over three decades of hands-on infrastructure, workspace and cloud experience.
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed">
            The brand is new; the patterns, lessons and scars it draws on are not.
          </p>
        </div>
      </section>

      {/* Part of the Lawsons Group */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-8">Part of the Lawsons Group</h2>

          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              Lawsons CloudWorks is a trading name of <strong>Lawsons Enterprises Ltd</strong> (Company No: 16433965, VAT: GB495884223).
            </p>

            <p>
              Lawsons Enterprises also operates:
            </p>

            <ul className="space-y-2 ml-6">
              <li className="flex items-start space-x-2">
                <span className="text-brand-sky mt-1">•</span>
                <span><strong>Lawsons Creative</strong> – professional websites for small service businesses</span>
              </li>
            </ul>

            <p>
              This means CloudWorks benefits from being part of a small group rather than a one-off side project.
            </p>
          </div>
        </div>
      </section>

      {/* Principal Consultant */}
      <section className="section-spacing bg-brand-light">
        <div className="container-custom max-w-5xl">
          <h2 className="text-center mb-12">Principal Consultant</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-brand-navy to-brand-sky rounded-lg aspect-square flex items-center justify-center text-white">
                <div className="text-center p-8">
                  <div className="text-7xl mb-2">👤</div>
                  <p className="text-lg font-semibold">Andy Lawson</p>
                  <p className="text-sm opacity-90 mt-1">Principal Consultant</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6 text-lg text-neutral-700 leading-relaxed">
              <p>
                Andy has 30+ years in IT, with particular depth in:
              </p>

              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-2">
                  <span className="text-brand-sky mt-1">•</span>
                  <span>AWS, including designing and operating an AWS-hosted developer platform for 3,000+ developers at Direct Line Group (a major UK insurer)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-sky mt-1">•</span>
                  <span>The Microsoft stack (Microsoft 365, Azure, Intune, AVD, MECM, modern workplace tooling)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-sky mt-1">•</span>
                  <span>Cloud and hybrid architectures for distributed teams</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-sky mt-1">•</span>
                  <span>Developer tooling, automation and modern endpoint management</span>
                </li>
              </ul>

              <p>
                This experience comes from a mix of long-term consulting, contracting and senior in-house Technical Lead roles, including positions at:
              </p>

              <ul className="space-y-2 ml-6 text-base">
                <li className="flex items-start space-x-2">
                  <span className="text-brand-sky mt-1">•</span>
                  <span>Direct Line Group / Aviva (Technical Lead, 2020-Present)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-sky mt-1">•</span>
                  <span>Great Ormond Street Hospital (Senior Consultant, 2018-2019)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-sky mt-1">•</span>
                  <span>ThinTech Ltd (Senior Consultant, 2016-2018)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-sky mt-1">•</span>
                  <span>ReVoBlue IT Services (Senior IT Consultant, 2015-2021)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-sky mt-1">•</span>
                  <span>Plus earlier roles at NHS, Stansted Airport, and various consultancies</span>
                </li>
              </ul>

              <p>
                The CloudWorks approach blends strategic and hands-on work, with a bias toward documentation and knowledge transfer.
              </p>

              <p>
                For specialist areas, CloudWorks brings in trusted partners to ensure clients get the best expertise without compromise.
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

      {/* Experience Timeline */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-12">Experience Timeline</h2>

          <div className="space-y-8">
            {/* 2020-Present */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32 text-right">
                <p className="text-lg font-semibold text-brand-navy">2020 – Present</p>
              </div>
              <div className="flex-shrink-0 w-px bg-brand-sky"></div>
              <div className="flex-grow pb-8">
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Direct Line Group / Aviva</h3>
                <p className="text-neutral-600 mb-2 font-medium">Technical Lead</p>
                <p className="text-neutral-700 leading-relaxed">
                  Designed and operated an AWS-hosted developer platform serving 3,000+ developers. Led architecture decisions, infrastructure automation, and capacity planning for a major UK financial services organisation.
                </p>
              </div>
            </div>

            {/* 2018-2019 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32 text-right">
                <p className="text-lg font-semibold text-brand-navy">2018 – 2019</p>
              </div>
              <div className="flex-shrink-0 w-px bg-brand-sky"></div>
              <div className="flex-grow pb-8">
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Great Ormond Street Hospital</h3>
                <p className="text-neutral-600 mb-2 font-medium">Senior Consultant</p>
                <p className="text-neutral-700 leading-relaxed">
                  Delivered critical infrastructure projects including remote access rollout during COVID-19 lockdowns, supporting 14,000+ users transitioning to remote work.
                </p>
              </div>
            </div>

            {/* 2016-2018 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32 text-right">
                <p className="text-lg font-semibold text-brand-navy">2016 – 2018</p>
              </div>
              <div className="flex-shrink-0 w-px bg-brand-sky"></div>
              <div className="flex-grow pb-8">
                <h3 className="text-xl font-semibold text-brand-navy mb-2">ThinTech Ltd</h3>
                <p className="text-neutral-600 mb-2 font-medium">Senior Consultant</p>
                <p className="text-neutral-700 leading-relaxed">
                  Specialised in workspace transformation and virtual desktop infrastructure (VDI) projects for enterprise clients across the UK.
                </p>
              </div>
            </div>

            {/* 2015-2021 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32 text-right">
                <p className="text-lg font-semibold text-brand-navy">2015 – 2021</p>
              </div>
              <div className="flex-shrink-0 w-px bg-brand-sky"></div>
              <div className="flex-grow pb-8">
                <h3 className="text-xl font-semibold text-brand-navy mb-2">ReVoBlue IT Services</h3>
                <p className="text-neutral-600 mb-2 font-medium">Senior IT Consultant</p>
                <p className="text-neutral-700 leading-relaxed">
                  Concurrent consulting role delivering Microsoft cloud and endpoint management projects for SME and mid-market clients.
                </p>
              </div>
            </div>

            {/* Earlier roles */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32 text-right">
                <p className="text-lg font-semibold text-brand-navy">1990s – 2015</p>
              </div>
              <div className="flex-shrink-0 w-px bg-brand-sky"></div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Earlier Roles</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Various technical and consulting positions including NHS trusts, Stansted Airport, and IT consultancies. Built foundational expertise in infrastructure, networking, and systems management during the evolution from on-premises to cloud computing.
                </p>
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
                Clarity over jargon
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                We explain things in plain English and honest trade-offs.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                Realistic scopes
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                No over-promising. We tell you what&apos;s achievable and what&apos;s not.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                Documentation & handover
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                You own your systems. We make sure you understand them.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                Respect for in-house teams
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                No &quot;we&apos;re the heroes, your IT is stupid&quot; attitude. We work alongside existing teams, not against them.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                Independence
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                We help clients become less dependent on us, not more.
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
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
