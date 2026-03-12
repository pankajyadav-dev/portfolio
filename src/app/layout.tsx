import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import GlobalBackground from "@/components/GlobalBackground";
import SplashScreen from "@/components/SplashScreen";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pankaj Yadav | Software Engineer",
  description:
    "Software Engineer passionate about building scalable systems, AI tools, and secure code execution engines. Explore my projects, skills, and competitive programming journey.",
  keywords: [
    "Pankaj Yadav",
    "Software Engineer",
    "Full Stack Developer",
    "Rust",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Pankaj Yadav" }],
  openGraph: {
    title: "Pankaj Yadav | Software Engineer",
    description:
      "Building Scalable Systems & AI Tools",
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
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#09090B] text-[#D4D4D8] relative`}
      >
        <SplashScreen />
        <GlobalBackground />
        <div className="noise-overlay" />
        <div className="relative z-10 w-full h-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
