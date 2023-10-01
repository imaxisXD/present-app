import './globals.css'
import { fixel, inter } from '@/styles/font'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'Present - Automate Influencer marketing',
  description: 'Present is a all in one tool that you need to automate the Influencer marketing campaigns for you. Define Budget and select influencers from any social media and let us handle the rest for you',
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
