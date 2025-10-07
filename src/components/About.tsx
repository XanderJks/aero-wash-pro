import { Wrench, Rocket, Shield, Package } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Wrench,
    title: "Built by Engineers, Not Marketers",
    description: "We design and manufacture every component in-house. No rebranded consumer drones with a spray bottle taped on. Real industrial equipment."
  },
  {
    icon: Shield,
    title: "We Actually Answer The Phone",
    description: "When your drone's down, your business is down. Call us at 3 AM if you need to. We're engineers who fix problems, not a call center reading scripts."
  },
  {
    icon: Package,
    title: "No Subscription Scams",
    description: "You buy the drone, you own it forever. No monthly fees, no cloud lock-in, no ransom-ware updates. Your equipment, your business."
  },
  {
    icon: Rocket,
    title: "Operators First",
    description: "We build what cleaning companies actually need, not what looks good in trade show demos. Input from 50+ real operators shaped every feature."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
              About SkyWashPro
            </h2>
            <p className="text-xl text-muted-foreground">
              We build drones that make money
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-16">
            <div className="bg-card border-2 border-border rounded-lg p-8 mb-8">
              <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">Why We Started This</h3>
              <p className="text-lg text-foreground/90 mb-4">
                Cleaning companies pay workers to risk their lives on scaffolding and lifts. Insurance is insane. One accident and you're done. The whole industry knows it's broken but nobody fixed it.
              </p>
              <p className="text-lg text-foreground/90">
                So we built a drone tough enough to handle industrial cleaning. Not a hobby drone with a garden sprayer - a real machine that can work 8 hours a day, every day, in actual commercial conditions.
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">What Makes Us Different</h3>
              <p className="text-lg text-foreground/90 mb-4">
                Most "industrial drones" are designed by people who've never run a cleaning business. They optimize for specs that look good in brochures but fall apart on real job sites.
              </p>
              <p className="text-lg text-foreground/90 mb-4">
                We spent two years with cleaning companies. Watched what actually breaks. What actually matters. What customers actually pay for. Then we built that.
              </p>
              <p className="text-lg text-foreground/90">
                The SkyWashPro S1 is overbuilt where it needs to be and simple everywhere else. No exotic materials that can't be repaired in the field. No proprietary parts that take six weeks to ship. Just tough, reliable equipment that earns its keep.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="font-heading text-3xl font-bold mb-8 text-center">How We Work</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="border-2 hover:border-primary transition-all duration-300">
                    <CardHeader>
                      <div className="mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h3 className="font-heading text-3xl font-bold mb-4">The Bottom Line</h3>
            <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
              We're not saving the world or disrupting industries. We're building equipment that helps cleaning companies make more money while keeping their workers safe. That's it. If that's what you need, we should talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
