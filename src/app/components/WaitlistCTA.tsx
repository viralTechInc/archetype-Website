import { useState } from 'react';

export function WaitlistCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050402] border-y border-gold-primary/10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl leading-tight"
            style={{ fontFamily: 'var(--font-headline)' }}
          >
            Begin the work of <span className="italic text-gold-primary">knowing yourself</span>
          </h2>
          <p 
            className="text-xl text-foreground/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-subheading)' }}
          >
            Join the waitlist for early access. Limited spots available for founding members.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-5 bg-input-background border border-gold-primary/20 text-foreground placeholder:text-muted-foreground focus:border-gold-primary focus:outline-none transition-colors"
            required
          />
          <button
            type="submit"
            className="px-10 py-5 bg-gold-primary text-background hover:bg-gold-light transition-colors duration-300 text-lg"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Reserve Spot
          </button>
        </form>

        <p 
          className="text-sm text-foreground/50"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          No credit card required. Early access releases in Spring 2026.
        </p>
      </div>
    </section>
  );
}
