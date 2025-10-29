"use client"

import { useState } from "react"

// Placeholder icons - replace with your preferred icon library
const HomeIcon = () => <span>🏠</span>
const ServerIcon = () => <span>🖥️</span>
const FolderIcon = () => <span>📁</span>
const MessageIcon = () => <span>💬</span>
const SettingsIcon = () => <span>⚙️</span>
const MenuIcon = () => <span>☰</span>

interface NavigationSidebarProps {
  activeView: string
  onViewChange: (view: string) => void
}

export function NavigationSidebar({ activeView, onViewChange }: NavigationSidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const navItems = [
    { id: "overview", label: "Overview", icon: HomeIcon, href: "#overview" },
    { id: "service", label: "Service", icon: ServerIcon, href: "#service" },
    { id: "nas", label: "Nas", icon: FolderIcon, href: "/nas/" },
    { id: "discord", label: "Discord", icon: MessageIcon, href: "#discord" },
    { id: "setting", label: "Setting", icon: SettingsIcon, href: "#setting" },
  ]

  return (
    <div
      className={`bg-gray-800 h-screen fixed left-0 top-0 transition-all duration-300 ${isExpanded ? "w-64" : "w-16"}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="p-4">
        <button onClick={() => setIsExpanded(!isExpanded)} className="text-gray-300 hover:text-white mb-6">
          <MenuIcon />
        </button>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeView === item.id
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  // For non-Nas links, prevent default and use state management
                  if (item.id !== "nas") {
                    e.preventDefault()
                    onViewChange(item.id)
                  }
                  // For Nas, allow default <a> behavior to navigate to /nas/
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <Icon />
                {isExpanded && <span className="text-sm font-medium">{item.label}</span>}
              </a>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
