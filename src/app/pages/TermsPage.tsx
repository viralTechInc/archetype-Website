import { Link } from 'react-router';
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

export function TermsPage() {
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
              Terms of Service
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
                <Section title="1. Acceptance of Terms">
                  <p>
                    By downloading, installing, or using Archetype (&quot;the App&quot;), you agree to
                    be bound by these Terms of Service. If you do not agree, do not use the App.
                  </p>
                </Section>

                <Section title="2. Description of Service">
                  <p>
                    Archetype is a personality discovery app that uses psychological frameworks,
                    astrological calculations, palmistry analysis, and artificial intelligence to
                    generate personalized identity blueprints and relationship compatibility analyses.
                    The App provides entertainment and self-reflection content. It is not a substitute
                    for professional psychological, medical, or therapeutic advice.
                  </p>
                </Section>

                <Section title="3. Eligibility">
                  <p>
                    You must be at least 13 years old to use the App. By using the App, you represent
                    that you meet this age requirement.
                  </p>
                </Section>

                <Section title="4. Account and Data">
                  <p>
                    The App uses anonymous authentication. No email, password, or personal login is
                    required. Your data is associated with your device. If you delete the app or lose
                    your device, your data may not be recoverable.
                  </p>
                </Section>

                <Section title="5. Subscriptions and Payments">
                  <p className="mb-2">
                    Archetype offers optional subscription plans that unlock additional features:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>Monthly subscription: $9.99 USD/month</li>
                    <li>Yearly subscription: $49.99 USD/year</li>
                  </ul>
                  <p>
                    Subscriptions are billed through Apple&apos;s App Store. Payment is charged to your
                    Apple ID account upon confirmation of purchase. Subscriptions automatically renew
                    unless canceled at least 24 hours before the end of the current billing period. You
                    can manage and cancel subscriptions in your Apple ID account settings. No refunds
                    are provided for partial subscription periods.
                  </p>
                </Section>

                <Section title="6. AI-Generated Content">
                  <p className="mb-2">
                    The personality insights, archetype descriptions, compatibility analyses, palm
                    readings, and chat responses provided by the App are generated using artificial
                    intelligence. This content is:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>For entertainment and self-reflection purposes only</li>
                    <li>
                      Not a substitute for professional psychological, medical, or relationship
                      counseling
                    </li>
                    <li>Generated based on your inputs and may not be fully accurate</li>
                    <li>Subject to the limitations of AI technology</li>
                  </ul>
                  <p>
                    We make no guarantees about the accuracy, completeness, or applicability of
                    AI-generated content.
                  </p>
                </Section>

                <Section title="7. User Content">
                  <p>
                    By using the App, you grant Viral Tech Inc. a non-exclusive, worldwide,
                    royalty-free license to use the data you provide (name, birth data, questionnaire
                    answers, palm photos) solely for the purpose of generating your personality
                    blueprint and providing the App&apos;s services.
                  </p>
                </Section>

                <Section title="8. Connections Feature">
                  <p>
                    When you share your user code or enter another user&apos;s code, limited profile
                    data (name, archetype name, and personality data) is shared between connected
                    users for the purpose of generating compatibility analyses. By using the
                    connections feature, you consent to this data sharing.
                  </p>
                </Section>

                <Section title="9. Prohibited Use">
                  <p className="mb-2">You agree not to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use the App for any unlawful purpose</li>
                    <li>Attempt to reverse engineer, decompile, or extract the source code of the App</li>
                    <li>
                      Abuse the AI chat feature by sending harmful, abusive, or inappropriate content
                    </li>
                    <li>Create multiple accounts to circumvent usage limits</li>
                    <li>Resell, redistribute, or commercially exploit the App&apos;s content</li>
                  </ul>
                </Section>

                <Section title="10. Intellectual Property">
                  <p>
                    All content, design, code, and AI-generated material within the App are the
                    property of Viral Tech Inc. The archetype system, question framework, and blueprint
                    format are proprietary. You may share your personal results (share cards) for
                    personal, non-commercial use.
                  </p>
                </Section>

                <Section title="11. Limitation of Liability">
                  <p>
                    To the maximum extent permitted by law, Viral Tech Inc. shall not be liable for any
                    indirect, incidental, special, consequential, or punitive damages arising from
                    your use of the App. The App is provided &quot;as is&quot; without warranties of any
                    kind.
                  </p>
                </Section>

                <Section title="12. Privacy">
                  <p>
                    Your use of the App is also governed by our{' '}
                    <Link to="/privacy" className="text-gold-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </Section>

                <Section title="13. Modifications">
                  <p>
                    We reserve the right to modify these Terms at any time. Continued use of the App
                    after changes constitutes acceptance of the modified Terms.
                  </p>
                </Section>

                <Section title="14. Termination">
                  <p>
                    We reserve the right to suspend or terminate your access to the App at any time,
                    for any reason, without notice.
                  </p>
                </Section>

                <Section title="15. Governing Law">
                  <p>
                    These Terms are governed by and construed in accordance with the laws of the
                    Province of Quebec, Canada.
                  </p>
                </Section>

                <div className="pt-8 border-t border-gold-primary/20">
                  <h2 className={h2Class} style={h2Style}>
                    16. Contact
                  </h2>
                  <div className={`space-y-3 ${bodyClass}`} style={bodyStyle}>
                    <p>For questions about these Terms, contact us at:</p>
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
