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
        <img src={heroImage} alt="Professional drone cleaning building exterior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
            SkyWash S-Series 1
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl leading-relaxed">
            Cut cleaning costs up to 60% – safer, faster, smarter. Engineered to clean high buildings, houses, solar panels and billboards – anything high, safe and fast.
          </p>

          <div className="flex flex-row gap-4">
            <Button onClick={scrollToContact} variant="hero" size="xl">
              Request a Quote
            </Button>
            <Button onClick={scrollToContact} variant="outline" size="xl" className="bg-white/10 border-accent text-white hover:bg-accent hover:text-primary backdrop-blur-sm">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
