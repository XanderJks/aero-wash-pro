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
    <section className="py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Complete system
          </h2>
          <p className="text-xl text-gray-400">Everything shipped in one case</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-24">
          {includedItems.map((item) => (
            <div key={item.title} className="bg-gray-800 overflow-hidden group cursor-pointer">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-sm mb-2 tracking-wider text-accent">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="grid md:grid-cols-3 gap-12 border-t border-gray-700 pt-16">
          <div>
            <div className="text-6xl font-bold text-accent mb-4">01</div>
            <h4 className="font-bold text-xl mb-3">Training Included</h4>
            <p className="text-gray-400">Full operator training with every purchase. Remote or on-site.</p>
          </div>
          <div>
            <div className="text-6xl font-bold text-accent mb-4">02</div>
            <h4 className="font-bold text-xl mb-3">24/7 Support</h4>
            <p className="text-gray-400">Direct line to our engineering team. Any time, any timezone.</p>
          </div>
          <div>
            <div className="text-6xl font-bold text-accent mb-4">03</div>
            <h4 className="font-bold text-xl mb-3">3-Year Warranty</h4>
            <p className="text-gray-400">Full coverage. Extended maintenance plans available.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllIncluded;
