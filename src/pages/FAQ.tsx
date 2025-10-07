import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqCategories = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What exactly does SkyWashPro sell?",
        answer: "We manufacture and sell the SkyWashPro S1 - an industrial-grade cleaning drone designed for building maintenance companies. You buy the drone, you operate it, you profit from it. We provide the equipment, training, and support."
      },
      {
        question: "Who buys your drones?",
        answer: "Professional cleaning companies, facility management firms, property maintenance businesses, solar farm operators, wind energy companies, and entrepreneurs starting drone cleaning services. Anyone who wants to offer building cleaning without the risks and costs of traditional methods."
      },
      {
        question: "Do you provide cleaning services?",
        answer: "No. We sell the drones. You provide the cleaning services to your clients. We're the manufacturer, you're the operator. Think of it like buying a pressure washing truck - we sell you the equipment, you run the business."
      },
      {
        question: "How much does the drone cost?",
        answer: "Pricing depends on the package (Starter, Professional, or Enterprise) and any customizations. Contact us for a detailed quote. We also offer financing options for qualified buyers."
      },
      {
        question: "What's the ROI on a SkyWashPro drone?",
        answer: "Most operators report breaking even within 6-12 months. One high-rise building job can generate $5,000-15,000 in revenue. With lower overhead than traditional methods (no scaffolding, smaller crew, faster completion), your margins are significantly higher."
      }
    ]
  },
  {
    category: "Product & Technical",
    questions: [
      {
        question: "What's included when I buy the drone?",
        answer: "The complete system: SkyWashPro S1 drone, 3200 PSI pressure washing system, batteries and charger, control console (15km range), carbon fiber cleaning boom, transport case with tools, pilot training, and warranty coverage. Everything you need to start operating."
      },
      {
        question: "How difficult is it to fly?",
        answer: "If you can operate a pressure washer and fly a consumer drone, you can operate the SkyWashPro S1. We provide comprehensive training (online and optional on-site). Most operators are fully proficient within 2-3 days of training."
      },
      {
        question: "What can the drone clean?",
        answer: "Any exterior surface: high-rise buildings, solar panels, wind turbines, residential properties, shopping centers, industrial facilities, billboards. If it's too high or dangerous for traditional cleaning, the SkyWashPro S1 can handle it."
      },
      {
        question: "How long does the battery last?",
        answer: "Each battery provides 30-45 minutes of flight time depending on payload and conditions. We include multiple batteries with each package so you can hot-swap and continue working without interruption."
      },
      {
        question: "What happens if something breaks?",
        answer: "All drones include warranty coverage. We stock spare parts and offer express repair service (48-hour turnaround). For major repairs, loaner drones are available to keep your business running. We also provide maintenance training so you can handle basic repairs yourself."
      },
      {
        question: "Can I customize the drone for specific tasks?",
        answer: "Yes. We offer customizations like enhanced night vision, specialized nozzles for different surfaces, extended battery packs, and custom payload configurations. Enterprise packages include custom engineering consultation."
      }
    ]
  },
  {
    category: "Training & Support",
    questions: [
      {
        question: "What training do you provide?",
        answer: "Every purchase includes: online course covering drone operation and safety, business training on pricing and marketing your services, official SkyWashPro operator certification, and ongoing access to advanced technique webinars. Professional and Enterprise packages include on-site hands-on training."
      },
      {
        question: "Do I need a drone pilot license?",
        answer: "In most countries, yes. You'll need a commercial drone operator license from your local aviation authority. We can guide you through the licensing process and requirements for your region. Our training helps prepare you for certification."
      },
      {
        question: "What kind of support do you offer?",
        answer: "24/7 technical support hotline, email support (4-hour response time), video call troubleshooting, remote diagnostics, online knowledge base with video tutorials. Professional packages get priority support, Enterprise gets dedicated account managers."
      },
      {
        question: "Can you help us market our drone cleaning service?",
        answer: "Professional and Enterprise packages include marketing materials, website templates, and business consulting. We share best practices from successful operators worldwide. You'll also join our operator network for peer support and knowledge sharing."
      }
    ]
  },
  {
    category: "Business & Operations",
    questions: [
      {
        question: "What should we charge clients for drone cleaning?",
        answer: "Rates vary by region and project complexity, but typical rates are: $2,500-5,000 for small commercial buildings, $5,000-15,000 for high-rises, $800-2,000 for solar cleaning, $3,000-5,000 per wind turbine. We provide pricing guidance during training based on your market."
      },
      {
        question: "How many jobs can we do per day?",
        answer: "Depends on project size. Small buildings take 2-4 hours, so you could do 2-3 per day. Large buildings might be full-day projects. Solar farms vary widely. Most operators schedule 1-2 projects per day to maintain quality and account for travel time."
      },
      {
        question: "Do we need special insurance?",
        answer: "Yes, you'll need commercial drone insurance and general liability coverage. We can recommend insurance providers who specialize in drone operations. Your insurance costs will be significantly lower than traditional high-altitude work because there's no workers' compensation for height work."
      },
      {
        question: "Can we operate in all weather?",
        answer: "The SkyWashPro S1 is built tough, but safety first. Avoid winds above 25 mph, heavy rain, and extreme temperatures. Most operators work 200-250 days per year depending on climate. Weather downtime is much less than traditional methods that require perfect conditions for scaffolding."
      },
      {
        question: "What's the maintenance schedule?",
        answer: "Daily: basic inspection and cleaning (15 minutes). Monthly: detailed system check (1-2 hours). Annually: comprehensive service (we offer this, or you can do it yourself with our training). Regular maintenance ensures maximum uptime and extends equipment life."
      }
    ]
  },
  {
    category: "Purchasing Process",
    questions: [
      {
        question: "How do I buy a SkyWashPro drone?",
        answer: "Contact us through the website for a demo and quote. We'll discuss your needs, recommend a package, provide pricing, and answer questions. Once you decide, we process your order, schedule training, and ship your equipment. Typical delivery is 2-4 weeks."
      },
      {
        question: "Do you offer financing?",
        answer: "Yes, we partner with equipment financing companies for qualified buyers. Typical terms range from 24-60 months. Many operators find that revenue from their first few jobs covers monthly payments."
      },
      {
        question: "Do you ship internationally?",
        answer: "Yes, worldwide. Shipping is free to UAE, Europe, and North America. International shipping rates vary by destination. We handle customs documentation and provide clearance assistance."
      },
      {
        question: "What's your warranty?",
        answer: "Standard package: 1 year full coverage. Professional: 3 years. Enterprise: lifetime warranty available. All warranties cover parts and labor. Extended warranties can be purchased for any package."
      },
      {
        question: "Can we try before we buy?",
        answer: "We offer product demonstrations where you can see the SkyWashPro S1 in action. For serious buyers, we can arrange hands-on trial sessions. Contact us to schedule a demo in your region."
      },
      {
        question: "What if the drone doesn't work for our business?",
        answer: "We have a 30-day return policy if the equipment doesn't meet your expectations (conditions apply). However, most buyers find the opposite problem - they wish they'd bought it sooner. We also offer trade-up programs if you start with a Starter package and want to upgrade to Professional later."
      }
    ]
  }
];

const FAQ = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Everything you need to know about buying and operating the SkyWashPro S1 drone.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={category.category} className="mb-12">
                  <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((item, index) => (
                      <AccordionItem
                        key={`${categoryIndex}-${index}`}
                        value={`item-${categoryIndex}-${index}`}
                        className="border-2 rounded-lg px-6 hover:border-primary transition-colors"
                      >
                        <AccordionTrigger className="text-left font-semibold hover:text-primary">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-4xl font-bold mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our sales team is ready to answer any questions about buying, operating, or maintaining your SkyWashPro S1.
              </p>
              <Button onClick={scrollToContact} variant="hero" size="lg">
                Contact Sales Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
