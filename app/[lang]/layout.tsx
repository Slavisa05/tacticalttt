import type { Metadata } from "next";
import { Cairo, Geist_Mono } from "next/font/google";
import localFont from "next/font/local"
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const algerianFont = localFont({
  src: '../../public/fonts/Algerian.ttf', 
  variable: '--font-algerian',
  display: 'swap',
})

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  openGraph: {
    title: "Pripremite se za svaku situaciju sa Timom za Taktički Trening",
    description: "Obuka, trening vatrenim oružjem i taktička oprema na jednom mestu. Osigurajte svoju bezbednost i efikasnost - pobedite u sukobu!",
    url: "https://tacticalttt.com",
    siteName: "tacticalttt.com",
    locale: "sr_RS",
    type: "website",
    images: [
      {
        url: "https://tacticalttt.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Taktička obuka u Srbiji | Tim za Taktički Trening",
      },
    ],
  },

  // Twitter/X kartice
  twitter: {
    card: "summary_large_image",
    title: "Taktička obuka u Srbiji | Tim za Taktički Trening",
    description: "Rezervišite svoj termin još danas!",
    images: ["https://tacticalttt.com/srb.jpg"],
  },

  // Canonical URL (sprijecava duplicate content)
  alternates: {
    canonical: "https://tacticalttt.com",
  },

  // Ikonica u tabu browsera
  icons: {
    icon: "/favicon.ico",
  },

  // Dozvoljava Googleu da indeksira
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  params, children
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html
      lang="en"
      className={`${algerianFont.variable} ${cairo.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />  
      </body>
    </html>
  );
}
