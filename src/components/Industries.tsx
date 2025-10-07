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

        <div className="grid grid-cols-12 gap-4 auto-rows-[280px]">
          <Card className="col-span-5 row-span-2 overflow-hidden group hover:shadow-card transition-all duration-300 border-2 hover:border-primary relative">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={industries[0].image}
                alt={industries[0].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>
            <CardHeader className="relative z-10 h-full flex flex-col justify-end">
              <CardTitle className="text-2xl mb-3 text-white">{industries[0].title}</CardTitle>
              <CardDescription className="text-white/90 text-base">{industries[0].description}</CardDescription>
            </CardHeader>
          </Card>

          <Card className="col-span-7 row-span-1 overflow-hidden group hover:shadow-card transition-all duration-300 border-2 hover:border-primary relative">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={industries[1].image}
                alt={industries[1].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
            </div>
            <CardHeader className="relative z-10 h-full flex flex-col justify-end">
              <CardTitle className="text-xl mb-2 text-white">{industries[1].title}</CardTitle>
              <CardDescription className="text-white/90">{industries[1].description}</CardDescription>
            </CardHeader>
          </Card>

          <Card className="col-span-4 row-span-1 overflow-hidden group hover:shadow-card transition-all duration-300 border-2 hover:border-primary relative">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={industries[2].image}
                alt={industries[2].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <CardHeader className="relative z-10 h-full flex flex-col justify-end">
              <CardTitle className="text-lg mb-2 text-white">{industries[2].title}</CardTitle>
              <CardDescription className="text-white/90 text-sm">{industries[2].description}</CardDescription>
            </CardHeader>
          </Card>

          <Card className="col-span-3 row-span-1 overflow-hidden group hover:shadow-card transition-all duration-300 border-2 hover:border-primary relative">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={industries[3].image}
                alt={industries[3].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <CardHeader className="relative z-10 h-full flex flex-col justify-end">
              <CardTitle className="text-lg mb-2 text-white">{industries[3].title}</CardTitle>
              <CardDescription className="text-white/90 text-sm">{industries[3].description}</CardDescription>
            </CardHeader>
          </Card>

          <Card className="col-span-4 row-span-2 overflow-hidden group hover:shadow-card transition-all duration-300 border-2 hover:border-primary relative">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={industries[4].image}
                alt={industries[4].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>
            <CardHeader className="relative z-10 h-full flex flex-col justify-end">
              <CardTitle className="text-xl mb-3 text-white">{industries[4].title}</CardTitle>
              <CardDescription className="text-white/90">{industries[4].description}</CardDescription>
            </CardHeader>
          </Card>

          <Card className="col-span-8 row-span-2 overflow-hidden group hover:shadow-card transition-all duration-300 border-2 hover:border-primary relative">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={industries[5].image}
                alt={industries[5].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
            </div>
            <CardHeader className="relative z-10 h-full flex flex-col justify-end">
              <CardTitle className="text-2xl mb-3 text-white">{industries[5].title}</CardTitle>
              <CardDescription className="text-white/90 text-base">{industries[5].description}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Industries;
