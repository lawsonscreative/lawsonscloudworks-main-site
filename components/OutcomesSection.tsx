export default function OutcomesSection() {
  const outcomes = [
    'Smoother remote work experience for your team',
    'Fewer support fires and IT emergencies',
    'Better security posture without user friction',
    'Clearer technology roadmap and priorities',
    'Reduced IT running costs and waste',
    'Faster onboarding for new staff members',
  ];

  return (
    <section className="section-spacing bg-brand-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">What We Help You Achieve</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our work is measured by business outcomes, not technical deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <svg
                className="w-6 h-6 text-brand-sky flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-neutral-700 leading-relaxed">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
