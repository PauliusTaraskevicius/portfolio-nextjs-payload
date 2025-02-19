'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MobileHeader } from './mobile-header'

const headerLinks = [
  {
    title: 'Home,',
    href: '/',
  },
  {
    title: 'About me,',
    href: '/about',
  },
  {
    title: 'Services,',
    href: '/services',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
]

interface HeaderProps {
  className: string
}

export const Header = ({ className }: HeaderProps) => {
  const path = usePathname()

  return (
    <>
      <div className={cn('flex justify-between items-center p-2 lg:hidden right-0', className)}>
        <div className="flex flex-col items-start text-sm">
          <p className="text-[#717171]">Hellom my name is</p>
          <p className="text-white">Paulius Taraškevičius</p>
        </div>
        <MobileHeader />
      </div>
      <div className={cn("hidden lg:flex justify-between items-center w-full px-8 bg-transparent", className)}>
        <div className="flex flex-col gap-y-2">
          <p className="text-[#717171]">Quick Links</p>
          <div className="flex gap-3">
            {headerLinks.map((route) => (
              <Link href={route.href} key={route.href}>
                <p className={cn('text-[#717171] text-lg', route.href === path && 'text-white')}>
                  {route.title}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-2">
          <p className="text-[#717171] text-lg">Hellom my name is</p>
          <p className="text-white">Paulius Taraškevičius</p>
        </div>

        <div className="flex flex-col items-end gap-y-2 text-[#717171]">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-green-500 rounded-full" />
            <p className="text-lg">Available for new projects</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/contact" className="text-[#717171] text-lg">
              Contact,
            </Link>
            <a href="#" className="text-white text-lg">
              Book a free consultation call
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
