import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (id: string) => {
    window.location.href = `/#${id}`;
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-sans font-bold text-xl mb-4 tracking-tight">SkyWashPro</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Professional drone cleaning systems for commercial operations. Engineered for precision, reliability, and safety.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-background/70 hover:text-background transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-background/70 hover:text-background transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-background/70 hover:text-background transition-colors text-sm">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li>SkyWashPro S1</li>
              <li>Training Program</li>
              <li>Technical Support</li>
              <li>Warranty Coverage</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@SkyWashPro.com" className="text-background/70 hover:text-background transition-colors text-sm">
                  info@SkyWashPro.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+31638104765" className="text-background/70 hover:text-background transition-colors text-sm">
                  +31 6 38104765
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  Ras Al Khaimah, UAE
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-xs">
              &copy; {new Date().getFullYear()} SkyWashPro. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <Link to="/privacy" className="text-background/50 hover:text-background transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-background/50 hover:text-background transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
