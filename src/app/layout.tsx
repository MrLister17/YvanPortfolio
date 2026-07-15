import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { BackToTop } from "@/components/back-to-top";
import { getSiteUrl, portfolioConfig } from "@/config/portfolio";
import "./globals.css";

const productionUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl),
  title: { default: `${portfolioConfig.name} — Applied AI Developer`, template: `%s — ${portfolioConfig.shortName}` },
  description: portfolioConfig.supportingHeadline,
  applicationName: `${portfolioConfig.shortName} Portfolio`,
  authors: [{ name: portfolioConfig.name }],
  creator: portfolioConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${portfolioConfig.name} — Applied AI Developer`,
    description: portfolioConfig.supportingHeadline,
    siteName: `${portfolioConfig.shortName} Portfolio`,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${portfolioConfig.name} — ${portfolioConfig.headline}` }],
  },
  twitter: { card: "summary_large_image", title: `${portfolioConfig.name} — Applied AI Developer`, description: portfolioConfig.supportingHeadline, images: ["/og.png"] },
  robots: { index: true, follow: true },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { colorScheme: "dark", themeColor: "#070607", width: "device-width", initialScale: 1 };

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
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <div className="page-progress" aria-hidden="true" />
        <Header />
        <noscript><style>{`@media (max-width: 1050px) { .desktop-nav { display: flex !important; overflow-x: auto; } .mobile-menu-button, .command-trigger { display: none !important; } .header-inner { flex-wrap: wrap; padding-block: 10px; } }`}</style></noscript>
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <BackToTop />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </body>
    </html>
  );
}
