import type { Metadata } from "next";
import { Philosopher, Mulish } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getLegalServiceSchema } from "@/lib/schema";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sonaly-santos-advocacia.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sonaly Cristina dos Santos | Advocacia em Curitiba - PR (Penal, Família, Sucessões e Trabalhista)",
    template: "%s | Sonaly Cristina dos Santos Advocacia",
  },
  description:
    "Escritório de advocacia em Curitiba/PR especializado em Direito Penal, Processo Penal, Família, Sucessões e Direito do Trabalho. Dra. Sonaly Cristina dos Santos. 10 anos de experiência prática forense com atendimento humanizado e estratégico.",
  keywords: [
    "advogada curitiba pr",
    "sonaly santos advocacia",
    "sonaly cristina dos santos",
    "advogado criminalista curitiba",
    "direito penal curitiba",
    "processo penal curitiba pr",
    "divorcio e pensao curitiba",
    "inventario cartorio curitiba",
    "rescisao trabalhista curitiba",
    "audiencia de custodia curitiba",
    "direito de familia curitiba",
  ],
  authors: [{ name: "Dra. Sonaly Cristina dos Santos" }],
  creator: "Dra. Sonaly Cristina dos Santos",
  publisher: "Sonaly Cristina dos Santos Advocacia",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Sonaly Cristina dos Santos | Advocacia em Curitiba - PR",
    description:
      "Defesa técnica, acolhimento humano e dedicação estratégica para proteger sua liberdade, sua família e seus direitos. Dra. Sonaly Cristina dos Santos.",
    siteName: "Sonaly Cristina dos Santos Advocacia",
    images: [
      {
        url: "/og-image_optimized_300.jpeg",
        width: 1200,
        height: 630,
        alt: "Sonaly Cristina dos Santos Advocacia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonaly Cristina dos Santos | Advocacia em Curitiba - PR",
    description:
      "Defesa técnica, acolhimento humano e dedicação estratégica para proteger sua liberdade, sua família e seus direitos. Dra. Sonaly Cristina dos Santos.",
    images: ["/og-image_optimized_300.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-apple-touch-icon180x180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getLegalServiceSchema();

  return (
    <html
      lang="pt-BR"
      className={`${philosopher.variable} ${mulish.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body selection:bg-[var(--brand-gold)] selection:text-black">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}