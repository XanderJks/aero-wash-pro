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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(185_85%_42%_/_0.08),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_hsl(35_95%_55%_/_0.06),_transparent_50%)]"></div>
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-32">
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
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-foreground">60%</div>
                <div className="text-sm text-muted-foreground mt-1">Cost Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">5x</div>
                <div className="text-sm text-muted-foreground mt-1">Faster Operations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">0</div>
                <div className="text-sm text-muted-foreground mt-1">Safety Incidents</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-elegant border border-primary/10 animate-float">
              <img
                src={heroImage}
                alt="Professional drone performing high-altitude building exterior cleaning with pressure washing system"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-accent text-accent-foreground px-8 py-5 rounded-2xl shadow-glow backdrop-blur-sm border border-accent/20">
              <div className="text-lg font-bold">3200 PSI</div>
              <div className="text-xs font-medium opacity-90">Pressure Power</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
