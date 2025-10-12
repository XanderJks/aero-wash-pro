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
    <section id="industries" className="py-32 bg-gradient-hero relative overflow-hidden">
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow"></div>
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">Applications</span>
          </div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="gradient-text">Commercial Cleaning Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
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
                className={`group relative overflow-hidden bg-card rounded-3xl border border-primary/10 hover:border-primary/30 card-hover shadow-card ${sizes[index]}`}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={industry.image}
                    alt={industry.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent"></div>
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <h3 className="text-2xl font-bold mb-2 text-white">{industry.title}</h3>
                      <p className="text-sm text-white/90 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">{industry.description}</p>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
