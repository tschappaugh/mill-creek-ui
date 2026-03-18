interface PillProps {
  label: string
  active?: boolean
  onClick?: () => void
  className?: string
}

export function Pill({ label, active = false, onClick, className }: PillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`
        inline-flex items-center justify-center
        py-1.5 px-3
        rounded border
        font-['Source_Sans_3'] text-xs font-medium uppercase tracking-[0.08em] leading-[1.333]
        transition-colors duration-150 ease-in-out
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        ${
          active
            ? 'bg-mill-brand-dark border-mill-brand-dark text-mill-background focus-visible:outline-mill-brand-dark'
            : 'bg-mill-surface border-mill-border text-mill-text-primary hover:bg-mill-accent hover:border-mill-accent focus-visible:outline-mill-text-primary'
        }
        ${className ?? ''}
      `}
    >
      {label}
    </button>
  )
}
