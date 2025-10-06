import { Target, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
              About AltitudeWash
            </h2>
            <p className="text-xl text-muted-foreground">
              Pioneering the future of commercial building maintenance
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-foreground/90 mb-6">
              AltitudeWash is at the forefront of drone technology innovation, revolutionizing how commercial and industrial buildings are cleaned and maintained. Our mission is to make high-altitude building maintenance safer, more efficient, and more cost-effective through cutting-edge autonomous drone technology.
            </p>
            <p className="text-lg text-foreground/90">
              Founded by industry experts with decades of combined experience in aviation, robotics, and commercial facility management, we've developed the most advanced pressure washing drone system on the market. Our technology has been tested and proven across hundreds of projects, serving some of the world's leading companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-card border-2 border-border hover:border-primary transition-all duration-300">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                Transform building maintenance with safe, innovative technology
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card border-2 border-border hover:border-primary transition-all duration-300">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Our Team</h3>
              <p className="text-muted-foreground">
                Expert engineers and industry professionals dedicated to excellence
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
