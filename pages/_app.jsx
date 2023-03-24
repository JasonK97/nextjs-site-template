import { StickyHeader, FooterContainer } from '../components'
import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <StickyHeader />
      <Component {...pageProps} />
      <FooterContainer />
    </ThemeProvider>
  )
}

export default App
