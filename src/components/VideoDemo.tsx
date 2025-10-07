import { useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoDemo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const videoId = "dQw4w9WgXcQ";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
              See It <span className="text-accent">In Action</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch how our drone tackles a 20-story building in under 3 hours. No ropes, no lifts, no risk.
            </p>
          </div>

          <div className="relative">
            {!isVideoOpen ? (
              <div
                className="relative rounded-2xl overflow-hidden shadow-elegant cursor-pointer group"
                onClick={() => setIsVideoOpen(true)}
              >
                <div className="aspect-video relative">
                  <img
                    src={thumbnailUrl}
                    alt="SkyWashPro drone cleaning demonstration video"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent transition-all duration-300 group-hover:from-primary/90 group-hover:via-primary/50"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-30"></div>
                      <Button
                        size="lg"
                        className="relative h-20 w-20 rounded-full bg-accent hover:bg-accent/90 text-primary shadow-2xl group-hover:scale-110 transition-transform duration-300"
                      >
                        <Play className="h-8 w-8 fill-current ml-1" />
                      </Button>
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-white text-2xl font-bold mb-2">
                      Full Building Cleaning Demo
                    </h3>
                    <p className="text-white/90 text-lg">
                      3 hours of work in 3 minutes
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="SkyWashPro Drone Cleaning Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 text-white"
                  onClick={() => setIsVideoOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">3 Hours</div>
              <p className="text-muted-foreground">Average cleaning time for 20-story building</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Safety record - zero incidents</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">60%</div>
              <p className="text-muted-foreground">Cost savings vs traditional methods</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
