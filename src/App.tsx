import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Products from "./components/Pages/Products";
import Error from "./components/Pages/Error";
import SharedLayout from "./components/Pages/SharedLayout";
import Dashboard from "./components/Pages/Dashboard";
import Login from "./components/Pages/Login";
import SingleProduct from "./components/Pages/SingleProduct";
import { USER } from "./types";
import ProtectedRoute from "./components/Pages/ProtectedRoute";
import SharedProductLayout from "./components/Pages/SharedProductLayout";

function App() {
  const [user, setUser] = useState<USER>({ name: "", email: "" });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
