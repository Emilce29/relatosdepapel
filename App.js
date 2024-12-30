import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import BookDetailPage from "./pages/BookDetailPage";
import { ProductsProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} /> {/* Landing */}
            <Route path="/books" element={<HomePage />} /> {/* Página principal */}
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/book/:id" element={<BookDetailPage />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
