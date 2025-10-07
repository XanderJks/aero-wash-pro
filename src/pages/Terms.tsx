import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-heading text-5xl font-bold mb-4 text-foreground">
                Terms of Service
              </h1>
              <p className="text-muted-foreground mb-8">
                Last updated: October 7, 2025
              </p>

              <div className="prose prose-lg max-w-none space-y-8">
                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Agreement to Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing our website or using SkyWashPro services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Services Description
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    SkyWashPro provides commercial drone-based cleaning services for buildings, solar panels, wind turbines, and other structures. Services include pressure washing, facade cleaning, inspection, and related maintenance activities using remotely operated aerial vehicles.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Service Agreements
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Quotes and Proposals:</strong> All quotes are valid for 30 days and are subject to site conditions remaining as assessed. Final pricing may be adjusted based on unforeseen circumstances discovered during service delivery.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Scheduling:</strong> Service dates are scheduled upon acceptance of quote and receipt of deposit. We will make reasonable efforts to accommodate your preferred schedule but cannot guarantee specific dates until confirmed in writing.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Weather Conditions:</strong> Services are subject to safe weather conditions. We reserve the right to postpone or reschedule services due to high winds, precipitation, extreme temperatures, or other conditions that may compromise safety or service quality.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Payment Terms
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Deposits:</strong> A 50% deposit is required to schedule services for new clients. The deposit is non-refundable within 48 hours of scheduled service date.</li>
                    <li><strong>Payment Due:</strong> Final payment is due upon completion of services. We accept bank transfers, credit cards, and approved payment methods.</li>
                    <li><strong>Late Payments:</strong> Payments not received within 30 days may incur a late fee of 1.5% per month or the maximum allowed by law.</li>
                    <li><strong>Contract Clients:</strong> Approved commercial clients may receive net-30 payment terms after successful completion of first project.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Cancellation and Rescheduling
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Cancellations made more than 48 hours before scheduled service: Full deposit refund</li>
                    <li>Cancellations within 48 hours of scheduled service: Deposit forfeited</li>
                    <li>Weather-related cancellations: No penalty, full deposit retained for rescheduling</li>
                    <li>Rescheduling requests: Accommodated subject to availability at no additional charge if made with 48 hours notice</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Client Responsibilities
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Clients agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Provide accurate information about the property and any special conditions</li>
                    <li>Ensure authorized access to the property and necessary utilities (water, electricity)</li>
                    <li>Notify building occupants of scheduled cleaning activities</li>
                    <li>Close all windows and remove exterior items that may be damaged by water</li>
                    <li>Obtain any necessary permissions from property owners, HOAs, or authorities</li>
                    <li>Provide safe parking and staging area for our equipment</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Warranties and Guarantees
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Service Guarantee:</strong> We guarantee professional, high-quality service. If you're not satisfied with the results, notify us within 48 hours and we will re-clean affected areas at no additional charge.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Equipment Warranty:</strong> Our equipment is maintained to the highest standards. We use professional-grade drones and cleaning systems covered by comprehensive insurance.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Limitations:</strong> We cannot guarantee removal of permanent staining, structural damage, or conditions existing prior to our service. Pre-existing damage will be documented before work begins.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Liability and Insurance
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Our Insurance:</strong> SkyWashPro maintains comprehensive general liability insurance (up to $5 million), commercial drone insurance, and workers compensation coverage.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Limitation of Liability:</strong> Our liability is limited to direct damages caused by our negligence and will not exceed the total contract value. We are not liable for indirect, consequential, or incidental damages.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Indemnification:</strong> Client agrees to indemnify SkyWashPro against claims arising from inaccurate information provided, unauthorized access, or failure to disclose property conditions.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Safety and Compliance
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    SkyWashPro operates in full compliance with aviation regulations, safety standards, and local ordinances. Our pilots are certified, our equipment is regularly inspected, and we maintain all required permits and licenses. We reserve the right to refuse service if conditions are deemed unsafe.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Intellectual Property
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content on our website, including text, graphics, logos, images, and software, is the property of SkyWashPro and protected by copyright laws. You may not reproduce, distribute, or create derivative works without written permission.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Photography and Marketing
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may photograph or video our work for quality documentation and marketing purposes. By using our services, you grant permission for us to use such materials unless you explicitly opt out in writing before service begins.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Dispute Resolution
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Any disputes arising from these terms or our services shall first be attempted to be resolved through good-faith negotiation. If unresolved, disputes shall be settled through binding arbitration in accordance with the rules of the American Arbitration Association (or applicable local arbitration body).
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Modifications to Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after changes constitutes acceptance of modified terms.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Governing Law
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, without regard to conflict of law principles.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For questions about these Terms of Service, please contact:
                  </p>
                  <div className="text-muted-foreground space-y-2">
                    <p><strong>SkyWashPro</strong></p>
                    <p>Compass Building, Al Hulaila</p>
                    <p>Ras Al Khaimah, UAE</p>
                    <p>Email: info@skywash.com</p>
                    <p>Phone: +971 50 123 4567</p>
                  </div>
                </section>

                <section className="border-t pt-8">
                  <p className="text-muted-foreground leading-relaxed italic">
                    By using SkyWashPro services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                  </p>
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

export default Terms;
