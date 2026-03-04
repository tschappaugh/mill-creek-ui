type CardVariant = 'default' | 'minimal' | 'featured'

interface CardImage {
  scr: string
  alt: string
}

interface CardProps {
  variant?: CardVariant
  title: string
  excerpt?: string
  tag: string
  image: CardImage
  href: string
}

const variantStyles: Record<CardVariant, string> = {
  default: 'flex flex-col',
  minimal: 'flex flex-col',
  featured: 'flex flex-row',
}

export function Card({
  variant = 'default',
  title,
  excerpt,
  tag,
  image,
  href,
}: CardProps) {
  return (
    <a 
      href={href}
      className={`
        block 
        bg-[#F2EBE1] 
        border border-[#D9D2CA] 
        rounded-lg 
        shadow-sm 
        overflow-hidden 
        transition-all duration-300 ease-in-out 
        hover:-translate-y-0.5 
        hover:shadow-md 
        ${variantStyles[variant]}
      `}
    >
  )
}