import React, { useState } from "react";
import "./CreateCat.css";

const CreateCat = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        // Check for duplicate names
        if (
            categories.some(
                (cat) => cat.name.toLowerCase() === name.toLowerCase()
            )
        ) {
            setError("Category name already exixts.");
            return;
        }

        const newCategory = { name, details };
        setCategories([...categories, newCategory]);

        // Clear the input fields
        setName("");
        setDetails("");
    };

    return (
        <div className="category-container">
            <h1>Create Category</h1>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Details:
                        <textarea
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit" className="btn">
                    Add Category
                </button>
            </form>

            {/* <h2>Categories</h2> */}
            {/* <ul>
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            <strong>{category.name}</strong>: {category.details}
          </li>
        ))}
      </ul> */}
        </div>
    );
};

export default CreateCat;
