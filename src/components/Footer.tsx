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
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4">AltitudeWash</h3>
            <p className="text-primary-foreground/80 mb-4">
              Pioneering the future of commercial building maintenance with advanced drone technology.
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
                <a href="mailto:info@altitudewash.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  info@altitudewash.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  123 Innovation Drive<br />
                  Tech City, TC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            &copy; {new Date().getFullYear()} AltitudeWash Drones. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
