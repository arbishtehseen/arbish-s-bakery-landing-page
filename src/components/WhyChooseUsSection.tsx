import { Sparkles, Award, ShieldCheck, Palette } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Sparkles,
      title: "Freshly Baked on Order",
      description: "No stale treats here! Every item is baked fresh specifically for your order, ensuring maximum freshness and flavor."
    },
    {
      icon: Award,
      title: "Quality Ingredients",
      description: "We use premium butter, real vanilla, high-quality chocolate, and fresh eggs. No artificial preservatives or shortcuts."
    },
    {
      icon: ShieldCheck,
      title: "Hygienic Preparation",
      description: "Our home kitchen follows strict hygiene standards. Your health and safety is our top priority."
    },
    {
      icon: Palette,
      title: "Customization Available",
      description: "From flavors to decorations, we work with you to create treats that match your vision and dietary needs."
    }
  ];

  return (
    <section id="why-us" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-rose-light text-rose-foreground rounded-full text-sm font-medium mb-4">
              Why Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
              Why Choose<br />Arbish's Bakery?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're not just another bakery – we're your neighbors who pour heart and soul into 
              every bake. Here's what makes us special:
            </p>

            <div className="grid gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border/50 hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-rose-light rounded-full flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-rose-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats/Trust Badges */}
          <div className="bg-gradient-to-br from-rose-light via-secondary to-gold-light rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-card/80 backdrop-blur rounded-2xl">
                <div className="text-4xl sm:text-5xl font-display font-bold text-primary mb-2">
                  500+
                </div>
                <p className="text-muted-foreground text-sm">
                  Happy Customers
                </p>
              </div>
              <div className="text-center p-6 bg-card/80 backdrop-blur rounded-2xl">
                <div className="text-4xl sm:text-5xl font-display font-bold text-primary mb-2">
                  100%
                </div>
                <p className="text-muted-foreground text-sm">
                  Fresh Baked
                </p>
              </div>
              <div className="text-center p-6 bg-card/80 backdrop-blur rounded-2xl">
                <div className="text-4xl sm:text-5xl font-display font-bold text-primary mb-2">
                  50+
                </div>
                <p className="text-muted-foreground text-sm">
                  Custom Designs
                </p>
              </div>
              <div className="text-center p-6 bg-card/80 backdrop-blur rounded-2xl">
                <div className="text-4xl sm:text-5xl font-display font-bold text-primary mb-2">
                  5★
                </div>
                <p className="text-muted-foreground text-sm">
                  Customer Rating
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-foreground font-display text-lg italic">
                "Quality over quantity, always."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
