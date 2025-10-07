import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-end items-center gap-6 text-sm">
            <a href="mailto:info@SkyWashPro.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span>info@SkyWashPro.com</span>
            </a>
            <a href="tel:+31638104765" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span>+31 6 38104765</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button onClick={() => scrollToSection("hero")} className="font-heading font-bold text-2xl text-primary">
              SkyWashPro
            </button>
          </div>

          <div className="flex items-center gap-8">
            <button onClick={() => scrollToSection("industries")} className="text-foreground hover:text-primary transition-colors font-medium">
              Industries
            </button>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link to="/faq" className="text-foreground hover:text-primary transition-colors font-medium">
              FAQ
            </Link>
            <Button onClick={() => scrollToSection("contact")} variant="hero">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
