import type React from "react"

interface ServerStatusCardProps {
  title: string
  children: React.ReactNode
}

export function ServerStatusCard({ title, children }: ServerStatusCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4">
      <h3 className="text-sm font-semibold text-gray-200 mb-3">{title}</h3>
      <div className="text-gray-300 text-sm space-y-1">{children}</div>
    </div>
  )
}

interface ProgressBarProps {
  label: string
  value?: number
}

export function ProgressBar({ label, value = 0 }: ProgressBarProps) {
  return (
    <div className="mt-2">
      <div className="flex justify-between text-xs text-gray-400 mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div className="bg-blue-500 h-2 rounded-full transition-all" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
