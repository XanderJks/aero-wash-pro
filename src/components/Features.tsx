import { Shield, Zap, DollarSign, Clock, Droplets, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import droneProduct from "@/assets/drone-product.jpg";

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
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose AltitudeWash Drones?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Revolutionary technology that transforms building maintenance with safety, efficiency, and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-card">
                <CardHeader>
                  <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Product Showcase */}
        <div className="bg-card rounded-2xl overflow-hidden shadow-elegant p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-heading text-3xl font-bold mb-6">Meet Our Technology</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our high-tech drones are engineered for precision, reliability, and maximum cleaning performance. Each unit is equipped with:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Industrial-grade pressure washing systems (up to 3000 PSI)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Advanced obstacle detection and collision avoidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Real-time monitoring and control systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Weather-resistant design for all-season operation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Extended flight time with quick battery swap capability</span>
                </li>
              </ul>
            </div>
            <div>
              <img src={droneProduct} alt="Advanced pressure washing drone technology" className="rounded-xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
