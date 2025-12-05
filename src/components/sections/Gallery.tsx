"use client";

import { useEffect, useRef, useState } from "react";
import { Instagram, ExternalLink } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
    alt: "Cozy cafe interior",
    span: "col-span-2 row-span-2",
    mobileSpan: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop",
    alt: "Working at cafe",
    span: "col-span-1 row-span-1",
    mobileSpan: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=800&auto=format&fit=crop",
    alt: "Coffee shop atmosphere",
    span: "col-span-1 row-span-1",
    mobileSpan: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop",
    alt: "Cafe seating area",
    span: "col-span-1 row-span-1",
    mobileSpan: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=800&auto=format&fit=crop",
    alt: "Friends hanging out",
    span: "col-span-1 row-span-1",
    mobileSpan: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      id="gallery"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative Background - Hidden on mobile */}
      <div className="hidden sm:block absolute top-0 right-0 w-96 h-96 bg-coksu/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="hidden sm:block absolute bottom-0 left-0 w-96 h-96 bg-beige-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="animate-on-scroll animate-fade-in opacity-0 inline-block text-coksu text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium mb-3 sm:mb-4">
            Galeri
          </span>
          <h2 className="animate-on-scroll animate-fade-in-up animation-delay-200 opacity-0 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brown-dark font-semibold mb-4 sm:mb-6 tracking-tight">
            Vibes <span className="text-coksu">Kedai Kami</span>
          </h2>
          <p className="animate-on-scroll animate-fade-in-up animation-delay-400 opacity-0 max-w-2xl mx-auto text-sm sm:text-base text-brown leading-relaxed px-2">
            Intip suasana hangat dan cozy yang menanti lo di sini
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="animate-on-scroll animate-fade-in-up opacity-0 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 auto-rows-[120px] sm:auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.span} relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-coffee/60 flex items-center justify-center transition-all duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-white text-center transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <ExternalLink className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2" />
                  <p className="text-xs sm:text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="animate-on-scroll animate-fade-in-up opacity-0 text-center mt-8 sm:mt-12">
          <a
            href="https://instagram.com/neezar_abd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-coksu to-coksu-dark text-white rounded-full text-sm sm:text-base font-medium hover:shadow-xl hover:shadow-coksu/25 transition-all duration-300 hover:scale-105 group"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
            Follow @kopinusantara
          </a>
        </div>
      </div>
    </section>
  );
}
