import heroImage from "@/assets/hero-bakery.jpg";

const HeroSection = () => {
  const handlePreOrder = () => {
    const whatsappNumber = "1234567890"; // Replace with actual number
    const message = encodeURIComponent("Hi! I'd like to place a pre-order from Arbish's Bakery.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Freshly baked pastries from Arbish's Bakery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <span className="inline-block px-4 py-2 bg-rose-light text-rose-foreground rounded-full text-sm font-medium mb-6">
            Pre-Orders Only
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Arbish's Bakery
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl font-display italic text-muted-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Freshly baked with love, just for you
        </p>
        
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Every treat is baked fresh to order, using quality ingredients and crafted with care in our home kitchen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={handlePreOrder}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-100"
          >
            Pre-Order Now
          </button>
          <a
            href="#specialties"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
          >
            View Our Menu
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
