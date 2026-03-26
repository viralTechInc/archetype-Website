import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { NotAstrology } from '../components/NotAstrology';
import { Features } from '../components/Features';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';
import { MysticalBackground } from '../components/MysticalBackground';

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <MysticalBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <NotAstrology />
        <Features />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}