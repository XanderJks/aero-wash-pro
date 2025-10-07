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
    <section id="features" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <h2 className="font-heading text-6xl font-bold mb-4 text-foreground max-w-2xl">
            Why this works better than traditional cleaning
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-20 gap-y-16 mb-32">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-6">
                <Icon className="h-8 w-8 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-lg text-foreground/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-5 gap-16 items-start bg-muted/30 p-16">
          <div className="col-span-2">
            <img
              src={droneTechnology}
              alt="SkyWashPro S1 industrial drone with carbon fiber frame, precision sensors, and 3200 PSI pressure washing system"
              className="w-full"
              loading="lazy"
            />
          </div>
          <div className="col-span-3">
            <h3 className="font-heading text-5xl font-bold mb-6 text-foreground">SkyWashPro S1</h3>
            <div className="space-y-6 text-lg">
              <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                <div>
                  <div className="font-bold mb-1">Carbon fiber frame</div>
                  <div className="text-foreground/60">Handles crashes and harsh weather</div>
                </div>
                <div>
                  <div className="font-bold mb-1">3200 PSI pump</div>
                  <div className="text-foreground/60">100m range</div>
                </div>
                <div>
                  <div className="font-bold mb-1">15 km live video</div>
                  <div className="text-foreground/60">Watch the clean happen</div>
                </div>
                <div>
                  <div className="font-bold mb-1">Night vision</div>
                  <div className="text-foreground/60">After-hours operations</div>
                </div>
                <div>
                  <div className="font-bold mb-1">180° rotating nozzle</div>
                  <div className="text-foreground/60">Reaches any angle</div>
                </div>
                <div>
                  <div className="font-bold mb-1">Hot-swap batteries</div>
                  <div className="text-foreground/60">No downtime between jobs</div>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background px-10 py-6 text-base font-bold mt-8"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
