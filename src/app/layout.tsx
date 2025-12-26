import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/page";
import Footer from '@/components/Footer/page'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ahmed Portfolio",
  description: "Ahmed Memon Portfolio Built Using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="FCc6CjrYFoZHSv4zbWXqSebNrHexThh7cawVu-r3XZo" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Header />
        {children}
      <Footer/>
      </body>
    </html>
  );
}
