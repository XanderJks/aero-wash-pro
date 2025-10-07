import { useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoDemo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const videoId = "kcfs1-ryKWE";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-accent/10 rounded-full">
              <span className="text-accent font-semibold text-sm uppercase tracking-wide">Live Demo</span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Watch it Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              20-story building cleaned in 3 hours. Zero scaffolding. Zero risk. 100% results.
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
                    <div className="inline-block px-3 py-1 bg-accent/90 rounded-full mb-3">
                      <span className="text-primary font-bold text-xs uppercase tracking-wider">Time-Lapse</span>
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-1">
                      Complete Building Transformation
                    </h3>
                    <p className="text-white/80 text-base">
                      Real job, real results
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative text-center p-8 rounded-2xl bg-card/80 backdrop-blur-sm border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
                <div className="text-6xl font-bold bg-gradient-to-br from-accent to-accent/70 bg-clip-text text-transparent mb-3">3h</div>
                <p className="text-foreground font-medium text-sm uppercase tracking-wide">Complete 20-Story Clean</p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative text-center p-8 rounded-2xl bg-card/80 backdrop-blur-sm border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
                <div className="text-6xl font-bold bg-gradient-to-br from-accent to-accent/70 bg-clip-text text-transparent mb-3">0</div>
                <p className="text-foreground font-medium text-sm uppercase tracking-wide">Safety Incidents Ever</p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative text-center p-8 rounded-2xl bg-card/80 backdrop-blur-sm border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
                <div className="text-6xl font-bold bg-gradient-to-br from-accent to-accent/70 bg-clip-text text-transparent mb-3">60%</div>
                <p className="text-foreground font-medium text-sm uppercase tracking-wide">Lower Than Traditional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
