import { Container } from '@/components/Container'
import { useTranslation } from 'next-export-i18n'
import React from 'react'

const terms = [
  {
    title: 'Use of the Application',
  },
  {
    title: 'User Accounts',
  },
  {
    title: 'Prohibited Conduct',
    list: [
      'Engage in any illegal or unauthorized activity.',
      'Upload or share harmful, abusive, or objectionable content, including but not limited to hate speech or explicit materials.',
      'Use Xinchat to spam or harass other users.',
      "Attempt to hack, disrupt, or interfere with the app's functionality.",
    ],
  },
  {
    title: 'Intellectual Property',
  },
  {
    title: 'Privacy Policy',
  },
  {
    title: 'Limitation of Liability',
  },
  {
    title: 'Termination',
  },
  {
    title: 'Changes to Terms',
  },
  {
    title: 'Governing Law',
  },
  {
    title: 'Contact Us',
  },
]

const TermAndConditionFeatures = () => {
  const { t } = useTranslation()

  return (
    <Container className="max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">{t('terms.title')}</h1>
      <p className="font-medium">{t('terms.date')}</p>
      <h2 className="font-medium">{t('terms.welcome')}</h2>

      <p className="text-gray-700">{t('terms.description')}</p>

      {terms.map((term, index) => (
        <div key={index} className="space-y-5 text-gray-600">
          <h2 className="text-3xl font-semibold text-gray-900">
            {t('terms.' + term.title + '.title')}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: t('terms.' + term.title + '.description'),
            }}
          />
          <ul className="ml-4 list-outside list-disc space-y-4">
            {term.list
              ? term.list.map((item, index) => (
                  <li key={index}>
                    {t('terms.' + term.title + '.bullet' + (index + 1))}
                  </li>
                ))
              : null}
          </ul>
        </div>
      ))}

      <p>{t('terms.end')}</p>
    </Container>
  )
}

export default TermAndConditionFeatures
