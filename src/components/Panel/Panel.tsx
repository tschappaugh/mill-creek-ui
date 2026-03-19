import type { ReactNode } from 'react'

interface PanelProps {
  children: ReactNode
  className?: string
}

export function Panel({ children, className }: PanelProps) {
  return (
    <div className={`rounded-lg border border-mill-border bg-mill-surface p-6 ${className ?? ''}`}>
      {children}
    </div>
  )
}
