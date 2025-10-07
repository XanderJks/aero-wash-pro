import { Card } from "@/components/ui/card";
import consoleImage from "@/assets/console.jpg";
import batteriesImage from "@/assets/batteries.jpg";
import sprayBoomImage from "@/assets/spray-boom.png";
import caseImage from "@/assets/case.jpg";

const includedItems = [
  {
    title: "CONTROL SYSTEM",
    description: "5.5-inch HD screen, 15km range, night vision, touch controls",
    image: consoleImage
  },
  {
    title: "POWER SYSTEM",
    description: "Two batteries + fast charger, swap and keep working",
    image: batteriesImage
  },
  {
    title: "CLEANING RIG",
    description: "Carbon fiber boom, 3200 PSI pump, 100m water line",
    image: sprayBoomImage
  },
  {
    title: "TRANSPORT CASE",
    description: "Aluminum case with toolkit, ready to travel",
    image: caseImage
  }
];

const AllIncluded = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">
            Everything <span className="text-accent">You Need</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {includedItems.map((item) => (
            <Card key={item.title} className="bg-card/95 backdrop-blur-sm overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 text-foreground leading-tight">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-16 bg-card rounded-2xl p-8 md:p-12 shadow-elegant">
          <h3 className="font-heading text-3xl font-bold mb-8 text-center">We've Got Your Back</h3>
          <div className="grid md:grid-cols-3 gap-6">
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
