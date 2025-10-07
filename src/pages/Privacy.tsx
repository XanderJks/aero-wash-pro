import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-heading text-5xl font-bold mb-4 text-foreground">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground mb-8">
                Last updated: October 7, 2025
              </p>

              <div className="prose prose-lg max-w-none space-y-8">
                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Introduction
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    SkyWashPro ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Information We Collect
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We collect several types of information to provide and improve our services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Contact Information:</strong> Name, email address, phone number, company name, and mailing address</li>
                    <li><strong>Project Information:</strong> Building location, property details, service requirements, and project specifications</li>
                    <li><strong>Communication Data:</strong> Records of correspondence, quotes, contracts, and service history</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, device information, and website usage patterns</li>
                    <li><strong>Payment Information:</strong> Billing details and transaction history (processed securely through third-party payment processors)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use your information for the following purposes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Providing quotes and scheduling drone cleaning services</li>
                    <li>Communicating about projects, appointments, and service updates</li>
                    <li>Processing payments and maintaining financial records</li>
                    <li>Improving our website and services based on user feedback</li>
                    <li>Sending marketing communications (with your consent)</li>
                    <li>Complying with legal obligations and regulatory requirements</li>
                    <li>Protecting against fraud and ensuring safety and security</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    How We Share Your Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We do not sell your personal information. We may share your data with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Service Providers:</strong> Third-party vendors who assist with payment processing, email delivery, analytics, and cloud hosting</li>
                    <li><strong>Business Partners:</strong> Licensed contractors or specialists when required for specific projects (with your consent)</li>
                    <li><strong>Legal Requirements:</strong> Government authorities when required by law or to protect our legal rights</li>
                    <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of company assets</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Data Security
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, access controls, and regular security assessments. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Your Rights
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Depending on your location, you may have the following rights:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations)</li>
                    <li><strong>Objection:</strong> Object to processing of your data for marketing purposes</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw previously given consent at any time</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    To exercise these rights, contact us at info@SkyWashPro.com.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Cookies and Tracking
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website uses cookies and similar technologies to enhance user experience, analyze traffic, and personalize content. You can control cookie preferences through your browser settings. Disabling cookies may affect website functionality.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Data Retention
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain personal data for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements. Project records are typically retained for 7 years for warranty and liability purposes.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Children's Privacy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected data from a child, please contact us immediately.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Changes to This Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this privacy policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on our website with a new effective date.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Contact Us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className="text-muted-foreground space-y-2">
                    <p><strong>SkyWashPro</strong></p>
                    <p>Compass Building, Al Hulaila</p>
                    <p>Ras Al Khaimah, UAE</p>
                    <p>Email: info@SkyWashPro.com</p>
                    <p>Phone: +971 50 123 4567</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
