import { Shield, Zap, DollarSign, Clock, Droplets, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import droneTechnology from "@/assets/drone-technology.png";

const features = [
  {
    icon: Shield,
    title: "Zero Risk",
    description: "Keep your crew on solid ground. The drone handles heights—you handle business.",
  },
  {
    icon: Zap,
    title: "Military-Grade Tech",
    description: "Carbon fiber frame, precision sensors. Built for wind, weather, and real work.",
  },
  {
    icon: DollarSign,
    title: "60% Cheaper",
    description: "Skip the scaffolding, skip the insurance drama. Clean more, spend less.",
  },
  {
    icon: Clock,
    title: "5x Faster",
    description: "Days of crew work done in hours. Less downtime, more uptime.",
  },
  {
    icon: Droplets,
    title: "3200 PSI Power",
    description: "Industrial-grade pressure from above. Dial it up for concrete, dial it down for glass.",
  },
  {
    icon: CheckCircle,
    title: "Water Smart",
    description: "70% less water per job. Good for the budget, better for the planet.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">
            High Places. <span className="text-accent">Zero Hassle.</span>
          </h2>
          <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
            Towers, turbines, solar arrays—if it's up there collecting dirt, we'll handle it. No crews dangling from ropes, no lift rentals eating your budget. Our drone flies to the problem and pressure-washes it clean. From downtown highrises to desert solar farms, we've done it all. Name the job, we'll quote it.
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
              <h3 className="font-heading text-3xl font-bold mb-4">Built for Real Work</h3>
              <h4 className="text-xl font-semibold mb-6 text-muted-foreground">SkyWashPro S1</h4>
              <p className="text-lg text-muted-foreground mb-6">
                Industrial-grade drone, proven across hundreds of commercial sites:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Carbon fiber frame—handles crashes and harsh weather</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>3200 PSI pump with 100m range</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>15 km live video—watch the clean happen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Night vision for after-hours operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>180° rotating nozzle reaches any angle</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Hot-swap batteries—no downtime between jobs</span>
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
                Get a Quote
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
