"use client"

import { Circle } from "lucide-react"

// TODO: Replace with actual service data from API
const services = [
  { name: "Nginx", status: "Running" },
  { name: "File Browser", status: "Running" },
  { name: "Minecraft Server", status: "Stopped" },
  { name: "Docker", status: "Running" },
  { name: "PostgreSQL", status: "Running" },
  { name: "Redis", status: "Stopped" },
]

export default function MobileServices() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Service Status</h2>

      <div className="space-y-3">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Circle
                className={`w-3 h-3 ${
                  service.status === "Running" ? "fill-green-500 text-green-500" : "fill-red-500 text-red-500"
                }`}
              />
              <span className="text-gray-100 font-medium">{service.name}</span>
            </div>
            <span className={`text-sm ${service.status === "Running" ? "text-green-400" : "text-red-400"}`}>
              {service.status}
            </span>
          </div>
        ))}
      </div>

      {/* TODO: Fetch real-time service status from API */}
      {/* TODO: Add ability to start/stop services */}
      {/* TODO: Add service details view on tap */}
    </div>
  )
}
