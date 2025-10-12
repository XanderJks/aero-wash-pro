import { useState } from "react";
import { Play, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoDemo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const videoId = "1126564149";
  const thumbnailUrl = `https://vumbnail.com/${videoId}.jpg`;

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Diagonal split background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-card clip-diagonal"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-4">ABOUT SKYWASHPRO</div>

              <h2 className="font-sans text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Innovation in Cleaning
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Learn about our revolutionary drone cleaning technology and how we are transforming the industry.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-1 h-1 bg-foreground rounded-full"></div>
                  <span className="text-foreground">Advanced autonomous cleaning technology</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-1 h-1 bg-foreground rounded-full"></div>
                  <span className="text-foreground">Proven results across multiple industries</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-1 h-1 bg-foreground rounded-full"></div>
                  <span className="text-foreground">Industry-leading safety standards</span>
                </div>
              </div>

              <div className="relative bg-gradient-card border-l-4 border-primary p-8 rounded-2xl shadow-card">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-primary opacity-10 blur-2xl rounded-full"></div>
                <p className="text-xs text-primary uppercase tracking-wider mb-3 font-semibold">Efficiency Boost</p>
                <p className="text-4xl font-bold gradient-text mb-2">60% Faster</p>
                <p className="text-sm text-muted-foreground">Than traditional cleaning methods</p>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="relative group">
                {!isVideoOpen ? (
                  <div
                    className="relative overflow-hidden cursor-pointer rounded-3xl border-4 border-primary/10 shadow-elegant"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    <div className="aspect-[16/9] relative">
                      <img
                        src={thumbnailUrl}
                        alt="SkyWashPro drone cleaning demonstration video"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent group-hover:from-foreground/40 transition-colors"></div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-primary opacity-30 blur-2xl rounded-full group-hover:opacity-50 transition-opacity"></div>
                          <div className="relative bg-gradient-primary rounded-full p-8 group-hover:scale-110 transition-transform shadow-glow">
                            <Play className="h-12 w-12 text-primary-foreground ml-1" fill="currentColor" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute top-6 left-6 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-glow">
                        Watch Demo
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative rounded-3xl overflow-hidden border-4 border-primary/20 shadow-elegant">
                    <div className="aspect-[16/9]">
                      <iframe
                        className="w-full h-full"
                        src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`}
                        title="SkyWashPro Drone Cleaning Demo"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 h-12 w-12 rounded-full bg-gradient-primary hover:shadow-glow text-primary-foreground"
                      onClick={() => setIsVideoOpen(false)}
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity"></div>
                  <div className="relative text-center p-6 bg-gradient-card border border-primary/10 rounded-2xl">
                    <div className="text-3xl font-bold gradient-text">60%</div>
                    <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">Cost Reduction</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity"></div>
                  <div className="relative text-center p-6 bg-gradient-card border border-primary/10 rounded-2xl">
                    <div className="text-3xl font-bold gradient-text">5x</div>
                    <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">Faster</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity"></div>
                  <div className="relative text-center p-6 bg-gradient-card border border-primary/10 rounded-2xl">
                    <div className="text-3xl font-bold gradient-text">100%</div>
                    <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">Safe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
