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
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional drone performing high-altitude building exterior cleaning with pressure washing system"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">

          <h1 className="font-heading text-7xl font-bold mb-6 text-primary-foreground leading-tight">
            SkyWashPro Drone
          </h1>

          <p className="text-2xl mb-8 text-primary-foreground/90 max-w-2xl leading-relaxed">
            Stop risking lives on scaffolding. Our drones slash cleaning costs by 60% while keeping everyone safe on the ground.
          </p>

          <div className="flex flex-row gap-4">
            <Button onClick={scrollToContact} variant="hero" size="lg" className="w-auto">
              See Pricing
            </Button>
            <Button onClick={scrollToContact} variant="outline" size="lg" className="w-auto bg-white/10 border-accent text-white hover:bg-accent hover:text-primary backdrop-blur-sm">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
