import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { BackToTop } from "@/components/back-to-top";
import { Feedback } from "@/components/feedback";
import { getSiteUrl, portfolioConfig } from "@/config/portfolio";
import localFont from "next/font/local";
import "./globals.css";
import "./scrollbar.css";

// Free fonts (SIL Open Font License), self-hosted from src/fonts.
const display = localFont({
  variable: "--font-fraunces",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
  src: [
    { path: "../fonts/fraunces-latin-soft-normal.woff2", weight: "100 900", style: "normal" },
    { path: "../fonts/fraunces-latin-wght-italic.woff2", weight: "100 900", style: "italic" },
  ],
});
const sans = localFont({
  variable: "--font-dm-sans",
  display: "swap",
  fallback: ["Helvetica Neue", "Segoe UI", "Arial", "sans-serif"],
  src: "../fonts/dm-sans-latin-wght-normal.woff2",
  weight: "100 1000",
});

const productionUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl),
  title: { default: `${portfolioConfig.name} - Applied AI Developer`, template: `%s - ${portfolioConfig.shortName}` },
  description: portfolioConfig.supportingHeadline,
  applicationName: `${portfolioConfig.shortName} Portfolio`,
  authors: [{ name: portfolioConfig.name }],
  creator: portfolioConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${portfolioConfig.name} - Applied AI Developer`,
    description: portfolioConfig.supportingHeadline,
    siteName: `${portfolioConfig.shortName} Portfolio`,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${portfolioConfig.name} - ${portfolioConfig.headline}` }],
  },
  twitter: { card: "summary_large_image", title: `${portfolioConfig.name} - Applied AI Developer`, description: portfolioConfig.supportingHeadline, images: ["/og.png"] },
  robots: { index: true, follow: true },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ECE6DC" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Runs before first paint so the saved or system theme applies without a flash.
const themeScript = `(function(){var t;try{t=localStorage.getItem("theme")}catch(e){}if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}var d=document.documentElement;d.dataset.theme=t;d.classList.add("js")})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioConfig.name,
    url: productionUrl,
    email: `mailto:${portfolioConfig.email}`,
    sameAs: [portfolioConfig.githubUrl, portfolioConfig.linkedInUrl],
    alumniOf: { "@type": "CollegeOrUniversity", name: portfolioConfig.school },
    knowsAbout: ["Applied artificial intelligence", "Machine learning", "Retrieval-augmented generation", "Full-stack development"],
  };

  return (
    <html lang="en" data-theme="dark" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <div className="page-progress" aria-hidden="true" />
        <Header />
        <noscript><style>{`@media (max-width: 1050px) { .desktop-nav { display: flex !important; overflow-x: auto; } .mobile-menu-button, .command-trigger { display: none !important; } .header-inner { flex-wrap: wrap; padding-block: 10px; } }`}</style></noscript>
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <BackToTop />
        <Feedback />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </body>
    </html>
  );
}
