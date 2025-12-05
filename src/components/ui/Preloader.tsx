"use client";

import { useEffect, useState } from "react";
import { Coffee } from "lucide-react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Hide preloader after loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center bg-cream transition-all duration-700 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo Animation */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-coksu/20 rounded-full blur-2xl animate-pulse scale-150" />
        <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
          <Coffee className="w-12 h-12 text-coksu-dark animate-bounce" />
        </div>
      </div>

      {/* Brand Name */}
      <h1 className="font-serif text-3xl text-brown-dark font-semibold mb-8 tracking-wide">
        Kopi Nusantara
      </h1>

      {/* Progress Bar */}
      <div className="w-48 h-1 bg-beige-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-coksu to-coksu-dark rounded-full transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-brown/60 text-sm tracking-widest uppercase">
        Loading...
      </p>
    </div>
  );
}
