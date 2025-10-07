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
    <section id="hero" className="relative h-screen flex items-end pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional drone performing high-altitude building exterior cleaning with pressure washing system"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pb-12">
        <div className="max-w-3xl">
          <h1 className="font-heading text-[7rem] font-bold mb-4 text-white leading-[0.95] tracking-tighter">
            Clean<br/>
            Buildings<br/>
            With Drones
          </h1>

          <div className="flex gap-3 items-baseline mb-8">
            <span className="text-5xl font-bold text-white">60%</span>
            <span className="text-xl text-white/80">cheaper than traditional methods</span>
          </div>

          <div className="flex gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 px-10 py-6 text-base font-bold"
            >
              See Pricing
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-foreground px-10 py-6 text-base font-bold"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
