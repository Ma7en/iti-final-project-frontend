import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateProject.css";
import { Button } from "react-bootstrap";
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
import useUserData from "../../../plugin/useUserData";
import apiInstance from "../../../utils/axios";
import Toast from "../../../plugin/Toast";
import Swal from "sweetalert2";
import { App_Company } from "../../../utils/constants";
import Loader from "../../../ui/loader/Loader";
import Cookies from "js-cookie"; // Import the 'js-cookie' library for managing cookies

function CreateProject() {
    // const navigate = useNavigate();
    // const [project, setProject] = useState({
    //     title: "",
    //     details: "",
    //     image: null,
    //     slug: "",
    //     meter: "",
    //     days: "",
    // });

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

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Simulated form submission
    //     console.log("Form submitted:", project);
    //     // Reset form after submission
    //     setProject({
    //         title: "",
    //         details: "",
    //         image: null,
    //         slug: "",
    //         meter: "",
    //         days: "",
    //     });
    //     navigate("/projectlist");
    // };

    // =================================================================
    const accessToken = Cookies.get("access_token");
    // console.log(`--->`, accessToken);
    const [post, setCreatePost] = useState({
        name: "",
        details: "",
        price_per_unit: "",
        image: "",
        title: "",
        // description: "",
        category: "",
        // category: parseInt(""),
        // tags: "",
        // status: "",
    });
    const [imagePreview, setImagePreview] = useState("");
    const [categoryList, setCategoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const userId = useUserData()?.user_id;
    const navigate = useNavigate();

    const fetchCategory = async () => {
        try {
            const response = await apiInstance.get(`category/list/`);
            setCategoryList(response.data);
        } catch (error) {
            Toast("error", "Failed to load categories");
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

    const handleCreatePackage = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        if (!post.name) {
            Toast("error", "All Fields Are Required To Create A Post");
            setIsLoading(false);
            return;
        }

        console.log(post.category);

        const jsonData = {
            user_id: userId,
            title: post.title,
            image: post.image.file,
            description: post.description,
            tags: post.tags,
            category: post.category,
            post_status: post.status,
        };

        const formdata = new FormData();

        formdata.append("user_id", userId);
        // formdata.append("title", post.title);
        formdata.append("name", post.name);
        formdata.append("details", post.details);
        formdata.append("price_per_unit", post.price_per_unit);
        formdata.append("image", post.image.file);
        // formdata.append("description", post.description);
        // formdata.append("tags", post.tags);
        formdata.append("category", post.category);
        // formdata.append("post_status", post.status);
        try {
            await apiInstance.post("packages/create/", formdata, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            // console.log(response.data);
            // console.log("Post Create");
            setIsLoading(false);
            Swal.fire({
                icon: "success",
                title: "Package created successfully.",
            });
            Toast("success", "Package Created Successfully.");
            navigate(`/${App_Company}/profile`);
        } catch (error) {
            console.log(error);
            Toast("error", `${error}.`);
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <Loader />;

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
                            onSubmit={handleCreatePackage}
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
                                <label className="form-label" htmlFor="name">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    value={post.name}
                                    onChange={handleCreatePostChange}
                                    required
                                />
                            </div>

                            {/* <div className="mb-3">
                                <label className="form-label" htmlFor="details">
                                    Details:
                                </label>
                                <textarea
                                    className="form-control"
                                    name="details"
                                    id="details"
                                    // value={project.details}
                                    onChange={handleCreatePostChange}
                                    required
                                ></textarea>
                            </div> */}

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
                                {/* <input
                                    type="number"
                                    name="days"
                                    className="form-control"
                                    id="days"
                                    // value={project.days}
                                    // onChange={handleInputChange}
                                    required
                                /> */}
                            </div>

                            <div className="buttons">
                                <Button className="btn" type="submit">
                                    Create Project
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

export default CreateProject;
