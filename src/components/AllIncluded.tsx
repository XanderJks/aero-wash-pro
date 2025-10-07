import consoleImage from "@/assets/console.jpg";
import batteriesImage from "@/assets/batteries.jpg";
import sprayBoomImage from "@/assets/spray-boom.png";
import caseImage from "@/assets/case.jpg";

const includedItems = [
  {
    title: "Control System",
    description: "5.5-inch HD display, 15km transmission range, night vision capability",
    image: consoleImage,
    alt: "Professional drone control system"
  },
  {
    title: "Power System",
    description: "Dual battery configuration with rapid charging station",
    image: batteriesImage,
    alt: "High-capacity battery system"
  },
  {
    title: "Cleaning Assembly",
    description: "Carbon fiber boom, 3200 PSI pump, 100m pressure line",
    image: sprayBoomImage,
    alt: "Industrial pressure washing system"
  },
  {
    title: "Transport Case",
    description: "Aluminum protective case with integrated tool storage",
    image: caseImage,
    alt: "Professional transport case"
  }
];

const AllIncluded = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-4">COMPLETE SYSTEM</div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Everything Included
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Full operational package ready for immediate deployment. No additional equipment required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {includedItems.map((item) => (
            <div key={item.title} className="bg-background rounded-sm border border-border overflow-hidden hover:border-foreground/20 transition-colors">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-background rounded-sm border border-border p-12">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 rounded-sm bg-foreground text-background flex items-center justify-center text-xl font-bold mb-6">1</div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Professional Training</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Comprehensive operator certification program included with purchase</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-sm bg-foreground text-background flex items-center justify-center text-xl font-bold mb-6">2</div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">24/7 Technical Support</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Direct engineering team access for operational assistance</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-sm bg-foreground text-background flex items-center justify-center text-xl font-bold mb-6">3</div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">3-Year Warranty</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Comprehensive coverage with lifetime maintenance options</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllIncluded;
