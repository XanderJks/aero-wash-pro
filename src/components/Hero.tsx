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
    <section id="hero" className="relative bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-32">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-4">SkyWashPro S1</div>
              <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                Professional
                <br />
                Drone Cleaning
                <br />
                System
              </h1>
            </div>

            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Industrial-grade autonomous cleaning solution. Reduce operational costs by 60% while eliminating safety risks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 h-14 px-10 text-base font-medium"
              >
                Request Demo
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-2 border-foreground/20 hover:border-foreground h-14 px-10 text-base font-medium"
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
            <div className="aspect-[4/5] relative rounded-sm overflow-hidden">
              <img
                src={heroImage}
                alt="Professional drone performing high-altitude building exterior cleaning with pressure washing system"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-sm shadow-lg">
              <div className="text-sm font-semibold">3200 PSI</div>
              <div className="text-xs opacity-90">Pressure Power</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
