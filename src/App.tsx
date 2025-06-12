// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// layouts
import DefaultLayout from "@/layouts/default";
import AuthLayout from "@/layouts/auth";
import PrivateRoute from "@/routes/PrivateRoute";

import IndexPage from "@/pages/IndexPage";
import IndexLoginPage from "@/pages/auth/LoginPage";
import IndexAdminPage from "@/pages/admin/IndexAdminPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
