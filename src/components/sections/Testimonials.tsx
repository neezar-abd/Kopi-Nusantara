"use client";

import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Wijaya",
    role: "Freelance Designer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Tempat kerja favorit gue! WiFi kencang, colokan di mana-mana, dan kopinya enak. Barista-nya juga ramah banget. Hampir tiap hari nongkrong di sini.",
  },
  {
    id: 2,
    name: "Budi Santoso",
    role: "Software Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Perfect buat WFH! Suasana tenang, AC adem, dan menu makanannya lumayan lengkap. Gue bisa produktif seharian di sini tanpa bosen.",
  },
  {
    id: 3,
    name: "Amanda Chen",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Aesthetic banget buat foto! Interior-nya Instagram-worthy, cahaya bagus, dan makanannya juga fotogenic. Konten gue selalu on point kalau ambil di sini.",
  },
  {
    id: 4,
    name: "Rizki Pratama",
    role: "Startup Founder",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Meeting room-nya oke banget! Pernah booking buat pitching ke investor, suasananya profesional tapi tetap santai. Recommended buat meeting bisnis!",
  },
  {
    id: 5,
    name: "Dina Putri",
    role: "College Student",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Tempat tongkrongan paling enak! Harganya masih student-friendly, WiFi kencang buat streaming, dan bisa duduk lama tanpa diusir. Love it!",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 bg-cream relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="hidden sm:block absolute top-20 left-10 w-32 h-32 border border-coksu/20 rounded-full" />
      <div className="hidden sm:block absolute bottom-20 right-10 w-48 h-48 border border-coksu/10 rounded-full" />
      <div className="hidden sm:block absolute top-1/2 left-1/4 w-2 h-2 bg-coksu/30 rounded-full" />
      <div className="hidden sm:block absolute top-1/3 right-1/3 w-3 h-3 bg-coksu/20 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="animate-on-scroll animate-fade-in opacity-0 inline-block text-coksu text-xs sm:text-sm tracking-[0.2em] uppercase font-medium mb-3 sm:mb-4">
            Testimoni
          </span>
          <h2 className="animate-on-scroll animate-fade-in-up animation-delay-200 opacity-0 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brown-dark font-semibold mb-4 sm:mb-6 tracking-tight">
            Kata <span className="text-coksu">Mereka</span>
          </h2>
          <p className="animate-on-scroll animate-fade-in-up animation-delay-400 opacity-0 max-w-2xl mx-auto text-brown leading-relaxed">
            Dengarkan pengalaman para pelanggan setia kami
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="animate-on-scroll animate-fade-in-up opacity-0 relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-coksu rounded-full flex items-center justify-center shadow-lg z-10">
            <Quote className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="hidden sm:block absolute top-0 right-0 w-64 h-64 bg-beige-50 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              {/* Testimonial Content */}
              <div className="text-center mb-6 sm:mb-8">
                <p className="text-sm sm:text-lg md:text-xl text-brown leading-relaxed italic">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4 sm:mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-coksu fill-coksu"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover ring-2 sm:ring-4 ring-beige-100"
                />
                <div className="text-left">
                  <h4 className="font-serif text-base sm:text-lg text-brown-dark font-semibold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-brown/60 text-xs sm:text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brown hover:bg-coksu hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-1.5 sm:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 sm:w-8 bg-coksu"
                      : "w-2 bg-beige-300 hover:bg-coksu/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brown hover:bg-coksu hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
