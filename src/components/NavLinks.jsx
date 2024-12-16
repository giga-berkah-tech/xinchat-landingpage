import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { use, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null)
  const { t } = useTranslation('common')

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return [
    ['Features', '#features'],
    ['Term of Service', '#faqs'],
    ['Privacy Policy', '#secondary-features'],
    // ['Contact Us', '#faqs'],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-gray-100"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      {isClient && <span className="relative z-10">{t(label)}</span>}
    </Link>
  ))
}
