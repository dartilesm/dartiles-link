import { createTheme, NextUIProvider, globalCss } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import '../styles/globals.css'

const lightTheme = createTheme({
  type: 'light',
  theme: { }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: { 
    colors: {
      background: '#121212'
    }
  }
})

const globalStyles = globalCss({
  ['.dark-theme body']: {
    backgroundColor: darkTheme.colors.background.value
  }
})

function MyApp({ Component, pageProps }) {
  globalStyles()
  return <NextThemesProvider
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
}

export default MyApp
