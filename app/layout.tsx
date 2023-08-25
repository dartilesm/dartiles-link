import PlausibleProvider from 'next-plausible'
import { ReactNode } from 'react'
import { Providers } from './providers'
import './globals.css'

export default function RootLayout({
    children,
  }: {
    children: ReactNode
  }) {
    return (
      <html lang="en">
        <head>
          <PlausibleProvider domain='dartiles.link' trackOutboundLinks enabled={process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'} />
        </head>
        <body>
          <Providers>
            <main className='dark text-foreground bg-background'>
              {children}
            </main>
          </Providers>
        </body>
      </html>
    )
  }