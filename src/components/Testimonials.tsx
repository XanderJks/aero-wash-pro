import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James Mitchell",
    position: "Facilities Director",
    company: "TechCorp Industries",
    content: "SkyWashPro has completely transformed how we maintain our manufacturing facilities. The safety improvements alone justify the investment, but the cost savings and efficiency gains are remarkable.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    position: "Operations Manager",
    company: "Global Logistics Group",
    content: "We manage over 50 warehouses nationwide, and SkyWashPro's drone technology has reduced our building maintenance costs by 55%. The service is exceptional and the results are outstanding.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    position: "VP of Property Management",
    company: "Skyline Commercial Real Estate",
    content: "As a property management company, we need reliable, cost-effective solutions. SkyWashPro delivers every time. Our clients are consistently impressed with the results.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary max-w-3xl leading-[0.95] tracking-tight">
            What operators say
          </h2>
          <div className="h-1 w-32 bg-primary"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-1 max-w-6xl">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="bg-white p-12 hover:bg-primary hover:text-white transition-all duration-300 group">
              <div className="text-6xl font-bold text-primary/20 group-hover:text-white/20 mb-6">"</div>
              <p className="text-xl text-gray-900 group-hover:text-white mb-10 leading-relaxed">
                {testimonial.content}
              </p>
              <div className="border-t-2 border-gray-200 group-hover:border-white/30 pt-6">
                <p className="font-bold text-primary group-hover:text-white text-lg mb-1">{testimonial.name}</p>
                <p className="text-gray-600 group-hover:text-white/80 text-sm">{testimonial.position}</p>
                <p className="text-gray-600 group-hover:text-white/80 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
