"use client"

import { useState } from "react"
import { Home, Server, FolderOpen, MessageSquare, Settings } from "lucide-react"
import MobileOverview from "@/components/mobile/overview-content"
import MobileServices from "@/components/mobile/services-content"
import MobileDiscord from "@/components/mobile/discord-content"
import MobileSettings from "@/components/mobile/settings-content"

type NavSection = "overview" | "services" | "nas" | "discord" | "settings"

export default function MobileDashboard() {
  const [activeSection, setActiveSection] = useState<NavSection>("overview")

  const handleNasNavigation = () => {
    // TODO: Implement navigation to /nas/ route
    console.log("Navigate to /nas/")
    // For now, just set a placeholder state
    setActiveSection("nas")
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 pb-20">
      {/* Main Content Area - Conditional Rendering */}
      <main className="p-4">
        {activeSection === "overview" && <MobileOverview />}
        {activeSection === "services" && <MobileServices />}
        {activeSection === "nas" && (
          <div className="text-center py-8">
            <h2 className="text-xl font-semibold text-gray-100 mb-2">NAS</h2>
            <p className="text-gray-400">Redirecting to /nas/...</p>
            {/* TODO: Implement actual navigation to /nas/ route */}
          </div>
        )}
        {activeSection === "discord" && <MobileDiscord />}
        {activeSection === "settings" && <MobileSettings />}
      </main>

      {/* Fixed Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 shadow-lg">
        <div className="flex justify-around items-center h-16">
          {/* Overview Button */}
          <button
            onClick={() => setActiveSection("overview")}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              activeSection === "overview" ? "text-blue-400 bg-gray-700/50" : "text-gray-400 hover:text-gray-200"
            }`}
            aria-label="Overview"
          >
            <Home className="w-6 h-6 mb-1" />
            <span className="text-xs">Overview</span>
          </button>

          {/* Services Button */}
          <button
            onClick={() => setActiveSection("services")}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              activeSection === "services" ? "text-blue-400 bg-gray-700/50" : "text-gray-400 hover:text-gray-200"
            }`}
            aria-label="Services"
          >
            <Server className="w-6 h-6 mb-1" />
            <span className="text-xs">Services</span>
          </button>

          {/* NAS Button */}
          <button
            onClick={handleNasNavigation}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              activeSection === "nas" ? "text-blue-400 bg-gray-700/50" : "text-gray-400 hover:text-gray-200"
            }`}
            aria-label="NAS"
          >
            <FolderOpen className="w-6 h-6 mb-1" />
            <span className="text-xs">NAS</span>
          </button>

          {/* Discord Button */}
          <button
            onClick={() => setActiveSection("discord")}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              activeSection === "discord" ? "text-blue-400 bg-gray-700/50" : "text-gray-400 hover:text-gray-200"
            }`}
            aria-label="Discord"
          >
            <MessageSquare className="w-6 h-6 mb-1" />
            <span className="text-xs">Discord</span>
          </button>

          {/* Settings Button */}
          <button
            onClick={() => setActiveSection("settings")}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              activeSection === "settings" ? "text-blue-400 bg-gray-700/50" : "text-gray-400 hover:text-gray-200"
            }`}
            aria-label="Settings"
          >
            <Settings className="w-6 h-6 mb-1" />
            <span className="text-xs">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
