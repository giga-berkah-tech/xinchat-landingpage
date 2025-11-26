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
        <title>Xinchat Work+ - Focused chat built for work.</title>
        <meta
          name="description"
          content="Xinchat Work+ is a focused text-only chat workspace with notes, sketches, and built-in GPT so freelancers and small teams can move from talking to doing without distractions."
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
