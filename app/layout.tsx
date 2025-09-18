import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicholas Fong | Portfolio",
  description: "Modern developer portfolio showcasing projects and experience.",
  authors: [{ name: "Nicholas Fong" }],
  openGraph: {
    title: "Nicholas Fong | Portfolio",
    description: "Modern developer portfolio showcasing projects and experience.",
    url: "https://nicholasfong.com", // Update to your custom domain if available
    siteName: "Nicholas Fong Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <meta name="author" content="Nicholas Fong" />
        <meta name="theme-color" content="#18181b" />
        <link rel="icon" href="/rocket-favicon.ico" />
        <title>Nicholas Fong | Portfolio 🚀</title>
        <meta name="description" content="Modern developer portfolio showcasing projects and experience." />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
