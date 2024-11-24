import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  metadataBase: new URL('https://nitzotz.org'),
  title: 'Nitzotz - Programme de Formation Technologique en Israel',
  description: 'Programme de formation technologique en Israel pour les jeunes francophones, créé par des anciens d\'unités technologiques de Tsahal. Préparez votre avenir dans la tech israélienne.',
  keywords: [
    'formation high tech lycee israel',
    'programme tech israel jeune',
    'études technologiques israel',
    'formation programmation israel',
    'tech aliyah',
    'formation francophone israel',
    'études informatique israel',
    'high-tech israel français',
    'formation lycee tsahal',
    'unités technologiques israel'
  ],
  openGraph: {
    title: 'Nitzotz - Formation Technologique en Israel',
    description: 'Formation technologique en Israel pour les jeunes francophones. Préparation aux unités technologiques et à la high-tech israélienne.',
    url: '/',
    siteName: 'Nitzotz',
    locale: 'fr_IL',
    alternateLocale: 'fr_FR',
    type: 'website',
  },
  other: {
    'geo.region': 'IL',
    'geo.placename': 'Israel',
    'geo.position': '32.109;34.855',
    'ICBM': '32.109, 34.855'
  }
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