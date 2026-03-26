import type { Metadata } from "next";
import "./globals.css";
import ClientSideEffects from "@/components/ClientSideEffects";

export const metadata: Metadata = {
  metadataBase: new URL("https://impai.vercel.app"),
  title: "LegacyShift | AI-Powered Legacy Modernization",
  description: "Reclaim your engineering velocity. We embed custom AI workflows into legacy teams to ship 3× faster without rewrites.",
  keywords: "Legacy Systems, AI Automation, Software Engineering, Technical Debt, Developer Productivity, Vercel, Next.js",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "LegacyShift | Reclaim Your Engineering Velocity",
    description: "Your legacy codebase isn't the problem. Your tools are. Ship 3× faster with our AI blueprints.",
    url: "https://impai.vercel.app",
    siteName: "LegacyShift",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LegacyShift - AI-Powered Legacy Modernization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LegacyShift | AI-Powered Legacy Modernization",
    description: "Ship 3× faster on legacy codebases without rewriting a single line.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientSideEffects />
        {children}
      </body>
    </html>
  );
}
