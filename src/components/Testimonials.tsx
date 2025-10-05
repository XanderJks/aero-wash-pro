import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James Mitchell",
    position: "Facilities Director",
    company: "TechCorp Industries",
    content: "AltitudeWash has completely transformed how we maintain our manufacturing facilities. The safety improvements alone justify the investment, but the cost savings and efficiency gains are remarkable.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    position: "Operations Manager",
    company: "Global Logistics Group",
    content: "We manage over 50 warehouses nationwide, and AltitudeWash's drone technology has reduced our building maintenance costs by 55%. The service is exceptional and the results are outstanding.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    position: "VP of Property Management",
    company: "Skyline Commercial Real Estate",
    content: "As a property management company, we need reliable, cost-effective solutions. AltitudeWash delivers every time. Our clients are consistently impressed with the results.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about their experience with AltitudeWash
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-card">
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
