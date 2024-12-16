import { useEffect, useId, useState } from 'react'

import { Container } from '@/components/Container'
import { useTranslation } from 'react-i18next'

const features = [
  {
    name: 'The information we collected',
    description: [
      'name, email address, phone number, etc., information provided when you register or use our service in our system.',
      'IP address, browser type, operating system, access time, and access to pages, etc., information automatically collected through your equipment.',
      'the way you interact with our service, the functions you use, and the frequency of visits.',
    ],
  },
  {
    name: 'Information collection methods',
    description: [
      'Information provided when you register an account, fill out a form, or contact our customer service team.',
      'When you use our services, information automatically collected through technical means (such as cookies, log files, and web beacons).',
    ],
  },
  {
    name: 'Use of information',
    description: [
      'Ensure that our service is operating normally and provide you with a personalized user experience.',
      'Analyze usage and user feedback to improve our service and user experience.',
      'Send you service-related notices, updates and marketing materials (if you agree to receive).',
      'Protect our systems and user data to prevent fraud and abuse.',
    ],
  },
  {
    name: 'Information sharing',
    description: [
      'When required by laws and regulations or responding to legal procedures, we may disclose your information.',
      'In the case of company mergers, acquisitions or asset sales, your information may be transferred as part of the asset.',
      'We may share your information with third parties that provide support services, and these third parties must comply with our data protection requirements',
    ],
  },
  {
    name: 'Information protection',
    description: [
      'We take reasonable technical and organizational measures to protect your information and prevent unauthorized access, use or disclosure. Although we do our best to protect your information, Internet transmission is not completely safe, and we cannot guarantee absolute security.',
    ],
  },
  {
    name: 'User rights',
    description: [
      'You can access and update your personal information.',
      'In some cases, you can ask us to delete your personal information.',
      'You can object to or restrict some of our processing of your personal information.',
      'You have the right to obtain a copy of your personal information we hold. To exercise these rights, please contact us in the following ways.',
    ],
  },
  {
    name: 'Change in privacy policy',
    description: [
      'We may update this privacy policy from time to time. The updated privacy policy will be posted on our official website and the effective date will be indicated. Please check this policy regularly to get the latest information.',
    ],
  },
  {
    name: 'Contact us',
    description: [
      'e-mail: contact@shanglianim.com',
      'phone: +1 (909) 768-8086',
    ],
  },
]

function DeviceArrowIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        d="M12 25l8-8m0 0h-6m6 0v6"
        stroke="#171717"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

function DeviceCardsIcon(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm1 5a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1H10z"
        fill={`url(#${id}-gradient)`}
      />
      <rect x={9} y={6} width={14} height={4} rx={1} fill="#171717" />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={16}
          y1={12}
          x2={16}
          y2={28}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#737373" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}

function DeviceClockIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 32a8 8 0 100-16 8 8 0 000 16zm1-8.414V19h-2v5.414l4 4L28.414 27 25 23.586z"
        fill="#171717"
      />
    </svg>
  )
}

function DeviceListIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <circle cx={11} cy={14} r={2} fill="#171717" />
      <circle cx={11} cy={20} r={2} fill="#171717" />
      <circle cx={11} cy={26} r={2} fill="#171717" />
      <path
        d="M16 14h6M16 20h6M16 26h6"
        stroke="#737373"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

function DeviceLockIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 19.5a3.5 3.5 0 117 0V22a2 2 0 012 2v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-6a2 2 0 012-2v-2.5zm2 2.5h3v-2.5a1.5 1.5 0 00-3 0V22z"
        fill="#171717"
      />
    </svg>
  )
}

function DeviceChartIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 13.838V26a2 2 0 01-2 2H11a2 2 0 01-2-2V15.65l2.57 3.212a1 1 0 001.38.175L15.4 17.2a1 1 0 011.494.353l1.841 3.681c.399.797 1.562.714 1.843-.13L23 13.837z"
        fill="#171717"
      />
      <path
        d="M10 12h12"
        stroke="#737373"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

export function SecondaryFeatures() {
  const { t } = useTranslation('common')

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      {isClient && (
        <Container>
          <div className="mx-auto sm:text-center">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900">
              {t('Privacy Policy')}
            </h2>
            <p className="mt-2 text-sm text-gray-600 md:text-base">
              {t('Thank you for choosing a real-time communication system for dense juice chat. We attach great importance to your privacy and are committed to protecting your personal information. Please read this privacy policy carefully to understand how we collect, use, share and protect your information.')}
            </p>
          </div>
          <div
            role="list"
            className="mx-auto mt-10 rounded-2xl border border-gray-200 p-8 text-sm sm:mt-20"
          >
            {features.map((feature) => (
              <div key={feature.name} className="mb-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-900">
                  {t(feature.name)}:
                </h2>
                <ul className="ml-4 w-full list-outside list-disc space-y-1 text-gray-500 dark:text-gray-400">
                  {feature.description.map((desc, index) => (
                    <li key={index} className="text-justify">
                      {t(desc)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      )}
    </section>
  )
}
