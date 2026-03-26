export function Testimonials() {
  const testimonials = [
    {
      quote: "Finally, a personality tool that honors the depths. Archetype helped me understand shadow patterns I've been unconsciously running my entire life.",
      author: "Sarah Chen",
      type: "INFJ-A, Type 4"
    },
    {
      quote: "The compatibility insights are profound. It revealed energetic dynamics in my relationships that I felt but could never articulate before.",
      author: "Marcus Williams",
      type: "ENTP-T, Type 7"
    },
    {
      quote: "This isn't just another app. It's a sacred mirror for your psyche — the depth and precision is genuinely transformative.",
      author: "Elena Rodriguez",
      type: "INTJ-A, Type 5"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-y border-gold-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div 
            className="text-sm tracking-[0.3em] text-gold-dim uppercase"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Beta Tester Feedback
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
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gold-primary/20 pt-4 space-y-1">
                <div 
                  className="text-gold-light"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {testimonial.author}
                </div>
                <div 
                  className="text-sm text-foreground/50"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {testimonial.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}