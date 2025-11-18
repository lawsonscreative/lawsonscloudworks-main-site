import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SkipLink from "@/components/SkipLink";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Lawsons CloudWorks | Cloud Consulting & Modern Workplace Solutions UK",
  description: "Cloud, workspace and automation consulting for UK businesses. Enterprise expertise without enterprise drama. AWS, Microsoft 365, modern workplace, and dev tooling specialists.",
  keywords: "cloud consulting UK, modern workplace, AWS WorkSpaces, Microsoft 365, cloud workspace, automation, endpoint management, identity management, IT consulting UK, managed service provider, MSP Kent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>
        <SkipLink />
        <header>
          <Navigation />
        </header>
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
