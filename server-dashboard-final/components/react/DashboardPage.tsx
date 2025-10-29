"use client"

import { useState } from "react"
import { NavigationSidebar } from "./NavigationSidebar"
import { QuickLinksSidebar } from "./QuickLinksSidebar"
import { OverviewContent } from "./OverviewContent"
import { ServiceContent } from "./ServiceContent"
import { DiscordContent } from "./DiscordContent"
import { SettingsContent } from "./SettingsContent"

export function DashboardPage() {
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
