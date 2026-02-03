import cakeImage from "@/assets/specialty-cake.jpg";
import cupcakeImage from "@/assets/specialty-cupcakes.jpg";
import browniesImage from "@/assets/specialty-brownies.jpg";
import cookiesImage from "@/assets/specialty-cookies.jpg";

const SpecialtiesSection = () => {
  const specialties = [
    {
      name: "Celebration Cakes",
      description: "Custom cakes for birthdays, anniversaries, and special occasions. Available in various flavors and designs.",
      image: cakeImage,
      badge: "Most Popular"
    },
    {
      name: "Artisan Cupcakes",
      description: "Beautifully decorated cupcakes with our signature buttercream frosting. Perfect for parties and gifts.",
      image: cupcakeImage,
      badge: null
    },
    {
      name: "Fudgy Brownies",
      description: "Rich, chocolatey brownies with that perfect gooey center. A chocolate lover's dream come true.",
      image: browniesImage,
      badge: "Customer Favorite"
    },
    {
      name: "Fresh Cookies",
      description: "Soft, chewy cookies in classic flavors. Chocolate chip, oatmeal raisin, and more varieties available.",
      image: cookiesImage,
      badge: null
    }
  ];

  return (
    <section id="specialties" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-rose-light text-rose-foreground rounded-full text-sm font-medium mb-4">
            Our Menu
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
            Our Specialties
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            From classic favorites to custom creations, every item is baked fresh with premium ingredients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {specialties.map((item, index) => (
            <div
              key={item.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {item.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Orders CTA */}
        <div className="mt-16 bg-gradient-to-r from-rose-light via-secondary to-rose-light rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
            Custom Orders for Special Events
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Planning a birthday, wedding, or celebration? We create custom cakes and treat boxes 
            tailored to your theme and preferences.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Inquire About Custom Orders
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
