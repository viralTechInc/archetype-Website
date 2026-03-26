import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="border-t border-gold-primary px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-gold-primary" style={{ fontFamily: 'var(--font-headline)' }}>
          <span className="text-lg tracking-wide">ARCHETYPE</span>
        </div>
        
        <div className="flex items-center gap-6">
          <Link 
            to="/about"
            className="text-sm text-foreground/50 hover:text-gold-primary transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            About
          </Link>
          <Link 
            to="/privacy"
            className="text-sm text-foreground/50 hover:text-gold-primary transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Privacy & Data Policy
          </Link>
          <Link 
            to="/terms"
            className="text-sm text-foreground/50 hover:text-gold-primary transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Terms of Service
          </Link>
          <Link 
            to="/contact"
            className="text-sm text-foreground/50 hover:text-gold-primary transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Contact
          </Link>
        </div>
        
        <div className="text-sm text-foreground/50" style={{ fontFamily: 'var(--font-body)' }}>
          © 2026 Archetype. All rights reserved.
        </div>
      </div>
    </footer>
  );
}