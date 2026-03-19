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
      <rect y="4" width="24" height="2" fill="currentColor" />
      <rect y="16" width="24" height="2" fill="currentColor" />
    </svg>
  )
}
