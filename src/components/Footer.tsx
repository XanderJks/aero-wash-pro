import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4">SkyWashPro</h3>
            <p className="text-primary-foreground/80 mb-4">
              Cut cleaning costs up to 60% – safer, faster, smarter. Three year warranty, lifetime maintenance, 24/7 online technical support.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("features")} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("industries")} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Industries
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("testimonials")} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Building Exterior Cleaning</li>
              <li>Pressure Washing</li>
              <li>High-Altitude Maintenance</li>
              <li>Commercial Facility Care</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@skywash.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  info@skywash.com
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

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            &copy; {new Date().getFullYear()} SkyWashPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
