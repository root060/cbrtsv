"use client"

import { Plus, Edit } from "lucide-react"

export function QuickLinksSidebar() {
  // TODO: Implement state management for links (add/edit/delete functionality)
  const quickLinks = [
    { name: "Google", url: "https://google.com", favicon: "🔍" },
    { name: "GitHub", url: "https://github.com", favicon: "💻" },
    { name: "Server Docs", url: "https://docs.example.com", favicon: "📚" },
  ]

  return (
    <div className="w-64 bg-gray-800 h-screen fixed right-0 top-0 p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-200">Quick Links</h2>
        <div className="flex gap-2">
          <button
            onClick={() => {
              // TODO: Implement add link functionality
              console.log("Add new link")
            }}
            className="text-gray-400 hover:text-white transition-colors"
            title="Add Link"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              // TODO: Implement edit mode toggle
              console.log("Toggle edit mode")
            }}
            className="text-gray-400 hover:text-white transition-colors"
            title="Edit Links"
          >
            <Edit className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2">
        {quickLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors group"
          >
            {/* Placeholder favicon */}
            <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center text-sm flex-shrink-0">
              {link.favicon}
            </div>
            <span className="text-sm text-gray-300 group-hover:text-white truncate">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
