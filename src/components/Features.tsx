import { Shield, Zap, DollarSign, Clock, Droplets, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import droneTechnology from "@/assets/drone-technology.png";

const features = [
  {
    icon: Shield,
    title: "Enhanced Safety",
    description: "Eliminate risks to workers with our autonomous high-altitude cleaning technology. No scaffolding, no harnesses, no danger.",
  },
  {
    icon: Zap,
    title: "Advanced Technology",
    description: "State-of-the-art pressure washing drones equipped with precision sensors and high-efficiency cleaning systems.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "Reduce cleaning costs by up to 60% compared to traditional methods. No expensive equipment rentals or extensive labor.",
  },
  {
    icon: Clock,
    title: "Time Efficient",
    description: "Complete building cleaning in a fraction of the time. Our drones work faster and more efficiently than manual methods.",
  },
  {
    icon: Droplets,
    title: "High-Pressure Precision",
    description: "Powerful pressure washing capabilities with adjustable settings for different surface types and cleaning requirements.",
  },
  {
    icon: CheckCircle,
    title: "Eco-Friendly",
    description: "Minimal water usage and environmentally conscious cleaning solutions. Sustainable technology for a better future.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">
            Allround. <span className="text-accent">Everywhere.</span>
          </h2>
          <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
            Specialising in a range of innovative exterior cleaning services – from drone window cleaning and drone facade cleaning for commercial buildings, to expert solutions for the gentle and thorough cleaning of solar panels and wind turbines. Whatever your project, rest assured that SkyWash Drones will work with you to find the best solution for you – one that not only meets the requirements of your property but one that also respects your operational constraints.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 mb-16">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="font-heading text-3xl font-bold mb-4">SkyWash S-Series 1</h3>
              <h4 className="text-xl font-semibold mb-6 text-muted-foreground">Meet Our Technology</h4>
              <p className="text-lg text-muted-foreground mb-6">
                Our high-tech drones are engineered for precision, reliability, and maximum cleaning performance. Each unit is equipped with:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>180° Carbon Fiber construction for durability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>3200 PSI ground pressure pump with 100m water pipe</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>5.5-inch 1080P console with 15 KM wireless image transmission</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Night vision capability and touch display</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>180° rotatable nozzle with carbon fiber spray boom</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>2 solid-state batteries with 3KW quick charger</span>
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
                Get More Details
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
