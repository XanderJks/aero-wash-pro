import { useState } from "react";
import { Menu, X, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      {/* Top Contact Bar */}
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

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button onClick={() => scrollToSection("hero")} className="font-heading font-bold text-2xl text-primary">
              SkyWashPro
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <button
              onClick={() => scrollToSection("industries")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Industries
            </button>
            <Link
              to="/about"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/faq"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Button onClick={() => scrollToSection("contact")} variant="hero" className="w-full">
              Request Demo
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
