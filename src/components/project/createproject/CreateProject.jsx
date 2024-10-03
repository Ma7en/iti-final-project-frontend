import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// import style
import "./CreateProject.css";

// pluginx
import useUserData from "../../../plugin/useUserData";
import Toast from "../../../plugin/Toast";

// utils
import apiInstance from "../../../utils/axios";
import { App_Company } from "../../../utils/constants";

// ui bootstrap components
import { Button } from "react-bootstrap";

// ui components
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
import Loader from "../../../ui/loader/Loader";

function CreateProject() {
    const [post, setCreatePost] = useState({
        image: "",
        price_per_unit: "",
        title: "",
        description: "",
        category: parseInt(""),
        tags: "",
        status: "Active",
    });
    const [imagePreview, setImagePreview] = useState("");
    const [categoryList, setCategoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const userId = useUserData()?.user_id;
    const navigate = useNavigate();

    const fetchCategory = async () => {
        try {
            const response = await apiInstance.get(`post/category/list/`);
            setCategoryList(response.data);
        } catch (error) {
            Toast("error", `Failed to load categories ${error}`, "");
        }
        // console.log(response.data);
    };
    useEffect(() => {
        fetchCategory();
    }, []);

    const handleCreatePostChange = (event) => {
        setCreatePost({
            ...post,
            [event.target.name]: event.target.value,
        });
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        const reader = new FileReader();

        setCreatePost({
            ...post,
            image: {
                file: event.target.files[0],
                preview: reader.result,
            },
        });
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        if (selectedFile) {
            reader.readAsDataURL(selectedFile);
        }
    };

    // console.log(post.image.file);

    const handleCreatePost = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        if (
            !post.title ||
            !post.image ||
            !post.title ||
            !post.price_per_unit ||
            !post.category
        ) {
            Toast("error", "All Fields Are Required To Create A Package", "");
            setIsLoading(false);
            return;
        }

        console.log(post.category);

        const jsonData = {
            user_id: userId,
            title: post.title,
            price_per_unit: post.price_per_unit,
            image: post.image.file,
            description: post.description,
            tags: post.tags,
            category: post.category,
            post_status: post.status,
        };

        const formdata = new FormData();

        formdata.append("user_id", userId);
        formdata.append("title", post.title);
        formdata.append("price_per_unit", post.price_per_unit);
        formdata.append("image", post.image.file);
        formdata.append("description", post.description);
        formdata.append("tags", post.tags);
        formdata.append("category", post.category);
        formdata.append("post_status", post.status);
        try {
            const response = await apiInstance.post(
                "author/dashboard/post-create/",
                formdata,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            // console.log(response.data);
            // console.log("Post Create");
            setIsLoading(false);
            Swal.fire({
                icon: "success",
                title: "Package created successfully.",
            });
            Toast("success", "Package created successfully!");
            navigate(`/${App_Company}/categories`);
        } catch (error) {
            // console.log(error);
            setIsLoading(false);
            Toast("error", `Error: ${error}`, "");
        }
    };

    if (!categoryList) return <Loader />;

    return (
        <>
            <ScrollToTopPages />
            <div className="createproject">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">Create New Package</h2>
                    </div>

                    <div className="content">
                        <form
                            onSubmit={handleCreatePost}
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
                                    Title:
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    id="title"
                                    // value={post.title}
                                    onChange={handleCreatePostChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    htmlFor="price_per_unit"
                                >
                                    Price:
                                </label>
                                <input
                                    type="number"
                                    name="price_per_unit"
                                    className="form-control"
                                    id="price_per_unit"
                                    // value={post.price_per_unit}
                                    onChange={handleCreatePostChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    htmlFor="category"
                                >
                                    category:
                                </label>
                                <select
                                    name="category"
                                    onChange={handleCreatePostChange}
                                    className="form-select"
                                    id="category"
                                    required
                                >
                                    <option value="">Select a category</option>
                                    {categoryList?.map((category, index) => (
                                        <option
                                            value={category?.id}
                                            key={index}
                                        >
                                            {category?.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="buttons">
                                <Button className="btn" type="submit">
                                    Create Project
                                </Button>

                                <Button
                                    className="btn"
                                    type="button"
                                    onClick={() => {
                                        navigate(`/${App_Company}/projectlist`);
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

export default CreateProject;
