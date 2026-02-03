import { ClipboardList, MessageSquare, ChefHat, Truck } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: ClipboardList,
      step: "01",
      title: "Choose Your Items",
      description: "Browse our menu and select your favorite treats. Mix and match to create your perfect order."
    },
    {
      icon: MessageSquare,
      step: "02",
      title: "Place Your Order",
      description: "Contact us via WhatsApp at least 2-3 days in advance. We'll confirm availability and pricing."
    },
    {
      icon: ChefHat,
      step: "03",
      title: "Fresh Baking",
      description: "We bake your order fresh on the scheduled day using quality ingredients and lots of love."
    },
    {
      icon: Truck,
      step: "04",
      title: "Pickup or Delivery",
      description: "Collect your fresh treats from our kitchen or opt for delivery to your doorstep."
    }
  ];

  return (
    <section id="how-it-works" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-rose-light text-rose-foreground rounded-full text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
            How Pre-Orders Work
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ordering from Arbish's Bakery is simple and convenient. Here's how it works:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={item.title}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
              )}
              
              <div className="bg-card rounded-2xl p-8 text-center border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 relative z-10">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-rose-light rounded-full flex items-center justify-center mx-auto">
                    <item.icon className="w-10 h-10 text-rose-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 sm:right-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            <strong className="text-foreground">Note:</strong> Please place orders at least 2-3 days in advance. 
            Custom cakes may require 5-7 days notice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
