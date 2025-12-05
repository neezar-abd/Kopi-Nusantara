import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kopi Nusantara | Premium Coffee Experience",
  description: "Experience the finest Indonesian coffee in a cozy, elegant atmosphere. Handcrafted with passion, served with love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
