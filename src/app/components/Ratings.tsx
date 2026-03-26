import { Star } from 'lucide-react';

export function Ratings() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Star rating */}
        <div className="flex items-center justify-center gap-2">
          {[...Array(5)].map((_, index) => (
            <Star 
              key={index} 
              className="w-8 h-8 fill-gold-primary text-gold-primary" 
            />
          ))}
        </div>

        <div className="space-y-4">
          <div 
            className="text-5xl sm:text-6xl text-gold-primary"
            style={{ fontFamily: 'var(--font-headline)' }}
          >
            4.9/5
          </div>
          <p 
            className="text-xl text-foreground/70"
            style={{ fontFamily: 'var(--font-subheading)' }}
          >
            Average rating from 10,000+ beta users
          </p>
        </div>

        {/* CTA */}
        <div className="pt-8">
          <button 
            className="px-12 py-5 bg-gold-primary text-background hover:bg-gold-light transition-colors duration-300 text-lg"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Join the Waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
