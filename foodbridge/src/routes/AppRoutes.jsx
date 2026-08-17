import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DonorRegister from "../pages/DonorRegister";
import NGORegister from "../pages/NGORegister";

import DonorDashboard from "../pages/DonorDashboard";
import NGODashboard from "../pages/NGODashboard";
import AdminDashboard from "../pages/AdminDashboard";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<MainLayout />}>

          {/* PUBLIC ROUTES */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/register/donor"
            element={<DonorRegister />}
          />

          <Route
            path="/register/ngo"
            element={<NGORegister />}
          />


          {/* DONOR DASHBOARD */}

          <Route
            path="/donor-dashboard"
            element={
              <ProtectedRoute allowedRole="donor">
                <DonorDashboard />
              </ProtectedRoute>
            }
          />


          {/* NGO DASHBOARD */}

          <Route
            path="/ngo-dashboard"
            element={
              <ProtectedRoute allowedRole="ngo">
                <NGODashboard />
              </ProtectedRoute>
            }
          />


          {/* ADMIN DASHBOARD */}

          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;