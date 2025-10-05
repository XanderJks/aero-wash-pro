import { Card } from "@/components/ui/card";
import consoleImage from "@/assets/console.jpg";
import batteriesImage from "@/assets/batteries.jpg";
import sprayBoomImage from "@/assets/spray-boom.png";
import caseImage from "@/assets/case.jpg";

const includedItems = [
  {
    title: "5.5-INCH 1080P CONSOLE",
    description: "15 KM WIRELESS IMAGE, NIGHT VISION, TOUCH DISPLAY",
    image: consoleImage
  },
  {
    title: "2 SOLID-STATE BATTERIES",
    description: "INCLUDED 3KW QUICK CHARGER (110-240V)",
    image: batteriesImage
  },
  {
    title: "180° CARBON FIBER SPRAY BOOM",
    description: "INCLUDED 3200 PSI GROUND PRESSURE PUMP WITH 100 METER WATER PIPE",
    image: sprayBoomImage
  },
  {
    title: "ALUMINIUM TRANSPORT CASE",
    description: "INCLUDED FULL TOOLKIT",
    image: caseImage
  }
];

const AllIncluded = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-accent">
            All included.
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
          <h3 className="font-heading text-3xl font-bold mb-8 text-center">Global Expert Support</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h4 className="font-semibold text-lg mb-2">Complimentary Staff Training</h4>
              <p className="text-muted-foreground">Professional training included with every purchase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h4 className="font-semibold text-lg mb-2">24/7 High Priority Technical Support</h4>
              <p className="text-muted-foreground">Round-the-clock online technical assistance</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h4 className="font-semibold text-lg mb-2">Lifetime Maintenance Guarantee</h4>
              <p className="text-muted-foreground">Three year warranty with lifetime maintenance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllIncluded;
