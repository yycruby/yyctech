'use client'
import ThemeToggle from './ThemeToggle'

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-[1260px] px-4">
        <div className="flex items-center justify-between py-4">
          <p className="text-md font-black text-red-500 dark:text-red-400">
            YYC
            <span className="font-black text-zinc-900 dark:text-zinc-50">
              Tech
            </span>
          </p>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
