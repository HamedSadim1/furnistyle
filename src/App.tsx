/**
 * FurniStyle App Component
 *
 * Root component that wires up routing and wraps the tree with
 * the AuthProvider so authentication state is available everywhere
 * without prop drilling.
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import {
  SharedLayout,
  Home,
  About,
  Login,
  SharedProductLayout,
  Products,
  SingleProduct,
  ProtectedRoute,
  Dashboard,
  Error,
} from "./pages";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />

            <Route path="products" element={<SharedProductLayout />}>
              <Route index element={<Products />} />
              <Route path=":productId" element={<SingleProduct />} />
            </Route>

            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
