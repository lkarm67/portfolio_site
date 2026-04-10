import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background/Background";
import css from "./layout.module.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  
  title: "Liudmyla Karmeliuk | Frontend / Fullstack Developer",
  description: "Portfolio website of frontend / fullstack developer",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Liudmyla Karmeliuk | Frontend / Fullstack Developer",
    description: "Frontend / Fullstack developer portfolio",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Portfolio",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/image/portfolio_og.png`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Liudmyla Karmeliuk | Frontend Developer",
    description: "Frontend developer portfolio",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/image/portfolio_og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{    
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Background />
        <main className={css.main}>
          {children}
        </main>
      </body>
    </html>
  );
}
