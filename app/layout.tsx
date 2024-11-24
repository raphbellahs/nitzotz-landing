import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] });

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
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nitzotz Programme'
      }
    ],
  },
  other: {
    'geo.region': 'IL',
    'geo.placename': 'Israel',
    'geo.position': '32.109;34.855',
    'ICBM': '32.109, 34.855'
  },
  icons: {
    icon: [
      { 
        url: '/img/favicon-light.ico',
        media: '(prefers-color-scheme: light)',
        rel: 'icon'
      },
      { 
        url: '/img/favicon-dark.ico',
        media: '(prefers-color-scheme: dark)',
        rel: 'icon'
      }
    ],
    shortcut: [
      { 
        url: '/img/favicon-light.ico',
        media: '(prefers-color-scheme: light)',
        rel: 'shortcut icon'
      },
      { 
        url: '/img/favicon-dark.ico',
        media: '(prefers-color-scheme: dark)',
        rel: 'shortcut icon'
      }
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        url: '/img/icon-192.png',
        sizes: '192x192'
      },
      {
        rel: 'icon',
        type: 'image/png',
        url: '/img/icon-512.png',
        sizes: '512x512'
      }
    ]
  },
}
// import { AnalyticsWrapper } from "../components/analytics";
import { Container } from "../components/container";
// import { CopyrightLinearBanner } from "../components/copyright-linear-banner";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
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