// import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Header from "./components/Header.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 text-gray-900">
          <Header />
          <main className="mx-auto max-w-6xl px-4 py-8">
            <Routes>
              <Route path="/" element={<CatalogPage/>} />
              <Route path="/product/:id" element={<ProductPage/>} />
              <Route path="/cart" element={<CartPage/>} />
              <Route path="/checkout" element={<CheckoutPage/>} />
              <Route path="*" element={<NotFoundPage/>} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
