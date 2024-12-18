import Layout from '@/components/Layout'
import Loading from '@/components/Loading'
import dynamic from 'next/dynamic'
import React from 'react'

const TermAndConditionFeatures = dynamic(
  import('@/components/TermAndConditionFeatures'),
  {
    ssr: false,
    loading: () => <Loading />,
  }
)

const TermOfService = () => {
  return (
    <Layout>
      <section
        id="term-of-service"
        aria-labelledby="faqs-title"
        className="border-t border-gray-200 py-20 sm:py-20"
      >
        <TermAndConditionFeatures />
      </section>
    </Layout>
  )
}

export default TermOfService