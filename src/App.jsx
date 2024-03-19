import { useState } from "react";
import Navbar from "./components/navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ExplorePage from "./pages/explore";
import ProductDetailPage from "./pages/detail";
import CartPage from "./pages/cart";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/login";

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
