import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
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
      <div className="absolute inset-0 z-0 bg-gradient-hero">
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
            <Award className="h-5 w-5 text-accent" />
            <span className="text-primary-foreground font-medium">Industry-Leading Innovation Award 2024</span>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-accent-foreground leading-tight">
            SkyWash S-Series 1
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-accent-foreground/90 max-w-2xl leading-relaxed">
            Cut cleaning costs up to 60% – safer, faster, smarter. Engineered to clean high buildings, houses, solar panels and billboards – anything high, safe and fast.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollToContact} variant="hero" size="xl">
              Request a Quote
            </Button>
            <Button onClick={scrollToContact} variant="heroPrimary" size="xl">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
