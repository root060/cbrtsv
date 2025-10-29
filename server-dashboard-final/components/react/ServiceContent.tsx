export function ServiceContent() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">Service Management</h2>
      <div className="text-gray-300">
        {/* TODO: Implement service list and management interface */}
        {/* Fetch from /api/services */}
        <p>Service management interface will be implemented here.</p>
        <p className="mt-2 text-sm text-gray-400">
          This section will display running services, their status, and controls to start/stop/restart them.
        </p>
      </div>
    </div>
  )
}
