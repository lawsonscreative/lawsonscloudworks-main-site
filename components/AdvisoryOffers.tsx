import Link from 'next/link';

interface SubOffer {
  title: string;
  description: string[];
  duration: string;
  investment: string;
}

interface AdvisoryOffersProps {
  id: string;
  title: string;
  overview: string;
  offers: SubOffer[];
  imagePosition?: 'left' | 'right';
}

export default function AdvisoryOffers({
  id,
  title,
  overview,
  offers,
  imagePosition = 'left',
}: AdvisoryOffersProps) {
  const contentSection = (
    <div className="space-y-8">
      <div>
        <h2 id={id} className="scroll-mt-24 mb-4">
          {title}
        </h2>
        <p className="text-lg text-neutral-700 leading-relaxed">
          {overview}
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-brand-ink mb-6">
          Typical Engagements:
        </h3>

        <div className="space-y-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white border-2 border-brand-ink/10 rounded-lg p-6 space-y-4"
            >
              <h4 className="text-xl font-semibold text-brand-ink">
                {offer.title}
              </h4>

              <ul className="space-y-2">
                {offer.description.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-brand-teal mt-1">•</span>
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
                <div>
                  <p className="text-sm font-semibold text-neutral-600 mb-1">Duration:</p>
                  <p className="text-brand-ink font-semibold">{offer.duration}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-600 mb-1">Investment:</p>
                  <p className="text-brand-ink font-semibold">{offer.investment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6">
          <Link href="/contact" className="btn-primary inline-block">
            Discuss this with us
          </Link>
        </div>
      </div>
    </div>
  );

  const imageSection = (
    <div className="bg-gradient-to-br from-brand-teal to-brand-ink rounded-lg h-full min-h-[400px] flex items-center justify-center">
      <div className="text-white text-center p-8">
        <svg className="w-24 h-24 mx-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  );

  return (
    <section className="section-spacing bg-white odd:bg-neutral-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {imagePosition === 'left' ? (
            <>
              <div className="hidden lg:block sticky top-24">{imageSection}</div>
              {contentSection}
            </>
          ) : (
            <>
              {contentSection}
              <div className="hidden lg:block sticky top-24">{imageSection}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
