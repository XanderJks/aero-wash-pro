import { Target, Users, Award, TrendingUp, User } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Marcus van der Berg",
    role: "CEO & Co-Founder",
    bio: "Former aerospace engineer at Airbus. Lost a colleague to a fall in 2021—that's when SkyWashPro was born.",
    expertise: "Drone systems, flight operations"
  },
  {
    name: "Sarah Al-Mansouri",
    role: "CTO & Co-Founder",
    bio: "Robotics PhD from MIT. Built autonomous systems for offshore oil platforms before turning to building maintenance.",
    expertise: "AI, computer vision, automation"
  },
  {
    name: "James Rodriguez",
    role: "Head of Operations",
    bio: "20 years managing commercial cleaning operations. Knows every building surface and every safety regulation.",
    expertise: "Project management, client relations"
  }
];

const milestones = [
  { year: "2022", event: "Company founded after fatal workplace accident", icon: Target },
  { year: "2022", event: "First successful building cleaning in Amsterdam", icon: Award },
  { year: "2023", event: "Expanded to UAE market, 50+ buildings cleaned", icon: TrendingUp },
  { year: "2024", event: "ISO 9001 certified, 200+ projects completed", icon: Award },
  { year: "2025", event: "Launched solar farm and wind turbine services", icon: TrendingUp }
];

const values = [
  {
    title: "Safety First, Always",
    description: "If it's not safe, we don't do it. No deadline is worth a life."
  },
  {
    title: "Honest Pricing",
    description: "Fixed quotes, no hidden fees. We say what we'll charge and we charge what we say."
  },
  {
    title: "Quality Without Compromise",
    description: "We're perfectionists. If we're not satisfied with the clean, we do it again."
  },
  {
    title: "Environmental Responsibility",
    description: "Less water, biodegradable solutions, minimal carbon footprint. Clean buildings shouldn't dirty the planet."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Who We Are
            </h2>
            <p className="text-xl text-muted-foreground">
              The team that got tired of watching people risk their lives cleaning windows
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-lg text-foreground/90 mb-6">
              Three years ago, we watched another window washer fall. That was the moment we decided: there has to be a better way. So we built it. Engineers, pilots, and building managers came together to design a drone that could do the dangerous work safely.
            </p>
            <p className="text-lg text-foreground/90">
              We've cleaned over 200 buildings so far—from Amsterdam offices to Dubai skyscrapers. Every project proves the same thing: drones work better, cost less, and nobody gets hurt. That's what matters.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="font-heading text-3xl font-bold mb-8 text-center">Our Leadership Team</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <Card key={member.name} className="border-2 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 mx-auto">
                      <User className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center">{member.name}</CardTitle>
                    <CardDescription className="text-center font-semibold text-primary">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                    <p className="text-xs text-foreground font-semibold">
                      Expertise: <span className="text-muted-foreground font-normal">{member.expertise}</span>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="font-heading text-3xl font-bold mb-8 text-center">Our Journey</h3>
            <div className="space-y-4 max-w-3xl mx-auto">
              {milestones.map((milestone) => {
                const Icon = milestone.icon;
                return (
                  <div key={milestone.year} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-primary text-lg">{milestone.year}</div>
                      <div className="text-foreground">{milestone.event}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="font-heading text-3xl font-bold mb-8 text-center">Our Values</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="border-2 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-card border-2 border-border hover:border-primary transition-all duration-300">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                End workplace deaths in building maintenance through drone technology
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card border-2 border-border hover:border-primary transition-all duration-300">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Our Team</h3>
              <p className="text-muted-foreground">
                Certified drone pilots, safety inspectors, and engineers who understand buildings
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
