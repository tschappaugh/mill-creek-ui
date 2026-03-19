import type { ReactNode } from 'react'

export interface HeroProps {
  image: ReactNode
  headline: string
  subhead: string
  body: string
  cta?: ReactNode
}

export function Hero({ image, headline, subhead, body, cta }: HeroProps) {
  return (
    <section className="relative w-full h-[650px] lg:h-[600px] overflow-hidden">

      <div className="absolute inset-0">
        {image}
      </div>

      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-[linear-gradient(180deg,rgba(44,31,20,0.8)_0%,rgba(44,31,20,0.6)_60%,rgba(44,31,20,0.4)_100%)]
          lg:bg-[linear-gradient(180deg,rgba(44,31,20,0.8)_0%,rgba(44,31,20,0.6)_60%,rgba(44,31,20,0)_100%)]
        "
      />

      <div className="relative z-10 flex flex-col items-center justify-start gap-4 p-10 lg:py-14 lg:px-[171px] w-full h-full">
        <h1 className="w-full font-['Cormorant_Garamond'] font-light text-[52px] leading-[1.231] lg:text-[64px] lg:leading-[1.125] text-center text-mill-background text-balance">
          {headline}
        </h1>

        <p className="w-full font-['Cormorant_Garamond'] font-semibold text-[28px] leading-[1.286] lg:text-[32px] lg:leading-[1.25] text-center text-mill-background">
          {subhead}
        </p>

        <p className="w-full font-['Source_Sans_3'] font-normal text-[18px] leading-[1.333] text-center text-mill-background">
          {body}
        </p>

        {cta && (
          <div className="pt-4">
            {cta}
          </div>
        )}
      </div>

    </section>
  )
}
