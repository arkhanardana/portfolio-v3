import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arkhan Ardana Portfolio",
  description:
    "I'm a Fullstack Developer, based in Yogyakarta, Indonesia, passionate about building modern web applications with Next.js and Tailwind CSS.",
  keywords: "Arkhan Ardana, arkhanardana, arkhan ardana, portfolio arkhan ardana, portfolio next js, portfolio arkhan",
  authors: {
    name: "Arkhan Ardana",
    url: "https://arkhanardana.my.id",
  },
  robots: "index, follow",
  openGraph: {
    title: "Arkhan Ardana Portfolio",
    description:
      "I'm a Fullstack Developer, based in Yogyakarta, Indonesia, passionate about building modern web applications with Next.js and Tailwind CSS.",
    url: "https://arkhanardana.my.id",
    siteName: "Arkhan Ardana Portfolio",
    images: [
      {
        url: "/preview-image.png",
        width: 1200,
        height: 630,
        alt: "Preview of Arkhan Ardana's Portfolio Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@arkhanardana",
    title: "Arkhan Ardana - Portfolio",
    description:
      "I'm a Fullstack Developer, based in Yogyakarta, Indonesia, passionate about building modern web applications with Next.js and Tailwind CSS.",
    images: "/preview-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
