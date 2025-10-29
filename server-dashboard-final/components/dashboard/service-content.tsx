export function ServiceContent() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-200 mb-4">Service Status Page</h2>
      <p className="text-gray-400">
        {/* TODO: Display real-time service status for Nginx, File Browser, Docker containers, etc. */}
        Service monitoring will be implemented here. This will show the status of:
      </p>
      <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
        <li>Nginx Web Server</li>
        <li>File Browser</li>
        <li>Docker Containers</li>
        <li>Database Services</li>
        <li>Background Jobs</li>
      </ul>
    </div>
  )
}
