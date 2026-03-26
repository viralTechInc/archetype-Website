import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { MysticalBackground } from '../components/MysticalBackground';

const bodyClass = 'text-foreground/70 leading-relaxed';
const bodyStyle = { fontFamily: 'var(--font-body)' } as const;
const h2Class = 'text-3xl mb-4 text-gold-primary';
const h2Style = { fontFamily: 'var(--font-headline)' } as const;

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className={h2Class} style={h2Style}>
        {title}
      </h2>
      <div className={`space-y-4 ${bodyClass}`} style={bodyStyle}>
        {children}
      </div>
    </div>
  );
}

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <MysticalBackground />
      <div className="relative z-10">
        <Navigation />

        <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(201, 168, 76, 0.15) 0%, transparent 60%)',
            }}
          />

          <div className="max-w-4xl mx-auto relative z-10">
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
              Privacy Policy
            </h1>

            <div
              className="text-sm text-foreground/50 text-center mb-16 space-y-2 tracking-wider"
              style={bodyStyle}
            >
              <p>
                <span className="uppercase">Last updated:</span> March 25, 2026
              </p>
              <p>
                <span className="uppercase">Developer:</span> Viral Tech Inc.
              </p>
              <p>
                <span className="uppercase">Contact:</span>{' '}
                <a
                  href="mailto:admin@viraltech.ca"
                  className="text-gold-primary hover:underline"
                >
                  admin@viraltech.ca
                </a>
              </p>
            </div>

            <div
              className="relative bg-foreground/5 backdrop-blur-sm border border-gold-primary/20 p-8 sm:p-12 rounded-lg"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(201, 168, 76, 0.1), rgba(201, 168, 76, 0.02))',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px rounded-t-lg"
                style={{
                  background:
                    'linear-gradient(to right, transparent, #C9A84C, transparent)',
                }}
              />

              <div className="space-y-12">
                <Section title="Overview">
                  <p>
                    Archetype is a personality discovery app developed by Viral Tech Inc.
                    (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). This Privacy Policy explains how we
                    collect, use, and protect your personal information when you use our app.
                  </p>
                </Section>

                <Section title="Information We Collect">
                  <div className="space-y-6">
                    <div>
                      <p className="font-medium text-foreground/85 mb-2">Account Data</p>
                      <p>
                        We use anonymous authentication via Firebase. We do not collect your email
                        address, phone number, or any login credentials. A random user ID is
                        generated automatically when you first open the app.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground/85 mb-2">
                        Profile Data You Provide
                      </p>
                      <p className="mb-2">When you complete the onboarding, we collect:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Your full name</li>
                        <li>Date of birth</li>
                        <li>Time of birth (optional)</li>
                        <li>Place of birth</li>
                        <li>Your answers to 20 personality questions</li>
                        <li>A photo of your palm (optional)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-foreground/85 mb-2">Data We Generate</p>
                      <p className="mb-2">Based on your inputs, our system generates:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Personality profile data (archetype, traits, psychological patterns)</li>
                        <li>Astrological calculations (Western, Chinese, Vedic, numerology)</li>
                        <li>Palm reading interpretations</li>
                        <li>AI-generated insights and recommendations</li>
                        <li>Compatibility analysis with connections you create</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-foreground/85 mb-2">Connection Data</p>
                      <p>
                        When you create a connection with another person, we collect the same profile
                        data listed above for that person, as provided by you or by the other user
                        through a shared code.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground/85 mb-2">Usage Data</p>
                      <p className="mb-2">We track:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Number of AI chat messages sent</li>
                        <li>Number of palm reading retakes</li>
                        <li>
                          Cumulative AI processing costs (for internal analytics only)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-foreground/85 mb-2">Payment Data</p>
                      <p>
                        Subscription payments are processed entirely by Apple through the App Store.
                        We do not collect, store, or have access to your payment information, credit
                        card details, or Apple ID.
                      </p>
                    </div>
                  </div>
                </Section>

                <Section title="How We Use Your Data">
                  <p className="mb-2">We use your data to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li>Generate your personality blueprint and archetype analysis</li>
                    <li>
                      Provide AI-powered insights through the Mirror Insight chat feature
                    </li>
                    <li>Generate compatibility analyses with your connections</li>
                    <li>Improve the quality and accuracy of our personality models</li>
                    <li>Track usage to enforce daily message and retake limits</li>
                  </ul>
                  <p className="mb-2 font-medium text-foreground/85">We do NOT:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Sell your data to third parties</li>
                    <li>Use your data for advertising</li>
                    <li>
                      Share your data with other users (except your name and archetype, which are
                      visible to users who connect with you via your shared code)
                    </li>
                  </ul>
                </Section>

                <Section title="Data Storage and Security">
                  <p>
                    Your data is stored securely on Google Firebase (Firestore) and Google Cloud
                    Platform, hosted in North America. Palm photos are stored in Firebase Storage. All
                    data is transmitted over encrypted HTTPS connections.
                  </p>
                </Section>

                <Section title="AI Processing">
                  <p>
                    Your personality data and chat messages are processed using Anthropic&apos;s
                    Claude AI API to generate insights, blueprint content, and chat responses. Data
                    sent to the AI is used solely for generating your results and is not retained by
                    the AI provider for training purposes.
                  </p>
                </Section>

                <Section title="Data Retention">
                  <p>
                    Your data is retained as long as your account exists. Since we use anonymous
                    authentication, your data is tied to your device. If you uninstall the app, your
                    anonymous account may be automatically cleaned up by Firebase after a period of
                    inactivity.
                  </p>
                </Section>

                <Section title="Your Rights">
                  <p className="mb-2">You can:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong className="text-foreground/85">Reset your profile</strong> at any
                      time from the Profile tab, which deletes your blueprint and allows you to
                      start over
                    </li>
                    <li>
                      <strong className="text-foreground/85">Request data deletion</strong> by
                      contacting us at{' '}
                      <a
                        href="mailto:admin@viraltech.ca"
                        className="text-gold-primary hover:underline"
                      >
                        admin@viraltech.ca
                      </a>
                    </li>
                    <li>
                      <strong className="text-foreground/85">Stop using the app</strong> at any
                      time — no account deletion is required since accounts are anonymous
                    </li>
                  </ul>
                </Section>

                <Section title="Children&apos;s Privacy">
                  <p>
                    Archetype is not intended for children under the age of 13. We do not knowingly
                    collect personal information from children under 13. If you believe a child has
                    provided us with personal information, please contact us at{' '}
                    <a
                      href="mailto:admin@viraltech.ca"
                      className="text-gold-primary hover:underline"
                    >
                      admin@viraltech.ca
                    </a>
                    .
                  </p>
                </Section>

                <Section title="Changes to This Policy">
                  <p>
                    We may update this Privacy Policy from time to time. The updated version will be
                    indicated by the &quot;Last updated&quot; date at the top.
                  </p>
                </Section>

                <div className="pt-8 border-t border-gold-primary/20">
                  <h2 className={h2Class} style={h2Style}>
                    Contact
                  </h2>
                  <div className={`space-y-3 ${bodyClass}`} style={bodyStyle}>
                    <p>If you have questions about this Privacy Policy, contact us at:</p>
                    <ul className="list-none space-y-2">
                      <li>
                        Email:{' '}
                        <a
                          href="mailto:admin@viraltech.ca"
                          className="text-gold-primary hover:underline"
                        >
                          admin@viraltech.ca
                        </a>
                      </li>
                      <li>Company: Viral Tech Inc.</li>
                      <li>Location: Montreal, QC, Canada</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
