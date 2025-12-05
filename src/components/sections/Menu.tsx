"use client";

import { useEffect, useRef, useState } from "react";

const categories = ["Semua", "Coffee", "Non-Coffee", "Snacks", "Main Course"];

const menuItems = [
  // Coffee
  {
    name: "Espresso",
    description: "Shot kopi murni dengan crema sempurna",
    price: "22.000",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Cappuccino",
    description: "Espresso dengan steamed milk dan foam lembut",
    price: "32.000",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Es Kopi Susu",
    description: "Signature blend dengan gula aren dan susu segar",
    price: "28.000",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    name: "V60 Single Origin",
    description: "Pour over dengan biji pilihan single origin",
    price: "38.000",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
  },
  // Non-Coffee
  {
    name: "Matcha Latte",
    description: "Premium matcha dengan susu pilihan",
    price: "35.000",
    category: "Non-Coffee",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Chocolate",
    description: "Belgian chocolate dengan susu hangat atau dingin",
    price: "30.000",
    category: "Non-Coffee",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Fresh Juice",
    description: "Pilihan: Orange, Watermelon, atau Mixed",
    price: "25.000",
    category: "Non-Coffee",
    image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Lemon Tea",
    description: "Teh segar dengan irisan lemon",
    price: "20.000",
    category: "Non-Coffee",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop",
  },
  // Snacks
  {
    name: "French Fries",
    description: "Kentang goreng crispy dengan saus pilihan",
    price: "25.000",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    name: "Roti Bakar",
    description: "Pilihan: Coklat, Keju, atau Selai Kacang",
    price: "22.000",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Croissant",
    description: "Butter croissant fresh from oven",
    price: "28.000",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Pisang Goreng",
    description: "Pisang goreng crispy dengan madu",
    price: "20.000",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?q=80&w=800&auto=format&fit=crop",
  },
  // Main Course
  {
    name: "Nasi Goreng",
    description: "Nasi goreng spesial dengan telur dan ayam",
    price: "35.000",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    name: "Indomie Goreng",
    description: "Indomie dengan topping telur dan sayuran",
    price: "25.000",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Chicken Wings",
    description: "Sayap ayam goreng dengan saus BBQ/Spicy",
    price: "38.000",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Sandwich",
    description: "Sandwich dengan daging, keju, dan sayuran segar",
    price: "35.000",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Menu() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredItems =
    activeCategory === "Semua"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="animate-on-scroll animate-fade-in opacity-0 inline-block text-coksu text-xs sm:text-sm tracking-widest uppercase font-medium mb-3 sm:mb-4">
            Menu
          </span>
          <h2 className="animate-on-scroll animate-fade-in-up animation-delay-200 opacity-0 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brown-dark font-semibold mb-4 sm:mb-6">
            Food & <span className="text-coksu">Beverages</span>
          </h2>
          <p className="animate-on-scroll animate-fade-in-up animation-delay-400 opacity-0 max-w-2xl mx-auto text-brown text-sm sm:text-base">
            Dari kopi premium sampai makanan berat, semua ada buat nemenin nongkrong lo
          </p>
        </div>

        {/* Category Filter */}
        <div className="animate-on-scroll animate-fade-in-up opacity-0 flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-coksu text-white shadow-md"
                  : "bg-white text-brown hover:bg-beige-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.name}
              className="animate-on-scroll animate-fade-in-up opacity-0 group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-coffee/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {item.popular && (
                  <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-coksu text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
                    Popular
                  </span>
                )}
                <span className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium text-brown">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 lg:p-6">
                <h3 className="font-serif text-sm sm:text-base lg:text-lg text-brown-dark font-semibold mb-1 sm:mb-2 group-hover:text-coksu-dark transition-colors duration-300 line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-brown text-xs sm:text-sm mb-2 sm:mb-4 line-clamp-2 hidden sm:block">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-coksu-dark font-semibold text-xs sm:text-sm lg:text-base">
                    Rp {item.price}
                  </span>
                  <button className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-beige-100 text-brown hover:bg-coksu hover:text-white transition-all duration-300 flex items-center justify-center">
                    <span className="text-base sm:text-lg lg:text-xl">+</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="animate-on-scroll animate-fade-in-up opacity-0 text-center mt-8 sm:mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-coksu text-white rounded-full font-medium hover:bg-coksu-dark transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            Lihat Menu Lengkap
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
