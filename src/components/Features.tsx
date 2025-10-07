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
        <div className="max-w-4xl mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10 text-primary leading-[0.95] tracking-tight">
            Why operators choose SkyWashPro
          </h2>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-2xl">
            No scaffolding rentals. No insurance nightmares. No crews at height. Just results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 mb-32">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="bg-blue-50/50 p-10 hover:bg-primary hover:text-white transition-all duration-300 group cursor-default">
                <Icon className="h-10 w-10 text-primary mb-6 group-hover:text-white transition-colors" />
                <h3 className="text-lg font-bold mb-4 text-primary group-hover:text-white transition-colors tracking-wide">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed group-hover:text-white/90 transition-colors">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Product Showcase */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-4 border-primary p-12 md:p-20 relative">
          <div className="absolute top-8 right-8 bg-primary text-white px-6 py-3 font-bold tracking-widest text-sm">
            TECH SPECS
          </div>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 -z-10"></div>
              <img
                src={droneTechnology}
                alt="SkyWashPro S1 industrial drone"
                className="w-full"
                loading="lazy"
              />
            </div>
            <div>
              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <div className="font-bold text-primary mb-1 text-sm tracking-wider">FRAME</div>
                  <div className="text-gray-900 text-lg">Carbon fiber composite</div>
                </div>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <div className="font-bold text-primary mb-1 text-sm tracking-wider">PRESSURE</div>
                  <div className="text-gray-900 text-lg">3200 PSI, variable control</div>
                </div>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <div className="font-bold text-primary mb-1 text-sm tracking-wider">RANGE</div>
                  <div className="text-gray-900 text-lg">100m water line, 15km video</div>
                </div>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <div className="font-bold text-primary mb-1 text-sm tracking-wider">NOZZLE</div>
                  <div className="text-gray-900 text-lg">180° rotation, multi-angle</div>
                </div>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <div className="font-bold text-primary mb-1 text-sm tracking-wider">VISION</div>
                  <div className="text-gray-900 text-lg">Night vision, thermal imaging</div>
                </div>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <div className="font-bold text-primary mb-1 text-sm tracking-wider">BATTERY</div>
                  <div className="text-gray-900 text-lg">Hot-swap system, dual pack</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
