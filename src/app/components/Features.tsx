import { Brain, Moon, Heart, MapPinned, Star, Hand } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Brain,
      title: 'Your Mind',
      description:
        'Identity triad, dominant traits, radar chart across 11 dimensions, and the defense mechanism you don\'t realize you\'re using.',
    },
    {
      icon: Moon,
      title: 'Your Shadow',
      description:
        'The version of you that emerges under stress — named, explained, and traced back to the wound where it started.',
    },
    {
      icon: Heart,
      title: 'Your Heart',
      description:
        'How you love, what you need, your attachment style, conflict pattern, and the role you play in every relationship.',
    },
    {
      icon: MapPinned,
      title: 'Your Path',
      description:
        'Life purpose, growth edge, hidden superpower, and career archetype — what you\'re here to do and what\'s been holding you back.',
    },
    {
      icon: Star,
      title: 'Your Stars',
      description:
        'Western, Chinese, and Vedic astrology calculated from your birth data and woven into your archetype — not generic horoscopes.',
    },
    {
      icon: Hand,
      title: 'Your Palm',
      description:
        'AI reads your palm photo — life line, heart line, head line, fate line, hand shape, finger analysis, and mounts. 7 readings total.',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050402]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div
            className="text-sm tracking-[0.3em] text-gold-dim uppercase"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            What&apos;s Inside
          </div>
          <h2
            className="text-4xl sm:text-5xl"
            style={{ fontFamily: 'var(--font-headline)' }}
          >
            A <span className="italic text-gold-primary">complete</span> psychological system
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group border-t-2 border-transparent hover:border-gold-primary pt-8 px-6 transition-all duration-500"
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-gold-primary" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-2xl mb-4"
                  style={{ fontFamily: 'var(--font-headline)' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-foreground/70 leading-relaxed"
                  style={{ fontFamily: 'var(--font-subheading)' }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
