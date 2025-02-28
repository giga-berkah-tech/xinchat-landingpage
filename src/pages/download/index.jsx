import Layout from '@/components/Layout'
import Loading from '@/components/Loading'
import dynamic from 'next/dynamic'
import React from 'react'

const DownloadSection = dynamic(import('@/components/DownloadSection'), {
  ssr: false,
  loading: () => <Loading />,
})

const Download = () => {
  return (
    <Layout>
      <section
        id="term-of-service"
        aria-labelledby="faqs-title"
        className="border-t border-gray-200"
      >
        <DownloadSection />
      </section>
    </Layout>
  )
}

export default Download
