import PlausibleProvider from "next-plausible";
import { ReactNode } from "react";
import { Providers } from "./providers";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider
          domain="dartiles.link"
          trackOutboundLinks
          enabled={process.env.NEXT_PUBLIC_VERCEL_ENV === "production"}
        />
      </head>
      <body>
        <Providers>
          <main className="text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-[#121212]">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
