import type { Metadata } from "next";
import { Hanken_Grotesk, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./(app)/globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["800"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "RamSoft - AI-Powered Cloud RIS/PACS Solutions",
  description:
    "Boost Efficiency with RamSoft's AI-Powered Cloud RIS/PACS Solutions. Quick Deployment, Seamless Integration and Advanced Automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${manrope.variable} ${jakarta.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
