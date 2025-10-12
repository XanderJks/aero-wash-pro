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
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Diagonal background stripe */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 transform -skew-y-3"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow"></div>
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">Complete System</span>
          </div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="gradient-text">Everything Included</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Full operational package ready for immediate deployment. No additional equipment required.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {includedItems.map((item, index) => (
            <div 
              key={item.title} 
              className={`group bg-card rounded-3xl border border-primary/10 overflow-hidden hover:border-primary/30 card-hover shadow-card ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`overflow-hidden bg-muted relative ${index === 0 ? 'aspect-square' : 'aspect-square'}`}>
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 left-6 w-12 h-1 bg-gradient-primary -translate-y-1/2"></div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Support section with diagonal design */}
        <div className="relative bg-gradient-card rounded-3xl border border-primary/10 overflow-hidden shadow-elegant">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary opacity-5 blur-3xl"></div>
          
          <div className="grid md:grid-cols-3 gap-12 p-12 relative">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-6 shadow-glow">1</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Professional Training</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Comprehensive operator certification program included with purchase</p>
              <div className="absolute -bottom-6 left-0 w-full h-px bg-gradient-to-r from-primary via-accent to-transparent"></div>
            </div>
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-6 shadow-glow">2</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">24/7 Technical Support</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Direct engineering team access for operational assistance</p>
              <div className="absolute -bottom-6 left-0 w-full h-px bg-gradient-to-r from-primary via-accent to-transparent"></div>
            </div>
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-6 shadow-glow">3</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">3-Year Warranty</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Comprehensive coverage with lifetime maintenance options</p>
              <div className="absolute -bottom-6 left-0 w-full h-px bg-gradient-to-r from-primary via-accent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllIncluded;
