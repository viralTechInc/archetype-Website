const freeFeatures = [
  'Core archetype & description',
  'Identity triad & traits',
  'Radar chart (11 dimensions)',
  'Archetype anthem',
  'Best & worst match',
  'Palm preview (hand shape + fingers)',
  '3 AI chat messages/day',
];

const premiumFeatures = [
  'Everything in Free',
  'Shadow, heart, path & stars unlocked',
  'Full palm reading (7 sections)',
  'Unlimited AI chat (50/day)',
  'Create connections',
  'Palm retakes (3/day)',
  'Share cards',
];

export function Pricing() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gold-primary/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div
            className="text-sm tracking-[0.3em] text-gold-dim uppercase"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Pricing
          </div>
          <h2
            className="text-4xl sm:text-5xl"
            style={{ fontFamily: 'var(--font-headline)' }}
          >
            Start free. Go deeper when you&apos;re ready.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="relative border border-gold-primary/20 rounded-lg p-8 sm:p-10"
            style={{
              background: 'linear-gradient(to bottom, rgba(201, 168, 76, 0.06), rgba(201, 168, 76, 0.02))',
            }}
          >
            <h3
              className="text-3xl mb-6 text-gold-primary"
              style={{ fontFamily: 'var(--font-headline)' }}
            >
              Free
            </h3>
            <ul className="space-y-3 text-foreground/80" style={{ fontFamily: 'var(--font-body)' }}>
              {freeFeatures.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold-primary shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="relative border border-gold-primary/40 rounded-lg p-8 sm:p-10"
            style={{
              background: 'linear-gradient(to bottom, rgba(201, 168, 76, 0.12), rgba(201, 168, 76, 0.03))',
            }}
          >
            <h3
              className="text-3xl mb-2 text-gold-primary"
              style={{ fontFamily: 'var(--font-headline)' }}
            >
              Premium
            </h3>
            <p
              className="text-lg text-foreground/80 mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              $9.99/month or $49.99/year
            </p>
            <ul className="space-y-3 text-foreground/80" style={{ fontFamily: 'var(--font-body)' }}>
              {premiumFeatures.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold-primary shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          className="text-center text-sm text-foreground/45 mt-10"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Cancel anytime. No commitment.
        </p>
      </div>
    </section>
  );
}
