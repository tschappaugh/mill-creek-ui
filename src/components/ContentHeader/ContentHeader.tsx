interface ContentHeaderProps {
  level: 'h1' | 'h2'
  heading: string
  subtext?: string
  body: string
  className?: string
}

const styles = {
  h1: {
    gap: 'gap-6',
    bodyMaxWidth: 'max-w-[720px]',
    heading: 'font-["Cormorant_Garamond"] text-[56px] leading-[64px] lg:text-[64px] lg:leading-[72px] font-light text-mill-text-primary text-center',
    subtext: 'font-["Cormorant_Garamond"] text-[24px] leading-[32px] font-medium text-mill-text-secondary text-center',
    body: 'font-["Source_Sans_3"] text-[18px] leading-[28px] font-normal text-mill-text-primary',
  },
  h2: {
    gap: 'gap-4',
    bodyMaxWidth: 'max-w-[640px]',
    heading: 'font-["Cormorant_Garamond"] text-[40px] leading-[48px] lg:text-[48px] lg:leading-[56px] font-normal text-mill-text-primary text-center',
    subtext: 'font-["Cormorant_Garamond"] text-[24px] leading-[32px] font-medium text-mill-text-secondary text-center',
    body: 'font-["Source_Sans_3"] text-[18px] leading-[28px] font-normal text-mill-text-primary',
  },
}

export function ContentHeader({ level, heading, subtext, body, className }: ContentHeaderProps) {
  const s = styles[level]

  return (
    <section className={`w-full px-10 ${className ?? ''}`}>
      <div className={`flex flex-col items-center ${s.gap}`}>

        {level === 'h1'
          ? <h1 className={s.heading}>{heading}</h1>
          : <h2 className={s.heading}>{heading}</h2>
        }

        {subtext && (
          <p className={s.subtext}>{subtext}</p>
        )}

        <div className={`w-full ${s.bodyMaxWidth}`}>
          <p className={s.body}>{body}</p>
        </div>

      </div>
    </section>
  )
}
