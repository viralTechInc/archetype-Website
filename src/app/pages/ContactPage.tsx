import { Navigation } from '../components/Navigation';
import { ContactUs } from '../components/ContactUs';
import { Footer } from '../components/Footer';
import { MysticalBackground } from '../components/MysticalBackground';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <MysticalBackground />
      <div className="relative z-10">
        <Navigation />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}