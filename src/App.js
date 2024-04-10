import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import Product from './pages/Product';
import NavLogo from './components/NavLogo/NavLogo';
import Busket from './components/busket/Busket';
import ProductPage from './components/busket/ProductPage';
import { CartProvider } from './state/Cartprovider';
import Basket from './components/busket/Busket';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';

export default function App() {
    return (
        <Router>
            <CartProvider>
                <NavLogo />
                <Navbar />
                <Routes>
                    <Route path="/product/:id" element={<Product />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/search" element={<Search />} />
                    <Route path="/busket" element={<Basket />} />
                    <Route path="/checkout" element={<CheckoutPage />} />

                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </CartProvider>
        </Router>
    );
}
