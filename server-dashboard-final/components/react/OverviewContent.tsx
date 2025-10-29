"use client"

import { useState } from "react"
import { ServerStatusCard, ProgressBar } from "./ServerStatusCard"

export function OverviewContent() {
  const [todos, setTodos] = useState(["Check server updates", "Review backup logs", "Update firewall rules"])
  const [newTodo, setNewTodo] = useState("")

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo])
      setNewTodo("")
      console.log("Add TODO - will call Flask API: POST /api/todos")
    }
  }

  const handleDeleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index))
    console.log("Delete TODO - will call Flask API: DELETE /api/todos/:id")
  }

  return (
    <div className="space-y-6">
      {/* Server Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ServerStatusCard title="CPU">
          {/* Fetch from /api/cpu */}
          <p>Usage: Loading...</p>
          <p>Temp: Loading...</p>
          <ProgressBar label="Load" value={0} />
        </ServerStatusCard>

        <ServerStatusCard title="Memory">
          {/* Fetch from /api/memory */}
          <p>Usage: Loading...</p>
          <ProgressBar label="RAM" value={0} />
        </ServerStatusCard>

        <ServerStatusCard title="Network">
          {/* Fetch from /api/network */}
          <p>Upload: Loading...</p>
          <p>Download: Loading...</p>
        </ServerStatusCard>

        <ServerStatusCard title="Disk (Root - /)">
          {/* Fetch from /api/disks */}
          <p>Usage: Loading...</p>
          <ProgressBar label="Storage" value={0} />
        </ServerStatusCard>

        <ServerStatusCard title="Disk (Backup - sda)">
          {/* Fetch from /api/disks */}
          <p>Usage: Loading...</p>
          <ProgressBar label="Storage" value={0} />
        </ServerStatusCard>

        <ServerStatusCard title="Disk (NAS - sdb)">
          {/* Fetch from /api/disks */}
          <p>Usage: Loading...</p>
          <ProgressBar label="Storage" value={0} />
        </ServerStatusCard>

        <ServerStatusCard title="Server Uptime">
          {/* Fetch from /api/uptime */}
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
            {/* Fetch from /api/calendar or use Google Calendar API directly */}
            <p>Calendar View Placeholder</p>
          </div>
        </div>

        {/* TODO List */}
        <div className="bg-gray-800 rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">TODO List</h3>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAddTodo()}
              placeholder="Add new TODO..."
              className="flex-1 bg-gray-700 text-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleAddTodo}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Add
            </button>
          </div>

          <div className="space-y-2">
            {/* TODO: Fetch todos from Flask API: GET /api/todos */}
            {/* POST /api/todos to add new todo */}
            {/* DELETE /api/todos/:id to remove todo */}
            {todos.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-700 p-3 rounded-md">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-600" />
                <span className="flex-1 text-gray-300">{item}</span>
                <button onClick={() => handleDeleteTodo(index)} className="text-red-400 hover:text-red-300 text-sm">
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
