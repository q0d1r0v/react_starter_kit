import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "@/styles/LoadingBar.css";

// layouts
const DefaultLayout = lazy(() => import("@/layouts/default"));
const AuthLayout = lazy(() => import("@/layouts/auth"));
const PrivateRoute = lazy(() => import("@/routes/PrivateRoute"));

// pages
const IndexPage = lazy(() => import("@/pages/IndexPage"));
const IndexLoginPage = lazy(() => import("@/pages/auth/LoginPage"));
const IndexAdminPage = lazy(() => import("@/pages/admin/IndexAdminPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="relative w-full h-screen bg-white">
            <div className="fixed top-0 left-0 w-full h-1 bg-blue-200 overflow-hidden z-50">
              <div className="loading-bar" />
            </div>
          </div>
        }
      >
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<IndexPage />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/auth/login" element={<IndexLoginPage />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/admin/dashboard" element={<IndexAdminPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
