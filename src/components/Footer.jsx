
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'
import { useTranslation } from 'next-export-i18n'
import Image from 'next/image'

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          <div className='hidden md:block'>
            <div className="flex items-center text-gray-900">
              <Logomark className="h-10 w-10 flex-none fill-cyan-500" />
              <div className="ml-4">
                <p className="text-base font-semibold">XinChat</p>
                <p className="mt-1 text-sm">{t('hero.title')}</p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500" />
              <Image src={qrCode} alt="" unoptimized />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <div>
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  {t('Download the app')}
                </div>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                {t('Scan the QR code to download the app from the App Store')}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
          <form className="flex w-full justify-center md:w-auto">
            <TextField
              type="email"
              aria-label="Email address"
              placeholder={t('Email address')}
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            />
            <Button type="submit" color="cyan" className="ml-4 flex-none">
              <span className="hidden lg:inline">
                {t('Join our newsletter')}
              </span>
              <span className="lg:hidden">{t('Join newsletter')}</span>
            </Button>
          </form>
          <div className="mt-6 text-sm text-gray-500 md:mt-0">
            <p>
              &copy; {t('Copyright')} {new Date().getFullYear()}. {t('All rights reserved')}
            </p>
            <p className="mt-2">
              {t('Need help? Reach out to us at ')}
              <a href="mailto:cs@aplikasiku.web.id" className="text-cyan-500 hover:underline">
              cs@aplikasiku.web.id
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
