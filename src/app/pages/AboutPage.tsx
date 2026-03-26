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
              Where psychology meets self-discovery.
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
                      Archetype started with a frustration: every personality app gives you a label and moves on.
                      MBTI tells you four letters. Astrology gives you a sun sign. None of them explain why you
                      keep repeating the same patterns in relationships, why you shut down under stress the way
                      you do, or what you&apos;re actually afraid of.
                    </p>
                    <p>
                      We built Archetype to go deeper. It combines Jungian psychology, cognitive function theory,
                      three astrology systems, numerology, and AI-powered palm reading into one unified identity
                      blueprint — 30+ sections that feel like they were written by someone who&apos;s known you for
                      years.
                    </p>
                    <p>
                      The AI doesn&apos;t guess. It uses your actual answers, your birth data, and your palm to
                      connect dots across psychology and astrology that no human could synthesize in real time.
                      Your shadow archetype, your attachment style, your core wound, your love patterns — all
                      woven together into one coherent picture.
                    </p>
                    <p>
                      Built by Viral Tech Inc. in Montreal, Canada.
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
                  20 questions, not 5. 30+ insights, not a paragraph. We take the time to understand you properly.
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
                  Psychology-Grounded
                </h3>
                <p 
                  className="text-foreground/70 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Every insight connects to established frameworks — Jungian archetypes, MBTI cognitive functions,
                  attachment theory, and astrological traditions used for centuries.
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
                  Self-discovery should feel premium, not clinical. Every screen, every word, every animation was
                  designed to match the weight of what you&apos;re uncovering.
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
                  Anonymous accounts. No email required. No data sold. Your journey is yours alone.
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