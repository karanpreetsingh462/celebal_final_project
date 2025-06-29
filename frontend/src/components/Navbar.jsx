import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-content">
                <Link to="/" className="navbar-brand">
                    <img src="https://img.icons8.com/fluency/40/pill.png" alt="Logo" className="navbar-logo" />
                    <span className="navbar-title">Celebal Pharma</span>
                </Link>
                <Link to="/add" className="navbar-button">+ Add Product</Link>
            </div>
        </header>
    );
}
