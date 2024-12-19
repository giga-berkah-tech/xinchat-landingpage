import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { Listbox, Popover, Transition } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  LanguageSwitcher,
  LinkWithLocale,
  useTranslation,
} from 'next-export-i18n'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const languages = [
  { name: 'English', value: 'en' },
  { name: 'China', value: 'zh' },
]

function Dropdown({ ...props }) {
  const router = useRouter()

  const [selected, setSelected] = useState(null)

  useEffect(() => {
    let x = 'en'
    const { lang } = router.query
    if (lang?.length) {
      x = lang
    }
    setSelected(languages.filter((l) => l.value === x)[0])
  }, [])

  return (
    <div {...props}>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-1 pl-3 pr-10 text-left text-sm shadow focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm md:py-2 md:text-base">
            <span className="block truncate">{selected?.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {languages.map((language, languageIdx) => (
                <LanguageSwitcher key={languageIdx} lang={language.value}>
                  <Listbox.Option
                    key={languageIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                    value={language}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {language.name}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                </LanguageSwitcher>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <LinkWithLocale href={props.href}>
      <Popover.Button className="block text-base leading-7 tracking-tight text-gray-700">
        {children}
      </Popover.Button>
    </LinkWithLocale>
  )
}

const Header = () => {
  const { t } = useTranslation()

  return (
    <header>
      <nav>
        <Container className="relative z-50 flex items-center justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <LinkWithLocale href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </LinkWithLocale>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="order-last mt-3 md:mt-0 lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="/term-of-service">
                              {t('Term of Service')}
                            </MobileNavLink>
                            <MobileNavLink href="/privacy-policy">
                              {t('Privacy Policy')}
                            </MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            {/* <Button href="/login" variant="outline">
                              Log in
                            </Button> */}
                            <Button href="#">Download the app</Button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <Dropdown />
            {/* <Button href="/login" variant="outline" className="hidden lg:block">
              Log in
            </Button>
            <Button href="#" className="hidden lg:block">
              Download
            </Button> */}
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default Header
