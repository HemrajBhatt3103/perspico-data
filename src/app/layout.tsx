import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Perspico Data - Data Analytics",
  description: "Data analytics services by Perspico Data. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.",
  keywords: ["Perspico Data", "Data Analytics", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "React"],
  authors: [{ name: "Perspico Data" }],
  openGraph: {
    title: "Perspico Data",
    description: "Data analytics services by Perspico Data.",
    url: "https://perspicodata.com",
    siteName: "Perspico Data",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perspico Data",
    description: "Data analytics services by Perspico Data.",
  },
  icons: {
    icon: "/perspico_data_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
