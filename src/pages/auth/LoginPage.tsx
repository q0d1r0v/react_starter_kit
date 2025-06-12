export default function LoginPage() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login to Your Account
        </h2>
        <div className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200">
            Sign In
          </button>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <span className="text-blue-600 hover:underline">Sign up</span>
        </p>
      </div>
    </div>
  );
}
