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
    <section id="industries" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-accent/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-semibold text-accent tracking-wide">Proven Everywhere</span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Applications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Commercial cleaning operations using the SkyWashPro S1
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/30 shadow-sm hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <img
                  src={industry.image}
                  alt={industry.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">{industry.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
