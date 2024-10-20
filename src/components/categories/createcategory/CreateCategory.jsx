import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import style
import "./CreateCategory.css";

// plugin
import useUserData from "../../../plugin/useUserData";
import Toast from "../../../plugin/Toast";

// utils
import apiInstance from "../../../utils/axios";
import { App_Company } from "../../../utils/constants";

// bootstrap components
import { Button } from "react-bootstrap";

// ui components
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
import LoadingIndicator from "../../../ui/loader/LoadingIndicator";

function CreateCategory() {
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState({
        title: "",
        details: "",
        image: null,
        slug: "",
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const userId = useUserData()?.user_id;

    const fetchCategories = async () => {
        try {
            const response = await apiInstance.get("category/list/");
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const handleInputChange = (e) => {
        setError(false);
        setIsLoading(false);
        const { name, value } = e.target;
        if (name === "title") {
            // Auto-generate slug from title
            const generatedSlug = value
                .toLowerCase()
                .replace(/ /g, "-") // replace spaces with hyphens
                .replace(/[^\w-]+/g, ""); // remove non-alphanumeric characters
            setCategory({ ...category, title: value, details: generatedSlug });
        } else {
            setCategory({ ...category, [name]: value });
        }
    };

    const handleFileChange = (e) => {
        setError(false);
        const file = e.target.files[0];
        setCategory({ ...category, image: file });
    };

    const resetForm = () => {
        setCategory({
            title: "",
            details: "",
            image: null,
            slug: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!category.details || !category.title || !category.image) {
            // console.log(`error`);
            // resetForm();
            setIsLoading(false);

            return setError(`Please enter the data`);
        }

        const formData = new FormData();
        formData.append("title", category.title);
        formData.append("details", category.details);
        formData.append("image", category.image);
        formData.append("slug", category.slug);

        try {
            await apiInstance.post("category/create/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setIsLoading(false);
            Toast("success", "Category created successfully!");
            fetchCategories(); // Refresh categories list after creation
            navigate(`/${App_Company}/profile`);
        } catch (error) {
            console.error(
                "Error during category submission:",
                error.response.data
            );
            // setError(error.response.data);
            setError(`category with this slug already exists.`);
            Toast("error", "Error while saving category!");
            Toast("error", "category with this slug already exists.");
        }
    };

    return (
        <>
            <ScrollToTopPages />
            <div className="createcategory">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">Create New Category</h2>
                    </div>

                    <div className="content">
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
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
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="title">
                                    title:
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    id="title"
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
                                    type="text"
                                    className="form-control"
                                    name="details"
                                    id="details"
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>

                            {isLoading && <LoadingIndicator />}
                            {error && (
                                <div className="Error alert alert-danger">
                                    {error}
                                </div>
                            )}

                            <div className="buttons">
                                <Button className="btn " type="submit">
                                    Create Category
                                </Button>

                                <Button
                                    className="btn "
                                    type="submit"
                                    onClick={() => {
                                        navigate(`/${App_Company}/profile`);
                                    }}
                                >
                                    concal
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateCategory;
