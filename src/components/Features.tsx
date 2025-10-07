import { Shield, Zap, DollarSign, Clock, Droplets, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import droneTechnology from "@/assets/drone-technology.png";

const features = [
  {
    icon: Shield,
    title: "Zero Risk",
    description: "Nobody climbs. Nobody falls. Our drones do the dangerous work while your team stays safe.",
  },
  {
    icon: Zap,
    title: "Military-Grade Tech",
    description: "Built with carbon fiber and precision sensors. This isn't a toy—it's professional equipment.",
  },
  {
    icon: DollarSign,
    title: "60% Cheaper",
    description: "No scaffolding rentals. No insurance nightmares. Just fast, affordable cleaning.",
  },
  {
    icon: Clock,
    title: "5x Faster",
    description: "What takes a crew days, our drone finishes in hours. Get back to business faster.",
  },
  {
    icon: Droplets,
    title: "3200 PSI Power",
    description: "Professional pressure washing from the sky. Adjustable for any surface—glass, concrete, you name it.",
  },
  {
    icon: CheckCircle,
    title: "Water Smart",
    description: "Uses 70% less water than traditional methods. Your building gets clean, the planet stays green.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">
            Clean Anything. <span className="text-accent">Anywhere High.</span>
          </h2>
          <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
            Skyscrapers, solar farms, wind turbines—if it's high up and dirty, we clean it. No ladders, no lifts, no drama. Just a drone that flies up, blasts the grime, and gets the job done. We've cleaned everything from 50-story office towers to rural solar installations. Tell us what needs cleaning, we'll tell you when we can start.
          </p>
        </div>

        <div className="grid grid-cols-6 gap-8 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center">
                <div className="mb-4 mx-auto flex items-center justify-center">
                  <Icon className="h-12 w-12 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-primary-foreground">{feature.title}</h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Product Showcase */}
        <div className="bg-card rounded-2xl overflow-hidden shadow-elegant p-8 md:p-12">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-heading text-3xl font-bold mb-4">The Beast That Cleans</h3>
              <h4 className="text-xl font-semibold mb-6 text-muted-foreground">SkyWashPro S1 Specs</h4>
              <p className="text-lg text-muted-foreground mb-6">
                This isn't your neighbor's camera drone. Built tough for commercial work, tested on hundreds of buildings:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Carbon fiber frame - survives crashes, wind, and weather</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>3200 PSI pump - professional pressure with 100m reach</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>15 km live video feed - see exactly what you're cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Night vision - work after hours without disturbing tenants</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>180° rotating nozzle - hits every angle perfectly</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Hot-swap batteries - clean all day without downtime</span>
                </li>
              </ul>
              <Button
                variant="default"
                size="lg"
                className="mt-8"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Talk to Us
              </Button>
            </div>
            <div>
              <img src={droneTechnology} alt="Advanced pressure washing drone technology" className="rounded-xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
