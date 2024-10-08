import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
import apiInstance from "../../../utils/axios";
import Toast from "../../../plugin/Toast";
import { App_Company } from "../../../utils/constants";
import useUserData from "../../../plugin/useUserData";
import Swal from "sweetalert2";
import "./UpdateProject.css";

function UpdateProject() {
    // const navigate = useNavigate();
    // const { id } = useParams(); // Get the project ID from the URL
    // const [project, setProject] = useState({
    //     title: "",
    //     details: "",
    //     image: null,
    //     slug: "",
    //     meter: "",
    //     days: "",
    // });

    // useEffect(() => {
    //     const fetchProject = async () => {
    //         try {
    //             const response = await apiInstance.get(`project/${id}/`); // Fetch project data
    //             setProject(response.data);
    //         } catch (error) {
    //             console.error("Error fetching project:", error);
    //             Toast("error", "Failed to fetch project data.");
    //         }
    //     };
    //     fetchProject();
    // }, [id]);

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     if (name === "title") {
    //         // Auto-generate slug from title
    //         const generatedSlug = value
    //             .toLowerCase()
    //             .replace(/ /g, "-")
    //             .replace(/[^\w-]+/g, "");
    //         setProject({ ...project, title: value, slug: generatedSlug });
    //     } else {
    //         setProject({ ...project, [name]: value });
    //     }
    // };

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     setProject({ ...project, image: file });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("title", project.title);
    //     formData.append("details", project.details);
    //     formData.append("image", project.image);
    //     formData.append("slug", project.slug);
    //     formData.append("meter", project.meter);
    //     formData.append("days", project.days);

    //     try {
    //         await apiInstance.put(`project/update/${id}/`, formData, {
    //             headers: {
    //                 "Content-Type": "multipart/form-data",
    //             },
    //         });
    //         Toast("success", "Project updated successfully!");
    //         navigate("/projectlist");
    //     } catch (error) {
    //         console.error("Error during project update:", error.response.data);
    //         Toast("error", "Error while updating project!");
    //     }
    // };
    // =================================================================
    // =2
    const [post, setEditPost] = useState({
        image: "",
        title: "",
        price_per_unit: "",
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
    const param = useParams();

    const fetchPost = async () => {
        const response = await apiInstance.get(
            `author/dashboard/post-detail/${userId}/${param.id}/`
        );
        setEditPost(response.data);
    };

    const fetchCategory = async () => {
        const response = await apiInstance.get(`post/category/list/`);
        setCategoryList(response.data);
    };
    useEffect(() => {
        fetchCategory();
        fetchPost();
    }, []);

    const handleCreatePostChange = (event) => {
        setEditPost({
            ...post,
            [event.target.name]: event.target.value,
        });
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        const reader = new FileReader();

        setEditPost({
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

    const handleCreatePost = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        if (!post.title || !post.image) {
            Toast("error", "All Fields Are Required To Create A Post");
            setIsLoading(false);
            return;
        }

        console.log(post.category);

        const jsonData = {
            title: post.title,
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
        formdata.append("category", post.category.id);
        formdata.append("post_status", post.status);
        try {
            const response = await apiInstance.patch(
                `author/dashboard/post-detail/${userId}/${param.id}/`,
                formdata,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log(response.data);
            setIsLoading(false);
            Swal.fire({
                icon: "success",
                title: "Package Updated successfully.",
            });
            navigate(`/${App_Company}/projectlist`);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    return (
        <>
            <ScrollToTopPages />
            <div className="updateproject">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">Update Project</h2>
                    </div>

                    <div className="content">
                        <form
                            onSubmit={handleCreatePost}
                            encType="multipart/form-data"
                        >
                            <div className="mb-3 image ">
                                <img
                                    className="mb-4"
                                    src={imagePreview || post.image}
                                    alt=""
                                />
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
                                    name="title"
                                    className="form-control"
                                    id="title"
                                    value={post.title}
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
                                    value={post.price_per_unit}
                                    onChange={handleCreatePostChange}
                                    required
                                />
                            </div>

                            <div className="mb-3 hidden ">
                                <label
                                    className="form-label"
                                    htmlFor="category"
                                >
                                    category:
                                </label>
                                <select
                                    name="category"
                                    onChange={handleCreatePostChange}
                                    value={post.category?.id}
                                    className="form-select"
                                    id="category"
                                    required
                                    aria-readonly
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
                                    Update Project
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

export default UpdateProject;
