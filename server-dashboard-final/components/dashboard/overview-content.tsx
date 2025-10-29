"use client"

import { ServerStatusCard, ProgressBar } from "./server-status-card"

export function OverviewContent() {
  // TODO: Fetch real-time server status data from API
  // Placeholder data - will be replaced with actual API calls

  return (
    <div className="space-y-6">
      {/* Server Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ServerStatusCard title="CPU">
          <p>Usage: Loading...</p>
          <p>Temp: Loading...</p>
          <ProgressBar label="Load" />
        </ServerStatusCard>

        <ServerStatusCard title="Memory">
          <p>Usage: Loading...</p>
          <ProgressBar label="RAM" />
        </ServerStatusCard>

        <ServerStatusCard title="Network">
          <p>Upload: Loading...</p>
          <p>Download: Loading...</p>
        </ServerStatusCard>

        <ServerStatusCard title="Disk (Root - /)">
          <p>Usage: Loading...</p>
          <ProgressBar label="Storage" />
        </ServerStatusCard>

        <ServerStatusCard title="Disk (Backup - sda)">
          <p>Usage: Loading...</p>
          <ProgressBar label="Storage" />
        </ServerStatusCard>

        <ServerStatusCard title="Disk (NAS - sdb)">
          <p>Usage: Loading...</p>
          <ProgressBar label="Storage" />
        </ServerStatusCard>

        <ServerStatusCard title="Server Uptime">
          <p>Uptime: Loading...</p>
        </ServerStatusCard>
      </div>

      {/* Calendar & TODO Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Calendar */}
        <div className="bg-gray-800 rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">Google Calendar Sync</h3>
          <div className="bg-gray-700 rounded-md p-4 h-64 flex items-center justify-center text-gray-400">
            {/* TODO: Integrate Google Calendar API to display monthly view */}
            <p>Calendar View Placeholder</p>
          </div>
        </div>

        {/* TODO List */}
        <div className="bg-gray-800 rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">TODO List</h3>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Add new TODO..."
              className="flex-1 bg-gray-700 text-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => {
                // TODO: Implement add TODO functionality with state management
                console.log("Add TODO item")
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Add
            </button>
          </div>

          <div className="space-y-2">
            {/* TODO: Implement state management and sync with Google Calendar/Tasks */}
            {["Check server updates", "Review backup logs", "Update firewall rules"].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-700 p-3 rounded-md">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-600" />
                <span className="flex-1 text-gray-300">{item}</span>
                <button
                  onClick={() => {
                    // TODO: Implement delete TODO functionality
                    console.log("Delete TODO item")
                  }}
                  className="text-red-400 hover:text-red-300 text-sm"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
