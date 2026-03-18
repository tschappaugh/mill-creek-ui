import type { ReactNode } from 'react'

type ButtonBackground = 'light' | 'dark'

/** @public */
interface ButtonProps {
  /** Button label */
  children: ReactNode
  /** Color scheme — light for brand orange, dark for cream on dark sections */
  background?: ButtonBackground
  /** Optional icon rendered to the right of the label */
  icon?: ReactNode
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

const backgroundStyles: Record<ButtonBackground, string> = {
  light: [
    'bg-mill-brand-dark border-mill-brand-dark text-mill-background',
    'hover:bg-mill-brand-darker hover:border-mill-brand-darker',
    'active:bg-mill-brand-darkest active:border-mill-brand-darkest',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mill-brand-dark',
  ].join(' '),
  dark: [
    'bg-mill-background border-mill-background text-mill-text-primary',
    'hover:bg-mill-surface-dark hover:border-mill-surface-dark',
    'active:bg-mill-surface-darker active:border-mill-surface-darker',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mill-background',
  ].join(' '),
}


export function Button({
  children,
  background = 'light',
  icon,
  disabled = false,
  onClick,
  type = 'button',
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-3.5
        py-2 px-4
        rounded border
        font-['Source_Sans_3'] font-medium text-xl leading-[1.424]
        transition-colors duration-150 ease-in-out
        disabled:opacity-40 disabled:cursor-not-allowed
        ${backgroundStyles[background]}
        ${className ?? ''}
      `}
    >
      {children}
      {icon && (
        <span className="flex size-5 items-center justify-center" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  )
}
