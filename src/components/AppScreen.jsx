import { forwardRef } from 'react'
import clsx from 'clsx'
import Icon from '@/images/logos/playstore.png'
import Image from 'next/image';

function Logo(props) {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
      {...props}
    >
      <Image src={Icon} alt="Logomark" width="25" height="25" {...props} />
      <h2 className="font-semibold text-white">Xinchat</h2>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function AppScreen({ children, className, ...props }) {
  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      <div className="flex justify-between px-4 pt-4">
        <MenuIcon className="h-6 w-6 flex-none" />
        <Logo className="h-6 flex-none" />
        <UserIcon className="h-6 w-6 flex-none" />
      </div>
      {children}
    </div>
  )
}

AppScreen.Header = forwardRef(function AppScreenHeader({ children }, ref) {
  return (
    <div ref={ref} className="mt-6 px-4 text-white">
      {children}
    </div>
  )
})

AppScreen.Title = forwardRef(function AppScreenTitle({ children }, ref) {
  return (
    <div ref={ref} className="text-2xl text-white">
      {children}
    </div>
  )
})

AppScreen.Subtitle = forwardRef(function AppScreenSubtitle({ children }, ref) {
  return (
    <div ref={ref} className="text-sm text-gray-500">
      {children}
    </div>
  )
})

AppScreen.Body = forwardRef(function AppScreenBody(
  { children, className },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx('mt-6 flex-auto rounded-t-2xl bg-white', className)}
    >
      {children}
    </div>
  )
})
