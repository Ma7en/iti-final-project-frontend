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
    // const [categories, setCategories] = useState([]);
    // const [name, setName] = useState("");
    // const [details, setDetails] = useState("");
    // const [error, setError] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setError("");

    //     // Check for duplicate names
    //     if (
    //         categories.some(
    //             (cat) => cat.name.toLowerCase() === name.toLowerCase()
    //         )
    //     ) {
    //         setError("Category name already exixts.");
    //         return;
    //     }

    //     const newCategory = { name, details };
    //     setCategories([...categories, newCategory]);

    //     // Clear the input fields
    //     setName("");
    //     setDetails("");
    // };
    // =================================================================
    // =2
    // const navigate = useNavigate();
    // const [post, setCreatePost] = useState({
    //     title: "",
    //     // details: "", // أضفنا حقل الوصف
    //     image: "",
    // });
    // const [imagePreview, setImagePreview] = useState("");
    // const [isLoading, setIsLoading] = useState(false);
    // const userId = useUserData()?.user_id;

    // // معالجة التغيير في الحقول النصية
    // const handleCreatePostChange = (event) => {
    //     setCreatePost({
    //         ...post,
    //         // [event.target.name]: event.target.value,
    //     });
    // };

    // // معالجة رفع الصورة
    // const handleFileChange = (event) => {
    //     const selectedFile = event.target.files[0];
    //     const reader = new FileReader();

    //     reader.onloadend = () => {
    //         setImagePreview(reader.result);
    //         setCreatePost({
    //             ...post,
    //             image: selectedFile,
    //         });
    //     };

    //     if (selectedFile) {
    //         reader.readAsDataURL(selectedFile);
    //     }
    // };

    // // إرسال البيانات عند الضغط على الزر
    // const handleCreatePost = async (e) => {
    //     e.preventDefault();
    //     setIsLoading(true);

    //     if (!post.title) {
    //         Toast("error", "All Fields Are Required To Create A Post");
    //         setIsLoading(false);
    //         return;
    //     }

    //     const formdata = new FormData();
    //     formdata.append("user_id", userId);
    //     formdata.append("title", post.title);
    //     // formdata.append("details", post.details); // إضافة التفاصيل
    //     formdata.append("image", post.image); // الصورة كملف

    //     try {
    //         const response = await apiInstance.post(
    //             "post/category/list/",
    //             formdata,
    //             {
    //                 headers: {
    //                     "Content-Type": "multipart/form-data",
    //                 },
    //             }
    //         );
    //         console.log(response.data);
    //         setIsLoading(false);
    //         Swal.fire({
    //             icon: "success",
    //             title: "Category created successfully.",
    //         });
    //         navigate("/me");
    //     } catch (error) {
    //         console.error(error);
    //         setIsLoading(false);
    //     }
    // };
    // // console.log(`1->post`, post);
    // =================================================================
    // 3
    // const [categories, setCategories] = useState([]);
    // const [category, setCategory] = useState({
    //     title: "",
    //     image: "",
    //     slug: "",
    // });
    // const [isEditing, setIsEditing] = useState(false);
    // const [editSlug, setEditSlug] = useState("");

    // const fetchCategories = async () => {
    //     try {
    //         const response = await apiInstance.get("post/category/list/");
    //         setCategories(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // useEffect(() => {
    //     fetchCategories();
    // }, []);

    // const handleChange = (e) => {
    //     setCategory({ ...category, [e.target.name]: e.target.value });
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
    //     try {
    //         if (isEditing) {
    //             await apiInstance.put(`post/category/${editSlug}/`, formData);
    //             Toast("success", "Category updated successfully!");
    //         } else {
    //             await apiInstance.post("post/category/", formData);
    //             Toast("success", "Category created successfully!");
    //         }
    //         fetchCategories();
    //         setCategory({ title: "", image: "", slug: "" });
    //         setIsEditing(false);
    //     } catch (error) {
    //         Toast("error", "Error occurred!");
    //         console.error(error);
    //     }
    // };

    // const handleEdit = (cat) => {
    //     setCategory({ title: cat.title, image: "", slug: cat.slug });
    //     setIsEditing(true);
    //     setEditSlug(cat.slug);
    // };

    // const handleDelete = async (slug) => {
    //     const confirm = await Swal.fire({
    //         title: "Are you sure?",
    //         text: "This will permanently delete the category!",
    //         icon: "warning",
    //         showCancelButton: true,
    //     });
    //     if (confirm.isConfirmed) {
    //         try {
    //             await apiInstance.delete(`post/category/${slug}/`);
    //             fetchCategories();
    //             Swal.fire(
    //                 "Deleted!",
    //                 "The category has been deleted.",
    //                 "success"
    //             );
    //         } catch (error) {
    //             Swal.fire("Error!", "Failed to delete the category.", "error");
    //         }
    //     }
    // };
    // =================================================================
    // 4
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

            {/* <div>
                <h2>Category Manager</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={category.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Image:</label>
                        <input type="file" onChange={handleFileChange} />
                    </div>
                    <button type="submit">
                        {isEditing ? "Update" : "Create"} Category
                    </button>
                </form>
                <h3>Categories List</h3>
                <ul>
                    {categories.map((cat) => (
                        <li key={cat.slug}>
                            <h4>{cat.title}</h4>
                            <button onClick={() => handleEdit(cat)}>
                                Edit
                            </button>
                            <button onClick={() => handleDelete(cat.slug)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div> */}
            {/* <div className="category-container">
                <h1>Create Category</h1>

                <img
                    style={{
                        width: "100%",
                        height: "330px",
                        objectFit: "cover",
                        borderRadius: "10px",
                    }}
                    className="mb-4"
                    src={
                        imagePreview ||
                        "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
                    }
                    alt="Preview"
                />

                <form onSubmit={handleCreatePost}>
                    <label htmlFor="postThumbnail">Image</label>
                    <input
                        onChange={handleFileChange}
                        name="image"
                        id="postThumbnail"
                        className="form-control"
                        type="file"
                    />

                    <label htmlFor="title">Title</label>
                    <input
                        onChange={handleCreatePostChange}
                        name="title"
                        className="form-control"
                        type="text"
                        placeholder="Enter category title"
                    />

               
                    <button type="submit" className="btn" disabled={isLoading}>
                        {isLoading ? "Creating..." : "Add Category"}
                    </button>
                </form>
            </div> */}
        </>
    );
}

export default CreateCategory;
