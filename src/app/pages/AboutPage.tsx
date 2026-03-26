import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Brain, Compass, Sparkles, Users } from 'lucide-react';
import { MysticalBackground } from '../components/MysticalBackground';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <MysticalBackground />
      <div className="relative z-10">
        <Navigation />
      
        <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Radial gold ambient glow */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(201, 168, 76, 0.15) 0%, transparent 60%)'
            }}
          />

          <div className="max-w-4xl mx-auto relative z-10">
            {/* Logo */}
            <div className="text-center mb-12">
              <div 
                className="text-sm tracking-widest text-gold-primary/60 italic mb-8"
                style={{ fontFamily: 'var(--font-subheading)' }}
              >
                Archetype
              </div>
            </div>

            {/* Centered Headline */}
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl leading-tight text-center mb-6"
              style={{ fontFamily: 'var(--font-headline)' }}
            >
              Know yourself deeply
            </h1>

            {/* Centered Description */}
            <p 
              className="text-lg text-foreground/70 text-center mb-16 max-w-2xl mx-auto italic"
              style={{ fontFamily: 'var(--font-subheading)' }}
            >
              Where psychology meets the sacred in the pursuit of authentic self-knowledge
            </p>

            {/* Main Content Card */}
            <div 
              className="relative bg-foreground/5 backdrop-blur-sm border border-gold-primary/20 p-8 sm:p-12 rounded-lg mb-12"
              style={{
                background: 'linear-gradient(to bottom, rgba(201, 168, 76, 0.1), rgba(201, 168, 76, 0.02))'
              }}
            >
              {/* Gold gradient top border */}
              <div 
                className="absolute top-0 left-0 right-0 h-px rounded-t-lg"
                style={{
                  background: 'linear-gradient(to right, transparent, #C9A84C, transparent)'
                }}
              />

              <div className="space-y-8">
                {/* Main Story */}
                <div>
                  <h2 
                    className="text-3xl sm:text-4xl mb-6 text-gold-primary"
                    style={{ fontFamily: 'var(--font-headline)' }}
                  >
                    Our Story
                  </h2>
                  <div 
                    className="space-y-4 text-foreground/70 text-lg leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <p>
                      Archetype was born from a simple observation: most personality tools offer 
                      surface-level insights that feel generic and forgettable. We wanted something different — 
                      something deeper, more nuanced, more true.
                    </p>
                    <p>
                      Drawing from Jungian psychology, contemporary research, and thousands of hours of 
                      human behavior analysis, we've created a framework that reveals not just who you are, 
                      but why you are. It's the intersection of ancient wisdom and modern psychology, 
                      designed for those who refuse to settle for simplistic answers.
                    </p>
                    <p>
                      This isn't astrology. This isn't a quiz. This is a sacred mirror — refined, precise, 
                      and unflinchingly honest. A tool for those who seek to know themselves in the depths.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Value 1 */}
              <div 
                className="relative bg-foreground/5 backdrop-blur-sm border border-gold-primary/20 p-8 rounded-lg"
                style={{
                  background: 'linear-gradient(to bottom, rgba(201, 168, 76, 0.08), rgba(201, 168, 76, 0.02))'
                }}
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-px rounded-t-lg"
                  style={{
                    background: 'linear-gradient(to right, transparent, #C9A84C, transparent)'
                  }}
                />
                <Brain className="w-10 h-10 text-gold-primary mb-4" />
                <h3 
                  className="text-2xl mb-3 text-gold-primary"
                  style={{ fontFamily: 'var(--font-headline)' }}
                >
                  Depth over Speed
                </h3>
                <p 
                  className="text-foreground/70 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  We believe meaningful self-discovery takes time and reflection. 
                  Our assessments are thorough, thoughtful, and designed to reveal layers 
                  that quick quizzes miss.
                </p>
              </div>

              {/* Value 2 */}
              <div 
                className="relative bg-foreground/5 backdrop-blur-sm border border-gold-primary/20 p-8 rounded-lg"
                style={{
                  background: 'linear-gradient(to bottom, rgba(201, 168, 76, 0.08), rgba(201, 168, 76, 0.02))'
                }}
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-px rounded-t-lg"
                  style={{
                    background: 'linear-gradient(to right, transparent, #C9A84C, transparent)'
                  }}
                />
                <Compass className="w-10 h-10 text-gold-primary mb-4" />
                <h3 
                  className="text-2xl mb-3 text-gold-primary"
                  style={{ fontFamily: 'var(--font-headline)' }}
                >
                  Science-Backed
                </h3>
                <p 
                  className="text-foreground/70 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Every insight is grounded in psychological research and validated frameworks. 
                  We combine the rigor of science with the nuance of human experience.
                </p>
              </div>

              {/* Value 3 */}
              <div 
                className="relative bg-foreground/5 backdrop-blur-sm border border-gold-primary/20 p-8 rounded-lg"
                style={{
                  background: 'linear-gradient(to bottom, rgba(201, 168, 76, 0.08), rgba(201, 168, 76, 0.02))'
                }}
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-px rounded-t-lg"
                  style={{
                    background: 'linear-gradient(to right, transparent, #C9A84C, transparent)'
                  }}
                />
                <Sparkles className="w-10 h-10 text-gold-primary mb-4" />
                <h3 
                  className="text-2xl mb-3 text-gold-primary"
                  style={{ fontFamily: 'var(--font-headline)' }}
                >
                  Beautifully Crafted
                </h3>
                <p 
                  className="text-foreground/70 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Self-discovery should feel sacred. We've designed every interaction to be 
                  elegant, intentional, and worthy of the introspection it inspires.
                </p>
              </div>

              {/* Value 4 */}
              <div 
                className="relative bg-foreground/5 backdrop-blur-sm border border-gold-primary/20 p-8 rounded-lg"
                style={{
                  background: 'linear-gradient(to bottom, rgba(201, 168, 76, 0.08), rgba(201, 168, 76, 0.02))'
                }}
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-px rounded-t-lg"
                  style={{
                    background: 'linear-gradient(to right, transparent, #C9A84C, transparent)'
                  }}
                />
                <Users className="w-10 h-10 text-gold-primary mb-4" />
                <h3 
                  className="text-2xl mb-3 text-gold-primary"
                  style={{ fontFamily: 'var(--font-headline)' }}
                >
                  Privacy First
                </h3>
                <p 
                  className="text-foreground/70 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Your journey is yours alone. We protect your data with the same care 
                  we put into our insights, ensuring your discoveries remain private.
                </p>
              </div>
            </div>

            {/* Closing Statement */}
            <div 
              className="relative bg-foreground/5 backdrop-blur-sm border border-gold-primary/20 p-8 sm:p-12 rounded-lg text-center"
              style={{
                background: 'linear-gradient(to bottom, rgba(201, 168, 76, 0.1), rgba(201, 168, 76, 0.02))'
              }}
            >
              <div 
                className="absolute top-0 left-0 right-0 h-px rounded-t-lg"
                style={{
                  background: 'linear-gradient(to right, transparent, #C9A84C, transparent)'
                }}
              />
              <p 
                className="text-2xl sm:text-3xl italic text-gold-primary mb-4"
                style={{ fontFamily: 'var(--font-subheading)' }}
              >
                "The privilege of a lifetime is to become who you truly are."
              </p>
              <p 
                className="text-sm text-foreground/50 tracking-wider"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                — Carl Jung
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}