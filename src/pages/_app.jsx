import '@/styles/tailwind.css'
import 'focus-visible'
import { appWithTranslation } from 'next-i18next'
// import i18n from 'next-i18next.config.js'

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default appWithTranslation(App)
