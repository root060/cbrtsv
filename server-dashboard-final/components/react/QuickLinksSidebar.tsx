"use client"

// Placeholder icons
const PlusIcon = () => <span>➕</span>
const EditIcon = () => <span>✏️</span>

export function QuickLinksSidebar() {
  const quickLinks = [
    { name: "Google", url: "https://google.com", favicon: "🔍" },
    { name: "GitHub", url: "https://github.com", favicon: "💻" },
    { name: "Server Docs", url: "https://docs.example.com", favicon: "📚" },
  ]

  const handleAddLink = () => {
    console.log("Add new link - will call Flask API")
  }

  const handleEditMode = () => {
    console.log("Toggle edit mode")
  }

  return (
    <div className="w-64 bg-gray-800 h-screen fixed right-0 top-0 p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-200">Quick Links</h2>
        <div className="flex gap-2">
          <button onClick={handleAddLink} className="text-gray-400 hover:text-white transition-colors" title="Add Link">
            <PlusIcon />
          </button>
          <button
            onClick={handleEditMode}
            className="text-gray-400 hover:text-white transition-colors"
            title="Edit Links"
          >
            <EditIcon />
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
