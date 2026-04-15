import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/index.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Beyond UI | Premium Editorial Blog",
    template: "%s | Beyond UI"
  },
  description: "Exploring the intersection of design, technology, and human experience through a premium editorial lens.",
  keywords: ["Design", "Technology", "UI/UX", "Editorial", "Development"],
  authors: [{ name: "Beyond UI Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://beyond-ui.vercel.app",
    siteName: "Beyond UI",
    title: "Beyond UI | Premium Editorial Blog",
    description: "Exploring the intersection of design, technology, and human experience.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Beyond UI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond UI | Premium Editorial Blog",
    description: "Exploring the intersection of design, technology, and human experience.",
    images: ["https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-[#F5F5F5] text-text-primary min-h-screen selection:bg-accent-base/10 selection:text-accent-base`}>
        {/* Outer background is #F5F5F5, content shell is white */}
        <div className="max-w-[1600px] mx-auto bg-white min-h-screen shadow-sm flex flex-col relative overflow-x-hidden">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
