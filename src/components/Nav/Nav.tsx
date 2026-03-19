'use client'

import type { ReactNode } from 'react'
import { useEffect, useId, useState } from 'react'
import { Close } from '../../icons/Close'
import { Hamburger } from '../../icons/Hamburger'

interface NavLink {
  label: string
  href: string
  active?: boolean
}

interface NavProps {
  logo: ReactNode
  links: NavLink[]
  cta?: ReactNode
}

export function Nav({ logo, links, cta }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50
        transition-all duration-300 ease-in-out
        ${mobileOpen ? 'bg-mill-surface min-h-screen' : 'bg-mill-background'}
        ${scrolled && !mobileOpen
          ? 'shadow-[0_4px_12px_rgba(0,0,0,0.12)]'
          : 'shadow-[0_2px_8px_rgba(0,0,0,0.08)]'}
      `}
    >

      {/* Desktop layout — hidden on mobile, flex row on md+ */}
      <div
        className={`
          hidden lg:flex flex-row items-center
          transition-[height] duration-300 ease-in-out
          ${scrolled ? 'h-16' : 'h-24'}
        `}
      >
        <div className="w-[350px] flex items-center justify-center shrink-0">
          {cta}
        </div>

        <div className="flex-1 flex items-center justify-center">
          {logo}
        </div>

        <nav
          aria-label="Main navigation"
          className="w-[350px] flex items-center justify-center gap-10 shrink-0"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                font-['Source_Sans_3'] font-medium text-[18px] leading-[1.111] capitalize
                transition-colors duration-150
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mill-brand-dark
                ${link.active
                  ? 'text-mill-brand-darkest'
                  : 'text-mill-brand-dark hover:text-mill-brand-darker'
                }
              `}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile bar — visible on mobile, hidden on md+ */}
      <div className="lg:hidden flex flex-row items-center h-16">
        <div className="flex-1 flex items-center justify-center pl-16">
          {logo}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls={menuId}
          className="
            size-16 flex items-center justify-center shrink-0
            text-mill-text-primary
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-mill-text-primary
          "
        >
          {mobileOpen
            ? <Close size={24} className="text-mill-brand-dark" />
            : <Hamburger size={24} />
          }
        </button>
      </div>

      {/* Mobile menu panel — only rendered when open */}
      {mobileOpen && (
        <nav
          id={menuId}
          aria-label="Main navigation"
          className="lg:hidden flex flex-col items-center gap-8 pt-[58px] pb-10"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`
                w-full text-center
                font-['Source_Sans_3'] font-medium text-[32px] leading-[0.625] capitalize
                transition-colors duration-150
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mill-brand-dark
                ${link.active
                  ? 'text-mill-brand-darkest'
                  : 'text-mill-brand-dark hover:text-mill-brand-darker'
                }
              `}
            >
              {link.label}
            </a>
          ))}
          {cta && (
            <div className="w-full px-[116px] pt-2 flex justify-center">
              {cta}
            </div>
          )}
        </nav>
      )}

    </header>
  )
}
