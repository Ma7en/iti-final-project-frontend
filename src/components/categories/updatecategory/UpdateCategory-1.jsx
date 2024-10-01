// EditCat.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// plugin
import Toast from "../../../plugin/Toast";

// utils
import apiInstance from "../../../utils/axios";
import { App_Company } from "../../../utils/constants";

// bootstrap components
import { Button } from "react-bootstrap";

// ui components
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
import useUserData from "../../../plugin/useUserData";
import Swal from "sweetalert2";

function UpdateCategory() {
    // const [name, setName] = useState("");
    // const [details, setDetails] = useState("");
    // const [error, setError] = useState("");
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (category) {
    //         setName(category.name);
    //         setDetails(category.details);
    //     }
    // }, [category]);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setError("");

    //     const categories = JSON.parse(localStorage.getItem("categories")) || [];
    //     if (
    //         categories.some(
    //             (cat) =>
    //                 cat.name.toLowerCase() === name.toLowerCase() &&
    //                 categories.indexOf(cat) !== index
    //         )
    //     ) {
    //         setError("Category name must be unique.");
    //         return;
    //     }

    //     // Update the category
    //     const updatedCategory = { name, details };
    //     categories[index] = updatedCategory;
    //     localStorage.setItem("categories", JSON.stringify(categories));

    //     // onSave(); // Call onSave to update the parent state
    //     // navigate('/categories');
    // };

    // =================================================================
    // 2=
    // const { id } = useParams();
    // const navigate = useNavigate();
    // const [categories, setCategories] = useState([]);
    // const [category, setCategory] = useState({
    //     title: "",
    //     details: "",
    //     image: null,
    //     slug: "",
    // });

    // const fetchCategories = async () => {
    //     try {
    //         const response = await apiInstance.get("category/list/");
    //         setCategories(response.data);
    //     } catch (error) {
    //         console.error("Error fetching categories:", error);
    //     }
    // };

    // useEffect(() => {
    //     const fetchCategory = async () => {
    //         try {
    //             const response = await apiInstance.get(
    //                 `category/detail/${id}/`
    //             );
    //             setCategory(response.data);
    //         } catch (error) {
    //             console.error("Error fetching category details:", error);
    //         }
    //     };
    //     fetchCategory();
    // }, [id]);

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setCategory({ ...category, [name]: value });
    // };

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     setCategory({ ...category, image: file });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("title", category.title);
    //     formData.append("image", category.image);
    //     formData.append("details", category.details);
    //     formData.append("slug", category.slug);

    //     try {
    //         await apiInstance.put(`category/update/${id}/`, formData, {
    //             headers: {
    //                 "Content-Type": "multipart/form-data",
    //             },
    //         });
    //         Toast("success", "Category updated successfully!");
    //         fetchCategories(); // Refresh categories list after update
    //         navigate(`/${App_Company}/categories`);
    //     } catch (error) {
    //         console.error(
    //             "Error during category submission:",
    //             error.response.data
    //         );
    //         Toast("error", "Error while updating category!");
    //     }
    // };

    // =================================================================
    // =3
    // const [categories, setCategories] = useState([]);
    // const [category, setCategory] = useState({
    //     title: "",
    //     image: null,
    //     details: "",
    //     slug: "",
    // });
    // const [isEditing, setIsEditing] = useState(true);
    // const [editId, setEditId] = useState(true);
    // const navigate = useNavigate();
    // const userId = useUserData()?.user_id;

    // // Fetch categories from the API
    // const fetchCategories = async () => {
    //     try {
    //         const response = await apiInstance.get("category/list/");
    //         setCategories(response.data);
    //     } catch (error) {
    //         console.error("Error fetching categories:", error);
    //     }
    // };

    // useEffect(() => {
    //     fetchCategories();
    // }, []);

    // // Handle input changes
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setCategory({ ...category, [name]: value });
    // };

    // // Handle file changes for category image
    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     setCategory({ ...category, image: file });
    // };

    // // Handle form submission for creating or updating a category
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();

    //     if (category.title) formData.append("title", category.title);
    //     if (category.image) formData.append("image", category.image);
    //     if (category.details) formData.append("details", category.details);
    //     if (category.slug) formData.append("slug", category.slug);

    //     try {
    //         if (isEditing) {
    //             await apiInstance.put(`category/update/${editId}/`, formData, {
    //                 headers: {
    //                     "Content-Type": "multipart/form-data",
    //                 },
    //             });
    //             Toast("success", "Category updated successfully!");
    //         } else {
    //             await apiInstance.post("category/create/", formData, {
    //                 headers: {
    //                     "Content-Type": "multipart/form-data",
    //                 },
    //             });
    //             Toast("success", "Category created successfully!");
    //         }
    //         fetchCategories();
    //         // resetForm();
    //     } catch (error) {
    //         console.error(
    //             "Error during category submission:",
    //             error.response.data
    //         );
    //         Toast("error", "Error while saving category!");
    //     }
    // };

    // // Handle editing of a category
    // const handleEdit = (cat) => {
    //     setCategory(cat);
    //     setIsEditing(true);
    //     setEditId(cat.id);
    // };

    // // Handle deletion of a category
    // const handleDelete = async (id) => {
    //     const confirm = await Swal.fire({
    //         title: "Are you sure?",
    //         text: "This will permanently delete the category!",
    //         icon: "warning",
    //         showCancelButton: true,
    //     });
    //     if (confirm.isConfirmed) {
    //         try {
    //             await apiInstance.delete(`category/delete/${id}/`);
    //             Toast("success", "Category deleted successfully!");
    //             fetchCategories();
    //         } catch (error) {
    //             Toast("error", "Error while deleting category!");
    //         }
    //     }
    // };

    // // Reset form inputs
    // // const resetForm = () => {
    // //     setCategory({ title: "", image: null, slug: "" });
    // //     setIsEditing(false);
    // //     setEditId(null);
    // // };
    // =================================================================
    // 4=
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState({
        title: "",
        image: null,
        details: "",
        slug: "",
    });
    const [isEditing, setIsEditing] = useState(true);
    const [editId, setEditId] = useState(null); // تعديل: تعيين null كقيمة أولية
    const navigate = useNavigate();
    const { id } = useParams(); // للحصول على ID الفئة من الـURL
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
        fetchCategory(); // جلب بيانات الفئة المحددة
    }, [id]);

    // Fetch the category data
    const fetchCategory = async () => {
        try {
            const response = await apiInstance.get(`category/detail/${id}/`);
            setCategory(response.data); // تعيين البيانات للفئة
            setEditId(id); // تعيين الـID للفئة للتعديل
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

        // إذا اختار المستخدم صورة جديدة، نرفعها، وإلا نترك الصورة القديمة
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
            <div className="createcategory">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">Update Category</h2>
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

                                {/* عرض الصورة الحالية */}
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

            {/* <ScrollToTopPages />
            <div className="createcategory">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">Update Category</h2>
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
                                    // required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="title">
                                    title:
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
                                    type="text"
                                    className="form-control"
                                    name="details"
                                    id="details"
                                    value={category.details}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>

                            <div className="buttons">
                                <Button className="btn " type="submit">
                                    Update Category
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
            </div> */}

            {/* <div className="category-container">
                <h1>Edit Category</h1>
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
                        Update Category
                    </button>
                </form>
            </div> */}
        </>
    );
}

export default UpdateCategory;
