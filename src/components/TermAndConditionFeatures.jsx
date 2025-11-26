import { Container } from '@/components/Container'
import { useTranslation } from 'next-export-i18n'
import React from 'react'

const terms = [
  {
    title: 'Use of the Application',
  },
  {
    title: 'User Accounts',
    list: [
      'To access certain features of the App, you may be required to create an account.',
      'You are responsible for maintaining the confidentiality of your account credentials and are solely responsible for all activities that occur under your account.',
      'You agree not to share your account details or use another user’s account without permission.',
      'If you suspect any unauthorized use of your account, you must notify us immediately.',
    ],
  },
  {
    title: 'Prohibited Conduct',
    list: [
      'Engage in any illegal or unauthorized activity.',
      'Upload or share harmful, abusive, or objectionable content, including but not limited to hate speech or explicit materials.',
      'Use Xinchat Work+ to spam or harass other users.',
      "Attempt to hack, disrupt, or interfere with the app's functionality.",
      "Collect or store personal data of other users without authorization.",
      "Impersonate any person or entity or misrepresent your affiliation with any individual or organization."
    ],
    description2: "Violating these terms may result in the suspension or termination of your account and possible legal action."
  },
  {
    title: 'Intellectual Property',
    list: [
      'All content, trademarks, logos, and intellectual property within Xinchat Work+ are owned by us or our licensors.',
      'You may not copy, modify, distribute, or reuse any part of the App’s content without explicit written permission.'
    ],
  },
  {
    title: 'Privacy Policy',
  },
  {
    title: 'Limitation of Liability',
    list: [
      'Xinchat Work+ and its affiliates are not responsible for any indirect, incidental, consequential, or punitive damages arising from your use of the App.',
      'We do not guarantee that the App will be errorfree, uninterrupted, or secure.',
      'We are not liable for any loss of data, damages caused by malware, unauthorized access, or other issues beyond our reasonable control.'
    ],
  },
  {
    title: 'Termination',
    list: [
      'Suspend or terminate your access to the App at any time, with or without notice, if you violate these Terms or engage in prohibited behavior.',
      'Remove or disable content that violates these Terms or applicable laws.'
    ]
  },
  {
    title: 'Changes to Terms',
  },
  {
    title: 'Governing Law',
    list: [
      'These Terms are governed by the laws of [Your Country/Region].',
      'Any disputes arising from the use of Xinchat Work+ will be resolved in the courts of [Your Jurisdiction].'
    ]
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
          
          {/* Only render the description if the term has one */}
          {term.title !== 'User Accounts' && term.title !== 'Intellectual Property' && term.title !== 'Governing Law' && (
            <p
              dangerouslySetInnerHTML={{
                __html: t('terms.' + term.title + '.description'),
              }}
            />
          )}
          
          {/* Render bullet points if they exist */}
          {term.list && (
            <ul className="ml-4 list-outside list-disc space-y-4">
              {term.list.map((item, index) => (
                <li key={index}>
                  {t('terms.' + term.title + '.bullet' + (index + 1))}
                </li>
              ))}
            </ul>
          )}

          {/* Render second description below the bullet points if it exists */}
          {term.description2 && (
            <p className="text-gray-700 mt-4">
              {t('terms.' + term.title + '.description2')}
            </p>
          )}
        </div>
      ))}

      <p>{t('terms.end')}</p>
    </Container>
  )
}

export default TermAndConditionFeatures
