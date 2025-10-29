"use client"

import { useState } from "react"
import { NavigationSidebar } from "@/components/dashboard/navigation-sidebar"
import { QuickLinksSidebar } from "@/components/dashboard/quick-links-sidebar"
import { OverviewContent } from "@/components/dashboard/overview-content"
import { ServiceContent } from "@/components/dashboard/service-content"
import { DiscordContent } from "@/components/dashboard/discord-content"
import { SettingsContent } from "@/components/dashboard/settings-content"

export default function DashboardPage() {
  const [activeView, setActiveView] = useState("overview")

  const renderContent = () => {
    switch (activeView) {
      case "overview":
        return <OverviewContent />
      case "service":
        return <ServiceContent />
      case "discord":
        return <DiscordContent />
      case "setting":
        return <SettingsContent />
      case "nas":
        // TODO: This should navigate to /nas/ route
        return <OverviewContent />
      default:
        return <OverviewContent />
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Left Navigation Sidebar */}
      <NavigationSidebar activeView={activeView} onViewChange={setActiveView} />

      {/* Main Content Area */}
      <main className="ml-16 mr-64 p-6">{renderContent()}</main>

      {/* Right Quick Links Sidebar */}
      <QuickLinksSidebar />
    </div>
  )
}
