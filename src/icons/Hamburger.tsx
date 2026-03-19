interface HamburgerProps {
  size?: number
  className?: string
}

export function Hamburger({ size = 20, className }: HamburgerProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 22"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect width="24" height="2" rx="1" fill="currentColor" />
      <rect y="10" width="24" height="2" rx="1" fill="currentColor" />
      <rect y="20" width="24" height="2" rx="1" fill="currentColor" />
    </svg>
  )
}
