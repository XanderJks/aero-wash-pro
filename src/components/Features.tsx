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
    <section id="features" className="py-32 bg-secondary relative overflow-hidden">
      {/* Red accent bars */}
      <div className="absolute top-20 right-0 w-1 h-48 bg-primary"></div>
      <div className="absolute bottom-20 left-0 w-1 h-48 bg-primary"></div>
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:64px_64px] opacity-20"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 mb-6 border-l-4 border-primary">
            <div className="w-2 h-2 bg-primary animate-pulse"></div>
            <span className="text-xs font-bold tracking-widest uppercase">Capabilities</span>
          </div>
          <h2 className="font-sans text-5xl md:text-6xl font-black leading-tight mb-6 uppercase tracking-tighter">
            Engineered For<br />
            <span className="industrial-line pl-6">Professional Ops</span>
          </h2>
          <p className="text-lg text-foreground font-medium border-l-4 border-foreground pl-6">
            Advanced autonomous systems for demanding commercial applications.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div 
                key={feature.title} 
                className="group relative bg-background border-2 border-foreground overflow-hidden card-hover offset-shadow"
              >
                {/* Red accent corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary opacity-0 group-hover:opacity-100 transition-opacity clip-diagonal z-10"></div>
                
                <div className="p-8 relative">
                  <div className="w-16 h-16 border-2 border-primary bg-foreground text-background flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Icon className="h-8 w-8" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-black mb-3 text-foreground uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">{feature.description}</p>
                </div>
                
                {/* Corner accent */}
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30"></div>
              </div>
            );
          })}
        </div>

        <div className="bg-background border-4 border-foreground overflow-hidden offset-shadow">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center border-r-4 border-foreground">
              <div className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 mb-6 w-fit">
                <div className="w-2 h-2 bg-background"></div>
                <span className="text-xs font-bold tracking-widest uppercase">Tech Specs</span>
              </div>
              <h3 className="font-sans text-4xl font-black mb-6 text-foreground uppercase tracking-tighter">SkyWashPro S1</h3>
              <p className="text-base text-foreground font-medium mb-10 leading-relaxed border-l-4 border-foreground pl-6">
                Industrial drone platform. 200+ commercial deployments.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="border-l-4 border-foreground pl-4">
                  <div className="text-3xl font-black text-foreground">3200</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1 font-bold">PSI Pressure</div>
                </div>
                <div className="border-l-4 border-foreground pl-4">
                  <div className="text-3xl font-black text-foreground">100m</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1 font-bold">Range</div>
                </div>
                <div className="border-l-4 border-foreground pl-4">
                  <div className="text-3xl font-black text-foreground">15km</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1 font-bold">Video</div>
                </div>
                <div className="border-l-4 border-foreground pl-4">
                  <div className="text-3xl font-black text-foreground">180°</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1 font-bold">Rotation</div>
                </div>
              </div>

              <div className="space-y-3 mb-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-foreground"></div>
                  <span className="text-foreground font-bold">Carbon fiber construction</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-foreground"></div>
                  <span className="text-foreground font-bold">Night vision capability</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-foreground"></div>
                  <span className="text-foreground font-bold">Hot-swap batteries</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-foreground"></div>
                  <span className="text-foreground font-bold">Real-time telemetry</span>
                </div>
              </div>

              <button
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 font-bold uppercase tracking-wider brutalist-border relative overflow-hidden group"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="relative z-10">Get Specs</span>
                <div className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
            <div className="relative bg-muted">
              <img
                src={droneTechnology}
                alt="SkyWashPro S1 industrial drone system"
                className="w-full h-full object-cover grayscale-[30%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
