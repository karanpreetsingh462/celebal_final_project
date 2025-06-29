import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="page-container">
            <h1 className="page-title">Celebal Pharma Products</h1>

            <div className="search-box-container">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="search-input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="product-grid">
                {filtered.map((product) => (
                    <motion.div
                        key={product.id}
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="product-card">
                            <div>
                                <h2 className="product-title">{product.name}</h2>
                                <p className="product-desc">
                                    {product.description?.substring(0, 100) || "No description"}...
                                </p>
                                <div className="product-meta"><strong>Usage:</strong> {product.usage || "-"}</div>
                                <div className="product-meta"><strong>Safety:</strong> {product.safetyPrecautions || "-"}</div>
                                {product.manufacturer?.name && (
                                    <div className="product-manufacturer">
                                        By {product.manufacturer.name}
                                    </div>
                                )}
                            </div>
                            <div className="product-link">
                                <Link to={`/product/${product.id}`}>View →</Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {filtered.length === 0 && (
                <p className="empty-message">No products found.</p>
            )}
        </div>
    );
}
