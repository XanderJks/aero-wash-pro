import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import villaImage from "@/assets/industry-villa.jpg";
import facadeImage from "@/assets/industry-facade.jpg";
import solarImage from "@/assets/industry-solar.jpg";
import advertisingImage from "@/assets/industry-advertising.jpg";
import shoppingImage from "@/assets/industry-shopping.jpg";
import windImage from "@/assets/industry-wind.jpg";

const industries = [
  {
    title: "Luxury Homes",
    description: "Your villa deserves better than teenagers on ladders. Professional results, zero risk.",
    image: villaImage,
    alt: "Luxury villa exterior cleaning with drone pressure washing technology"
  },
  {
    title: "High-Rises",
    description: "Glass towers stay spotless without closing floors or setting up swing stages.",
    image: facadeImage,
    alt: "High-rise commercial building facade cleaning using advanced drone systems"
  },
  {
    title: "Solar Farms",
    description: "Dirty panels lose 30% efficiency. Clean them fast without touching a single cell.",
    image: solarImage,
    alt: "Solar panel farm maintenance and cleaning with specialized drone equipment"
  },
  {
    title: "Billboards",
    description: "Highway signs stay bright and readable. No traffic disruption, no crane rentals.",
    image: advertisingImage,
    alt: "Highway billboard and outdoor advertising sign cleaning by drone"
  },
  {
    title: "Retail Centers",
    description: "Shopping centers look fresh without closing entrances or scaring customers.",
    image: shoppingImage,
    alt: "Shopping center and retail mall exterior cleaning with minimal disruption"
  },
  {
    title: "Wind Turbines",
    description: "Clean blades spin better. Reach the highest turbines without shutdown time.",
    image: windImage,
    alt: "Wind turbine blade cleaning and maintenance using drone technology"
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Applications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Commercial cleaning operations using the SkyWashPro S1
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Card key={industry.title} className="overflow-hidden group hover:shadow-card transition-all duration-300 border-2 hover:border-primary">
              <div className="aspect-square overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
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
