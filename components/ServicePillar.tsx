import Link from 'next/link';

interface ServicePillarProps {
  id: string;
  title: string;
  imagePosition: 'left' | 'right';
  problems: string[];
  services: string[];
  outcomes: string[];
}

export default function ServicePillar({
  id,
  title,
  imagePosition,
  problems,
  services,
  outcomes,
}: ServicePillarProps) {
  const contentSection = (
    <div className="space-y-8">
      <div>
        <h2 id={id} className="scroll-mt-24 mb-6">
          {title}
        </h2>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-brand-navy mb-4">Problems We Solve</h3>
        <ul className="space-y-3">
          {problems.map((problem, index) => (
            <li key={index} className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span className="text-neutral-700 leading-relaxed">{problem}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-brand-navy mb-4">What We Do</h3>
        <ul className="space-y-3">
          {services.map((service, index) => (
            <li key={index} className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-brand-sky flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-neutral-700 leading-relaxed">{service}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-brand-navy mb-4">Outcomes</h3>
        <ul className="space-y-3">
          {outcomes.map((outcome, index) => (
            <li key={index} className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-neutral-700 leading-relaxed">{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4">
        <Link href="/contact" className="btn-secondary inline-block">
          Discuss This With Us
        </Link>
      </div>
    </div>
  );

  const imageSection = (
    <div className="bg-gradient-to-br from-brand-sky to-brand-navy rounded-lg h-full min-h-[400px] flex items-center justify-center">
      <div className="text-white text-center p-8">
        <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-sm opacity-75">Professional imagery placeholder</p>
      </div>
    </div>
  );

  return (
    <section className="section-spacing bg-white odd:bg-neutral-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {imagePosition === 'left' ? (
            <>
              <div className="hidden lg:block">{imageSection}</div>
              {contentSection}
            </>
          ) : (
            <>
              {contentSection}
              <div className="hidden lg:block">{imageSection}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
