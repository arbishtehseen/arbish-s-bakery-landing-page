import { Heart, Leaf, Clock } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every treat is crafted with passion and care in our home kitchen."
    },
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description: "We use only the finest, quality ingredients for authentic flavors."
    },
    {
      icon: Clock,
      title: "Baked to Order",
      description: "Your treats are freshly baked only after you place your order."
    }
  ];

  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-rose-light text-rose-foreground rounded-full text-sm font-medium mb-4">
            Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
            About Arbish's Bakery
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Arbish's Bakery was born from a simple love for baking and a desire to share that 
            joy with our community. As a home-based pre-order bakery, we take pride in creating 
            each treat fresh, ensuring you receive the most delicious baked goods every single time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-8 text-center border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-rose-light rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-rose-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-3xl p-8 sm:p-12 border border-border/50">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-foreground font-display italic leading-relaxed">
              "We believe that the best baked goods are made with patience, quality ingredients, 
              and a whole lot of love. That's why we bake everything fresh to order – so you can 
              taste the difference in every bite."
            </p>
            <p className="mt-6 text-muted-foreground font-medium">
              — Arbish, Founder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
