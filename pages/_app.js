import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/theme'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(lightTheme)
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default MyApp
