import { Coffee, Instagram, MessageCircle, Mail, Heart } from "lucide-react";

const footerLinks = {
  menu: [
    { name: "Coffee", href: "#menu" },
    { name: "Non-Coffee", href: "#menu" },
    { name: "Snacks", href: "#menu" },
    { name: "Main Course", href: "#menu" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Facilities", href: "#facilities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reservasi", href: "#contact" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Kontak", href: "#contact" },
    { name: "Kebijakan Privasi", href: "#" },
    { name: "Syarat & Ketentuan", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-coffee text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4 sm:mb-6">
              <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-coksu" />
              <span className="font-serif text-xl sm:text-2xl font-semibold">
                Kopi Nusantara
              </span>
            </a>
            <p className="text-white/70 leading-relaxed mb-4 sm:mb-6 max-w-sm text-sm sm:text-base">
              Your perfect third place. Tempat nongkrong nyaman dengan kopi berkualitas, 
              WiFi kencang, dan suasana yang bikin betah.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://instagram.com/neezar_abd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coksu transition-all duration-300"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://wa.me/6283899200333"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coksu transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:neezar.tech@gmail.com"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coksu transition-all duration-300"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-semibold mb-4 sm:mb-6">Menu</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-coksu transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-semibold mb-4 sm:mb-6">Perusahaan</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-coksu transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="hidden lg:block">
            <h4 className="font-serif text-base sm:text-lg font-semibold mb-4 sm:mb-6">Dukungan</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-coksu transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
            <p className="text-white/50 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Kopi Nusantara. All rights reserved.
            </p>
            <p className="text-white/50 text-xs sm:text-sm flex items-center gap-1">
              Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-coksu fill-coksu" /> in Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
