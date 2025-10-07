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
    <section id="industries" className="py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <h2 className="font-heading text-6xl font-bold text-background">
            Who uses this
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <img
                src={industry.image}
                alt={industry.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex flex-col justify-end p-8">
                <h3 className="font-heading text-3xl font-bold text-white mb-2">{industry.title}</h3>
                <p className="text-white/80 text-base">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
