import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import droneLogo from "@/assets/Untitled Project(4).png";

const Navigation = () => {
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="bg-gradient-to-r from-primary via-primary to-primary/95 text-primary-foreground">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex justify-end items-center gap-8 text-sm">
            <a href="mailto:info@SkyWashPro.com" className="flex items-center gap-2 hover:opacity-80 transition-all hover:gap-3">
              <Mail className="h-4 w-4" />
              <span className="font-medium">info@SkyWashPro.com</span>
            </a>
            <a href="tel:+31638104765" className="flex items-center gap-2 hover:opacity-80 transition-all hover:gap-3">
              <Phone className="h-4 w-4" />
              <span className="font-medium">+31 6 38104765</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <button onClick={() => scrollToSection("hero")} className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-lg blur group-hover:blur-md transition-all"></div>
                <img src={droneLogo} alt="SkyWashPro Logo" className="relative h-10 w-10 transition-transform group-hover:scale-110 group-hover:rotate-6" />
              </div>
              <span className="font-heading font-bold text-3xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">SkyWashPro</span>
            </button>
          </div>

          <div className="flex items-center gap-10">
            <button onClick={() => scrollToSection("industries")} className="text-foreground/80 hover:text-primary transition-colors font-medium text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
              Industries
            </button>
            <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors font-medium text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
              About
            </Link>
            <Link to="/faq" className="text-foreground/80 hover:text-primary transition-colors font-medium text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
              FAQ
            </Link>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90 text-white border-0 shadow-lg hover:shadow-xl transition-all px-6 py-2.5 rounded-lg font-semibold"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
