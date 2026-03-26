const steps = [
  {
    number: '01',
    title: 'Answer 20 questions',
    body: 'Deep psychological questions that map your cognitive patterns, shadow tendencies, attachment style, and core wound.',
  },
  {
    number: '02',
    title: 'Scan your palm',
    body: 'Take a photo of your palm. AI analyzes your lines, hand shape, finger proportions, and mounts.',
  },
  {
    number: '03',
    title: 'Meet your archetype',
    body: 'Your complete identity blueprint — 30+ personalized insights generated in seconds. Your shadow, your stars, your path.',
  },
];

function AppStoreButton() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
      </svg>
      <div className="text-left">
        <div className="text-xs leading-none">Download on the</div>
        <div className="text-lg font-semibold leading-tight">App Store</div>
      </div>
    </a>
  );
}

export function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050402]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div
            className="text-sm tracking-[0.3em] text-gold-dim uppercase"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            How It Works
          </div>
          <h2
            className="text-4xl sm:text-5xl"
            style={{ fontFamily: 'var(--font-headline)' }}
          >
            Three steps to your blueprint
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-14">
          {steps.map((step) => (
            <div
              key={step.number}
              className="text-center md:text-left border border-gold-primary/15 rounded-lg p-8 hover:border-gold-primary/30 transition-colors"
            >
              <div
                className="text-4xl text-gold-primary/40 mb-4 font-light tracking-widest"
                style={{ fontFamily: 'var(--font-headline)' }}
              >
                {step.number}
              </div>
              <h3
                className="text-2xl mb-3 text-gold-primary"
                style={{ fontFamily: 'var(--font-headline)' }}
              >
                {step.title}
              </h3>
              <p
                className="text-foreground/70 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <AppStoreButton />
        </div>
      </div>
    </section>
  );
}
