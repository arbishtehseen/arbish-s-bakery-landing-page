import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Arbish's Bakery
            </h3>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Freshly baked with love, just for you. A home-based pre-order bakery 
              crafting delicious treats for every occasion.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#specialties" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Our Treats
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#specialties" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Celebration Cakes
                </a>
              </li>
              <li>
                <a href="#specialties" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Artisan Cupcakes
                </a>
              </li>
              <li>
                <a href="#specialties" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Fudgy Brownies
                </a>
              </li>
              <li>
                <a href="#specialties" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Fresh Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-foreground/70" />
                <span className="text-primary-foreground/70">
                  Home-based kitchen<br />
                  City, Country
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary-foreground/70" />
                <a href="tel:+1234567890" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary-foreground/70" />
                <a href="mailto:hello@arbishbakery.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  hello@arbishbakery.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Arbish's Bakery. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Made with ❤️ and lots of butter
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
