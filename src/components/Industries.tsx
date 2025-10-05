import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import manufacturingImage from "@/assets/industry-manufacturing.jpg";
import officeImage from "@/assets/industry-office.jpg";
import warehouseImage from "@/assets/industry-warehouse.jpg";
import healthcareImage from "@/assets/industry-healthcare.jpg";

const industries = [
  {
    title: "Manufacturing Facilities",
    description: "Keep production facilities clean and operational without disrupting workflow",
    image: manufacturingImage,
  },
  {
    title: "Commercial Office Buildings",
    description: "Maintain professional appearance for corporate properties and business centers",
    image: officeImage,
  },
  {
    title: "Warehouses & Distribution",
    description: "Large-scale facility cleaning with minimal downtime and maximum efficiency",
    image: warehouseImage,
  },
  {
    title: "Healthcare Facilities",
    description: "Safe, compliant cleaning for hospitals and medical centers",
    image: healthcareImage,
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
