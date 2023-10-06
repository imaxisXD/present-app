import './globals.css'
import { fixel, inter } from '@/styles/font'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import dynamic from 'next/dynamic'

const baseUrl = process.env.NEXT_PUBLIC_ROOT_DOMAIN
  ? `https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Present - Automate Influencer marketing',
  description: 'Present is a all in one tool that you need to automate the Influencer marketing campaigns for you. Define Budget and select influencers from any social media and let us handle the rest for you',
  openGraph: {
    title: 'Present - Automate Influencer marketing',
    description: 'Present is a all in one tool that you need to automate the Influencer marketing campaigns for you. Define Budget and select influencers from any social media and let us handle the rest for you',
    images: [
      {
        url: 'https://www.trypresentapp.com/_static/opengraph.png',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Present - Automate Influencer marketing',
    description: 'Present is a all in one tool that you need to automate the Influencer marketing campaigns for you. Define Budget and select influencers from any social media and let us handle the rest for you',
    images: ['https://www.trypresentapp.com/_static/opengraph.png'],
    creator: "@abhishk_084",
  },
  metadataBase: new URL(baseUrl),
  robots: {
    follow: true,
    index: true
  },

}
const CrispWithNoSSR = dynamic(
  () => import('../components/crisp')
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CrispWithNoSSR />
      <body className={`${inter.variable} ${fixel.variable}`}>
        {children}
        <Analytics />
      </body>
    </html >
  )
}
