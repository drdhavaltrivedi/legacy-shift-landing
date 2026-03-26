import type { Metadata } from "next";
import "./globals.css";
import ClientSideEffects from "@/components/ClientSideEffects";

export const metadata: Metadata = {
  metadataBase: new URL("https://legacyshift.dev"),
  title: "LegacyShift | AI-Powered Legacy Modernization",
  description: "Ship 3\u00D7 faster on legacy codebases. We embed custom AI workflows into your existing team to reclaim engineering velocity without rewrites.",
  keywords: "Legacy Modernization, AI Engineering, Software Velocity, Technical Debt, CI/CD AI, Team Augmentation",
  openGraph: {
    title: "LegacyShift | Reclaim Your Engineering Velocity",
    description: "Your legacy codebase isn't the problem. Your tools are. We ship AI workflows that make your team 3× faster.",
    url: "https://legacyshift.dev",
    siteName: "LegacyShift",
    images: [
      {
        url: "/images/cinematic_team_v2_1774513460699.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LegacyShift | Reclaim Your Engineering Velocity",
    description: "Ship 3× faster on legacy codebases without rewriting a single line.",
    images: ["/images/cinematic_team_v2_1774513460699.png"],
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
