import type { ReactNode } from 'react'
import { Facebook } from '../../icons/Facebook'
import { Instagram } from '../../icons/Instagram'
import { Pinterest } from '../../icons/Pinterest'

interface FooterLink {
  label: string
  href: string
}

type SocialPlatform = 'instagram' | 'facebook' | 'pinterest'

interface SocialLink {
  platform: SocialPlatform
  href: string
}

interface FooterProps {
  logo: ReactNode
  links: FooterLink[]
  copyright: string
  socialLinks?: SocialLink[]
  className?: string
}

const socialIconMap: Record<SocialPlatform, typeof Instagram> = {
  instagram: Instagram,
  facebook: Facebook,
  pinterest: Pinterest,
}

const linkClass = `
  font-['Source_Sans_3'] text-[20px] leading-[24px] font-medium
  text-mill-background text-center
  hover:text-mill-surface-dark active:text-mill-surface-darker
  transition-colors duration-150
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mill-background
`

const socialIconClass = `
  text-mill-background
  hover:text-mill-surface-dark active:text-mill-surface-darker
  transition-colors duration-150
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mill-background
`

export function Footer({ logo, links, copyright, socialLinks, className }: FooterProps) {
  const hasSocial = socialLinks && socialLinks.length > 0

  const SocialIcons = hasSocial ? (
    <div className="flex flex-row items-center justify-center gap-4">
      {socialLinks.map(({ platform, href }) => {
        const Icon = socialIconMap[platform]
        return (
          <a key={platform} href={href} aria-label={platform} className={socialIconClass}>
            <Icon size={20} />
          </a>
        )
      })}
    </div>
  ) : null

  return (
    <footer className={`w-full bg-mill-text-primary pt-8 pb-12 ${className ?? ''}`}>

      {/* Desktop layout */}
      <div className="hidden lg:flex flex-row items-center">

        {/* Left — social icons + copyright, centered in column */}
        <div className="w-[300px] pl-10 shrink-0 flex flex-col items-center gap-6">
          {SocialIcons}
          <p className="font-['Source_Sans_3'] text-[16px] leading-[24px] font-normal text-mill-background text-center">
            {copyright}
          </p>
        </div>

        {/* Center — logo */}
        <div className="flex-1 flex items-center justify-center">
          {logo}
        </div>

        {/* Right — nav links, centered in column */}
        <nav
          aria-label="Footer navigation"
          className="w-[300px] pr-10 shrink-0 flex flex-col items-center gap-2"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </nav>

      </div>

      {/* Mobile layout — logo → nav → social → copyright */}
      <div className="lg:hidden flex flex-col items-center gap-6 px-10">
        {logo}

        <nav
          aria-label="Footer navigation"
          className="flex flex-col items-center gap-2"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        {SocialIcons}

        <p className="font-['Source_Sans_3'] text-[16px] leading-[24px] font-normal text-mill-background text-center">
          {copyright}
        </p>
      </div>

    </footer>
  )
}
