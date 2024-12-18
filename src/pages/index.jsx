import dynamic from 'next/dynamic'
import Layout from '@/components/Layout'

const Loading = dynamic(() => import('@/components/Loading'), {
  ssr: false,
})
const Hero = dynamic(import('@/components/Hero'), {
  ssr: false,
  loading: () => <Loading />,
})
const PrimaryFeatures = dynamic(import('@/components/PrimaryFeatures'), {
  ssr: false,
  loading: () => <Loading />,
})

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <PrimaryFeatures />
      </Layout>
    </>
  )
}

export default Home