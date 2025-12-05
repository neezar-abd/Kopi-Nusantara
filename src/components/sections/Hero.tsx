"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Play } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-100"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop')",
          transform: `scale(1.1) translateY(${scrollY * 0.3}px) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
      >
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-coffee/60 via-coffee/40 to-coffee/80" />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
      </div>

      {/* Floating Decorative Elements - Hidden on mobile */}
      <div 
        className="hidden md:block absolute top-1/4 left-10 w-32 h-32 border border-white/10 rounded-full transition-transform duration-300"
        style={{ transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)` }}
      />
      <div 
        className="hidden md:block absolute bottom-1/4 right-10 w-48 h-48 border border-white/5 rounded-full transition-transform duration-300"
        style={{ transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)` }}
      />
      <div 
        className="hidden md:block absolute top-1/3 right-1/4 w-2 h-2 bg-coksu/60 rounded-full transition-transform duration-300"
        style={{ transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` }}
      />
      <div 
        className="hidden md:block absolute bottom-1/3 left-1/4 w-3 h-3 bg-white/20 rounded-full transition-transform duration-300"
        style={{ transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)` }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-0">
        {/* Badge */}
        <div className="animate-on-scroll animate-fade-in-up opacity-0">
          <span className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-6 sm:mb-8 border border-white/10">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-coksu rounded-full animate-pulse" />
            Coffee & Co-working Space
          </span>
        </div>

        {/* Main Heading with letter animation effect */}
        <h1 className="animate-on-scroll animate-fade-in-up animation-delay-200 opacity-0 font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-semibold leading-[1.15] sm:leading-[1.1] mb-6 sm:mb-8 tracking-tight">
          <span className="block">Your Perfect</span>
          <span className="block mt-1 sm:mt-2 bg-linear-to-r from-coksu-light via-coksu to-coksu-light bg-clip-text text-transparent">
            Third Place
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-on-scroll animate-fade-in-up animation-delay-400 opacity-0 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed mb-8 sm:mb-12 px-2">
          Tempat nongkrong nyaman dengan kopi berkualitas, WiFi kencang, dan suasana yang bikin betah.
          <span className="hidden sm:block mt-1 text-white/50">Work, meet, or just chill — we got you covered.</span>
        </p>

        {/* CTA Buttons */}
        <div className="animate-on-scroll animate-fade-in-up animation-delay-600 opacity-0 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href="#contact"
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-coksu text-white rounded-full font-medium text-base sm:text-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-coksu/30"
          >
            <span className="relative z-10">Reservasi Sekarang</span>
            <div className="absolute inset-0 bg-linear-to-r from-coksu-dark to-coksu opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#facilities"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 backdrop-blur-md text-white border border-white/20 rounded-full font-medium text-base sm:text-lg hover:bg-white hover:text-brown-dark transition-all duration-500 hover:border-transparent"
          >
            Lihat Fasilitas
          </a>
          <button className="hidden sm:flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 ml-4">
            <span className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
              <Play className="w-4 h-4 ml-0.5" />
            </span>
            <span className="text-sm tracking-wide">Virtual Tour</span>
          </button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-white via-white/50 to-transparent" />
    </section>
  );
}
