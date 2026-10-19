import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zakaria Elfoual — Développeur Mobile & Full-Stack",
  description:
    "Portfolio de Zakaria Elfoual, développeur mobile React Native et full-stack à Casablanca.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="bg-white text-slate-800 antialiased">{children}</body>
    </html>
  );
}