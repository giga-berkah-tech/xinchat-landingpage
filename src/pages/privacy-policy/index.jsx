import Layout from '@/components/Layout'
import Loading from '@/components/Loading'
import dynamic from 'next/dynamic'
import React from 'react'

const PrivacyPolicyFeatures = dynamic(
  import('@/components/PrivacyPolicyFeatures'),
  {
    ssr: false,
    loading: () => <Loading />,
  }
)

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section
        id="term-of-service"
        aria-labelledby="faqs-title"
        className="border-t border-gray-200 py-20 sm:py-20"
      >
        <PrivacyPolicyFeatures />
      </section>
    </Layout>
  )
}

export default PrivacyPolicy
