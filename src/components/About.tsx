import { Target, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Who We Are
            </h2>
            <p className="text-xl text-muted-foreground">
              The team that got tired of watching people risk their lives cleaning windows
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-foreground/90 mb-6">
              Three years ago, we watched another window washer fall. That was the moment we decided: there has to be a better way. So we built it. Engineers, pilots, and building managers came together to design a drone that could do the dangerous work safely.
            </p>
            <p className="text-lg text-foreground/90">
              We've cleaned over 200 buildings so far—from Amsterdam offices to Dubai skyscrapers. Every project proves the same thing: drones work better, cost less, and nobody gets hurt. That's what matters.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-card border-2 border-border hover:border-primary transition-all duration-300">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Why We Exist</h3>
              <p className="text-muted-foreground">
                End workplace deaths in building maintenance
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card border-2 border-border hover:border-primary transition-all duration-300">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Who We Are</h3>
              <p className="text-muted-foreground">
                Drone pilots, safety inspectors, and engineers who actually understand buildings
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
