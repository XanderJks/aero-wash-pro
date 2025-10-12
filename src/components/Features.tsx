import { Shield, Zap, DollarSign, Clock, Droplets, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import droneTechnology from "@/assets/drone-technology.png";

const features = [
  {
    icon: Shield,
    title: "Zero Risk Operations",
    description: "Ground-based control eliminates working at height hazards",
  },
  {
    icon: Zap,
    title: "Military-Grade Build",
    description: "Carbon fiber construction withstands harsh environments",
  },
  {
    icon: DollarSign,
    title: "60% Cost Reduction",
    description: "Eliminate scaffolding and insurance overhead",
  },
  {
    icon: Clock,
    title: "5x Faster Completion",
    description: "Complete in hours what takes days traditionally",
  },
  {
    icon: Droplets,
    title: "3200 PSI System",
    description: "Adjustable pressure for any surface type",
  },
  {
    icon: CheckCircle,
    title: "70% Water Savings",
    description: "Precision application reduces waste",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="max-w-3xl mb-20">
          <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-4">CAPABILITIES</div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Engineered for Professional Operations
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Advanced autonomous systems designed to handle the most demanding commercial cleaning applications with precision and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title} 
                className="group bg-background p-8 rounded-2xl border border-border hover:border-primary/30 card-hover shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-all">
                  <Icon className="h-7 w-7 text-primary-foreground" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-background rounded-2xl border border-primary/10 overflow-hidden shadow-elegant">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-4">TECHNICAL SPECIFICATIONS</div>
              <h3 className="font-sans text-3xl font-bold mb-6 text-foreground">SkyWashPro S1</h3>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                Industrial drone platform engineered for commercial cleaning operations. Proven across 200+ commercial deployments.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="border-l-3 border-gradient-primary pl-4 group">
                  <div className="text-3xl font-bold gradient-text">3200</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">PSI Pressure</div>
                </div>
                <div className="border-l-3 border-gradient-primary pl-4">
                  <div className="text-3xl font-bold gradient-text">100m</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Operating Range</div>
                </div>
                <div className="border-l-3 border-gradient-primary pl-4">
                  <div className="text-3xl font-bold gradient-text">15km</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Video Range</div>
                </div>
                <div className="border-l-3 border-gradient-primary pl-4">
                  <div className="text-3xl font-bold gradient-text">180°</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Nozzle Rotation</div>
                </div>
              </div>

              <div className="space-y-3 mb-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-1 h-1 bg-foreground rounded-full"></div>
                  <span className="text-foreground">Carbon fiber airframe construction</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-1 h-1 bg-foreground rounded-full"></div>
                  <span className="text-foreground">Night vision capabilities</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-1 h-1 bg-foreground rounded-full"></div>
                  <span className="text-foreground">Hot-swappable battery system</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-1 h-1 bg-foreground rounded-full"></div>
                  <span className="text-foreground">Real-time telemetry monitoring</span>
                </div>
              </div>

              <Button
                variant="default"
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 h-12 w-fit"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Request Specifications
              </Button>
            </div>
            <div className="relative bg-muted">
              <img
                src={droneTechnology}
                alt="SkyWashPro S1 industrial drone system"
                className="w-full h-full object-cover"
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
