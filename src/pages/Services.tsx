import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, DollarSign, Building2, Factory, Home, Wind } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "High-Rise Facade Cleaning",
    description: "Professional exterior cleaning for commercial buildings and skyscrapers",
    features: [
      "Glass curtain wall cleaning",
      "Stone and concrete facade restoration",
      "Aluminum panel maintenance",
      "Graffiti removal",
      "Bird dropping removal"
    ],
    process: "Survey → Risk Assessment → Weather Check → Deploy Drone → Clean & Document → Quality Inspection",
    timeline: "1-3 days depending on building size",
    pricing: "From $2,500 per project"
  },
  {
    icon: Factory,
    title: "Solar Panel Cleaning",
    description: "Maximize energy output with regular cleaning of solar installations",
    features: [
      "Residential solar array cleaning",
      "Commercial solar farm maintenance",
      "Dust and debris removal",
      "Performance optimization",
      "Panel inspection during cleaning"
    ],
    process: "Site Survey → Schedule During Low Production → Drone Cleaning → Output Verification → Report",
    timeline: "4-8 hours per 100 panels",
    pricing: "From $800 per session"
  },
  {
    icon: Home,
    title: "Residential Property Cleaning",
    description: "Premium cleaning services for luxury homes and estates",
    features: [
      "Roof cleaning and moss removal",
      "Exterior wall washing",
      "Window cleaning (all floors)",
      "Gutter cleaning and inspection",
      "Pool area pressure washing"
    ],
    process: "Property Assessment → Owner Consultation → Scheduled Cleaning → Walk-through → Follow-up",
    timeline: "Half day to full day",
    pricing: "From $1,200 per property"
  },
  {
    icon: Wind,
    title: "Wind Turbine Maintenance",
    description: "Efficient cleaning and inspection of wind turbine blades",
    features: [
      "Blade surface cleaning",
      "Leading edge inspection",
      "Lightning protection check",
      "Performance optimization",
      "Erosion detection"
    ],
    process: "Turbine Access → Safety Protocol → Blade-by-Blade Cleaning → Inspection Report → Maintenance Log",
    timeline: "2-4 hours per turbine",
    pricing: "From $3,500 per turbine"
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Zero Risk",
    description: "No workers at height means zero fall risk. Insurance costs drop dramatically."
  },
  {
    icon: Clock,
    title: "5x Faster",
    description: "Complete in hours what takes traditional crews days or weeks to finish."
  },
  {
    icon: DollarSign,
    title: "60% Cost Savings",
    description: "No scaffolding, no lifts, no massive crew. Just results."
  }
];

const Services = () => {
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
                Our Services
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Professional drone cleaning for any surface that's too high, too dangerous, or too expensive to clean the traditional way.
              </p>
              <Button onClick={scrollToContact} variant="outline" size="lg" className="bg-white/10 border-accent text-white hover:bg-accent hover:text-primary">
                Get a Quote
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <Card key={benefit.title} className="text-center border-2 hover:border-primary transition-all duration-300">
                    <CardHeader>
                      <div className="mx-auto mb-4 flex items-center justify-center h-16 w-16 rounded-full bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="mb-2">{benefit.title}</CardTitle>
                      <CardDescription className="text-base">{benefit.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>

            <div className="space-y-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="border-2 hover:border-primary transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start gap-6">
                        <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-primary/10 flex-shrink-0">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                          <CardDescription className="text-base">{service.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            What's Included
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2 text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-4">Service Details</h4>
                          <div className="space-y-4 text-muted-foreground">
                            <div>
                              <span className="font-semibold text-foreground">Process: </span>
                              {service.process}
                            </div>
                            <div>
                              <span className="font-semibold text-foreground">Timeline: </span>
                              {service.timeline}
                            </div>
                            <div>
                              <span className="font-semibold text-foreground">Starting Price: </span>
                              {service.pricing}
                            </div>
                          </div>
                          <Button onClick={scrollToContact} variant="default" className="mt-6">
                            Request Quote
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-4xl font-bold mb-6">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every building is different. Tell us what you need cleaned, and we'll recommend the right approach with honest pricing.
              </p>
              <Button onClick={scrollToContact} variant="hero" size="lg">
                Talk to Our Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
