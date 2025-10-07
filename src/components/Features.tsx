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
    <section id="features" className="py-24 bg-gradient-to-b from-muted/30 to-background relative">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary tracking-wide">Why SkyWashPro</span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-foreground">
            High Places. <span className="text-accent">Zero Hassle.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Towers, turbines, solar arrays—if it's up there collecting dirt, we'll handle it. No crews dangling from ropes, no lift rentals eating your budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-card hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-5 inline-flex p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground font-heading">{feature.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/10 rounded-3xl overflow-hidden shadow-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-10 md:p-16">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                <span className="text-xs font-bold text-accent tracking-wider uppercase">Industrial Grade</span>
              </div>
              <h3 className="font-heading text-4xl md:text-5xl font-bold mb-3 text-foreground">Built for Real Work</h3>
              <h4 className="text-2xl font-semibold mb-8 text-primary">SkyWashPro S1</h4>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Industrial-grade drone, proven across hundreds of commercial sites:
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-base text-foreground">Carbon fiber frame—handles crashes and harsh weather</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-base text-foreground">3200 PSI pump with 100m range</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-base text-foreground">15 km live video—watch the clean happen</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-base text-foreground">Night vision for after-hours operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-base text-foreground">180° rotating nozzle reaches any angle</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-base text-foreground">Hot-swap batteries—no downtime between jobs</span>
                </li>
              </ul>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg px-8 py-6 text-base font-semibold rounded-xl"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get a Quote
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl opacity-50"></div>
              <img
                src={droneTechnology}
                alt="SkyWashPro S1 industrial drone with carbon fiber frame, precision sensors, and 3200 PSI pressure washing system"
                className="relative rounded-2xl w-full transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
