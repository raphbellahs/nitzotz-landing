import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://nitzotz.org'),
  title: 'Nitzotz - Programme de Formation Technologique',
  description: 'Programme de formation technologique pour les jeunes francophones, créé par des anciens d\'unités technologiques israéliennes.',
  openGraph: {
    title: 'Nitzotz - Programme de Formation Technologique',
    description: 'Programme de formation technologique pour les jeunes francophones',
    url: '/',
    siteName: 'Nitzotz',
    locale: 'fr_FR',
    type: 'website',
  },
}
// import { AnalyticsWrapper } from "../components/analytics";
import { Analytics } from "@vercel/analytics/react"
import { Container } from "../components/container";
// import { CopyrightLinearBanner } from "../components/copyright-linear-banner";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body>
        <div>
          {/* <Header /> */}
          <main className="bg-page-gradient pt-navigation-height">
            {children}
          </main>
          <Footer />
          {/* <CopyrightLinearBanner /> */}
        </div>
        {/* <AnalyticsWrapper /> */}
      </body>
    </html>
  );
}