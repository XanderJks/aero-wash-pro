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
    <section id="testimonials" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary max-w-2xl">
            What operators say
          </h2>
        </div>

        <div className="space-y-12 max-w-5xl">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="border-l-4 border-accent pl-12 py-8">
              <p className="text-2xl text-gray-900 mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.position}</p>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
