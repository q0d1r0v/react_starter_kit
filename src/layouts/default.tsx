import { Outlet } from "react-router-dom";
import { Heart, Star, MessageCircle, Github } from "lucide-react";

export default function DefaultLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Info */}
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                React Starter Kit
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                A modern React starter template with routing, authentication,
                state management, and best practices to kickstart your next
                project.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/q0d1r0v/react_starter_kit"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/q0d1r0v/react_starter_kit/blob/main/README.md"
                    className="text-gray-300 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Support & Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">
                Support & Contact
              </h4>
              <div className="space-y-3">
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-sm text-gray-300 mb-2">
                    💡 Need help or have questions?
                  </p>
                  <a
                    href="https://t.me/qodirov_oybekjon"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Contact on Telegram
                  </a>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-sm text-gray-300 mb-2">
                    ⭐ Like this project?
                  </p>
                  <a
                    href="https://github.com/q0d1r0v/react_starter_kit"
                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Star className="h-4 w-4" />
                    Star on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span>
                  ©{new Date().getFullYear()} React Starter Kit by beko
                </span>
                <span>•</span>
                <span>Open Source & Free</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <a
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  v1.0
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
