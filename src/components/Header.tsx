'use client'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import ThemeToggle from './ThemeToggle'

export function Header() {
  const { resolvedTheme } = useTheme()

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-zinc-50 dark:bg-zinc-900">
      <nav className="mx-auto max-w-[1260px] px-4">
        <div className="flex items-center justify-between py-4">
          <Link href={'/'}>
            <p className="text-lg font-black text-red-500 antialiased dark:text-red-400">
              YYC
              <span className="font-black text-zinc-900 antialiased dark:text-zinc-50">
                tech
              </span>
            </p>
          </Link>
          <div className="flex items-center justify-end gap-1 antialiased">
            <Link href="/about">
              <span
                className={`text-sm font-medium hover:shadow ${resolvedTheme === 'dark' ? 'hover:bg-[#252529]' : 'hover:bg-[#f5f0f7]'} rounded-full px-4 py-3 transition-all duration-200`}
              >
                About
              </span>
            </Link>
            <Link href="/events">
              <span
                className={`text-sm font-medium hover:shadow ${resolvedTheme === 'dark' ? 'hover:bg-[#252529]' : 'hover:bg-[#f5f0f7]'} rounded-full px-4 py-3 transition-all duration-200`}
              >
                Events
              </span>
            </Link>
            <Link href="/communities">
              <span
                className={`text-sm font-medium hover:shadow ${resolvedTheme === 'dark' ? 'hover:bg-[#252529]' : 'hover:bg-[#f5f0f7]'} rounded-full px-4 py-3 transition-all duration-200`}
              >
                Communities
              </span>
            </Link>
            <Link href="/newsletter">
              <span
                className={`text-sm font-medium hover:shadow ${resolvedTheme === 'dark' ? 'hover:bg-[#252529]' : 'hover:bg-[#f5f0f7]'} rounded-full px-4 py-3 transition-all duration-200`}
              >
                Join Us
              </span>
            </Link>
            <Link href="/contact">
              <span
                className={`mr-2 text-sm font-medium hover:shadow ${resolvedTheme === 'dark' ? 'hover:bg-[#252529]' : 'hover:bg-[#f5f0f7]'} rounded-full px-4 py-3 transition-all duration-200`}
              >
                Contact
              </span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}
