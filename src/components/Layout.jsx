import Head from 'next/head'

// import { Footer } from '@/components/Footer'

const Header = dynamic(() => import('../components/Header'), {
  ssr: false,
})
const Footer = dynamic(() => import('../components/Footer'), {
  ssr: false,
})

import dynamic from 'next/dynamic'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>XinChat - Connect important information.</title>
        <meta
          name="description"
          content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
