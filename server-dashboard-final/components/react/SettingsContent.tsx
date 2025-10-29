export function SettingsContent() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">Settings</h2>
      <div className="text-gray-300">
        {/* TODO: Implement settings interface */}
        {/* GET /api/settings to fetch current settings */}
        {/* PUT /api/settings to update settings */}
        <p>Settings interface will be implemented here.</p>
        <p className="mt-2 text-sm text-gray-400">
          This section will include user preferences, notification settings, and system configurations.
        </p>
      </div>
    </div>
  )
}
