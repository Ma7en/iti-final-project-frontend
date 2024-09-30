import React, { useEffect, useState } from "react";
import "./CreateCategory.css";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/auth";
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
import useUserData from "../../../plugin/useUserData";
import apiInstance from "../../../utils/axios";
import Toast from "../../../plugin/Toast";
import Swal from "sweetalert2";

function CreateCategory() {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState({
        title: "",
        image: null,
        slug: "",
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const navigate = useNavigate();
    const userId = useUserData()?.user_id;

    // Fetch categories from the API
    const fetchCategories = async () => {
        try {
            const response = await apiInstance.get("category/list/");
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCategory({ ...category, [name]: value });
    };

    // Handle file changes for category image
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setCategory({ ...category, image: file });
    };

    // Handle form submission for creating or updating a category
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        if (category.title) formData.append("title", category.title);
        if (category.image) formData.append("image", category.image);
        if (category.slug) formData.append("slug", category.slug);

        try {
            if (isEditing) {
                await apiInstance.put(`category/update/${editId}/`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                Toast("success", "Category updated successfully!");
            } else {
                await apiInstance.post("category/create/", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                Toast("success", "Category created successfully!");
            }
            fetchCategories();
            resetForm();
        } catch (error) {
            console.error(
                "Error during category submission:",
                error.response.data
            );
            Toast("error", "Error while saving category!");
        }
    };

    // Handle editing of a category
    const handleEdit = (cat) => {
        setCategory(cat);
        setIsEditing(true);
        setEditId(cat.id);
    };

    // Handle deletion of a category
    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "This will permanently delete the category!",
            icon: "warning",
            showCancelButton: true,
        });
        if (confirm.isConfirmed) {
            try {
                await apiInstance.delete(`category/delete/${id}/`);
                Toast("success", "Category deleted successfully!");
                fetchCategories();
            } catch (error) {
                Toast("error", "Error while deleting category!");
            }
        }
    };

    // Reset form inputs
    const resetForm = () => {
        setCategory({ title: "", image: null, slug: "" });
        setIsEditing(false);
        setEditId(null);
    };

    return (
        <>
            <ScrollToTopPages />
            <div>
                <h1>Category Manager</h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <input
                        type="text"
                        name="title"
                        placeholder="Category Title"
                        value={category.title}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="file"
                        name="image"
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                    <input
                        type="text"
                        name="slug"
                        placeholder="Slug"
                        value={category.slug}
                        onChange={handleInputChange}
                    />
                    <button type="submit">
                        {isEditing ? "Update" : "Create"}
                    </button>
                </form>

                <h2>Categories List</h2>
                <ul>
                    {categories.map((cat) => (
                        <li key={cat.id}>
                            {cat.image && (
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    style={{ width: "50px", height: "50px" }}
                                />
                            )}
                            {cat.title}
                            <button onClick={() => handleEdit(cat)}>
                                Edit
                            </button>
                            <button onClick={() => handleDelete(cat.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default CreateCategory;
