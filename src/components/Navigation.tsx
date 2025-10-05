import { useState } from "react";
import { Menu, X, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
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
            <a href="mailto:info@skywash.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@skywash.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+1 (234) 567-890</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button onClick={() => scrollToSection("hero")} className="font-heading font-bold text-2xl text-accent">
              SkyWash
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("features")} className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </button>
            <button onClick={() => scrollToSection("industries")} className="text-foreground hover:text-primary transition-colors font-medium">
              Industries
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-foreground hover:text-primary transition-colors font-medium">
              Testimonials
            </button>
            <Button onClick={() => scrollToSection("contact")} variant="hero">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("features")} className="text-left py-2 hover:text-primary transition-colors font-medium">
                Features
              </button>
              <button onClick={() => scrollToSection("industries")} className="text-left py-2 hover:text-primary transition-colors font-medium">
                Industries
              </button>
              <button onClick={() => scrollToSection("about")} className="text-left py-2 hover:text-primary transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection("testimonials")} className="text-left py-2 hover:text-primary transition-colors font-medium">
                Testimonials
              </button>
              <Button onClick={() => scrollToSection("contact")} variant="hero" className="w-full">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
