import { createTheme, NextUIProvider, globalCss } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import '../styles/globals.css'

const lightTheme = createTheme({
  type: 'light',
  theme: { 
    colors: {
      bodyBackground: '#f3f3f3',
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
      primaryCard: '#1526c7'
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
