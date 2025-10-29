"use client"

import { Link2, Palette, Bell, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileSettings() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Settings</h2>

      <div className="space-y-3">
        {/* Quick Links Management */}
        <div className="bg-gray-800 rounded-lg shadow-md p-4">
          <div className="flex items-center gap-3 mb-2">
            <Link2 className="w-5 h-5 text-blue-400" />
            <h3 className="text-base font-semibold text-gray-100">Quick Links</h3>
          </div>
          <p className="text-sm text-gray-400 mb-3">Manage your quick access links</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-gray-700 rounded">
              <span className="text-sm text-gray-300">Google</span>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                Edit
              </Button>
            </div>
            <div className="flex items-center justify-between p-2 bg-gray-700 rounded">
              <span className="text-sm text-gray-300">GitHub</span>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                Edit
              </Button>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="mt-3 w-full bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600"
          >
            Add New Link
          </Button>
          {/* TODO: Implement quick links CRUD functionality */}
        </div>

        {/* Theme Settings */}
        <div className="bg-gray-800 rounded-lg shadow-md p-4">
          <div className="flex items-center gap-3 mb-2">
            <Palette className="w-5 h-5 text-purple-400" />
            <h3 className="text-base font-semibold text-gray-100">Theme</h3>
          </div>
          <p className="text-sm text-gray-400 mb-3">Customize appearance</p>
          <Button
            variant="outline"
            size="sm"
            className="w-full bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600"
          >
            Dark Mode (Active)
          </Button>
          {/* TODO: Implement theme switching functionality */}
        </div>

        {/* Notifications */}
        <div className="bg-gray-800 rounded-lg shadow-md p-4">
          <div className="flex items-center gap-3 mb-2">
            <Bell className="w-5 h-5 text-yellow-400" />
            <h3 className="text-base font-semibold text-gray-100">Notifications</h3>
          </div>
          <p className="text-sm text-gray-400 mb-3">Manage alert preferences</p>
          <div className="space-y-2">
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Server Alerts</span>
              <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-gray-600 text-blue-500" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Service Status</span>
              <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-gray-600 text-blue-500" />
            </label>
          </div>
          {/* TODO: Implement notification preferences with backend sync */}
        </div>

        {/* Security */}
        <div className="bg-gray-800 rounded-lg shadow-md p-4">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-5 h-5 text-red-400" />
            <h3 className="text-base font-semibold text-gray-100">Security</h3>
          </div>
          <p className="text-sm text-gray-400 mb-3">Account and access settings</p>
          <Button
            variant="outline"
            size="sm"
            className="w-full bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600"
          >
            Change Password
          </Button>
          {/* TODO: Implement security settings (password change, 2FA, etc.) */}
        </div>
      </div>
    </div>
  )
}
