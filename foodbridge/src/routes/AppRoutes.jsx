import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DonorRegister from "../pages/DonorRegister";
import NGORegister from "../pages/NGORegister";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/register/donor" element={<DonorRegister />} />

          <Route path="/register/ngo" element={<NGORegister />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;