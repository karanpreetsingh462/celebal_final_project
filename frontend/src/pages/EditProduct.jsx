import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({ name: "", description: "", usage: "", safetyPrecautions: "" });

    useEffect(() => {
        fetch(`http://localhost:8080/api/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    const handleChange = (e) => setProduct({ ...product, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:8080/api/products/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });
        navigate(`/product/${id}`);
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Edit Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {["name", "description", "usage", "safetyPrecautions"].map((field) => (
                    <div key={field}>
                        <label className="block mb-1 capitalize text-sm">{field}</label>
                        <input
                            name={field}
                            value={product[field]}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-200"
                            required={field === "name"}
                        />
                    </div>
                ))}
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
            </form>
        </div>
    );
}
