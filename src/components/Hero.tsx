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
    <section id="hero" className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50/30 pt-24 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[85vh]">
          <div>
            <div className="inline-block border-3 border-primary px-5 py-2 mb-10">
              <span className="text-sm font-mono tracking-widest text-primary font-bold">SKYWASHPRO S1</span>
            </div>

            <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold mb-10 text-primary leading-[0.9] tracking-tighter">
              Industrial<br/>cleaning<br/>drone
            </h1>

            <div className="space-y-6 mb-14 text-xl max-w-lg">
              <p className="text-gray-700 leading-relaxed">
                Pressure-wash buildings, solar panels, and turbines from ground level. No scaffolding. No crew risk.
              </p>
              <div className="text-5xl font-bold text-primary">60%</div>
              <p className="text-gray-600 -mt-4">cost reduction vs traditional methods</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <button onClick={scrollToContact} className="bg-primary text-white px-10 py-5 font-bold text-sm tracking-wider hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                REQUEST DEMO
              </button>
              <button onClick={scrollToContact} className="border-3 border-primary text-primary px-10 py-5 font-bold text-sm tracking-wider hover:bg-primary hover:text-white transition-all">
                GET PRICING
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-3 border-primary/20 -z-10"></div>
            <img
              src={heroImage}
              alt="SkyWashPro S1 industrial cleaning drone"
              className="w-full shadow-2xl"
              loading="eager"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white px-8 py-6 shadow-2xl">
              <div className="font-bold text-4xl tracking-tight">3200</div>
              <div className="text-sm tracking-widest mt-1 font-semibold">PSI POWER</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
