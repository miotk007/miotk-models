import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Montserrat } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/content";

const display = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miotkmodels.com"),
  title: {
    default: `${SITE.name} — Creative Production House`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "A boutique creative house connecting brands with carefully curated talent between Europe and Asia. Models, campaigns, production, creative direction.",
  openGraph: {
    title: `${SITE.name} — Creative Production House`,
    description:
      "Curating talent between Europe and Asia. Models, campaigns, production, creative direction.",
    type: "website",
    locale: "en",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0b0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
