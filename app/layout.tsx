import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Romel Nino Paano | Full Stack Web Developer",
  description:
    "Full Stack Web Developer with 6+ years of experience across Python and JavaScript ecosystems — Django, FastAPI, Vue, React, Next.js, Angular, and AI-integrated applications.",
  keywords: [
    "Romel Nino Paano",
    "Full Stack Developer",
    "Python Developer",
    "JavaScript Developer",
    "Django",
    "FastAPI",
    "Next.js",
    "AI Integration",
  ],
  authors: [{ name: "Romel Nino Paano" }],
  openGraph: {
    title: "Romel Nino Paano | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in Python & JavaScript ecosystems, with hands-on AI integration experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
