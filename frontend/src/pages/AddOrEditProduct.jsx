import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddOrEditProduct({ isEdit = false }) {
    const navigate = useNavigate();
    const { id } = useParams();

    const [product, setProduct] = useState({
        name: "",
        description: "",
        usage: "",
        safetyPrecautions: "",
        manufacturer: null,
    });

    const [manufacturers, setManufacturers] = useState([]);

    // Fetch manufacturers on mount
    useEffect(() => {
        fetch("http://localhost:8080/api/manufacturers")
            .then(res => res.json())
            .then(data => setManufacturers(data));
    }, []);

    // Fetch product if in edit mode
    useEffect(() => {
        if (isEdit && id) {
            fetch(`http://localhost:8080/api/products/${id}`)
                .then(res => res.json())
                .then(data => setProduct(data));
        }
    }, [isEdit, id]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleManufacturerChange = (e) => {
        const selectedId = parseInt(e.target.value);
        const selectedManufacturer = manufacturers.find(m => m.id === selectedId);
        setProduct({ ...product, manufacturer: selectedManufacturer });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = isEdit ? "PUT" : "POST";
        const endpoint = isEdit ? `/api/products/${id}` : "/api/products";

        await fetch(`http://localhost:8080${endpoint}`, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });

        navigate(isEdit ? `/product/${id}` : "/");
    };

    return (
        <div className="form-container">
            <h2 className="detail-title">{isEdit ? "Edit Product" : "Add Product"}</h2>
            <form onSubmit={handleSubmit}>
                {["name", "description", "usage", "safetyPrecautions"].map((field) => (
                    <div className="form-group" key={field}>
                        <label className="form-label">{field}</label>
                        <input
                            name={field}
                            value={product[field]}
                            onChange={handleChange}
                            className="form-input"
                            required={field === "name"}
                        />
                    </div>
                ))}

                <div className="form-group">
                    <label className="form-label" htmlFor="manufacturer">
                        Manufacturer
                    </label>
                    <select
                        id="manufacturer"
                        value={product.manufacturer?.id || ""}
                        onChange={handleManufacturerChange}
                        className="form-input manufacturer-select"
                        required
                    >
                        <option value="" disabled>
                            Select Manufacturer
                        </option>
                        {manufacturers.map((m) => (
                            <option key={m.id} value={m.id}>
                                {m.name}
                            </option>
                        ))}
                    </select>
                </div>


                <button type="submit" className="btn btn-blue">
                    {isEdit ? "Update" : "Submit"}
                </button>
            </form>
        </div>
    );
}
