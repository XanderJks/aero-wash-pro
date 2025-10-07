import { Card } from "@/components/ui/card";
import consoleImage from "@/assets/console.jpg";
import batteriesImage from "@/assets/batteries.jpg";
import sprayBoomImage from "@/assets/spray-boom.png";
import caseImage from "@/assets/case.jpg";

const includedItems = [
  {
    title: "CONTROL SYSTEM",
    description: "5.5-inch HD screen, 15km range, night vision, touch controls",
    image: consoleImage,
    alt: "Professional drone control system with 5.5-inch HD screen and 15km range capabilities"
  },
  {
    title: "POWER SYSTEM",
    description: "Two batteries + fast charger, swap and keep working",
    image: batteriesImage,
    alt: "High-capacity drone battery system with fast charger for continuous operation"
  },
  {
    title: "CLEANING RIG",
    description: "Carbon fiber boom, 3200 PSI pump, 100m water line",
    image: sprayBoomImage,
    alt: "Carbon fiber spray boom with 3200 PSI industrial pressure washing system"
  },
  {
    title: "TRANSPORT CASE",
    description: "Aluminum case with toolkit, ready to travel",
    image: caseImage,
    alt: "Professional aluminum transport case with complete toolkit for drone cleaning system"
  }
];

const AllIncluded = () => {
  return (
    <section className="py-32 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.95] tracking-tight">
            Complete system
          </h2>
          <div className="h-1 w-32 bg-white"></div>
          <p className="text-2xl text-white/80 mt-8">Everything shipped in one case</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-32">
          {includedItems.map((item) => (
            <div key={item.title} className="bg-white/5 backdrop-blur-sm overflow-hidden group cursor-pointer hover:bg-white/10 transition-all">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <h3 className="font-bold text-sm mb-3 tracking-widest text-white">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="grid md:grid-cols-3 gap-1">
          <div className="bg-white/10 backdrop-blur-sm p-12 hover:bg-white/15 transition-all">
            <div className="text-7xl font-bold text-white mb-6">01</div>
            <h4 className="font-bold text-2xl mb-4 tracking-tight">Training Included</h4>
            <p className="text-white/80 text-lg">Full operator training with every purchase. Remote or on-site.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-12 hover:bg-white/15 transition-all">
            <div className="text-7xl font-bold text-white mb-6">02</div>
            <h4 className="font-bold text-2xl mb-4 tracking-tight">24/7 Support</h4>
            <p className="text-white/80 text-lg">Direct line to our engineering team. Any time, any timezone.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-12 hover:bg-white/15 transition-all">
            <div className="text-7xl font-bold text-white mb-6">03</div>
            <h4 className="font-bold text-2xl mb-4 tracking-tight">3-Year Warranty</h4>
            <p className="text-white/80 text-lg">Full coverage. Extended maintenance plans available.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllIncluded;
