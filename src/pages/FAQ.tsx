import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqCategories = [
  {
    category: "General Questions",
    questions: [
      {
        question: "How does drone cleaning actually work?",
        answer: "Our specialized cleaning drones carry high-pressure water systems (up to 3200 PSI) and cleaning solutions. The drone flies to the target surface and uses precision nozzles to clean while our certified pilots control everything from the ground. Live video feeds ensure thorough coverage and quality control."
      },
      {
        question: "Is drone cleaning as effective as traditional methods?",
        answer: "Yes, often more effective. Our drones can reach difficult angles that human cleaners struggle with, maintain consistent pressure and coverage, and clean faster without compromising quality. We use the same professional-grade cleaning solutions and pressure levels as traditional methods."
      },
      {
        question: "What types of buildings can you clean?",
        answer: "We clean virtually any exterior surface: office buildings, residential towers, shopping centers, solar installations, wind turbines, billboards, industrial facilities, and more. If it's too high or dangerous for traditional cleaning, we can handle it."
      },
      {
        question: "How much does it cost compared to traditional cleaning?",
        answer: "Our clients typically save 50-70% compared to traditional methods. You eliminate costs for scaffolding, lifts, extensive insurance, large crews, and downtime. We provide detailed quotes based on your specific project."
      }
    ]
  },
  {
    category: "Safety & Regulations",
    questions: [
      {
        question: "Is drone cleaning safe?",
        answer: "Extremely safe. By eliminating workers at height, we remove the primary risk factor in building maintenance. Our drones operate with multiple safety systems, including GPS positioning, obstacle avoidance, and fail-safe protocols. We maintain a perfect safety record with zero incidents."
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes, fully. We hold all required commercial drone operator licenses, building maintenance permits, and carry comprehensive liability insurance (up to $5 million coverage). We're also bonded and certified by industry safety organizations."
      },
      {
        question: "Do you have permits to fly drones commercially?",
        answer: "Absolutely. Our pilots are certified by aviation authorities with commercial drone licenses. We handle all flight permits and airspace authorizations for each project. This is included in our service—you don't need to worry about any regulatory compliance."
      },
      {
        question: "What about pedestrian safety during cleaning?",
        answer: "We implement comprehensive ground safety protocols including barrier systems, safety signage, and spotters when needed. Our drones have multiple redundant safety systems to prevent accidents. We can also schedule cleanings during off-hours to minimize any impact."
      }
    ]
  },
  {
    category: "Service Details",
    questions: [
      {
        question: "How long does a typical cleaning take?",
        answer: "It varies by project size. A 10-story building typically takes 2-4 hours. A 30-story tower might take 1-2 days. Solar farms depend on panel count but average 50-100 panels per hour. We're generally 5x faster than traditional methods."
      },
      {
        question: "What's included in your service?",
        answer: "Everything: site survey, risk assessment, all equipment, cleaning solutions, certified pilots, safety protocols, insurance, documentation, and quality inspection. We arrive ready to work and clean up completely when finished."
      },
      {
        question: "Do you work in all weather conditions?",
        answer: "We operate in most conditions but prioritize safety. We avoid high winds (above 25 mph), heavy rain, or extreme temperatures. We monitor weather closely and reschedule if conditions become unsafe. This flexibility is built into our contracts."
      },
      {
        question: "Can you clean specific problem areas or do you only do full buildings?",
        answer: "We handle both. Whether it's spot cleaning graffiti, addressing bird droppings, or maintaining the entire facade, we customize our service to your needs. Minimum project charges may apply for very small jobs."
      },
      {
        question: "How often should buildings be cleaned?",
        answer: "We recommend quarterly cleaning for most commercial buildings, though frequency depends on location, pollution levels, and building use. Solar panels benefit from monthly cleaning in dusty areas. We can create a maintenance schedule tailored to your property."
      }
    ]
  },
  {
    category: "Technical Questions",
    questions: [
      {
        question: "Will the pressure washing damage windows or building materials?",
        answer: "No. We adjust pressure levels based on surface type. Glass gets different treatment than concrete. Our pilots are trained in material science and use appropriate pressure (ranging from 500-3200 PSI) and techniques for each surface."
      },
      {
        question: "What cleaning solutions do you use?",
        answer: "Professional, biodegradable cleaning agents approved for commercial use. We select solutions based on your building materials and local environmental regulations. All products are safe for windows, metal, stone, and surrounding landscaping."
      },
      {
        question: "How much water does the process use?",
        answer: "About 70% less than traditional pressure washing. Our precision targeting and efficient nozzles minimize waste. For a typical building, we use 500-1000 gallons compared to 2000-3000 gallons with traditional methods."
      },
      {
        question: "Can your drones reach very tall buildings?",
        answer: "Yes. Our drones operate effectively up to 400 feet (approximately 40 stories) with extended battery systems. For taller structures, we stage operations from rooftops or use multiple battery swaps. There's no practical height limit."
      },
      {
        question: "What happens if the drone malfunctions mid-flight?",
        answer: "Our drones have multiple redundant systems: backup batteries, emergency landing protocols, and GPS return-to-home features. If any system fails, the drone automatically executes safe landing procedures. In three years of operation, we've never had a drone fail to land safely."
      }
    ]
  },
  {
    category: "Booking & Pricing",
    questions: [
      {
        question: "How do I get a quote?",
        answer: "Contact us with your building address and cleaning needs. We'll review satellite imagery, may schedule a brief site visit, and provide a detailed quote within 24-48 hours. Quotes are free with no obligation."
      },
      {
        question: "Do you offer contracts or one-time services?",
        answer: "Both. One-time cleanings for special projects or events, and maintenance contracts with scheduled cleanings at discounted rates. Contract clients get priority scheduling and reduced pricing (typically 15-20% off)."
      },
      {
        question: "What's your cancellation policy?",
        answer: "We understand weather and business needs change. Cancel or reschedule up to 48 hours before the scheduled service at no charge. Weather-related cancellations never incur fees regardless of timing."
      },
      {
        question: "Do you require payment upfront?",
        answer: "For first-time clients, we ask for 50% deposit to schedule the service. The balance is due upon completion and your satisfaction. Contract clients are invoiced monthly with net-30 terms after the first project."
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
                Everything you need to know about drone cleaning. Still have questions? We're here to help.
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
                Our team is ready to answer any specific questions about your project. No question is too technical or too basic.
              </p>
              <Button onClick={scrollToContact} variant="hero" size="lg">
                Contact Us
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
