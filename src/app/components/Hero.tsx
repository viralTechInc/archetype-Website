import phoneImage from '@/assets/heroImagePhone.png';
import { APP_STORE_URL } from '@/app/constants/links';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-32 pb-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Copy + Buttons */}
          <div className="space-y-8">
            {/* Eyebrow text */}
            <p 
              className="text-sm tracking-[0.3em] text-gold-light uppercase"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Discover Your Identity Blueprint
            </p>

            {/* Hero headline */}
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl leading-tight animate-fade-in"
              style={{ fontFamily: 'var(--font-headline)' }}
            >
              Meet the version of{' '}
              <span className="text-gold-primary">yourself</span>
              {" "}you've been hiding from
            </h1>

            {/* Subtitle */}
            <p 
              className="text-xl sm:text-2xl text-foreground/80 max-w-xl italic"
              style={{ fontFamily: 'var(--font-subheading)' }}
            >
              20 questions. One palm scan. AI reveals your archetype, your shadow, your love patterns, and the wound running beneath everything you do.
            </p>

            {/* App Store */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs leading-none">Download on the</div>
                  <div className="text-lg font-semibold leading-tight">App Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right column - Phone mockups with gold glow */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Gold glow effect */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: 'radial-gradient(circle at center, rgba(201, 168, 76, 0.3) 0%, rgba(201, 168, 76, 0.1) 40%, transparent 70%)'
              }}
            />
            
            {/* Phone image */}
            <div className="relative w-full max-w-lg">
              <img 
                src={phoneImage} 
                alt="Archetype app showing The Commander profile"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}