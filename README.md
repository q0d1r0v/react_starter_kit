# 🚀 React Starter Kit

> A modern React starter template equipped with essential tools and best practices for rapid application development.

## 🌟 Overview

This React Starter Kit is designed to help you kickstart your React-based application quickly and efficiently. It comes pre-configured with modern tools, authentication middleware, state management, and a clean project structure.

## 🛠 Tech Stack

| Technology          | Purpose             | Version |
| ------------------- | ------------------- | ------- |
| ⚛️ **React**        | UI Library          | 18.x    |
| 🌐 **React Router** | Client-side Routing | Latest  |
| 🗄️ **Zustand**      | State Management    | Latest  |
| ⚡ **Axios**        | HTTP Client         | Latest  |
| 🎨 **TailwindCSS**  | Styling Framework   | Latest  |

## ✨ Features

- 🔐 **Authentication Middleware** - Automatic redirect to `/dashboard` if token exists, otherwise to `/login`
- 🧠 **Global State Management** - Zustand store with example counter implementation
- 🚦 **HTTP Interceptors** - Axios interceptor automatically attaches tokens to requests
- 🔒 **Route Protection** - Public and Private route configuration with access control
- 🔀 **Absolute Imports** - Clean import paths using `@/` alias
- 🎨 **Beautiful UI** - Styled with TailwindCSS
- 📦 **Modular Structure** - Clean and organized project architecture
- ⚡ **Development Tools** - Hot reload and dev tools configured
- 📱 **Responsive Design** - Mobile-first approach
- 🔧 **Code Quality** - ESLint and Prettier pre-configured

## 📁 Project Structure

```
src/
├── pages/           # Application pages including IndexPage
├── stores/          # Zustand stores for global state management
├── api/             # Axios instances and HTTP interceptors
├── layout/          # Layout components (navbar, sidebar, footer)
├── routes/          # Public and Private route configurations
├── App.jsx          # Root component with router setup
└── main.jsx         # ReactDOM entry point
```

## 🚀 Getting Started

### Option 1: Use GitHub Template

1. Go to the repository URL on GitHub
2. Click **"Use this template"** button
3. Create your new repository
4. Clone your new repository locally

### Option 2: Clone Repository

```bash
# Clone the repository
git clone https://github.com/q0d1r0v/react_starter_kit.git

# Navigate to project directory
cd react_starter_kit

# Install dependencies
yarn

# Start development server
yarn dev
```

The application will be available at `http://localhost:5173`

## 📋 Available Scripts

```bash
# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Run linting
yarn lint
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=React Starter Kit
```

### Authentication Setup

The starter kit includes authentication middleware that:

- Redirects authenticated users to `/admin/dashboard`
- Redirects unauthenticated users to `/auth/login`
- Automatically attaches JWT tokens to API requests

### State Management

Global state is managed using Zustand. Example store:

```javascript
// stores/counterStore.js
import { create } from "zustand";

export const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
```

## 🎨 Styling

This project uses TailwindCSS for styling with:

- Utility-first approach
- Responsive design classes
- Custom color palette
- Component-based styling

## 🔒 Route Protection

Routes are categorized as:

- **Public Routes**: Accessible without authentication
- **Private Routes**: Require valid authentication token

## 📱 Responsive Design

Built with mobile-first approach:

- Responsive grid layouts
- Mobile-optimized navigation
- Touch-friendly interactions
- Flexible typography scaling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 💡 Support

Need help or have questions?

- 💬 [Telegram](https://t.me/qodirov_oybekjon)

---

<div align="center">

**⭐ Don't forget to star this repository if it helped you!**

Made with ❤️ by beko(https://github.com/q0d1rov)

</div>
