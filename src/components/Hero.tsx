import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-drone-cleaning.jpg";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional drone performing high-altitude building exterior cleaning with pressure washing system"
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/98 via-primary/92 to-primary/85"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 border border-white/20">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white tracking-wide">Revolutionizing Building Maintenance</span>
          </div>

          <h1 className="font-heading text-8xl font-bold mb-7 text-white leading-[1.1] tracking-tight">
            Own the Future of<br/>
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Building Maintenance</span>
          </h1>

          <p className="text-2xl mb-6 text-white/95 max-w-2xl leading-relaxed font-light">
            The SkyWashPro S1 - Industrial cleaning drone that cuts your clients' costs by 60%.
          </p>

          <div className="flex flex-col gap-4 mb-10 max-w-2xl">
            <div className="flex items-center gap-3 text-white/90">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-lg">Buy once, profit forever - no subscriptions</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-lg">Complete system - ready to deploy immediately</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-lg">5x faster than traditional methods</span>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-auto bg-accent hover:bg-accent/90 text-white border-0 shadow-2xl shadow-accent/30 group px-8 py-7 text-lg font-semibold rounded-xl"
            >
              Request Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="w-auto bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary px-8 py-7 text-lg font-semibold rounded-xl"
            >
              Get Price Quote
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
