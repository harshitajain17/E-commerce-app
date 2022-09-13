import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./Component/Products";
import Product from './Component/Product';
import Cart from './Component/Cart'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
