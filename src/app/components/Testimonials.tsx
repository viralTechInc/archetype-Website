export function Testimonials() {
  const testimonials = [
    {
      quote:
        'The shadow section described a version of me I\'ve never admitted to anyone. I read it three times.',
      author: '— Early tester',
    },
    {
      quote:
        'I made my boyfriend do it and our connection results were scary accurate. We keep referencing the repeating cycle section.',
      author: '— Beta user',
    },
    {
      quote:
        'The AI chat felt like talking to a therapist who already read my file. I asked about my fear of vulnerability and it connected things I\'d never put together.',
      author: '— TestFlight tester',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-y border-gold-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div
            className="text-sm tracking-[0.3em] text-gold-dim uppercase"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Early Feedback
          </div>
          <h2
            className="text-4xl sm:text-5xl"
            style={{ fontFamily: 'var(--font-headline)' }}
          >
            What early users are <span className="italic text-gold-primary">discovering</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-gold-primary/20 p-8 hover:border-gold-primary/40 transition-colors duration-300"
            >
              <p
                className="text-lg text-foreground/80 mb-6 leading-relaxed"
                style={{ fontFamily: 'var(--font-subheading)' }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-gold-primary/20 pt-4">
                <div
                  className="text-gold-light"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {testimonial.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
