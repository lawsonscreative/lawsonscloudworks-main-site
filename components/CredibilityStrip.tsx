export default function CredibilityStrip() {
  const credentials = [
    {
      number: '30+',
      label: 'Years in IT',
    },
    {
      number: '4,000+',
      label: 'Developer workspaces managed',
    },
    {
      number: 'AWS & Microsoft',
      label: 'Ecosystem expertise',
    },
    {
      number: 'UK-based',
      label: 'Part of Lawsons Enterprises Ltd',
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-neutral-200">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {credentials.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">
                {item.number}
              </div>
              <div className="text-sm md:text-base text-neutral-600">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
