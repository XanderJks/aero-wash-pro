import { Card } from "@/components/ui/card";
import consoleImage from "@/assets/console.jpg";
import batteriesImage from "@/assets/batteries.jpg";
import sprayBoomImage from "@/assets/spray-boom.png";
import caseImage from "@/assets/case.jpg";

const includedItems = [
  {
    title: "CONTROL SYSTEM",
    description: "5.5-inch HD screen, 15km range, night vision, touch controls",
    image: consoleImage,
    alt: "Professional drone control system with 5.5-inch HD screen and 15km range capabilities"
  },
  {
    title: "POWER SYSTEM",
    description: "Two batteries + fast charger, swap and keep working",
    image: batteriesImage,
    alt: "High-capacity drone battery system with fast charger for continuous operation"
  },
  {
    title: "CLEANING RIG",
    description: "Carbon fiber boom, 3200 PSI pump, 100m water line",
    image: sprayBoomImage,
    alt: "Carbon fiber spray boom with 3200 PSI industrial pressure washing system"
  },
  {
    title: "TRANSPORT CASE",
    description: "Aluminum case with toolkit, ready to travel",
    image: caseImage,
    alt: "Professional aluminum transport case with complete toolkit for drone cleaning system"
  }
];

const AllIncluded = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute -top-20 left-0 w-full h-40 bg-background rounded-b-[100px] transform rotate-2"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">
            Everything <span className="text-accent">You Need</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 auto-rows-[300px]">
          <Card className="col-span-3 row-span-1 bg-card/95 backdrop-blur-sm overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:rotate-1 group border-2 border-accent/30">
            <div className="h-32 overflow-hidden">
              <img
                src={includedItems[0].image}
                alt={includedItems[0].alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3 text-foreground leading-tight">{includedItems[0].title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{includedItems[0].description}</p>
            </div>
          </Card>

          <Card className="col-span-6 row-span-1 bg-card/95 backdrop-blur-sm overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 group border-2 border-primary/30">
            <div className="grid grid-cols-2 gap-0 h-full">
              <div className="h-full overflow-hidden">
                <img
                  src={includedItems[1].image}
                  alt={includedItems[1].alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="font-bold text-xl mb-3 text-foreground leading-tight">{includedItems[1].title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{includedItems[1].description}</p>
              </div>
            </div>
          </Card>

          <Card className="col-span-3 row-span-1 bg-card/95 backdrop-blur-sm overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:-rotate-1 group border-2 border-accent/30">
            <div className="h-32 overflow-hidden">
              <img
                src={includedItems[2].image}
                alt={includedItems[2].alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3 text-foreground leading-tight">{includedItems[2].title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{includedItems[2].description}</p>
            </div>
          </Card>

          <Card className="col-span-12 row-span-1 bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-sm overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] group border-2 border-white/20">
            <div className="grid grid-cols-4 gap-0 h-full">
              <div className="h-full overflow-hidden col-span-1">
                <img
                  src={includedItems[3].image}
                  alt={includedItems[3].alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-8 col-span-3 flex items-center">
                <div>
                  <h3 className="font-bold text-2xl mb-4 text-foreground leading-tight">{includedItems[3].title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{includedItems[3].description}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Support Section */}
        <div className="mt-16 bg-card rounded-2xl p-8 md:p-12 shadow-elegant">
          <h3 className="font-heading text-3xl font-bold mb-8 text-center">We've Got Your Back</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h4 className="font-semibold text-lg mb-2">Training Included</h4>
              <p className="text-muted-foreground">We teach your team how to fly and clean safely</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h4 className="font-semibold text-lg mb-2">24/7 Support</h4>
              <p className="text-muted-foreground">Something breaks at 3 AM? We answer.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h4 className="font-semibold text-lg mb-2">3-Year Warranty</h4>
              <p className="text-muted-foreground">Full coverage, lifetime maintenance available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllIncluded;
