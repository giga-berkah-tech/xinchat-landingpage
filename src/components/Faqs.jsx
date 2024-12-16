import Link from 'next/link'

import { Container } from '@/components/Container'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

const faqs = [
  [
    {
      question: 'Affiliate',
      answer:
        'means an entity that controls, is controlled by or is under common control with a party, where control means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.',
    },
    // {
    //   question: 'Country',
    //   answer: 'refers to: China',
    // },
    // {
    //   question: 'Company',
    //   answer: 'refers to Giga Tech, 1 Cupertino, A c75.',
    // },
    // {
    //   question: 'Device',
    //   answer:
    //     'means any device that can access the Service such as a computer, a cellphone or a digital tablet.',
    // },
    {
      question: 'You',
      answer:
        'means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.',
    },
    {
      question: 'Terms and Conditions',
      answer:
        'mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Terms and Conditions Generator.',
    },
    {
      question: 'Third-party Social Media Service',
      answer:
        'means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.',
    },
  ],
]

export function Faqs() {
  const { t } = useTranslation('common')

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      {isClient && (
        <Container className="flex flex-col md:flex-row">
          <div className="mx-0 mb-8 max-w-2xl basis-1/3 md:mx-auto lg:mx-0">
            <h2
              id="faqs-title"
              className="text-4xl font-semibold tracking-tight text-gray-900"
            >
              {t('Term of Service')}
            </h2>
            <p className="mt-1 pl-2 font-medium text-gray-400">
              {t('Updated december 2024')}
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid max-w-2xl basis-2/3 grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-1"
          >
            {faqs.map((column, columnIndex) => (
              <li key={columnIndex}>
                <ul role="list" className="list-disc space-y-10">
                  {column.map((faq, faqIndex) => (
                    <li key={faqIndex}>
                      <h3 className="text-lg font-semibold leading-6 text-gray-900">
                        {t(faq.question)}
                      </h3>
                      <p className="mt-2 text-sm text-gray-700">{t(faq.answer)}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      )}
    </section>
  )
}
