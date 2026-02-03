import { MessageCircle, Mail } from "lucide-react";

const CTASection = () => {
  const handleWhatsApp = () => {
    const whatsappNumber = "1234567890"; // Replace with actual number
    const message = encodeURIComponent("Hi! I'd like to place a pre-order from Arbish's Bakery.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-primary via-primary to-primary/90 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-rose/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-gold/10 rounded-full translate-x-1/4 translate-y-1/4" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-primary-foreground mb-6">
              Ready to Order?
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Place your pre-order today and experience the joy of freshly baked treats 
              made with love, just for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-3 bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Order via WhatsApp
              </button>
              <a
                href="mailto:hello@arbishbakery.com"
                className="flex items-center gap-3 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
                Contact Us
              </a>
            </div>

            <p className="mt-8 text-primary-foreground/70 text-sm">
              Orders placed before 6 PM are confirmed same day. Please allow 2-3 days for standard orders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
