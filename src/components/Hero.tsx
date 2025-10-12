import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-drone-cleaning.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative bg-background overflow-hidden">
      {/* Red accent bars */}
      <div className="absolute top-0 left-0 w-2 h-64 bg-primary z-10"></div>
      <div className="absolute bottom-0 right-0 w-2 h-64 bg-primary z-10"></div>
      <div className="absolute top-1/2 left-0 w-32 h-1 bg-primary transform -translate-y-1/2"></div>
      
      {/* Industrial grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      
      {/* Diagonal stripe with red accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary transform skew-x-12 translate-x-1/3 border-l-4 border-primary"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-24 items-center min-h-screen py-32">
          {/* Left Content */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 mb-8 border-l-4 border-primary">
                <div className="w-2 h-2 bg-primary animate-pulse"></div>
                <span className="text-xs font-bold tracking-widest uppercase">SkyWashPro S1</span>
              </div>
              <h1 className="font-sans text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter uppercase">
                Professional<br />
                Drone<br />
                <span className="industrial-line pl-6">Cleaning</span>
              </h1>
            </div>

            <p className="text-xl text-foreground max-w-xl font-medium border-l-4 border-foreground pl-6">
              Industrial-grade autonomous cleaning. 60% cost reduction. Zero safety risks.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <button
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-16 px-12 text-base font-bold uppercase tracking-wider transition-all brutalist-border group relative overflow-hidden"
              >
                <span className="relative z-10">Request Demo</span>
                <div className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="ml-3 group-hover:translate-x-2 transition-transform inline-block relative z-10">→</span>
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-foreground hover:bg-foreground hover:text-background h-16 px-12 text-base font-bold uppercase tracking-wider transition-all"
              >
                Tech Specs
              </button>
            </div>

            {/* Key Stats with red accents */}
            <div className="grid grid-cols-3 gap-0 pt-12 border-t-4 border-primary">
              <div className="relative p-6 border-r-2 border-foreground/20">
                <div className="w-12 h-1 bg-primary mb-3"></div>
                <div className="text-5xl font-black text-foreground mb-1">60%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Cost Cut</div>
              </div>
              <div className="relative p-6 border-r-2 border-foreground/20">
                <div className="w-12 h-1 bg-primary mb-3"></div>
                <div className="text-5xl font-black text-foreground mb-1">5x</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Speed</div>
              </div>
              <div className="relative p-6">
                <div className="w-12 h-1 bg-primary mb-3"></div>
                <div className="text-5xl font-black text-foreground mb-1">0</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Incidents</div>
              </div>
            </div>
          </div>

          {/* Right Image with red accents */}
          <div className="relative lg:absolute lg:right-12 lg:top-1/2 lg:-translate-y-1/2 lg:w-[40%]">
            <div className="relative">
              {/* Red corner accents */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-primary z-20"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-primary z-20"></div>
              
              {/* Industrial frame */}
              <div className="absolute -inset-4 border-4 border-foreground"></div>
              
              <div className="aspect-[3/4] relative overflow-hidden offset-shadow">
                <img
                  src={heroImage}
                  alt="Professional drone performing high-altitude building exterior cleaning with pressure washing system"
                  className="w-full h-full object-cover grayscale-[30%] contrast-110"
                  loading="eager"
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-foreground/20"></div>
              </div>
              
              {/* Floating data badge with red accent */}
              <div className="absolute -bottom-6 -left-6 bg-foreground text-background px-8 py-6 brutalist-border border-4 border-primary z-20">
                <div className="text-3xl font-black uppercase text-primary">3200</div>
                <div className="text-xs font-bold tracking-widest uppercase">PSI Power</div>
              </div>
              
              {/* Corner markers */}
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-foreground"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-foreground"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
