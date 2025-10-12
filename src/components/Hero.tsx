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
    <section id="hero" className="relative bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-primary opacity-10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-accent opacity-10 rounded-full blur-3xl" style={{ animationDelay: '2s' }}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(185_85%_42%_/_0.05),_transparent_40%)]"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center min-h-screen py-32">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow"></div>
                <span className="text-xs font-semibold tracking-wider text-primary uppercase">SkyWashPro S1</span>
              </div>
              <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                <span className="text-foreground">Professional</span>
                <br />
                <span className="gradient-text">Drone Cleaning</span>
                <br />
                <span className="text-foreground">System</span>
              </h1>
            </div>

            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Industrial-grade autonomous cleaning solution. Reduce operational costs by 60% while eliminating safety risks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all h-14 px-10 text-base font-medium group"
              >
                Request Demo
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5 h-14 px-10 text-base font-medium"
              >
                Technical Specs
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity"></div>
                <div className="relative p-6 border-l-4 border-primary">
                  <div className="text-4xl font-bold gradient-text">60%</div>
                  <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">Cost Reduction</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity"></div>
                <div className="relative p-6 border-l-4 border-primary">
                  <div className="text-4xl font-bold gradient-text">5x</div>
                  <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">Faster Operations</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity"></div>
                <div className="relative p-6 border-l-4 border-primary">
                  <div className="text-4xl font-bold gradient-text">0</div>
                  <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">Safety Incidents</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[45%]">
            {/* Glow effects */}
            <div className="absolute -inset-8 bg-gradient-primary opacity-20 blur-3xl rounded-full animate-pulse-glow"></div>
            <div className="absolute -top-12 -right-12 w-72 h-72 bg-gradient-accent opacity-30 blur-2xl rounded-full"></div>
            
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 bg-gradient-to-br from-primary via-transparent to-accent opacity-20 rounded-3xl"></div>
              
              <div className="aspect-[3/4] relative rounded-3xl overflow-hidden shadow-elegant border-4 border-background animate-float">
                <img
                  src={heroImage}
                  alt="Professional drone performing high-altitude building exterior cleaning with pressure washing system"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-8 -left-8 bg-gradient-accent text-accent-foreground px-10 py-6 rounded-2xl shadow-glow backdrop-blur-sm border border-accent/20">
                <div className="text-2xl font-bold">3200 PSI</div>
                <div className="text-sm font-medium opacity-90">Pressure Power</div>
              </div>
              
              {/* Decorative dot pattern */}
              <div className="absolute -top-6 -left-6 w-24 h-24 opacity-30">
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
