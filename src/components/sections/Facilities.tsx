"use client";

import { useEffect, useRef } from "react";
import { Wifi, Plug, Users, Clock, Music, Snowflake, Car, Coffee } from "lucide-react";

const facilities = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Internet 100 Mbps gratis untuk semua pengunjung. Streaming dan meeting lancar jaya!",
  },
  {
    icon: Plug,
    title: "Power Outlets",
    description: "Stop kontak di setiap meja. Laptop dan gadget lo aman, ga perlu rebutan colokan.",
  },
  {
    icon: Users,
    title: "Meeting Room",
    description: "Private room untuk meeting, workshop, atau gathering. Bisa booking via WhatsApp.",
  },
  {
    icon: Clock,
    title: "Open Late",
    description: "Buka sampai jam 11 malam. Cocok buat yang suka begadang produktif.",
  },
  {
    icon: Music,
    title: "Chill Vibes",
    description: "Playlist yang pas buat kerja atau santai. Volume yang nyaman, ga bikin berisik.",
  },
  {
    icon: Snowflake,
    title: "AC Sejuk",
    description: "Ruangan full AC dengan suhu yang pas. Adem dan nyaman seharian.",
  },
  {
    icon: Car,
    title: "Parking Area",
    description: "Lahan parkir luas untuk motor dan mobil. Dijaga satpam 24 jam.",
  },
  {
    icon: Coffee,
    title: "Refill Friendly",
    description: "Diskon 50% untuk refill kopi. Ngopi terus tanpa bikin kantong jebol.",
  },
];

const spaces = [
  {
    title: "Main Area",
    description: "Open space dengan meja komunal dan individual. Perfect for casual work.",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop",
    capacity: "50+ seats",
  },
  {
    title: "Quiet Zone",
    description: "Area khusus untuk fokus kerja. No loud calls, no group meetings.",
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop",
    capacity: "15 seats",
  },
  {
    title: "Meeting Room",
    description: "Private room dengan TV, whiteboard, dan video call setup.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    capacity: "8-12 people",
  },
];

export default function Facilities() {
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
      id="facilities"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="hidden sm:block absolute top-20 left-0 w-72 h-72 bg-coksu/5 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-20 right-0 w-96 h-96 bg-beige-100/50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="animate-on-scroll animate-fade-in opacity-0 inline-block text-coksu text-xs sm:text-sm tracking-[0.2em] uppercase font-medium mb-3 sm:mb-4">
            Fasilitas
          </span>
          <h2 className="animate-on-scroll animate-fade-in-up animation-delay-200 opacity-0 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brown-dark font-semibold mb-4 sm:mb-6 tracking-tight">
            Lengkap untuk <span className="text-coksu">Nongkrong</span>
          </h2>
          <p className="animate-on-scroll animate-fade-in-up animation-delay-400 opacity-0 max-w-2xl mx-auto text-brown text-sm sm:text-base">
            Semua yang lo butuhkan untuk kerja, meeting, atau sekadar hangout bareng temen
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-16 sm:mb-24">
          {facilities.map((facility, index) => (
            <div
              key={facility.title}
              className="animate-on-scroll animate-fade-in-up opacity-0 group bg-cream rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-beige-100 rounded-full mb-3 sm:mb-4 group-hover:bg-coksu group-hover:text-white transition-all duration-300">
                <facility.icon className="w-5 h-5 sm:w-6 sm:h-6 text-coksu-dark group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-serif text-sm sm:text-base lg:text-lg text-brown-dark font-semibold mb-1 sm:mb-2">
                {facility.title}
              </h4>
              <p className="text-brown text-xs sm:text-sm leading-relaxed hidden sm:block">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

        {/* Spaces Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="animate-on-scroll animate-fade-in-up opacity-0 font-serif text-2xl sm:text-3xl lg:text-4xl text-brown-dark font-semibold mb-3 sm:mb-4">
              Pilih <span className="text-coksu">Space</span> Lo
            </h3>
            <p className="animate-on-scroll animate-fade-in-up animation-delay-200 opacity-0 text-brown text-sm sm:text-base">
              Berbagai area sesuai kebutuhan dan mood lo hari ini
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {spaces.map((space, index) => (
              <div
                key={space.title}
                className="animate-on-scroll animate-fade-in-up opacity-0 group relative rounded-xl sm:rounded-2xl overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-4/5 sm:aspect-3/4">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-coffee via-coffee/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <span className="inline-block px-2 py-1 sm:px-3 sm:py-1 bg-coksu/90 text-white text-[10px] sm:text-xs rounded-full mb-2 sm:mb-3">
                    {space.capacity}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl text-white font-semibold mb-1 sm:mb-2">
                    {space.title}
                  </h4>
                  <p className="text-white/80 text-xs sm:text-sm line-clamp-2">
                    {space.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="animate-on-scroll animate-fade-in-up opacity-0 text-center">
          <div className="bg-linear-to-r from-beige-100 via-cream to-beige-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-brown-dark font-semibold mb-3 sm:mb-4">
              Mau booking meeting room?
            </h3>
            <p className="text-brown text-sm sm:text-base mb-6 max-w-xl mx-auto">
              Hubungi kami via WhatsApp untuk reservasi meeting room atau area khusus untuk event lo
            </p>
            <a
              href="https://wa.me/6283899200333"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-coksu text-white rounded-full font-medium hover:bg-coksu-dark transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Chat WhatsApp
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
