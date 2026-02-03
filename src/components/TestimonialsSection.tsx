import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Fatima Khan",
      role: "Birthday Celebration",
      content: "Ordered a custom cake for my daughter's birthday and it was absolutely stunning! The taste was even better than it looked. Will definitely order again.",
      rating: 5
    },
    {
      name: "Ahmed Raza",
      role: "Regular Customer",
      content: "The brownies from Arbish's Bakery are the best I've ever had. Rich, fudgy, and perfectly baked every single time. My family's new favorite!",
      rating: 5
    },
    {
      name: "Sara Ali",
      role: "Corporate Event",
      content: "Ordered cupcakes for our office event and everyone loved them! Professional service, beautiful presentation, and most importantly – delicious treats.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-rose-light text-rose-foreground rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it – hear from our happy customers!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-rose-light" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-rose-light rounded-full flex items-center justify-center">
                  <span className="text-lg font-display font-semibold text-rose-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
