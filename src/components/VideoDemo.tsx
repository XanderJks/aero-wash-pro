import { useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoDemo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const videoId = "kcfs1-ryKWE";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">
              See It In Action
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl">
              Watch our drone clean a 20-story building in under 3 hours. No ropes, no lifts, no risk.
            </p>
          </div>

          <div className="relative">
            {!isVideoOpen ? (
              <div
                className="relative overflow-hidden cursor-pointer group"
                onClick={() => setIsVideoOpen(true)}
              >
                <div className="aspect-video relative bg-gray-900">
                  <img
                    src={thumbnailUrl}
                    alt="SkyWashPro drone cleaning demonstration video"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="h-24 w-24 rounded-full bg-white hover:bg-gray-100 text-black shadow-xl group-hover:scale-105 transition-transform"
                    >
                      <Play className="h-10 w-10 fill-current ml-1.5" />
                    </Button>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                    <h3 className="text-white text-2xl font-bold mb-2">
                      Full Building Cleaning Demo
                    </h3>
                    <p className="text-gray-300">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-8 border-l-4 border-accent">
              <div className="text-5xl font-bold text-primary mb-3">3 Hours</div>
              <p className="text-gray-600 font-medium">Average cleaning time for 20-story building</p>
            </div>
            <div className="bg-white p-8 border-l-4 border-accent">
              <div className="text-5xl font-bold text-primary mb-3">100%</div>
              <p className="text-gray-600 font-medium">Safety record - zero incidents</p>
            </div>
            <div className="bg-white p-8 border-l-4 border-accent">
              <div className="text-5xl font-bold text-primary mb-3">60%</div>
              <p className="text-gray-600 font-medium">Cost savings vs traditional methods</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
