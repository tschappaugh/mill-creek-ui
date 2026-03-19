const Diamond = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="8.48528"
      width="12"
      height="12"
      transform="rotate(45 8.48528 0)"
      fill="currentColor"
    />
  </svg>
)

interface SeparatorProps {
  className?: string
}

export function Separator({ className }: SeparatorProps) {
  return (
    <div
      aria-hidden="true"
      className={`flex flex-row items-center justify-center gap-2 text-mill-brand ${className ?? ''}`}
    >
      <Diamond />
      <Diamond />
      <Diamond />
    </div>
  )
}
