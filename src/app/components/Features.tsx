import { Brain, Layers, Compass, Users, BookOpen, Sparkles } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "Cognitive Architecture",
      description: "Understand the invisible patterns of how you process information, make decisions, and perceive reality itself."
    },
    {
      icon: Layers,
      title: "Shadow Integration",
      description: "Explore the unconscious realms — hidden aspects of your psyche that whisper beneath the surface of awareness."
    },
    {
      icon: Compass,
      title: "Life Design Framework",
      description: "Align your environment, relationships, and sacred work with your authentic psychological structure."
    },
    {
      icon: Users,
      title: "Compatibility Analysis",
      description: "Deep relational alchemy based on cognitive function dynamics, energetic resonance, and attachment patterns."
    },
    {
      icon: BookOpen,
      title: "Growth Pathways",
      description: "Personalized evolution roadmap based on your type's natural trajectory toward wholeness and integration."
    },
    {
      icon: Sparkles,
      title: "Archetype Mapping",
      description: "Discover which ancient archetypes live within your psyche and how they dance together in the depths."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050402]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div 
            className="text-sm tracking-[0.3em] text-gold-dim uppercase"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            What's Inside
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