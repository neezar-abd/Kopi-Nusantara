"use client";

import { useEffect, useRef } from "react";
import { MapPin, Clock, Phone, Mail, Instagram, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Lokasi",
    details: ["Kota Probolinggo", "Jawa Timur, Indonesia"],
  },
  {
    icon: Clock,
    title: "Jam Buka",
    details: ["Senin - Kamis: 08.00 - 22.00", "Jumat - Minggu: 08.00 - 23.00"],
  },
  {
    icon: Phone,
    title: "Reservasi",
    details: ["+62 838 9920 0333", "via WhatsApp"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["neezar.tech@gmail.com"],
  },
];

export default function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="animate-on-scroll animate-fade-in opacity-0 inline-block text-coksu text-xs sm:text-sm tracking-widest uppercase font-medium mb-3 sm:mb-4">
            Kontak & Reservasi
          </span>
          <h2 className="animate-on-scroll animate-fade-in-up animation-delay-200 opacity-0 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brown-dark font-semibold mb-4 sm:mb-6">
            Yuk <span className="text-coksu">Mampir!</span>
          </h2>
          <p className="animate-on-scroll animate-fade-in-up animation-delay-400 opacity-0 max-w-2xl mx-auto text-brown text-sm sm:text-base">
            Mau reservasi tempat atau sekedar nanya-nanya? Hubungi kita kapan aja!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="animate-on-scroll animate-slide-in-left opacity-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-6 sm:mb-8">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-cream rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-beige-100 rounded-full mb-3 sm:mb-4">
                    <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-coksu-dark" />
                  </div>
                  <h4 className="font-serif text-sm sm:text-lg text-brown-dark font-semibold mb-1 sm:mb-2">
                    {info.title}
                  </h4>
                  {info.details.map((detail, index) => (
                    <p key={index} className="text-brown text-xs sm:text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-beige-100 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h4 className="font-serif text-base sm:text-lg text-brown-dark font-semibold mb-3 sm:mb-4">
                Ikuti Kami
              </h4>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="https://instagram.com/neezar_abd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-brown hover:bg-coksu hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://wa.me/6283899200333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-brown hover:bg-coksu hover:text-white transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll animate-slide-in-right animation-delay-200 opacity-0">
            <div className="bg-cream rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8">
              <h3 className="font-serif text-xl sm:text-2xl text-brown-dark font-semibold mb-4 sm:mb-6">
                Reservasi / Tanya
              </h3>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-brown mb-1.5 sm:mb-2">
                      Nama
                    </label>
                    <input
                      type="text"
                      placeholder="Nama lo"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white rounded-lg sm:rounded-xl border border-beige-200 focus:border-coksu focus:ring-2 focus:ring-coksu/20 outline-none transition-all duration-300 text-brown-dark placeholder:text-beige-300 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-brown mb-1.5 sm:mb-2">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="08xxx"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white rounded-lg sm:rounded-xl border border-beige-200 focus:border-coksu focus:ring-2 focus:ring-coksu/20 outline-none transition-all duration-300 text-brown-dark placeholder:text-beige-300 text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-brown mb-1.5 sm:mb-2">
                      Tanggal
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white rounded-lg sm:rounded-xl border border-beige-200 focus:border-coksu focus:ring-2 focus:ring-coksu/20 outline-none transition-all duration-300 text-brown-dark placeholder:text-beige-300 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-brown mb-1.5 sm:mb-2">
                      Jumlah Orang
                    </label>
                    <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white rounded-lg sm:rounded-xl border border-beige-200 focus:border-coksu focus:ring-2 focus:ring-coksu/20 outline-none transition-all duration-300 text-brown-dark text-sm sm:text-base">
                      <option value="">Pilih</option>
                      <option value="1-2">1-2 orang</option>
                      <option value="3-5">3-5 orang</option>
                      <option value="6-10">6-10 orang</option>
                      <option value="10+">10+ orang</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-brown mb-1.5 sm:mb-2">
                    Keperluan
                  </label>
                  <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white rounded-lg sm:rounded-xl border border-beige-200 focus:border-coksu focus:ring-2 focus:ring-coksu/20 outline-none transition-all duration-300 text-brown-dark text-sm sm:text-base">
                    <option value="">Pilih keperluan</option>
                    <option value="reservasi">Reservasi Tempat</option>
                    <option value="meeting">Booking Meeting Room</option>
                    <option value="event">Event / Gathering</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-brown mb-1.5 sm:mb-2">
                    Catatan Tambahan
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ada request khusus? Tulis di sini..."
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white rounded-lg sm:rounded-xl border border-beige-200 focus:border-coksu focus:ring-2 focus:ring-coksu/20 outline-none transition-all duration-300 resize-none text-brown-dark placeholder:text-beige-300 text-sm sm:text-base"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 sm:py-4 bg-coksu text-white rounded-lg sm:rounded-xl font-medium hover:bg-coksu-dark transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
                >
                  Kirim Reservasi
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="animate-on-scroll animate-fade-in-up opacity-0 mt-10 sm:mt-16">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-[250px] sm:h-[350px] lg:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
              alt="Coffee shop interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-coffee/40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-4" />
                <p className="font-serif text-lg sm:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2">
                  Kopi Nusantara
                </p>
                <p className="text-white/80 text-sm sm:text-base">Kota Probolinggo, Jawa Timur, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
