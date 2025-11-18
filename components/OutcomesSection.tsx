export default function OutcomesSection() {
  const outcomeThemes = [
    {
      title: 'Happier Users',
      outcomes: [
        'Smoother remote and hybrid working experience',
        'Faster onboarding and offboarding',
        'Fewer "the VPN is broken again" tickets',
      ],
    },
    {
      title: 'Better Control',
      outcomes: [
        'Better security without endless complexity',
        'Clear visibility into what\'s running where',
        'Predictable change management instead of surprise updates',
      ],
    },
    {
      title: 'Lower Costs',
      outcomes: [
        'Fewer support fires and surprise incidents',
        'More efficient use of cloud spend',
        'Less time wasted on manual processes',
      ],
    },
  ];

  return (
    <section className="section-spacing bg-brand-teal-soft">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">What We Help You Achieve</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Business outcomes, not technical deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {outcomeThemes.map((theme, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-brand-ink mb-4">{theme.title}</h3>
              <ul className="space-y-3">
                {theme.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-neutral-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
