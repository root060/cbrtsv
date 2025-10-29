"use client"

import { useState } from "react"
import { Home, Server, FolderOpen, MessageSquare, Settings, Menu } from "lucide-react"

interface NavigationSidebarProps {
  activeView: string
  onViewChange: (view: string) => void
}

export function NavigationSidebar({ activeView, onViewChange }: NavigationSidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const navItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "service", label: "Service", icon: Server },
    { id: "nas", label: "Nas", icon: FolderOpen, href: "/nas/" },
    { id: "discord", label: "Discord", icon: MessageSquare },
    { id: "setting", label: "Setting", icon: Settings },
  ]

  return (
    <div
      className={`bg-gray-800 h-screen fixed left-0 top-0 transition-all duration-300 ${isExpanded ? "w-64" : "w-16"}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="p-4">
        <button onClick={() => setIsExpanded(!isExpanded)} className="text-gray-300 hover:text-white mb-6">
          <Menu className="w-6 h-6" />
        </button>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeView === item.id

            return (
              <button
                key={item.id}
                onClick={() => {
                  // TODO: If item has href, navigate to that route
                  if (item.href) {
                    console.log(`Navigate to ${item.href}`)
                  }
                  onViewChange(item.id)
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {isExpanded && <span className="text-sm font-medium">{item.label}</span>}
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
