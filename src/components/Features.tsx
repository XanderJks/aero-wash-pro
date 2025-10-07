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

        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-4 row-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 border-l-4 border-accent group">
            <Shield className="h-16 w-16 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-bold mb-4 text-primary-foreground">{features[0].title}</h3>
            <p className="text-base text-primary-foreground/90 leading-relaxed">{features[0].description}</p>
          </div>

          <div className="col-span-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 border-t-4 border-primary-foreground group">
            <Zap className="h-12 w-12 text-primary-foreground mb-4 group-hover:rotate-12 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-3 text-primary-foreground">{features[1].title}</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">{features[1].description}</p>
          </div>

          <div className="col-span-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 border-t-4 border-primary-foreground group">
            <DollarSign className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-3 text-primary-foreground">{features[2].title}</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">{features[2].description}</p>
          </div>

          <div className="col-span-3 bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 border-r-4 border-accent group">
            <Clock className="h-12 w-12 text-primary-foreground mb-4 group-hover:rotate-180 transition-transform duration-500" />
            <h3 className="text-lg font-semibold mb-3 text-primary-foreground">{features[3].title}</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">{features[3].description}</p>
          </div>

          <div className="col-span-3 bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 border-r-4 border-primary-foreground group">
            <Droplets className="h-12 w-12 text-primary-foreground mb-4 group-hover:translate-y-2 transition-transform duration-300" />
            <h3 className="text-lg font-semibold mb-3 text-primary-foreground">{features[4].title}</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">{features[4].description}</p>
          </div>

          <div className="col-span-2 bg-accent/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-accent/30 transition-all duration-500 border-4 border-accent group">
            <CheckCircle className="h-12 w-12 text-accent mb-4 group-hover:rotate-12 transition-transform duration-300" />
            <h3 className="text-lg font-semibold mb-3 text-primary-foreground">{features[5].title}</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">{features[5].description}</p>
          </div>
        </div>

        {/* Product Showcase - Magazine Style */}
        <div className="relative">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-7 relative z-10">
              <div className="bg-card rounded-3xl overflow-hidden shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src={droneTechnology}
                  alt="SkyWashPro S1 industrial drone with carbon fiber frame, precision sensors, and 3200 PSI pressure washing system"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="col-span-5 -ml-12 mt-16 bg-accent/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl relative z-20">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg">
                S1
              </div>
              <h3 className="font-heading text-4xl font-bold mb-3 text-white mt-8">Built for Real Work</h3>
              <h4 className="text-xl font-semibold mb-6 text-white/90">SkyWashPro Industrial System</h4>
              <p className="text-base text-white/90 mb-8 leading-relaxed">
                Industrial-grade drone, proven across hundreds of commercial sites
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                  <CheckCircle className="h-6 w-6 text-white mb-2" />
                  <p className="text-sm text-white font-semibold">Carbon fiber frame</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                  <CheckCircle className="h-6 w-6 text-white mb-2" />
                  <p className="text-sm text-white font-semibold">3200 PSI pump</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                  <CheckCircle className="h-6 w-6 text-white mb-2" />
                  <p className="text-sm text-white font-semibold">15 km live video</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                  <CheckCircle className="h-6 w-6 text-white mb-2" />
                  <p className="text-sm text-white font-semibold">Night vision</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                  <CheckCircle className="h-6 w-6 text-white mb-2" />
                  <p className="text-sm text-white font-semibold">180° rotating nozzle</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                  <CheckCircle className="h-6 w-6 text-white mb-2" />
                  <p className="text-sm text-white font-semibold">Hot-swap batteries</p>
                </div>
              </div>
              <Button
                variant="default"
                size="lg"
                className="w-full bg-white text-accent hover:bg-white/90 font-bold shadow-lg"
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
