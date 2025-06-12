import { BarChart3, Users, Settings } from "lucide-react";

export default function IndexAdminPage() {
  return (
    <div className="min-h-screen bg-blue-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          👋 Welcome back, Admin!
        </h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="text-blue-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <p className="text-xl font-bold text-gray-800">1,240</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <BarChart3 className="text-green-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Monthly Visits</p>
              <p className="text-xl font-bold text-gray-800">32,540</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Settings className="text-purple-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">System Status</p>
              <p className="text-xl font-bold text-gray-800">Operational</p>
            </div>
          </div>
        </div>

        {/* More Content Placeholder */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            🔧 Quick Actions
          </h2>
          <p className="text-gray-600">
            Here you can manage users, review analytics, or configure system
            settings.
          </p>
        </div>
      </div>
    </div>
  );
}
