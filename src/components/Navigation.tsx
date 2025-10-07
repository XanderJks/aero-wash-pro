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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-foreground/10">
      <div className="bg-foreground text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-end items-center gap-8 text-sm">
            <a href="mailto:info@SkyWashPro.com" className="hover:opacity-70 transition-opacity">
              info@SkyWashPro.com
            </a>
            <a href="tel:+31638104765" className="hover:opacity-70 transition-opacity">
              +31 6 38104765
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-3 group">
            <img src={droneLogo} alt="SkyWashPro Logo" className="h-9 w-9" />
            <span className="font-heading font-bold text-2xl text-foreground">SkyWashPro</span>
          </button>

          <div className="flex items-center gap-12">
            <button onClick={() => scrollToSection("industries")} className="text-foreground hover:opacity-60 transition-opacity font-medium">
              Industries
            </button>
            <Link to="/about" className="text-foreground hover:opacity-60 transition-opacity font-medium">
              About
            </Link>
            <Link to="/faq" className="text-foreground hover:opacity-60 transition-opacity font-medium">
              FAQ
            </Link>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-foreground hover:bg-foreground/90 text-white px-8 py-2 font-bold"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
