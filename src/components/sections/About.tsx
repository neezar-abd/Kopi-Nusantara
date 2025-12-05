"use client";

import { useEffect, useRef } from "react";
import { Sofa, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Sofa,
    title: "Cozy Atmosphere",
    description: "Interior nyaman dengan pencahayaan pas, bikin betah nongkrong seharian",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Buka pagi sampai malam, cocok untuk morning person sampai night owl",
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "Tempat berkumpulnya kreator, freelancer, dan siapa aja yang butuh space",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

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
      id="about"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="hidden sm:block absolute top-20 right-0 w-72 h-72 bg-coksu/5 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-20 left-0 w-96 h-96 bg-beige-100/50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="animate-on-scroll animate-fade-in opacity-0 inline-block text-coksu text-xs sm:text-sm tracking-[0.2em] uppercase font-medium mb-3 sm:mb-4">
            Tentang Kami
          </span>
          <h2 className="animate-on-scroll animate-fade-in-up animation-delay-200 opacity-0 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brown-dark font-semibold mb-4 sm:mb-6 tracking-tight">
            More Than Just
            <br />
            <span className="text-coksu">A Coffee Shop</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-12 sm:mb-24">
          {/* Image */}
          <div className="animate-on-scroll animate-slide-in-left opacity-0 relative">
            {/* Decorative frame */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-full h-full border-2 border-coksu/20 rounded-2xl" />
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop"
                alt="Cozy cafe interior"
                className="w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-coffee/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-4 right-4 sm:-bottom-8 sm:-right-8 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl sm:shadow-2xl max-w-[150px] sm:max-w-[200px] hover-lift">
              <p className="font-serif text-2xl sm:text-4xl text-coksu font-bold mb-1">1000+</p>
              <p className="text-brown text-xs sm:text-sm">Happy Customers Monthly</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="animate-on-scroll animate-slide-in-right animation-delay-200 opacity-0 mt-8 lg:mt-0">
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-brown-dark font-semibold mb-4 sm:mb-6">
              Tempat Nongkrong yang Lo Cari
            </h3>
            <p className="text-brown text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Kopi Nusantara bukan cuma tempat ngopi biasa. Kita adalah "third place" — 
              tempat antara rumah dan kantor di mana lo bisa kerja produktif, ngobrol santai, 
              atau sekadar me-time dengan secangkir kopi hangat.
            </p>
            <p className="text-brown text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Dengan interior cozy, WiFi kencang, dan barista yang ramah, kita siap jadi 
              tempat favorit lo buat nongkrong. Entah sendiri, sama temen, atau meeting sama klien — 
              semua welcome di sini.
            </p>
            <a
              href="#facilities"
              className="inline-flex items-center gap-2 text-coksu-dark font-medium hover:text-coksu transition-colors duration-300 group text-sm sm:text-base"
            >
              Lihat Fasilitas
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`animate-on-scroll animate-fade-in-up opacity-0 ${
                index === 1 ? "animation-delay-200" : index === 2 ? "animation-delay-400" : ""
              } bg-cream rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 text-center hover:shadow-lg transition-all duration-500 hover:-translate-y-2`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-beige-100 rounded-full mb-4 sm:mb-6">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-coksu-dark" />
              </div>
              <h4 className="font-serif text-lg sm:text-xl text-brown-dark font-semibold mb-2 sm:mb-3">
                {feature.title}
              </h4>
              <p className="text-brown text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
