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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img src={droneLogo} alt="SkyWashPro Logo" className="h-12 w-12 relative rounded-full border-2 border-primary/20" />
            </div>
            <span className="font-sans font-bold text-xl gradient-text tracking-tight">SkyWashPro</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            <button 
              onClick={() => scrollToSection("industries")} 
              className="relative text-sm text-foreground hover:text-primary transition-colors px-5 py-2.5 group"
            >
              <span className="relative z-10">Applications</span>
              <div className="absolute inset-0 bg-primary/5 rounded-lg scale-0 group-hover:scale-100 transition-transform"></div>
            </button>
            <Link to="/about" className="relative text-sm text-foreground hover:text-primary transition-colors px-5 py-2.5 group">
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-primary/5 rounded-lg scale-0 group-hover:scale-100 transition-transform"></div>
            </Link>
            <Link to="/faq" className="relative text-sm text-foreground hover:text-primary transition-colors px-5 py-2.5 group">
              <span className="relative z-10">FAQ</span>
              <div className="absolute inset-0 bg-primary/5 rounded-lg scale-0 group-hover:scale-100 transition-transform"></div>
            </Link>
            <div className="ml-4 flex items-center gap-3 pl-4">
              <a href="mailto:info@SkyWashPro.com" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                <Mail className="h-4 w-4" />
              </a>
              <a href="tel:+31638104765" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                <Phone className="h-4 w-4" />
              </a>
            </div>
            <Button 
              onClick={() => scrollToSection("contact")} 
              className="ml-6 bg-gradient-primary text-primary-foreground hover:shadow-glow h-11 px-6 font-medium"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
