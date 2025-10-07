import { useState } from "react";
import { Play, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoDemo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const videoId = "kcfs1-ryKWE";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="py-20 bg-white relative">
      <div className="absolute -bottom-16 left-0 w-full h-32 bg-primary transform -skew-y-2 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-1 mb-4">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <Star className="h-4 w-4 fill-accent text-accent" />
                <Star className="h-4 w-4 fill-accent text-accent" />
                <Star className="h-4 w-4 fill-accent text-accent" />
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="ml-2 text-sm text-gray-600">Trusted by 200+ contractors</span>
              </div>

              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-primary">
                Watch It Work
              </h2>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Real footage from a downtown Chicago job. 20 stories, 3 hours start to finish. Client saved $18,000 vs traditional methods.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                  <div>
                    <span className="font-semibold text-primary">No crew risk:</span>
                    <span className="text-gray-600"> All work done from ground level</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                  <div>
                    <span className="font-semibold text-primary">No scaffolding:</span>
                    <span className="text-gray-600"> Zero setup time or rental costs</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                  <div>
                    <span className="font-semibold text-primary">No downtime:</span>
                    <span className="text-gray-600"> Building stays operational during cleaning</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-accent p-6">
                <p className="text-sm text-gray-600 mb-2">AVERAGE PROJECT SAVINGS</p>
                <p className="text-3xl font-bold text-primary">$15,000 - $25,000</p>
                <p className="text-sm text-gray-500 mt-1">per 20-story building vs traditional cleaning</p>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="relative">
                {!isVideoOpen ? (
                  <div
                    className="relative overflow-hidden cursor-pointer group bg-gray-100"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    <div className="aspect-[4/3] relative">
                      <img
                        src={thumbnailUrl}
                        alt="SkyWashPro drone cleaning demonstration video"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white rounded-full p-6 shadow-lg group-hover:scale-105 transition-transform">
                          <Play className="h-10 w-10 text-primary ml-1" />
                        </div>
                      </div>

                      <div className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 text-sm font-bold">
                        3 MIN WATCH
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
                      className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/70 hover:bg-black text-white"
                      onClick={() => setIsVideoOpen(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-gray-50">
                  <div className="text-2xl font-bold text-primary">3h</div>
                  <div className="text-xs text-gray-600 mt-1">Job time</div>
                </div>
                <div className="text-center p-4 bg-gray-50">
                  <div className="text-2xl font-bold text-primary">0</div>
                  <div className="text-xs text-gray-600 mt-1">Incidents</div>
                </div>
                <div className="text-center p-4 bg-gray-50">
                  <div className="text-2xl font-bold text-primary">60%</div>
                  <div className="text-xs text-gray-600 mt-1">Cheaper</div>
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
