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
    <section id="hero" className="relative bg-white pt-24 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          <div>
            <div className="inline-block border-2 border-primary px-4 py-2 mb-8">
              <span className="text-sm font-mono tracking-wider text-primary">SKYWASHPRO S1</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-primary leading-[0.95] tracking-tight">
              Industrial<br/>cleaning<br/>drone
            </h1>

            <div className="space-y-4 mb-12 text-lg">
              <p className="text-gray-700">
                Pressure-wash buildings, solar panels, and turbines from ground level. No scaffolding. No crew risk. 60% cost reduction.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToContact} className="bg-primary text-white px-8 py-4 font-semibold hover:bg-primary/90 transition-colors">
                REQUEST DEMO
              </button>
              <button onClick={scrollToContact} className="border-2 border-primary text-primary px-8 py-4 font-semibold hover:bg-primary hover:text-white transition-colors">
                GET PRICING
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="SkyWashPro S1 industrial cleaning drone"
              className="w-full"
              loading="eager"
            />
            <div className="absolute bottom-8 left-8 bg-accent px-6 py-3">
              <div className="text-primary font-bold text-2xl">3200 PSI</div>
              <div className="text-primary text-sm">INDUSTRIAL POWER</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
