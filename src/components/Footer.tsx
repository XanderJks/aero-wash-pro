import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (id: string) => {
    window.location.href = `/#${id}`;
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4">SkyWashPro</h3>
            <p className="text-primary-foreground/80 mb-4">
              Cut cleaning costs up to 60% – safer, faster, smarter. Three year warranty, lifetime maintenance, 24/7 online technical support.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Product</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>SkyWashPro S1 Drone</li>
              <li>Training & Certification</li>
              <li>Technical Support</li>
              <li>Warranty & Maintenance</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@SkyWashPro.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  info@SkyWashPro.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+971501234567" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +971 50 123 4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Compass Building, Al Hulaila<br />
                  Ras Al Khaimah, UAE
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              &copy; {new Date().getFullYear()} SkyWashPro. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
