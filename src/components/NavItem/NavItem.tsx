import Link from 'next/link'

interface NavItemProps {
  pathname: string
  resolvedTheme: string | undefined
  path: string
  text: string
}

const NavItem = ({
  pathname,
  resolvedTheme,
  path,
  text,
}: NavItemProps) => {
  return (
    <Link href={path}>
      <span
        style={{
          backgroundColor:
            pathname === path && resolvedTheme === 'dark'
              ? '#252529'
              : pathname === path &&
                  (resolvedTheme === 'light' || resolvedTheme == undefined)
                ? '#f5f0f7'
                : 'transparent',
        }}
        className={`dark:ring-1 dark:ring-zinc-900/5 backdrop-blur dark:hover:ring-white/20 text-sm font-medium hover:shadow ${resolvedTheme === 'dark' ? 'hover:bg-[#252529]' : 'hover:bg-[#f5f0f7]'} rounded-full px-4 py-3 transition-all duration-200`}
      >
        {text}
      </span>
    </Link>
  )
}

export default NavItem
