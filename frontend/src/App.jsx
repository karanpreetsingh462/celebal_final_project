import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import AddOrEditProduct from "./pages/AddOrEditProduct.jsx";
import './App.css'

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/add" element={<AddOrEditProduct />} />
                <Route path="/edit/:id" element={<AddOrEditProduct isEdit />} />
            </Routes>
        </Router>
    );
}

export default App;
