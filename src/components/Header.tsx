'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import ThemeToggle from './ThemeToggle'
import NavItem from './NavItem/NavItem'

export function Header() {
  const { resolvedTheme } = useTheme()
  const pathname = usePathname()

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
            <NavItem
              pathname={pathname}
              resolvedTheme={resolvedTheme}
              path="/about"
              text="About"
            />
            <NavItem
              pathname={pathname}
              resolvedTheme={resolvedTheme}
              path="/newsletter"
              text="Join Us"
            />
            <NavItem
              pathname={pathname}
              resolvedTheme={resolvedTheme}
              path="/contact"
              text="Contact"
            />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}
