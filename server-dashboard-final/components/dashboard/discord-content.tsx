export function DiscordContent() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-200 mb-4">Discord Bot Dashboard</h2>
      <p className="text-gray-400">
        {/* TODO: Display Discord bot status, commands, and management interface */}
        Discord bot management will be implemented here. Features will include:
      </p>
      <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
        <li>Bot Online/Offline Status</li>
        <li>Active Servers</li>
        <li>Command Usage Statistics</li>
        <li>Bot Configuration</li>
        <li>Log Viewer</li>
      </ul>
    </div>
  )
}
