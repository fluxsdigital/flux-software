import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flux Software — Minimalismo Arquitetural & Automação Inteligente",
  description: "Automação e tecnologia sob medida para empresas que querem crescer.",
  icons: { icon: "/icon.png", shortcut: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
