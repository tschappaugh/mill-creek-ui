type BadgeVariant = 'default' | 'featured' | 'subtle'

interface BadgeProps {
  label: string
  variant?: BadgeVariant
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-[#E8C4B0] text-[#2C1F14]',
  featured: 'bg-[#C1603A] text-[#FAF6F1]',
  subtle: 'bg-[#F2EBE1] text-[#2C1F14] border border-[#D9D2CA]',
}

export function Badge({ label, variant = 'default' }: BadgeProps) {
  return (
    <span className={`
            inline-flex items-center
            px-3 py-1.5
            rounded
            text-xs font-semibold tracking-widest uppercase
            ${variantStyles[variant]}
        `}
    >
      {label}
    </span>
  )
}
