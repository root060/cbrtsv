"use client"

import { Bot, Activity } from "lucide-react"

export default function MobileDiscord() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Discord Bot Status</h2>

      <div className="bg-gray-800 rounded-lg shadow-md p-4 space-y-4">
        <div className="flex items-center gap-3">
          <Bot className="w-6 h-6 text-indigo-400" />
          <div>
            <p className="text-gray-100 font-medium">Bot Status</p>
            <p className="text-sm text-gray-400">Loading...</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Activity className="w-6 h-6 text-green-400" />
          <div>
            <p className="text-gray-100 font-medium">Commands</p>
            <p className="text-sm text-gray-400">Loading...</p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-700">
          <p className="text-sm text-gray-400 mb-2">Recent Activity:</p>
          <div className="space-y-2">
            <p className="text-xs text-gray-500">No recent activity</p>
          </div>
        </div>
      </div>

      {/* TODO: Integrate with Discord Bot API to fetch real-time status */}
      {/* TODO: Display bot uptime, connected servers, active users */}
      {/* TODO: Show command usage statistics */}
      {/* TODO: Add bot control buttons (restart, stop, etc.) */}
    </div>
  )
}
