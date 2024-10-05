import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
import { App_Company } from "../../../utils/constants";
import "./CreateOurWork.css";
import useUserData from "../../../plugin/useUserData";
import apiInstance from "../../../utils/axios";
import Toast from "../../../plugin/Toast";
import Swal from "sweetalert2";

function CreateOurWork() {
    const navigate = useNavigate();
    // const [work, setWork] = useState({
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
    //         const generatedSlug = value
    //             .toLowerCase()
    //             .replace(/ /g, "-")
    //             .replace(/[^\w-]+/g, "");
    //         setWork({ ...work, title: value, slug: generatedSlug });
    //     } else {
    //         setWork({ ...work, [name]: value });
    //     }
    // };

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     setWork({ ...work, image: file });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const imageURL = work.image ? URL.createObjectURL(work.image) : "";

    //     const existingWorks = JSON.parse(localStorage.getItem("works")) || [];

    //     existingWorks.push({ ...work, image: imageURL });

    //     localStorage.setItem("works", JSON.stringify(existingWorks));

    //     // Reset form after submission
    //     setWork({
    //         title: "",
    //         details: "",
    //         image: null,
    //         slug: "",
    //         meter: "",
    //         days: "",
    //     });

    //     // Navigate to the view works page
    //     navigate("/viewworks");
    // };
    // =================================================================
    // =2
    const [post, setCreatePost] = useState({
        title: "",
        description: "",
        thumbnail: "",
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        tags: "",
        status: "Active",
    });
    const [imagePreview, setImagePreview] = useState("");
    const [categoryList, setCategoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const userId = useUserData()?.user_id;

    const handleCreatePostChange = (event) => {
        setCreatePost({
            ...post,
            [event.target.name]: event.target.value,
        });
    };

    const handleFileChangeThumbnail = (event) => {
        const selectedFile = event.target.files[0];
        const reader = new FileReader();

        setCreatePost({
            ...post,
            thumbnail: {
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

    const handleFileChangeImage1 = (event) => {
        const selectedFile = event.target.files[0];
        const reader = new FileReader();

        setCreatePost({
            ...post,
            image1: {
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
    const handleFileChangeImage2 = (event) => {
        const selectedFile = event.target.files[0];
        const reader = new FileReader();

        setCreatePost({
            ...post,
            image2: {
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
    const handleFileChangeImage3 = (event) => {
        const selectedFile = event.target.files[0];
        const reader = new FileReader();

        setCreatePost({
            ...post,
            image3: {
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
    const handleFileChangeImage4 = (event) => {
        const selectedFile = event.target.files[0];
        const reader = new FileReader();

        setCreatePost({
            ...post,
            image4: {
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
        if (!post.title || !post.description || !post.thumbnail) {
            Toast("error", "All Fields Are Required To Create A Package", "");
            setIsLoading(false);
            return;
        }

        console.log(post.category);

        const jsonData = {
            user_id: userId,
            title: post.title,
            thumbnail: post.thumbnail.file,
            image1: post.image1.file,
            image2: post.image2.file,
            image3: post.image3.file,
            image4: post.image4.file,
            // price_per_unit: post.price_per_unit,
            description: post.description,
            tags: post.tags,
            // category: post.category,
            post_status: post.status,
        };

        const formdata = new FormData();

        formdata.append("user_id", userId);
        formdata.append("title", post.title);
        formdata.append("description", post.description);
        formdata.append("thumbnail", post.thumbnail.file);
        formdata.append("image1", post.image1.file);
        formdata.append("image2", post.image2.file);
        formdata.append("image3", post.image3.file);
        formdata.append("image4", post.image4.file);
        // formdata.append("price_per_unit", post.price_per_unit);
        // formdata.append("image", post.image.file);
        formdata.append("tags", post.tags);
        // formdata.append("category", post.category);
        formdata.append("post_status", post.status);
        try {
            const response = await apiInstance.post(
                "ourwork/create/",
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
                title: "Our Work created successfully.",
            });
            Toast("success", "Work created successfully!");
            navigate(`/${App_Company}/listourwork`);
        } catch (error) {
            // console.log(error);
            setIsLoading(false);
            Toast("error", `Error: ${error}`, "");
        }
    };

    return (
        <>
            <ScrollToTopPages />
            <div className="createourwork">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">Create New Work</h2>
                    </div>

                    <div className="content">
                        <form
                            onSubmit={handleCreatePost}
                            encType="multipart/form-data"
                        >
                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    htmlFor="thumbnail"
                                >
                                    Thumbnail:
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="thumbnail"
                                    id="thumbnail"
                                    onChange={handleFileChangeThumbnail}
                                    accept="image/*"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="image1">
                                    Image1:
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="image1"
                                    id="image1"
                                    onChange={handleFileChangeImage1}
                                    accept="image/*"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="image2">
                                    Image2:
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="image2"
                                    id="image2"
                                    onChange={handleFileChangeImage2}
                                    accept="image/*"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="image3">
                                    Image3:
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="image3"
                                    id="image3"
                                    onChange={handleFileChangeImage3}
                                    accept="image/*"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="image4">
                                    Image4:
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="image4"
                                    id="image4"
                                    onChange={handleFileChangeImage4}
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
                                    // value={work.title}
                                    onChange={handleCreatePostChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    htmlFor="description"
                                >
                                    Description:
                                </label>
                                <textarea
                                    className="form-control"
                                    name="description"
                                    id="description"
                                    // value={work.details}
                                    onChange={handleCreatePostChange}
                                    required
                                ></textarea>
                            </div>

                            <div className="buttons">
                                <Button className="btn" type="submit">
                                    Create Work
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

export default CreateOurWork;
