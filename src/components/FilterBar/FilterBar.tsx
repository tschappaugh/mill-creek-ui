import { Funnel } from '../../icons/Funnel'
import { Pill } from '../Pill'

interface FilterBarProps {
  categories: string[]
  active: string | null
  onChange: (category: string | null) => void
  className?: string
}

export function FilterBar({ categories, active, onChange, className }: FilterBarProps) {
  return (
    <div
      className={`flex flex-row flex-wrap items-center justify-center gap-2 ${className ?? ''}`}
      role="group"
      aria-label="Filter by category"
    >
      <Funnel className="text-mill-text-secondary shrink-0" />

      <Pill
        label="All"
        active={active === null}
        onClick={() => onChange(null)}
      />

      {categories.map((category) => (
        <Pill
          key={category}
          label={category}
          active={active === category}
          onClick={() => onChange(category)}
        />
      ))}
    </div>
  )
}
