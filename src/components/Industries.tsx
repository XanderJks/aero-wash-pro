import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Home, Building2, Sun, MonitorPlay, ShoppingCart, Wind } from "lucide-react";

const industries = [
  {
    title: "Villa",
    description: "Transform your villa's exterior effortlessly with our cleaning drone.",
    icon: Home,
  },
  {
    title: "Facade",
    description: "Achieve spotless facades with ease using our cleaning drone.",
    icon: Building2,
  },
  {
    title: "Solar Panel",
    description: "Maximize solar efficiency with a clean solar panel, thanks to our drone.",
    icon: Sun,
  },
  {
    title: "Advertising Board",
    description: "Ensure your advertising board shines brightly with our cleaning drone.",
    icon: MonitorPlay,
  },
  {
    title: "Shopping Malls",
    description: "Keep your supermarket exterior pristine with our powerful cleaning drone.",
    icon: ShoppingCart,
  },
  {
    title: "Wind Turbine",
    description: "Maintain optimal wind turbine performance with our specialized cleaning drone.",
    icon: Wind,
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading companies across multiple sectors for professional building maintenance
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Card key={industry.title} className="overflow-hidden group hover:shadow-card transition-all duration-300 border-2 hover:border-primary">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">{industry.title}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
