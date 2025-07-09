import {
  Code,
  Zap,
  Palette,
  Globe,
  Database,
  Folder,
  Star,
  CheckCircle,
  Terminal,
  Rocket,
  Layout,
  Coffee,
  Heart,
  Copy,
  Check,
  Bitcoin,
  DollarSign,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function IndexPage() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const bitcoinAddress = "1ASdGr68w7NZgZqxSEi3LYDxzcykhbkzac";

  const technologies = [
    { name: "React 18", icon: Code, color: "text-blue-500", bg: "bg-blue-50" },
    {
      name: "React Router",
      icon: Globe,
      color: "text-rose-500",
      bg: "bg-rose-50",
    },
    {
      name: "Zustand Store",
      icon: Database,
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      name: "Axios HTTP",
      icon: Zap,
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
    {
      name: "TailwindCSS",
      icon: Palette,
      color: "text-cyan-500",
      bg: "bg-cyan-50",
    },
    {
      name: "Material UI",
      icon: Layout,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
    },
  ];

  const projectStructure = [
    // Folders first (alphabetical order)
    { path: "api/", description: "Axios instances and interceptors" },
    { path: "layout/", description: "Layouts: navbar, sidebar, footer" },
    { path: "pages/", description: "Pages, including IndexPage" },
    { path: "routes/", description: "Public and Private route configuration" },
    {
      path: "stores/",
      description: "Stores for global state management with Zustand",
    },
    { path: "styles/", description: "Global and component styles" },

    { path: "App.tsx", description: "Root component with router setup" },
    { path: "main.tsx", description: "ReactDOM entry point" },
  ];

  const features = [
    "🔐 Auth middleware (redirect to /admin/dashboard if token exists, otherwise to /auth/login)",
    "🧠 Global state management with Zustand (example: counter)",
    "🚦 Axios Interceptor: attach token to every request",
    "🔒 Public and Private route configuration with access control",
    "🔀 Absolute alias imports configured (use @/ for cleaner paths)",
    "🎨 Beautiful UI with TailwindCSS",
    "🧩 Material UI (MUI) integrated for reusable components and design consistency",
    "📦 Clean modular structure",
    "⚡ Hot reload and dev tools",
    "📱 Responsive design with mobile-first approach",
    "🔧 ESLint and Prettier configured",
  ];

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(bitcoinAddress);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    } catch (err) {
      console.error("Failed to copy address:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            React Starter Kit v1.0
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            👋 Welcome to Your React Starter Kit
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            This project is built to help you kickstart your React-based
            application quickly and efficiently — equipped with modern tools and
            best practices.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
            🚀 Integrated Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 ${tech.bg} rounded-lg flex items-center justify-center mx-auto mb-3`}
                  >
                    <tech.icon className={`w-6 h-6 ${tech.color}`} />
                  </div>
                  <h3 className="font-semibold text-gray-800">{tech.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Project Structure */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Folder className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  📁 Project Structure
                </h2>
              </div>
              <div className="space-y-4">
                {projectStructure.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Badge
                      variant="outline"
                      className="font-mono text-xs shrink-0"
                    >
                      {item.path}
                    </Badge>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  ✨ Project Features
                </h2>
              </div>
              <div className="space-y-5">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Installation Section */}
        <Card className="shadow-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl mb-12">
          <CardContent className="p-8 space-y-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Terminal className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold">🛠 Getting Started</h2>
              </div>
              <p className="text-gray-300">
                Choose one of the following methods to set up your project:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Option 1: Use Template */}
              <div className="bg-black/30 rounded-lg p-5">
                <h3 className="text-green-400 font-semibold mb-3">
                  Option 1: Use GitHub Template
                </h3>
                <ol className="list-decimal list-inside text-white space-y-2">
                  <li>Go to your repository URL on GitHub</li>
                  <li>
                    Click{" "}
                    <span className="font-semibold text-blue-300">
                      "Use this template"
                    </span>
                  </li>
                  <li>Create your new repository</li>
                  <li>Clone your new repository locally</li>
                </ol>
              </div>

              {/* Option 2: Clone Directly */}
              <div className="bg-black/30 rounded-lg p-5">
                <h3 className="text-green-400 font-semibold mb-3">
                  Option 2: Clone the Repository
                </h3>
                <div className="text-white space-y-2 font-mono">
                  <div>
                    <span className="text-green-400">
                      # Clone the repository
                    </span>
                    <br />
                    git clone{" "}
                    <span className="text-blue-400">
                      https://github.com/q0d1r0v/react_starter_kit.git
                    </span>
                  </div>
                  <div>
                    <span className="text-green-400">
                      # Install dependencies
                    </span>
                    <br />
                    yarn
                  </div>
                  <div>
                    <span className="text-green-400">
                      # Start the development server
                    </span>
                    <br />
                    yarn dev
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-gray-300">
              Once the server is running, open
              <code className="bg-black/30 px-2 py-1 rounded mx-2 text-blue-300">
                http://localhost:5173
              </code>
              in your browser.
            </p>
          </CardContent>
        </Card>

        {/* Buy Me a Coffee Section */}
        <Card className="shadow-xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white rounded-2xl mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Coffee className="w-8 h-8 text-white animate-pulse" />
                <h2 className="text-3xl font-bold">☕ Buy Me a Coffee</h2>
              </div>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                If this starter kit helped you build something amazing, consider
                supporting the development with a small donation!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Side - Why Support */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-300" />
                    Why Support This Project?
                  </h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-300 shrink-0 mt-0.5" />
                      <span>Hours of development and testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-300 shrink-0 mt-0.5" />
                      <span>Continuous updates and improvements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-300 shrink-0 mt-0.5" />
                      <span>Free and open-source for everyone</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-300" />
                    Your Support Helps With:
                  </h3>
                  <ul className="space-y-2 text-white/90">
                    <li>• Development tools and resources</li>
                    <li>• Time for new features and bug fixes</li>
                    <li>• Community support and documentation</li>
                  </ul>
                </div>
              </div>

              {/* Right Side - Donation Methods */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Bitcoin className="w-5 h-5 text-orange-300" />
                    Bitcoin Donation
                  </h3>
                  <p className="text-white/90 mb-4">
                    Send any amount to the Bitcoin address below:
                  </p>

                  <div className="bg-black/30 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between gap-2">
                      <code className="text-sm font-mono text-blue-200 break-all">
                        {bitcoinAddress}
                      </code>
                      <button
                        onClick={handleCopyAddress}
                        className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors shrink-0"
                        title="Copy address"
                      >
                        {copiedAddress ? (
                          <Check className="w-4 h-4 text-green-300" />
                        ) : (
                          <Copy className="w-4 h-4 text-white" />
                        )}
                      </button>
                    </div>
                  </div>

                  {copiedAddress && (
                    <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-3 mb-4">
                      <p className="text-green-200 text-sm font-medium">
                        ✅ Address copied to clipboard!
                      </p>
                    </div>
                  )}

                  <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-3">
                    <p className="text-blue-200 text-sm">
                      💡 <strong>Tip:</strong> Even small donations like $1-5
                      make a huge difference and are greatly appreciated!
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">🙏 Thank You!</h3>
                  <p className="text-white/90 leading-relaxed">
                    Even a small donation helps keep the project going and
                    supports the creation of new useful tools. Thank you for
                    your support!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 space-y-4">
          <div className="text-gray-500">
            <p className="text-sm">
              💡 Need help or have questions?
              <a
                href="https://t.me/qodirov_oybekjon"
                className="text-blue-600 hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here
              </a>
            </p>
          </div>

          <div className="text-gray-400 text-xs">
            <p>
              Made with ❤️ for the developer community •
              <a
                href="https://github.com/q0d1r0v/react_starter_kit"
                className="text-blue-500 hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Star on GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
