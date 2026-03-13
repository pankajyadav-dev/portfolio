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
    title: "Pankaj Yadav | Backend & Software Engineer",
    description:
        "Software Engineer passionate about backend development, building scalable systems, AI tools (RAG), and secure code execution engines like IronJudge. Explore my projects, skills, and competitive programming journey.",
    keywords: [
        "Pankaj Yadav",
        "Software Engineer",
        "Backend Developer",
        "Full Stack Developer",
        "Rust",
        "C++",
        "TypeScript",
        "Python",
        "Next.js",
        "System Design",
        "Portfolio",
    ],
    authors: [{ name: "Pankaj Yadav" }],
    openGraph: {
        title: "Pankaj Yadav | Software Engineer",
        description:
            "Building Scalable Backend Systems, AI Tools & Code Execution Engines",
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
            {/* Added `font-sans` to make Inter the default text across the app */}
            <body
                className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#09090B] text-[#D4D4D8] relative`}
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
