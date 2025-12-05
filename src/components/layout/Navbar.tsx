"use client";

import { useState, useEffect } from "react";
import { Menu, X, Coffee } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Facilities", href: "#facilities" },
  { name: "Menu", href: "#menu" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3 sm:py-4"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-1.5 sm:gap-2 group"
          >
            <Coffee
              className={`w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-300 ${
                isScrolled ? "text-coksu-dark" : "text-white"
              } group-hover:text-coksu`}
            />
            <span
              className={`font-serif text-lg sm:text-xl lg:text-2xl font-semibold transition-colors duration-300 ${
                isScrolled ? "text-brown-dark" : "text-white"
              }`}
            >
              Kopi Nusantara
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-coksu relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-coksu after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled ? "text-brown-dark" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                isScrolled
                  ? "bg-coksu text-white hover:bg-coksu-dark"
                  : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-brown-dark"
              }`}
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-brown-dark" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-[500px] mt-4 sm:mt-6" : "max-h-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
            <div className="flex flex-col gap-2 sm:gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-brown-dark text-base sm:text-lg font-medium py-2 hover:text-coksu transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 px-6 py-2.5 sm:py-3 bg-coksu text-white rounded-full text-center font-medium hover:bg-coksu-dark transition-colors duration-300 text-sm sm:text-base"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
