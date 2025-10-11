import { useState } from "react";
import { Play, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoDemo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const videoId = "-W_nFlIAWFM";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-4">KLANTERVARING</div>

              <h2 className="font-sans text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Ontdek de Voordelen
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Bekijk hoe onze drone cleaning oplossing werkt en waarom professionals kiezen voor SkyWashPro.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-1 h-1 bg-foreground rounded-full"></div>
                  <span className="text-foreground">Veilig werken vanaf de grond</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-1 h-1 bg-foreground rounded-full"></div>
                  <span className="text-foreground">Sneller en efficiënter dan traditionele methoden</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-1 h-1 bg-foreground rounded-full"></div>
                  <span className="text-foreground">Kostenbesparing tot 60%</span>
                </div>
              </div>

              <div className="bg-secondary border-l-2 border-foreground p-6 rounded-sm">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">KOSTENVOORDEEL</p>
                <p className="text-3xl font-bold text-foreground">€15.000 - €25.000</p>
                <p className="text-sm text-muted-foreground mt-1">Gemiddelde besparing per groot gebouw</p>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="relative">
                {!isVideoOpen ? (
                  <div
                    className="relative overflow-hidden cursor-pointer group bg-muted border border-border rounded-sm"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    <div className="aspect-[4/3] relative">
                      <img
                        src={thumbnailUrl}
                        alt="SkyWashPro drone cleaning demonstration video"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-foreground rounded-sm p-6 group-hover:scale-105 transition-transform">
                          <Play className="h-10 w-10 text-background ml-1" fill="currentColor" />
                        </div>
                      </div>

                      <div className="absolute top-4 left-4 bg-foreground text-background px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                        REVIEW
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="aspect-[4/3]">
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
                      className="absolute top-4 right-4 h-10 w-10 rounded-sm bg-foreground/90 hover:bg-foreground text-background"
                      onClick={() => setIsVideoOpen(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-secondary border border-border rounded-sm">
                  <div className="text-2xl font-bold text-foreground">5x</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Sneller</div>
                </div>
                <div className="text-center p-4 bg-secondary border border-border rounded-sm">
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Veilig</div>
                </div>
                <div className="text-center p-4 bg-secondary border border-border rounded-sm">
                  <div className="text-2xl font-bold text-foreground">60%</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Besparing</div>
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
