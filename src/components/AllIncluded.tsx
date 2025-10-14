import consoleImage from "@/assets/console.jpg";
import batteriesImage from "@/assets/batteries.jpg";
import sprayBoomImage from "@/assets/spray-boom.png";
import caseImage from "@/assets/case.jpg";

const includedItems = [
  {
    title: "Product Video",
    description: "5.5-inch HD display, 15km transmission range, night vision capability",
    isVideo: true,
    videoUrl: "https://vimeo.com/1127243678",
    alt: "Drone cleaning system demonstration"
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
    title: "Control System",
    description: "5.5-inch HD display, 15km transmission range, night vision capability",
    image: consoleImage,
    alt: "Professional drone control system"
  }
];

const AllIncluded = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Industrial grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 mb-8 border-l-4 border-primary">
            <div className="w-2 h-2 bg-primary"></div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Complete System</span>
          </div>
          <h2 className="font-sans text-5xl md:text-6xl font-black leading-[0.9] mb-6 uppercase tracking-tight">
            Everything<br/>Included
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed font-mono">
            Full operational package ready for immediate deployment. No additional equipment required.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {includedItems.map((item, index) => (
            <div
              key={item.title}
              className={`group bg-card brutalist-border overflow-hidden hover:border-foreground transition-all duration-300 offset-shadow ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`overflow-hidden bg-muted relative ${index === 0 ? 'aspect-square' : 'aspect-square'}`}>
                {item.isVideo ? (
                  <iframe
                    src={`${item.videoUrl.replace('vimeo.com/', 'player.vimeo.com/video/')}?autoplay=1&loop=1&muted=1&background=1`}
                    className="w-full h-full object-cover"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title={item.alt}
                  ></iframe>
                ) : (
                  <>
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/10"></div>
                  </>
                )}
              </div>
              <div className="p-6 relative bg-background">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                <h3 className="text-lg font-bold mb-2 text-foreground uppercase tracking-tight pl-4">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-mono pl-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Support section */}
        <div className="relative bg-foreground text-background brutalist-border overflow-hidden">
          <div className="grid md:grid-cols-3 gap-0 relative">
            <div className="relative p-8 border-r border-background/20">
              <div className="w-16 h-16 bg-primary text-foreground flex items-center justify-center text-2xl font-black mb-6">01</div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Professional Training</h3>
              <p className="text-sm text-background/70 leading-relaxed font-mono">Comprehensive operator certification program included with purchase</p>
            </div>
            <div className="relative p-8 border-r border-background/20">
              <div className="w-16 h-16 bg-primary text-foreground flex items-center justify-center text-2xl font-black mb-6">02</div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">24/7 Technical Support</h3>
              <p className="text-sm text-background/70 leading-relaxed font-mono">Direct engineering team access for operational assistance</p>
            </div>
            <div className="relative p-8">
              <div className="w-16 h-16 bg-primary text-foreground flex items-center justify-center text-2xl font-black mb-6">03</div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">3-Year Warranty</h3>
              <p className="text-sm text-background/70 leading-relaxed font-mono">Comprehensive coverage with lifetime maintenance options</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllIncluded;
