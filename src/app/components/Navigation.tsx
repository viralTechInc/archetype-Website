import { Link } from 'react-router';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-gold-primary/10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="text-gold-primary" style={{ fontFamily: 'var(--font-headline)' }}>
          <span className="text-xl tracking-wide">ARCHETYPE</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <Link 
            to="/about"
            className="text-sm tracking-widest uppercase text-foreground/70 hover:text-gold-primary transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            About
          </Link>
          <Link 
            to="/contact"
            className="text-sm tracking-widest uppercase text-foreground/70 hover:text-gold-primary transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}