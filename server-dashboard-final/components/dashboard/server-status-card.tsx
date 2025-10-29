import type React from "react"
interface ServerStatusCardProps {
  title: string
  children: React.ReactNode
}

export function ServerStatusCard({ title, children }: ServerStatusCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-200 mb-3">{title}</h3>
      <div className="space-y-2 text-gray-300 text-sm">{children}</div>
    </div>
  )
}

interface ProgressBarProps {
  label: string
  value?: number
}

export function ProgressBar({ label, value }: ProgressBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span>{value !== undefined ? `${value}%` : "Loading..."}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: value !== undefined ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  )
}
