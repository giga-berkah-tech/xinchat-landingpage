import { Container } from '@/components/Container'
import React from 'react'
import { useTranslation } from 'next-export-i18n'

const terms = [
  {
    title: 'Information We Collect',
    desc: 'We collect personal data to provide and improve our services. The information collected includes:',
    list: [
      '<b>Personal Information:</b> Collected during registration, such as name, email address, and other details you provide.',
      '<b>Usage Data:</b> Information about how you interact with the application.',
    ],
  },
  {
    title: 'How We Use Your Information',
    desc: 'We use the information we collect for the following purposes:',
    list: [
      '<b>Account Registration:</b> To create and manage your user account.',
      '<b>Service Improvement:</b> To enhance the performance, security, and functionality of our services.',
      '<b>Customer Support:</b> To respond to inquiries and provide assistance.',
      '<b>Security and Fraud Prevention:</b> To protect against unauthorized access, misuse, or illegal activity.',
    ],
  },
  {
    title: 'Data Storage and Security',
    list: [
      'We store your personal information securely in our database. We implement reasonable security measures to protect your information from unauthorized access, alteration, or destruction.',
      'While we strive to use commercially acceptable means to protect your data, no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.',
    ],
  },
  {
    title: 'Third-Party Services',
    desc: 'We use third-party services to improve our features. Specifically:',
    list: [
      '<b>ChatGPT API:</b> To enhance the user experience with AI-powered features.',
    ],
    note: 'We do not share your personal data with third-party companies for marketing or unrelated purposes.',
  },
  {
    title: 'Your Rights',
    desc: 'As a user, you have the following rights:',
    list: [
      '<b>Access Your Data:</b> You can request access to the data we collect about you.',
      '<b>Update Your Data:</b> You can request corrections to your personal information.',
      '<b>Delete Your Data:</b> You can request the deletion of your personal information from our systems.',
    ],
    note: "To exercise these rights, contact us at <a class='link' href='mailto:xinchat@aplikasiku.web.id'>xinchat@aplikasiku.web.id</a>",
  },
  {
    title: 'Data Retention',
    desc: 'We retain your personal information only as long as necessary to provide our services, comply with legal obligations, or resolve disputes.',
  },
  {
    title: 'Changes to This Privacy Policy',
    desc: 'We reserve the right to update this Privacy Policy at any time. Changes will be posted within the application with an updated Effective Date.',
    note: 'You are encouraged to review this Privacy Policy periodically for any updates.',
  },
  {
    title: 'Contact Us',
    desc: "If you have questions or concerns regarding this Privacy Policy, please contact us: Email: <a class='link' href='mailto:xinchat@aplikasiku.web.id'>xinchat@aplikasiku.web.id</a>",
  },
]

const PrivacyPolicyFeatures = () => {
  const { t } = useTranslation()

  return (
    <Container className="max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">{t('privacy.title')}</h1>
      <p className="font-medium">{t('privacy.date')}</p>

      <p className="text-gray-700">{t('privacy.description')}</p>

      {terms.map((term, index) => (
        <div key={index} className="space-y-5 text-gray-600">
          <h2 className="text-3xl font-semibold text-gray-900">
            {t('privacy.' + term.title + '.title')}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: term.desc
                ? t('privacy.' + term.title + '.description')
                : null,
            }}
          />
          <ul className="ml-4 list-outside list-disc space-y-4">
            {term.list
              ? term.list.map((item, index) => (
                  <li
                    dangerouslySetInnerHTML={{
                      __html: t(
                        'privacy.' + term.title + '.bullet' + (index + 1)
                      ),
                    }}
                    key={index}
                  />
                ))
              : null}
          </ul>
          <p
            dangerouslySetInnerHTML={{
              __html: term.note ? t('privacy.' + term.title + '.note') : null,
            }}
          />
        </div>
      ))}

      <p>{t('privacy.end')}</p>
    </Container>
  )
}

export default PrivacyPolicyFeatures
