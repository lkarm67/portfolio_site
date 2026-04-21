import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background/Background";
import css from "./layout.module.css";
import { LanguageProvider } from "@/context/LanguageContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {  
  title: "Liudmyla Karmeliuk | Fullstack Developer",
  description: "Portfolio website of fullstack developer",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Liudmyla Karmeliuk | Fullstack Developer",
    description: "Fullstack developer specializing in modern web applications using React, Next.js, and scalable technologies. View my projects and experience.",
    siteName: "Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dvrha1ntw/image/upload/v1776785560/fs_og_grz2y0.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Liudmyla Karmeliuk | Fullstack Developer",
    description: "Fullstack developer specializing in modern web applications using React, Next.js, and scalable technologies. View my projects and experience.",
    images: [
      "https://res.cloudinary.com/dvrha1ntw/image/upload/v1776785560/fs_og_grz2y0.jpg",
    ],
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
        <LanguageProvider>          
          <main className={css.main}>
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
