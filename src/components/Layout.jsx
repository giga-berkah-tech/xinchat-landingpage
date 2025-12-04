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
          content="Our platform enables seamless connections and efficient communication within your organization, allowing teams to share important information effortlessly and boost productivity. Every interaction is streamlined and purposeful, empowering teams to collaborate in a more fluid and effective way."
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
