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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-foreground">
      {/* Red accent stripe */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 border-2 border-foreground flex items-center justify-center border-l-4 border-l-primary">
              <img src={droneLogo} alt="SkyWashPro Logo" className="w-10 h-10" />
            </div>
            <span className="font-sans font-black text-xl text-foreground tracking-tighter uppercase">SkyWashPro</span>
          </button>

          <div className="hidden md:flex items-center gap-2">
            <button 
              onClick={() => scrollToSection("industries")} 
              className="text-sm font-bold text-foreground hover:bg-foreground hover:text-background transition-colors px-6 py-3 uppercase tracking-wider"
            >
              Applications
            </button>
            <Link to="/about" className="text-sm font-bold text-foreground hover:bg-foreground hover:text-background transition-colors px-6 py-3 uppercase tracking-wider">
              About
            </Link>
            <Link to="/faq" className="text-sm font-bold text-foreground hover:bg-foreground hover:text-background transition-colors px-6 py-3 uppercase tracking-wider">
              FAQ
            </Link>
            <div className="ml-4 flex items-center gap-3 pl-4 border-l-2 border-foreground">
              <a href="mailto:info@SkyWashPro.com" className="w-10 h-10 border-2 border-foreground hover:bg-foreground hover:text-background flex items-center justify-center text-foreground transition-colors">
                <Mail className="h-4 w-4" />
              </a>
              <a href="tel:+31638104765" className="w-10 h-10 border-2 border-foreground hover:bg-foreground hover:text-background flex items-center justify-center text-foreground transition-colors">
                <Phone className="h-4 w-4" />
              </a>
            </div>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="ml-6 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 font-bold uppercase tracking-wider brutalist-border relative overflow-hidden group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
