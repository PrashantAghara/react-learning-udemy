import { Route, Routes, Navigate } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />{" "}
          <Route path="/welcome/*" element={<Welcome />}>
            <Route path="new-user" element={<p>Welcome New User</p>}></Route>
          </Route>
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:productId"
            element={<ProductDetail />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
