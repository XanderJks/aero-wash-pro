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
    <section id="hero" className="relative min-h-[70vh] md:min-h-screen flex items-center pt-20 md:pt-32 pb-8 md:pb-16">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Fallback image */}
        <img src={heroImage} alt="Professional drone cleaning building exterior" className="w-full h-full object-cover opacity-40" />
        
        {/* Video element - replace the src with your actual video file */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/videos/drone-cleaning.mp4" type="video/mp4" />
          {/* Add more source formats if needed */}
        </video>
        
        <div className="absolute inset-0 bg-gradient-sky"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">

          <div className="inline-block mb-3 md:mb-4">
            <span className="text-accent text-sm md:text-base font-semibold tracking-wider uppercase px-4 py-2 bg-accent/10 rounded-full border border-accent/30 backdrop-blur-sm">
              Revolutionary Cleaning Technology
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-primary-foreground leading-tight">
            SkyWash S-Series 1
          </h1>

          <p className="text-base sm:text-lg md:text-2xl mb-6 md:mb-8 text-primary-foreground/90 max-w-2xl leading-relaxed">
            Cut cleaning costs up to 60% – safer, faster, smarter. Engineered to clean high buildings, houses, solar panels and billboards – anything high, safe and fast.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button onClick={scrollToContact} size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-glow hover:shadow-glow hover:scale-105 transition-all">
              Request a Quote
            </Button>
            <Button onClick={scrollToContact} variant="outline" size="lg" className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white hover:text-secondary backdrop-blur-sm font-semibold hover:scale-105 transition-all">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
