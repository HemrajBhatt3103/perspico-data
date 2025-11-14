import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import localFont from 'next/font/local'

const inter = localFont({
  src: [
    {
      path: '../fonts/Inter-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
})

const satoshi = localFont({
  src: '../fonts/Satoshi-Medium.otf',
  variable: '--font-satoshi',
  display: 'swap',
})
export const viewport = {
  themeColor: "#ffffff",
};

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
    <html lang="en" className={`${inter.variable} ${satoshi.variable}`}>
      <body className="font-body">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
