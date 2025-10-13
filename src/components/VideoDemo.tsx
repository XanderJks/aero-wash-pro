import { useState } from "react";
import { Play, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoDemo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const videoId = "1126769563";
  const thumbnailUrl = `https://vumbnail.com/${videoId}.jpg`;

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:64px_64px] opacity-20"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 mb-6">
                <div className="w-2 h-2 bg-background"></div>
                <span className="text-xs font-bold tracking-widest uppercase">About System</span>
              </div>

              <h2 className="font-sans text-5xl md:text-6xl font-black mb-6 text-foreground leading-tight uppercase tracking-tighter">
                Innovation In<br />
                <span className="industrial-line pl-6">Cleaning</span>
              </h2>

              <p className="text-lg text-foreground font-medium mb-8 leading-relaxed border-l-4 border-foreground pl-6">
                Revolutionary drone cleaning technology transforming the industry.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-foreground"></div>
                  <span className="text-foreground font-bold">Advanced autonomous technology</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-foreground"></div>
                  <span className="text-foreground font-bold">Proven across industries</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-foreground"></div>
                  <span className="text-foreground font-bold">Industry-leading safety</span>
                </div>
              </div>

              <div className="relative bg-background border-4 border-foreground p-8 offset-shadow">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-foreground/30 -translate-x-2 -translate-y-2"></div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-bold">Efficiency Boost</p>
                <p className="text-5xl font-black text-foreground mb-2">60%</p>
                <p className="text-sm text-muted-foreground font-medium">Faster than traditional</p>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="relative">
                {!isVideoOpen ? (
                  <div
                    className="relative overflow-hidden cursor-pointer border-4 border-foreground offset-shadow"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    <div className="aspect-[16/9] relative">
                      <img
                        src={thumbnailUrl}
                        alt="SkyWashPro drone cleaning demonstration video"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-foreground/40"></div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="bg-foreground text-background p-8 group-hover:scale-105 transition-transform">
                            <Play className="h-12 w-12 ml-1" fill="currentColor" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute top-6 left-6 bg-foreground text-background px-6 py-3 text-xs font-bold uppercase tracking-widest">
                        Watch Demo
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative border-4 border-foreground overflow-hidden offset-shadow">
                    <div className="aspect-[16/9]">
                      <iframe
                        className="w-full h-full"
                        src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`}
                        title="SkyWashPro Drone Cleaning Demo"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <button
                      className="absolute top-4 right-4 w-12 h-12 bg-foreground hover:bg-foreground/90 text-background flex items-center justify-center"
                      onClick={() => setIsVideoOpen(false)}
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-0 mt-8 border-4 border-foreground">
                <div className="relative p-6 border-r-2 border-foreground">
                  <div className="text-3xl font-black text-foreground">60%</div>
                  <div className="text-xs text-muted-foreground mt-2 uppercase tracking-widest font-bold">Cost Cut</div>
                </div>
                <div className="relative p-6 border-r-2 border-foreground">
                  <div className="text-3xl font-black text-foreground">5x</div>
                  <div className="text-xs text-muted-foreground mt-2 uppercase tracking-widest font-bold">Faster</div>
                </div>
                <div className="relative p-6">
                  <div className="text-3xl font-black text-foreground">100%</div>
                  <div className="text-xs text-muted-foreground mt-2 uppercase tracking-widest font-bold">Safe</div>
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
