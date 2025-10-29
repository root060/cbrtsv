"use client"

import { useState } from "react"
import { Cpu, HardDrive, Network, Clock, Calendar, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// TODO: Replace with actual data from API
interface TodoItem {
  id: string
  text: string
  completed: boolean
}

export default function MobileOverview() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: "1", text: "Check server updates", completed: false },
    { id: "2", text: "Review backup logs", completed: false },
  ])
  const [newTodo, setNewTodo] = useState("")

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now().toString(), text: newTodo, completed: false }])
      setNewTodo("")
    }
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="space-y-4">
      {/* Main Title */}
      <h1 className="text-2xl font-bold text-gray-100 mb-6">CBRT Server Portal</h1>

      {/* Server Status Section */}
      <section>
        <h2 className="text-lg font-semibold text-gray-100 mb-3">Server Status</h2>

        {/* CPU Card */}
        <div className="bg-gray-800 rounded-lg shadow-md p-4 mb-4">
          <div className="flex items-center mb-2">
            <Cpu className="w-5 h-5 text-blue-400 mr-2" />
            <h3 className="text-base font-semibold text-gray-100">CPU</h3>
          </div>
          <p className="text-sm text-gray-300 mb-1">Usage: Loading...</p>
          <p className="text-sm text-gray-300 mb-2">Temp: Loading...</p>
          {/* Placeholder progress bar */}
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full w-0" />
          </div>
          {/* TODO: Fetch real CPU data from API and update progress bar */}
        </div>

        {/* Memory Card */}
        <div className="bg-gray-800 rounded-lg shadow-md p-4 mb-4">
          <div className="flex items-center mb-2">
            <HardDrive className="w-5 h-5 text-green-400 mr-2" />
            <h3 className="text-base font-semibold text-gray-100">Memory</h3>
          </div>
          <p className="text-sm text-gray-300 mb-2">Usage: Loading...</p>
          {/* Placeholder progress bar */}
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full w-0" />
          </div>
          {/* TODO: Fetch real memory data from API and update progress bar */}
        </div>

        {/* Network Card */}
        <div className="bg-gray-800 rounded-lg shadow-md p-4 mb-4">
          <div className="flex items-center mb-2">
            <Network className="w-5 h-5 text-purple-400 mr-2" />
            <h3 className="text-base font-semibold text-gray-100">Network</h3>
          </div>
          <p className="text-sm text-gray-300 mb-1">Upload: Loading...</p>
          <p className="text-sm text-gray-300">Download: Loading...</p>
          {/* TODO: Fetch real network data from API */}
        </div>

        {/* Disk Usage Card (Combined) */}
        <div className="bg-gray-800 rounded-lg shadow-md p-4 mb-4">
          <div className="flex items-center mb-2">
            <HardDrive className="w-5 h-5 text-yellow-400 mr-2" />
            <h3 className="text-base font-semibold text-gray-100">Disk Usage</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-300 mb-1">Root: Loading...</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full w-0" />
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-300 mb-1">Backup: Loading...</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full w-0" />
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-300 mb-1">NAS: Loading...</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full w-0" />
              </div>
            </div>
          </div>
          {/* TODO: Fetch real disk usage data from API and update progress bars */}
        </div>

        {/* Uptime Card */}
        <div className="bg-gray-800 rounded-lg shadow-md p-4 mb-4">
          <div className="flex items-center mb-2">
            <Clock className="w-5 h-5 text-cyan-400 mr-2" />
            <h3 className="text-base font-semibold text-gray-100">Server Uptime</h3>
          </div>
          <p className="text-sm text-gray-300">Uptime: Loading...</p>
          {/* TODO: Fetch real uptime data from API */}
        </div>
      </section>

      {/* Calendar Section */}
      <section>
        <div className="bg-gray-800 rounded-lg shadow-md p-4 mb-4">
          <div className="flex items-center mb-3">
            <Calendar className="w-5 h-5 text-indigo-400 mr-2" />
            <h3 className="text-base font-semibold text-gray-100">Google Calendar Sync</h3>
          </div>
          <div className="text-sm text-gray-400 space-y-2">
            <p>Today: No events</p>
            <p>Upcoming: Loading...</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-2 w-full bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600"
            >
              View Full Calendar
            </Button>
          </div>
          {/* TODO: Integrate with Google Calendar API to fetch and display events */}
          {/* TODO: Implement full calendar view modal or separate page */}
        </div>
      </section>

      {/* TODO List Section */}
      <section>
        <div className="bg-gray-800 rounded-lg shadow-md p-4 mb-4">
          <h3 className="text-base font-semibold text-gray-100 mb-3">TODO List</h3>

          {/* Add TODO Input */}
          <div className="flex gap-2 mb-4">
            <Input
              type="text"
              placeholder="Add new task..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTodo()}
              className="flex-1 bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-500"
            />
            <Button onClick={addTodo} size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          {/* TODO List */}
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {todos.map((todo) => (
              <div key={todo.id} className="flex items-center gap-2 p-2 bg-gray-700 rounded">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-4 h-4 rounded border-gray-600 bg-gray-600 text-blue-500 focus:ring-blue-500"
                />
                <span className={`flex-1 text-sm ${todo.completed ? "line-through text-gray-500" : "text-gray-300"}`}>
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-400 hover:text-red-300"
                  aria-label="Delete task"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          {/* TODO: Implement state persistence (localStorage or backend sync) */}
        </div>
      </section>
    </div>
  )
}
