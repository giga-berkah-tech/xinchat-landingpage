import { Container } from '@/components/Container'
import { useTranslation } from 'next-export-i18n'
import Image from 'next/image'
import React from 'react'
import PlayStore from '@/images/logos/googleplay.svg'
import { AppStoreLink } from '@/components/AppStoreLink'
import { ToastContainer, toast } from 'react-toastify'

const DownloadSection = () => {
  const { t } = useTranslation()
  const notify = () => toast('Coming soon!')

  return (
    <>
      <Container className="-mt-20 flex h-screen flex-col items-center justify-center space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-wide text-gray-900 md:text-5xl">
            {t('download.title')}
          </h1>
          <h1 className="text-4xl font-semibold text-gray-900 md:text-5xl">
            {t('download.subtitle')}
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html: t('download.description'),
            }}
            className="mx-auto mt-4 hidden max-w-3xl text-sm text-gray-500 md:block"
          />
          <button className="mx-auto mt-4 rounded-full bg-gray-900 px-5 py-2.5">
            <a href="#download" className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
              <p className="text-white">{t('download.button')}</p>
            </a>
          </button>
        </div>
      </Container>

      <div id="download" className="w-full bg-white py-20">
        <Container className="grid h-full w-full grid-cols-1 place-content-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex-grow space-y-8 rounded-xl bg-gray-100 px-5 py-8 transition-all duration-150 hover:ring-2 hover:ring-gray-800">
            <div className="grid h-20 w-20 place-content-center rounded-full bg-gray-200">
              <svg
                className="h-8 w-8 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-500">{t('download.dekstop')}</p>
              <h3 className="text-2xl font-semibold">{t('download.pc/mac')}</h3>
            </div>
            <div>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('download.downloadDescription'),
                }}
                className="mb-3 text-sm text-gray-600"
              />
              <button
                onClick={notify}
                className="flex items-center space-x-3 rounded-lg bg-gray-900 px-3 py-2"
              >
                <svg
                  className="h-6 w-6 text-gray-100"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"
                  />
                </svg>
                <p className="text-gray-100">{t('Download')}</p>
              </button>
            </div>
          </div>
          <div className="flex-grow space-y-8 rounded-xl bg-gray-100 px-5 py-8 transition-all duration-150 hover:ring-2 hover:ring-gray-800">
            <div className="grid h-20 w-20 place-content-center rounded-full bg-gray-200">
              <svg
                className="h-8 w-8 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-500">{t('download.mobilePhone')}</p>
              <h3 className="text-2xl font-semibold">{t('download.ios')}</h3>
            </div>
            <div>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('download.downloadDescription'),
                }}
                className="mb-3 text-sm text-gray-600"
              />
              <button>
                <a
                  href="https://testflight.apple.com/join/F2PxchFb"
                  target="_blank"
                >
                  <AppStoreLink />
                </a>
              </button>
            </div>
          </div>
          <div className="flex-grow space-y-8 rounded-xl bg-gray-100 px-5 py-8 transition-all duration-150 hover:ring-2 hover:ring-gray-800">
            <div className="grid h-20 w-20 place-content-center rounded-full bg-gray-200">
              <svg
                class="h-8 w-8 text-gray-800"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {' '}
                <path stroke="none" d="M0 0h24v24H0z" />{' '}
                <line x1="3" y1="10" x2="3" y2="16" />{' '}
                <line x1="21" y1="10" x2="21" y2="16" />{' '}
                <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />{' '}
                <line x1="8" y1="3" x2="9" y2="5" />{' '}
                <line x1="16" y1="3" x2="15" y2="5" />{' '}
                <line x1="9" y1="18" x2="9" y2="21" />{' '}
                <line x1="15" y1="18" x2="15" y2="21" />
              </svg>
            </div>
            <div>
              <p className="text-gray-500">{t('download.mobilePhone')} / {t('download.tablet')}</p>
              <h3 className="text-2xl font-semibold">{t('download.android')}</h3>
            </div>
            <div>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('download.downloadDescription'),
                }}
                className="mb-3 text-sm text-gray-600"
              />
              <a
                href="https://play.google.com/store/apps/details?id=id.web.aplikasiku.xinchat"
                target="_blank"
              >
                <Image src={PlayStore} height={0} width={135} />
              </a>
            </div>
          </div>
        </Container>
      </div>
      <ToastContainer style={{ fontWeight: 'bold', color: 'black' }} />
    </>
  )
}

export default DownloadSection
