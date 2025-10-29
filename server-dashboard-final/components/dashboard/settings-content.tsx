export function SettingsContent() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-200 mb-4">Settings Page</h2>
      <p className="text-gray-400">
        {/* TODO: Implement server and dashboard configuration settings */}
        Configuration options will be available here:
      </p>
      <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
        <li>Server Configuration</li>
        <li>Dashboard Preferences</li>
        <li>Notification Settings</li>
        <li>User Management</li>
        <li>API Keys & Integrations</li>
        <li>Backup & Restore</li>
      </ul>
    </div>
  )
}
