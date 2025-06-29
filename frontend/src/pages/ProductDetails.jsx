import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/api/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    const handleDelete = async () => {
        await fetch(`http://localhost:8080/api/products/${id}`, { method: "DELETE" });
        navigate("/");
    };

    if (!product) return <p className="page-container">Loading...</p>;

    return (
        <div className="detail-container">
            <h2 className="detail-title">{product.name}</h2>
            <p className="detail-text">{product.description}</p>
            <p><strong>Usage:</strong> {product.usage}</p>
            <p><strong>Safety:</strong> {product.safetyPrecautions}</p>
            <p><strong>Manufacturer:</strong> {product.manufacturer?.name || "N/A"}</p>

            <div className="button-group">
                <button onClick={() => navigate(`/edit/${product.id}`)} className="btn btn-blue">Edit</button>
                <button onClick={handleDelete} className="btn btn-red">Delete</button>
            </div>
        </div>
    );
}
