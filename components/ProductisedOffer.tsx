import Link from 'next/link';
import Image from 'next/image';

interface ProductisedOfferProps {
  id: string;
  pillarTitle: string;
  overview: string;
  atAGlance?: string[];
  offerTitle: string;
  whoItsFor: string[];
  whatWeDo: string[];
  whatYouGet: string[];
  duration: string;
  investment: string;
  securityNote?: {
    title: string;
    content: string;
  };
  imagePosition?: 'left' | 'right';
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc: string;
}

export default function ProductisedOffer({
  id,
  pillarTitle,
  overview,
  atAGlance,
  offerTitle,
  whoItsFor,
  whatWeDo,
  whatYouGet,
  duration,
  investment,
  securityNote,
  imagePosition = 'right',
  ctaLabel = 'Discuss this with us',
  ctaHref = '/contact',
  imageSrc,
}: ProductisedOfferProps) {
  const contentSection = (
    <div className="space-y-8">
      <div>
        <h2 id={id} className="scroll-mt-24 mb-4">
          {pillarTitle}
        </h2>
        <p className="text-lg text-neutral-700 leading-relaxed">
          {overview}
        </p>
      </div>

      {atAGlance && (
        <div className="bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white rounded-xl shadow-card-hover p-8">
          <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-3">At a Glance</h3>
          <ul className="space-y-3">
            {atAGlance.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-white mt-1 text-xl">✓</span>
                <span className="text-white/95 font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-white/20">
            <Link href={ctaHref} className="inline-block px-6 py-3 bg-white text-brand-teal font-semibold rounded-lg hover:bg-neutral-50 transition-all duration-200 shadow-button">
              {ctaLabel}
            </Link>
          </div>
        </div>
      )}

      <div className="bg-white border-2 border-brand-ink/10 rounded-lg p-6 space-y-6">
        <h3 className="text-2xl font-semibold text-brand-ink">
          {offerTitle}
        </h3>

        <div>
          <h4 className="text-lg font-semibold text-brand-ink mb-3">Who it&apos;s for:</h4>
          <ul className="space-y-3">
            {whoItsFor.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-brand-teal mt-1">•</span>
                <span className="text-neutral-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-brand-ink mb-3">What we do:</h4>
          <ul className="space-y-3">
            {whatWeDo.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-brand-teal mt-1">•</span>
                <span className="text-neutral-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-brand-ink mb-3">What you get:</h4>
          <ul className="space-y-3">
            {whatYouGet.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-brand-teal mt-1">•</span>
                <span className="text-neutral-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
          <div>
            <p className="text-sm font-semibold text-neutral-600 mb-1">Typical duration:</p>
            <p className="text-brand-ink font-semibold">{duration}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-600 mb-1">Investment:</p>
            <p className="text-brand-ink font-semibold">{investment}</p>
          </div>
        </div>

        <div className="pt-2">
          <Link href={ctaHref} className="btn-primary inline-block">
            {ctaLabel}
          </Link>
        </div>
      </div>

      {securityNote && (
        <div className="bg-brand-teal-soft/30 border-l-4 border-brand-teal rounded-r-lg p-6">
          <h4 className="text-lg font-semibold text-brand-ink mb-2">
            {securityNote.title}
          </h4>
          <p className="text-neutral-700 leading-relaxed">
            {securityNote.content}
          </p>
        </div>
      )}
    </div>
  );

  const imageSection = (
    <div className="rounded-lg overflow-hidden relative w-full aspect-[4/3]">
      <Image
        src={imageSrc}
        alt={pillarTitle}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
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
