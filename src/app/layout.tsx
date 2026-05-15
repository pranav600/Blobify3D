import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Primary sans-serif font — used for headings and body text
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Monospace font — used for code snippets and technical labels
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blobify3D | Create blobs in 3D",
  description: "Powered for Creators. 3D Blob Library.",
};

// RootLayout: Wraps every page with global fonts, background, and text styles
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* Apply base background color, font, and text color via Tailwind tokens */}
      <body className="min-h-full flex flex-col font-mono bg-background text-foreground tracking-tight">
        {children}
      </body>
    </html>
  );
}
