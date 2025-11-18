import Link from 'next/link';
import Image from 'next/image';

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
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc: string;
}

export default function AdvisoryOffers({
  id,
  title,
  overview,
  offers,
  imagePosition = 'left',
  ctaLabel = 'Discuss this with us',
  ctaHref = '/contact',
  imageSrc,
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

              <ul className="space-y-3">
                {offer.description.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-brand-teal mt-1">•</span>
                    <span className="text-neutral-700 leading-relaxed">{item}</span>
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
          <Link href={ctaHref} className="btn-primary inline-block">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );

  const imageSection = (
    <div className="rounded-lg overflow-hidden h-full min-h-[400px] relative">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
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
