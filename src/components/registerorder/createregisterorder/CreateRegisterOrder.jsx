import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// import style
import "./CreateRegisterOrder.css";

// pluginx
import useUserData from "../../../plugin/useUserData";
import Toast from "../../../plugin/Toast";

// utils
import apiInstance from "../../../utils/axios";
import { App_Company, App_User } from "../../../utils/constants";

// ui bootstrap components
import { Button } from "react-bootstrap";

// ui components
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
import Loader from "../../../ui/loader/Loader";

function CreateRegisterOrder() {
    const [post, setCreatePost] = useState({
        full_name: "",
        phone: "",

        governorate: "",
        city: "",
        area: "",

        typeunit: "",
        requiredworks: "",
        skills: "",
        conditionoftheunit: "",

        space: "",
        numberroom: "",
        numberbathroom: "",

        description: "",

        // title: "",
        // image: "",
        // price_per_unit: "",
        // tags: "",
        status: "Active",
    });
    const [imagePreview, setImagePreview] = useState("");
    const [categoryList, setCategoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const userId = useUserData()?.user_id;
    const navigate = useNavigate();

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
        if (!post.full_name) {
            Toast("error", "All Fields Are Required To Create A Package", "");
            setIsLoading(false);
            return;
        }

        console.log(post.category);

        const jsonData = {
            user_id: userId,
            description: post.description,
            title: post.title,
            price_per_unit: post.price_per_unit,
            // image: post.image.file,
            // tags: post.tags,
            post_status: post.status,
        };

        const formdata = new FormData();

        formdata.append("user_id", userId);

        formdata.append("full_name", post.full_name);
        formdata.append("phone", post.phone);

        formdata.append("governorate", post.governorate);
        formdata.append("city", post.city);
        formdata.append("area", post.area);

        formdata.append("typeunit", post.typeunit);
        formdata.append("requiredworks", post.requiredworks);
        formdata.append("skills", post.skills);
        formdata.append("conditionoftheunit", post.conditionoftheunit);

        formdata.append("space", post.space);
        formdata.append("numberroom", post.numberroom);
        formdata.append("numberbathroom", post.numberbathroom);

        formdata.append("description", post.description);

        // formdata.append("title", post.title);
        // formdata.append("price_per_unit", post.price_per_unit);
        // formdata.append("image", post.image.file);
        // formdata.append("tags", post.tags);
        formdata.append("post_status", post.status);
        try {
            const response = await apiInstance.post(
                "registerorder/create/",
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
            Toast("success", "Order Created successfully!");
            navigate(`/${App_User}/profile`);
        } catch (error) {
            // console.log(error);
            setIsLoading(false);
            Toast("error", `Error: ${error}`, "");
        }
    };

    // // if (!categoryList) return <Loader />;
    // // =================================================================
    // const navigate = useNavigate();

    return (
        <>
            <ScrollToTopPages />
            <div className="createregisterorder">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">Book New Package</h2>
                    </div>

                    <div className="content">
                        <form
                            onSubmit={handleCreatePost}
                            encType="multipart/form-data"
                        >
                            <div className="">
                                <label
                                    className="form-label"
                                    htmlFor="full_name"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="full_name"
                                    className="form-control"
                                    placeholder="Full Name"
                                    name="full_name"
                                    onChange={handleCreatePostChange}
                                    // value={
                                    //     profileData?.full_name !== null &&
                                    //     profileData?.full_name !== "null" &&
                                    //     profileData.full_name !== undefined
                                    //         ? profileData?.full_name
                                    //         : ""
                                    // }
                                    required=""
                                />
                            </div>

                            <div className="">
                                <label className="form-label" htmlFor="phone">
                                    phone
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="form-control"
                                    placeholder="Phone"
                                    name="phone"
                                    onChange={handleCreatePostChange}
                                    // value={
                                    //     profileData?.phone !== null &&
                                    //     profileData.phone !== "null" &&
                                    //     profileData?.phone !== undefined
                                    //         ? profileData?.phone
                                    //         : ""
                                    // }
                                    required=""
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    htmlFor="governorate"
                                >
                                    Governorate:
                                </label>
                                <input
                                    type="text"
                                    name="governorate"
                                    className="form-control"
                                    id="governorate"
                                    // value={post.title}
                                    onChange={handleCreatePostChange}
                                    placeholder="Governorate"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="city">
                                    City:
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    id="city"
                                    // value={post.title}
                                    onChange={handleCreatePostChange}
                                    placeholder="City"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="area">
                                    The area:
                                </label>
                                <input
                                    type="text"
                                    name="area"
                                    className="form-control"
                                    id="area"
                                    // value={post.title}
                                    onChange={handleCreatePostChange}
                                    placeholder="The Area"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    htmlFor="typeunit"
                                >
                                    Type of Residential Unit:
                                </label>
                                <select
                                    name="typeunit"
                                    onChange={handleCreatePostChange}
                                    className="form-select"
                                    id="typeunit"
                                    required
                                >
                                    <option value="">Select a type</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="FullHouse">
                                        Full House
                                    </option>
                                    <option value="Villa">Villa</option>
                                    <option value="Roof">Roof</option>
                                    <option value="Administrative">
                                        Administrative
                                    </option>
                                    <option value="CommercialShop">
                                        Commercial Shop
                                    </option>

                                    {/* {categoryList?.map((category, index) => (
                                        <option
                                            value={category?.id}
                                            key={index}
                                        >
                                            {category?.title}
                                        </option>
                                    ))} */}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    htmlFor="requiredworks"
                                >
                                    Required Works:
                                </label>
                                <select
                                    name="requiredworks"
                                    onChange={handleCreatePostChange}
                                    className="form-select"
                                    id="requiredworks"
                                    required
                                >
                                    <option value="">Select a required</option>
                                    <option value="Executiononly">
                                        Execution only
                                    </option>
                                    <option value="ExecutionandDesign">
                                        Executionand Design
                                    </option>
                                    <option value="Supervision">
                                        Supervision
                                    </option>
                                    {/* {categoryList?.map((category, index) => (
                                        <option
                                            value={category?.id}
                                            key={index}
                                        >
                                            {category?.title}
                                        </option>
                                    ))} */}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="skills">
                                    Skills:
                                </label>
                                <select
                                    name="skills"
                                    onChange={handleCreatePostChange}
                                    className="form-select"
                                    id="skills"
                                    required
                                >
                                    <option value="">Select a Skills</option>
                                    <option value="Quickexecution">
                                        Quick execution
                                    </option>
                                    <option value="Materialprovision">
                                        Material provision
                                    </option>
                                    <option value="Innovativedesigns">
                                        Innovative designs
                                    </option>
                                    {/* {categoryList?.map((category, index) => (
                                        <option
                                            value={category?.id}
                                            key={index}
                                        >
                                            {category?.title}
                                        </option>
                                    ))} */}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    htmlFor="conditionoftheunit"
                                >
                                    Condition of the Unit:
                                </label>
                                <select
                                    name="conditionoftheunit"
                                    onChange={handleCreatePostChange}
                                    className="form-select"
                                    id="conditionoftheunit"
                                    required
                                >
                                    <option value="">Select a Stuts</option>
                                    <option value="Unfinished">
                                        Unfinished
                                    </option>
                                    <option value="Semi-finished">
                                        Semi-finished
                                    </option>
                                    <option value="3/4finished">
                                        3/4 finished
                                    </option>
                                    {/* {categoryList?.map((category, index) => (
                                        <option
                                            value={category?.id}
                                            key={index}
                                        >
                                            {category?.title}
                                        </option>
                                    ))} */}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="space">
                                    Space:
                                </label>
                                <input
                                    type="number"
                                    name="space"
                                    className="form-control"
                                    id="space"
                                    // value={post.price_per_unit}
                                    onChange={handleCreatePostChange}
                                    placeholder="Enter the space"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    htmlFor="numberroom"
                                >
                                    Number of rooms:
                                </label>
                                <input
                                    type="number"
                                    name="numberroom"
                                    className="form-control"
                                    id="numberroom"
                                    // value={post.price_per_unit}
                                    onChange={handleCreatePostChange}
                                    placeholder="Enter the number"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    htmlFor="numberbathroom"
                                >
                                    Number of bathrooms:
                                </label>
                                <input
                                    type="number"
                                    name="numberbathroom"
                                    className="form-control"
                                    id="numberbathroom"
                                    // value={post.price_per_unit}
                                    onChange={handleCreatePostChange}
                                    placeholder="Enter the number"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    htmlFor="description"
                                >
                                    Note:
                                </label>
                                <input
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    id="description"
                                    // value={post.Space}
                                    onChange={handleCreatePostChange}
                                    placeholder="Enter a note"
                                    required
                                />
                            </div>

                            <div className="buttons">
                                <Button className="btn" type="submit">
                                    Add New Package
                                </Button>

                                <Button
                                    className="btn"
                                    type="button"
                                    onClick={() => {
                                        navigate(`/`);
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

export default CreateRegisterOrder;
