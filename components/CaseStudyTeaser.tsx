import Link from 'next/link';

interface CaseStudyTeaserProps {
  title: string;
  industry: string;
  size: string;
  problem: string;
  outcome: string;
  link: string;
  engagementType?: string;
}

export default function CaseStudyTeaser({
  title,
  industry,
  size,
  problem,
  outcome,
  link,
  engagementType,
}: CaseStudyTeaserProps) {
  return (
    <Link href={link} className="card group h-full flex flex-col">
      <div className="mb-4">
        <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500 mb-3">
          <span className="bg-brand-light text-brand-navy px-3 py-1 rounded-full font-medium">
            {industry}
          </span>
          <span>{size}</span>
        </div>
        <h3 className="text-2xl font-semibold text-brand-navy group-hover:text-brand-sky transition-colors">
          {title}
        </h3>
        {engagementType && (
          <p className="text-sm text-neutral-600 mt-2">
            <span className="font-semibold">Engagement type:</span> {engagementType}
          </p>
        )}
      </div>

      <div className="space-y-4 flex-grow">
        <div>
          <h4 className="font-semibold text-neutral-700 mb-2">The Challenge</h4>
          <p className="text-neutral-600 leading-relaxed">{problem}</p>
        </div>

        <div>
          <h4 className="font-semibold text-neutral-700 mb-2">The Outcome</h4>
          <p className="text-neutral-600 leading-relaxed">{outcome}</p>
        </div>
      </div>

      <div className="mt-6 text-brand-sky font-semibold flex items-center group-hover:translate-x-2 transition-transform">
        Read case study
        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
