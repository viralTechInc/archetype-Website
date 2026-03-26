import phoneImage from '@/assets/connectionImagePhone.png';

export function NotAstrology() {
  const pillars = [
    {
      title: "Jungian Psychology",
      description: "Built on Carl Jung's theory of psychological types, archetypes, and the collective unconscious — the language of the psyche."
    },
    {
      title: "Cognitive Function Theory",
      description: "MBTI enhanced with cognitive function stacks — revealing how you process information, make decisions, and perceive the world."
    },
    {
      title: "Astrology & Palmistry",
      description: "Western, Chinese, and Vedic astrology woven into your archetype narrative. Plus AI-powered palm reading — 7 sections from your hand shape to your fate line."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Phone mockup */}
          <div className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-lg">
              <img 
                src={phoneImage} 
                alt="Archetype app showing Connections screen"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right - Pillar cards */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div 
                className="text-sm tracking-[0.3em] text-gold-dim uppercase"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                The Foundation
              </div>
              <h2 
                className="text-4xl sm:text-5xl leading-tight"
                style={{ fontFamily: 'var(--font-headline)' }}
              >
                Rooted in <span className="italic text-gold-primary">proven</span> frameworks
              </h2>
            </div>

            <div className="space-y-6">
              {pillars.map((pillar, index) => (
                <div 
                  key={index}
                  className="border-l-2 border-gold-primary pl-6 py-3 hover:border-gold-light transition-colors duration-300"
                >
                  <h3 
                    className="text-xl mb-2"
                    style={{ fontFamily: 'var(--font-headline)' }}
                  >
                    {pillar.title}
                  </h3>
                  <p 
                    className="text-foreground/70"
                    style={{ fontFamily: 'var(--font-subheading)' }}
                  >
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}