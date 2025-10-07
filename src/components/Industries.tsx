import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import villaImage from "@/assets/industry-villa.jpg";
import facadeImage from "@/assets/industry-facade.jpg";
import solarImage from "@/assets/industry-solar.jpg";
import advertisingImage from "@/assets/industry-advertising.jpg";
import shoppingImage from "@/assets/industry-shopping.jpg";
import windImage from "@/assets/industry-wind.jpg";

const industries = [
  {
    title: "Villa",
    description: "Transform your villa's exterior effortlessly with our cleaning drone.",
    image: villaImage,
  },
  {
    title: "Facade",
    description: "Achieve spotless facades with ease using our cleaning drone.",
    image: facadeImage,
  },
  {
    title: "Solar Panel",
    description: "Maximize solar efficiency with a clean solar panel, thanks to our drone.",
    image: solarImage,
  },
  {
    title: "Advertising Board",
    description: "Ensure your advertising board shines brightly with our cleaning drone.",
    image: advertisingImage,
  },
  {
    title: "Shopping Malls",
    description: "Keep your supermarket exterior pristine with our powerful cleaning drone.",
    image: shoppingImage,
  },
  {
    title: "Wind Turbine",
    description: "Maintain optimal wind turbine performance with our specialized cleaning drone.",
    image: windImage,
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
          {industries.map((industry) => (
            <Card key={industry.title} className="overflow-hidden group hover:shadow-card transition-all duration-300 border-2 hover:border-primary">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg mb-2">{industry.title}</CardTitle>
                <CardDescription>{industry.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
