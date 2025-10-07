import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Truck, HeadphonesIcon, GraduationCap, Shield, Wrench } from "lucide-react";

const packages = [
  {
    icon: Package,
    title: "Starter Package",
    price: "Contact for Pricing",
    description: "Everything you need to start your drone cleaning business",
    features: [
      "SkyWashPro S1 Industrial Drone",
      "3200 PSI Pressure Washing System",
      "2x High-Capacity Batteries + Charger",
      "Professional Control Console (15km range)",
      "Carbon Fiber Cleaning Boom",
      "Aluminum Transport Case with Tools",
      "Basic Pilot Training (Online)",
      "1-Year Standard Warranty"
    ],
    ideal: "New cleaning business operators and entrepreneurs"
  },
  {
    icon: Package,
    title: "Professional Package",
    price: "Contact for Pricing",
    description: "For established cleaning companies ready to scale",
    features: [
      "Everything in Starter Package",
      "4x High-Capacity Batteries",
      "Advanced Night Vision System",
      "On-site Pilot Training (3 days)",
      "Business Launch Consulting",
      "Marketing Materials Package",
      "3-Year Extended Warranty",
      "Priority Technical Support"
    ],
    ideal: "Established cleaning companies expanding services"
  },
  {
    icon: Package,
    title: "Enterprise Package",
    price: "Contact for Pricing",
    description: "Multi-unit solution for large-scale operations",
    features: [
      "Multiple SkyWashPro S1 Units",
      "Fleet Management Software",
      "Dedicated Account Manager",
      "Custom Training Program",
      "Spare Parts Kit",
      "On-site Maintenance Training",
      "Lifetime Warranty Available",
      "24/7 Premium Support"
    ],
    ideal: "National facility management firms and corporations"
  }
];

const services = [
  {
    icon: GraduationCap,
    title: "Training & Certification",
    description: "Comprehensive pilot training program included with every purchase",
    details: [
      "Online course: Drone operation basics and safety protocols",
      "On-site training: Hands-on practice with your new equipment",
      "Business training: How to price jobs and market your services",
      "Certification: Official SkyWashPro operator certificate",
      "Ongoing education: Free access to advanced technique webinars"
    ]
  },
  {
    icon: Truck,
    title: "Worldwide Shipping",
    description: "We ship anywhere. Your drone arrives ready to fly.",
    details: [
      "Free shipping to UAE, Europe, and North America",
      "International shipping available worldwide",
      "Custom clearance assistance provided",
      "Typical delivery: 2-4 weeks from order",
      "Full insurance coverage during transit"
    ]
  },
  {
    icon: HeadphonesIcon,
    title: "Technical Support",
    description: "Real humans who actually know drones",
    details: [
      "24/7 emergency technical support line",
      "Email support with 4-hour response time",
      "Video call troubleshooting available",
      "Remote diagnostics via drone telemetry",
      "Online knowledge base and video tutorials"
    ]
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    description: "Keep your drone flying and earning",
    details: [
      "Annual maintenance service available",
      "Genuine parts only - no cheap substitutes",
      "Express repair service (48-hour turnaround)",
      "Loaner drone available during major repairs",
      "Maintenance training for your team"
    ]
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
                Buy the SkyWashPro S1
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Industrial cleaning drone with everything you need to start or expand your building maintenance business. Built tough, backed by experts.
              </p>
              <Button onClick={scrollToContact} variant="outline" size="lg" className="bg-white/10 border-accent text-white hover:bg-accent hover:text-primary">
                Request Pricing & Demo
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold mb-4">Choose Your Package</h2>
              <p className="text-xl text-muted-foreground">From first-time buyers to fleet operators</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {packages.map((pkg) => {
                const Icon = pkg.icon;
                return (
                  <Card key={pkg.title} className="border-2 hover:border-primary transition-all duration-300 flex flex-col">
                    <CardHeader>
                      <div className="mx-auto mb-4 flex items-center justify-center h-16 w-16 rounded-full bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-center text-2xl">{pkg.title}</CardTitle>
                      <CardDescription className="text-center text-lg font-semibold text-primary">{pkg.price}</CardDescription>
                      <p className="text-center text-muted-foreground">{pkg.description}</p>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <ul className="space-y-3 mb-6 flex-1">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="border-t pt-4 mb-4">
                        <p className="text-sm text-muted-foreground">
                          <strong>Ideal for:</strong> {pkg.ideal}
                        </p>
                      </div>
                      <Button onClick={scrollToContact} variant="default" className="w-full">
                        Get Pricing
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold mb-4">What's Included</h2>
              <p className="text-xl text-muted-foreground">We don't just sell you a drone and walk away</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="border-2 hover:border-primary transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                          <CardDescription>{service.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="border-2 border-primary">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="font-heading text-3xl font-bold mb-4">Warranty & Support</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Every SkyWashPro S1 includes comprehensive warranty coverage. We stand behind our products because we build them right.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                      <div>
                        <h4 className="font-semibold mb-2">Standard: 1 Year</h4>
                        <p className="text-sm text-muted-foreground">Full parts and labor coverage</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Extended: 3 Years</h4>
                        <p className="text-sm text-muted-foreground">Includes priority support</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Lifetime Available</h4>
                        <p className="text-sm text-muted-foreground">For enterprise customers</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-4xl font-bold mb-6">
                Ready to Talk Numbers?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Request a formal quote, schedule a product demo, or talk to our sales team about financing options. We ship worldwide.
              </p>
              <Button onClick={scrollToContact} variant="hero" size="lg">
                Request Demo & Pricing
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
