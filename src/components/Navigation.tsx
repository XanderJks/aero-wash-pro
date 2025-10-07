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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-3 group">
            <img src={droneLogo} alt="SkyWashPro Logo" className="h-10 w-10" />
            <span className="font-sans font-bold text-xl text-foreground tracking-tight">SkyWashPro</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            <button onClick={() => scrollToSection("industries")} className="text-sm text-foreground hover:text-foreground/60 transition-colors px-4 py-2">
              Applications
            </button>
            <Link to="/about" className="text-sm text-foreground hover:text-foreground/60 transition-colors px-4 py-2">
              About
            </Link>
            <Link to="/faq" className="text-sm text-foreground hover:text-foreground/60 transition-colors px-4 py-2">
              FAQ
            </Link>
            <div className="ml-4 flex items-center gap-4 pl-4 border-l border-border">
              <a href="mailto:info@SkyWashPro.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" />
              </a>
              <a href="tel:+31638104765" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4" />
              </a>
            </div>
            <Button onClick={() => scrollToSection("contact")} className="ml-4 bg-foreground text-background hover:bg-foreground/90 h-10">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
