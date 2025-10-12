import villaImage from "@/assets/industry-villa.jpg";
import facadeImage from "@/assets/industry-facade.jpg";
import solarImage from "@/assets/industry-solar.jpg";
import advertisingImage from "@/assets/industry-advertising.jpg";
import shoppingImage from "@/assets/industry-shopping.jpg";
import windImage from "@/assets/industry-wind.jpg";

const industries = [
  {
    title: "High-Rise Buildings",
    description: "Commercial facade cleaning without scaffolding or swing stages",
    image: facadeImage,
    alt: "High-rise commercial building facade cleaning"
  },
  {
    title: "Solar Installations",
    description: "Panel maintenance without surface contact or efficiency loss",
    image: solarImage,
    alt: "Solar panel farm maintenance"
  },
  {
    title: "Residential Properties",
    description: "Premium villa exterior cleaning with zero accessibility issues",
    image: villaImage,
    alt: "Luxury residential exterior cleaning"
  },
  {
    title: "Outdoor Advertising",
    description: "Billboard maintenance without traffic disruption or crane rental",
    image: advertisingImage,
    alt: "Billboard and signage cleaning"
  },
  {
    title: "Retail Complexes",
    description: "Shopping center facade maintenance during operating hours",
    image: shoppingImage,
    alt: "Retail complex exterior cleaning"
  },
  {
    title: "Wind Energy",
    description: "Turbine blade cleaning without shutdown downtime",
    image: windImage,
    alt: "Wind turbine maintenance"
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-32 bg-muted relative overflow-hidden">
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
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Applications</span>
          </div>
          <h2 className="font-sans text-5xl md:text-6xl font-black leading-[0.9] mb-6 uppercase tracking-tight">
            Commercial<br/>Cleaning Solutions
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed font-mono">
            Deployed across multiple industries for professional cleaning operations requiring precision, safety, and efficiency.
          </p>
        </div>

        {/* Masonry-style grid with varying sizes */}
        <div className="grid md:grid-cols-6 gap-6">
          {industries.map((industry, index) => {
            const sizes = [
              'md:col-span-4 md:row-span-2', // 0: large
              'md:col-span-2 md:row-span-1', // 1: small
              'md:col-span-2 md:row-span-1', // 2: small
              'md:col-span-2 md:row-span-2', // 3: tall
              'md:col-span-2 md:row-span-1', // 4: small
              'md:col-span-4 md:row-span-1', // 5: wide
            ];
            
            return (
              <div 
                key={industry.title} 
                className={`group relative overflow-hidden bg-card brutalist-border hover:border-foreground transition-all duration-300 offset-shadow ${sizes[index]}`}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={industry.image}
                    alt={industry.alt}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-foreground/60"></div>
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="transform translate-y-0 transition-transform">
                      <div className="w-12 h-1 bg-primary mb-4"></div>
                      <h3 className="text-2xl font-black mb-2 text-background uppercase tracking-tight">{industry.title}</h3>
                      <p className="text-xs text-background/90 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono">{industry.description}</p>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
