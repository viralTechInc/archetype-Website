import { useState } from 'react';
import { Send } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';

const SLACK_PROXY_PATH = '/api/slack-contact';

function escapeSlackMrkdwn(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildSlackPayload(fullName: string, email: string, message: string) {
  const name = escapeSlackMrkdwn(fullName.trim());
  const em = escapeSlackMrkdwn(email.trim());
  const msg = escapeSlackMrkdwn(message.trim().slice(0, 2800));
  return {
    text: `New Archetype website contact: ${fullName.trim()} <${email.trim()}>`,
    blocks: [
      {
        type: 'header',
        text: { type: 'plain_text', text: 'New Archetype website contact', emoji: false },
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Name*\n${name}` },
          { type: 'mrkdwn', text: `*Email*\n${em}` },
        ],
      },
      {
        type: 'section',
        text: { type: 'mrkdwn', text: `*Message*\n${msg}` },
      },
    ],
  };
}

export function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(SLACK_PROXY_PATH, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildSlackPayload(formData.fullName, formData.email, formData.message)),
      });
      if (!res.ok) {
        throw new Error(`Slack responded ${res.status}`);
      }
      setFormData({ fullName: '', email: '', message: '' });
      setSuccessOpen(true);
    } catch {
      setErrorOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(201, 168, 76, 0.15) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div
            className="text-sm tracking-widest text-gold-primary/60 italic mb-8"
            style={{ fontFamily: 'var(--font-subheading)' }}
          >
            Archetype
          </div>
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl leading-tight text-center mb-6"
          style={{ fontFamily: 'var(--font-headline)' }}
        >
          We're here if you need us
        </h1>

        <p
          className="text-lg text-foreground/70 text-center mb-16 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Have a question about Archetype? Want to learn more about our approach?
          <br />
          Send us a note — we'd love to help.
        </p>

        <div
          className="relative bg-foreground/5 backdrop-blur-sm border border-gold-primary/20 p-8 sm:p-12 rounded-lg"
          style={{
            background: 'linear-gradient(to bottom, rgba(201, 168, 76, 0.1), rgba(201, 168, 76, 0.02))',
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px rounded-t-lg"
            style={{
              background: 'linear-gradient(to right, transparent, #C9A84C, transparent)',
            }}
          />

          <h2
            className="text-3xl sm:text-4xl text-center mb-10"
            style={{ fontFamily: 'var(--font-headline)' }}
          >
            Send a message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm text-foreground/70 mb-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your name"
                required
                disabled={isSubmitting}
                className="w-full bg-background/40 border border-gold-primary/30 px-4 py-3 text-foreground placeholder:text-foreground/30 focus:border-gold-primary focus:outline-none transition-colors rounded-md disabled:opacity-50"
                style={{ fontFamily: 'var(--font-body)' }}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-foreground/70 mb-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                disabled={isSubmitting}
                className="w-full bg-background/40 border border-gold-primary/30 px-4 py-3 text-foreground placeholder:text-foreground/30 focus:border-gold-primary focus:outline-none transition-colors rounded-md disabled:opacity-50"
                style={{ fontFamily: 'var(--font-body)' }}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-foreground/70 mb-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                required
                rows={6}
                disabled={isSubmitting}
                className="w-full bg-background/40 border border-gold-primary/30 px-4 py-3 text-foreground placeholder:text-foreground/30 focus:border-gold-primary focus:outline-none transition-colors resize-none rounded-md disabled:opacity-50"
                style={{ fontFamily: 'var(--font-body)' }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold-primary text-background py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)] flex items-center justify-center gap-2 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {isSubmitting ? 'Sending…' : 'Send message'}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <AlertDialog open={successOpen} onOpenChange={setSuccessOpen}>
        <AlertDialogContent className="border-gold-primary/20 sm:max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle style={{ fontFamily: 'var(--font-headline)' }}>
              Thank you
            </AlertDialogTitle>
            <AlertDialogDescription
              className="text-foreground/70 text-base"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              We will get back to you soon.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              className="bg-gold-primary text-background hover:bg-gold-primary/90"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={errorOpen} onOpenChange={setErrorOpen}>
        <AlertDialogContent className="border-gold-primary/20 sm:max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle style={{ fontFamily: 'var(--font-headline)' }}>
              Could not send
            </AlertDialogTitle>
            <AlertDialogDescription
              className="text-foreground/70 text-base"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Something went wrong. Please try again or email{' '}
              <a href="mailto:admin@viraltech.ca" className="text-gold-primary underline">
                admin@viraltech.ca
              </a>
              .
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              className="bg-gold-primary text-background hover:bg-gold-primary/90"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
