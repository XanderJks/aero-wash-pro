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
    <section id="features" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-primary leading-tight">
            Why operators choose SkyWashPro
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            No scaffolding rentals. No insurance nightmares. No crews at height. Just results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-24">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="border-2 border-gray-200 p-8 hover:border-primary transition-colors">
                <Icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Product Showcase */}
        <div className="bg-white border-2 border-gray-900 p-12 md:p-16">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3">
              <img
                src={droneTechnology}
                alt="SkyWashPro S1 industrial drone"
                className="w-full"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-2">
              <div className="border-l-4 border-accent pl-8 mb-12">
                <h3 className="text-3xl font-bold mb-2 text-primary">Tech Specs</h3>
                <p className="text-gray-700">Built for commercial use</p>
              </div>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="font-bold text-primary mb-1">Frame</div>
                  <div className="text-gray-700">Carbon fiber composite</div>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="font-bold text-primary mb-1">Pressure</div>
                  <div className="text-gray-700">3200 PSI, variable control</div>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="font-bold text-primary mb-1">Range</div>
                  <div className="text-gray-700">100m water line, 15km video</div>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="font-bold text-primary mb-1">Nozzle</div>
                  <div className="text-gray-700">180° rotation, multi-angle</div>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="font-bold text-primary mb-1">Vision</div>
                  <div className="text-gray-700">Night vision, thermal imaging</div>
                </div>
                <div className="pb-4">
                  <div className="font-bold text-primary mb-1">Battery</div>
                  <div className="text-gray-700">Hot-swap system, dual pack</div>
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
