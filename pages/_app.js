import { createTheme, NextUIProvider, globalCss } from '@nextui-org/react';
import PlausibleProvider from 'next-plausible';
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import '../styles/globals.css'

const lightTheme = createTheme({
  type: 'light',
  theme: { 
    colors: {
      bodyBackground: '#f3f3f3',
      cardBackground: '#fbfbfb',
      primaryCard: 'rgba(21, 38, 199, .21)'
    }
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: { 
    colors: {
      bodyBackground: '#121212',
      cardBackground: '#1c1c1c',
      primaryCard: 'rgba(30, 43, 166, .5)',
      border: '#202020'
    }
  }
})

const globalStyles = globalCss({
  ['.light-theme body']: {
    backgroundColor: lightTheme.colors.bodyBackground.value
  },
  ['.dark-theme body']: {
    backgroundColor: darkTheme.colors.bodyBackground.value
  }
})

function MyApp({ Component, pageProps }) {
  globalStyles()
  return <PlausibleProvider domain='dartiles.link' trackOutboundLinks enabled={process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'}>
      <NextThemesProvider
          defaultTheme="system"
          attribute="class"
          value={{
            light: lightTheme.className,
            dark: darkTheme.className
          }}
        >
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
    </NextThemesProvider>
  </PlausibleProvider>
}

export default MyApp
