// EditCat.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// import style
import "./UpdateCategory.css";

// plugin
import Toast from "../../../plugin/Toast";
import useUserData from "../../../plugin/useUserData";

// utils
import apiInstance from "../../../utils/axios";
import { App_Company } from "../../../utils/constants";

// bootstrap components
import { Button } from "react-bootstrap";

// ui components
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";

function UpdateCategory() {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState({
        title: "",
        image: null,
        details: "",
        slug: "",
    });
    const [isEditing, setIsEditing] = useState(true);
    const [editId, setEditId] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
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
        fetchCategory();
    }, [id]);

    // Fetch the category data
    const fetchCategory = async () => {
        try {
            const response = await apiInstance.get(`category/detail/${id}/`);
            setCategory(response.data);
            setEditId(id);
        } catch (error) {
            console.error("Error fetching category details:", error);
        }
    };

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

    // Handle form submission for updating the category
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("title", category.title);
        formData.append("details", category.details);
        formData.append("slug", category.slug);

        if (category.image && typeof category.image !== "string") {
            formData.append("image", category.image);
        }

        try {
            await apiInstance.put(`category/update/${editId}/`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            Toast("success", "Category updated successfully!");
            fetchCategories();
            navigate(`/${App_Company}/categories`);
        } catch (error) {
            console.error(
                "Error during category submission:",
                error.response.data
            );
            Toast("error", "Error while updating category!");
        }
    };

    // Reset form inputs
    const resetForm = () => {
        setCategory({ title: "", image: null, details: "", slug: "" });
        setIsEditing(false);
        setEditId(null);
    };

    return (
        <>
            <ScrollToTopPages />
            <div className="updatecategory">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">Update Category</h2>
                    </div>

                    <div className="content">
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            <div className="image">
                                {category.image &&
                                    typeof category.image === "string" && (
                                        <div className="mb-3">
                                            <img
                                                src={category.image}
                                                alt="Category"
                                                style={{
                                                    width: "100px",
                                                    height: "100px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>
                                    )}
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="image">
                                    Image:
                                </label>

                                <input
                                    type="file"
                                    className="form-control"
                                    name="image"
                                    id="image"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="title">
                                    Title:
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="form-control"
                                    value={category.title}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="details">
                                    Details:
                                </label>
                                <textarea
                                    className="form-control"
                                    name="details"
                                    id="details"
                                    value={category.details}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>

                            <div className="buttons">
                                <Button className="btn" type="submit">
                                    Update Category
                                </Button>

                                <Button
                                    className="btn"
                                    type="button"
                                    onClick={() => {
                                        navigate(`/${App_Company}/profile`);
                                    }}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateCategory;
