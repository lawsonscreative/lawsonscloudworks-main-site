export default function OutcomesSection() {
  const outcomes = [
    'Smoother remote work for your team',
    'Fewer IT fires and emergencies',
    'Better security without friction',
    'Clear technology roadmap',
    'Reduced IT running costs',
    'Faster staff onboarding',
    'Resilient cloud workspace',
    'Automated provisioning',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-brand-teal/10"
            >
              <svg
                className="w-8 h-8 text-brand-teal flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-neutral-700 font-medium">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
