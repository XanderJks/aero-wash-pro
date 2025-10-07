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
          <div className="inline-block mb-4 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
            <span className="text-accent font-semibold text-sm tracking-wide">SkyWashPro S1</span>
          </div>

          <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 text-primary-foreground leading-[1.1]">
            Reinig gevels vanaf de grond.<br/>
            <span className="text-accent">Geen steigers. Geen zorgen.</span>
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-primary-foreground/95 max-w-2xl font-light">
            Deze drone doet het werk van 4 man in de helft van de tijd. Koop 'm vandaag, verdien 'm terug in 6 maanden.
          </p>

          <div className="flex gap-6 mb-10 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Tot 60% kostenreductie</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">4x sneller dan traditioneel</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollToContact} variant="hero" size="lg" className="w-full sm:w-auto">
              Bekijk demo
            </Button>
            <Button onClick={scrollToContact} variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm">
              Vraag offerte aan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
