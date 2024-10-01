import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//
import "./UpdateProfile.css";

// authorization
import useUserData from "../../../plugin/useUserData";

//
import Toast from "../../../plugin/Toast";

// utils
import apiInstance from "../../../utils/axios";

// ui bootstrap
import { Button } from "react-bootstrap";

// ui components
import Loader from "../../../ui/loader/Loader";
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
import { App_User } from "../../../utils/constants";

function UpdateProfile() {
    const navigate = useNavigate();

    // =================================================================
    const [profileData, setProfileData] = useState({
        image: null,
        full_name: "",
        about: "",
        bio: "",
        facebook: "",
        twitter: "",
        country: "",
    });
    const userId = useUserData()?.user_id;

    const [imagePreview, setImagePreview] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchProfile = () => {
        apiInstance.get(`user/profile/${userId}/`).then((res) => {
            setProfileData(res.data);
        });
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const handleProfileChange = (event) => {
        setProfileData({
            ...profileData,
            [event.target.name]: event.target.value,
        });
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setProfileData({
            ...profileData,
            [event.target.name]: selectedFile,
        });

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        if (selectedFile) {
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const res = await apiInstance.get(`user/profile/${userId}/`);

        const formData = new FormData();
        if (profileData.image && profileData.image !== res.data.image) {
            formData.append("image", profileData.image);
            console.log(`image`, profileData.image);
        }
        formData.append("full_name", profileData.full_name);
        formData.append("about", profileData.about);
        formData.append("facebook", profileData.facebook);
        formData.append("twitter", profileData.twitter);
        formData.append("country", profileData.country);

        try {
            const res = await apiInstance.patch(
                `user/profile/${userId}/`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            Toast("success", "Profile updated successfully", "");
            setLoading(false);
            navigate(`/${App_User}/profile`);
        } catch (error) {
            console.error("Error updating profile:", error);
            Toast("error", "An Error Occured", "");
        }
    };

    // console.log("1", profileData);
    if (!profileData) return <Loader />;

    return (
        <>
            <ScrollToTopPages />
            <div className="editprofile">
                <div className="container">
                    <div className="section-title">
                        <h1 className="h2">Edit Profile</h1>
                    </div>

                    <div className="content">
                        <form className="card-body" onSubmit={handleFormSubmit}>
                            <div className="top">
                                <div className="image">
                                    <img
                                        src={imagePreview || profileData?.image}
                                        id="img-uploaded"
                                        className="avatar-xl rounded-circle"
                                        alt="avatar"
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>

                                <div className="">
                                    <h4 className="">Your avatar</h4>

                                    <input
                                        type="file"
                                        name="image"
                                        className="form-control mt-3"
                                        onChange={handleFileChange}
                                    />

                                    <p className="error">
                                        PNG or JPG no bigger than 800px wide and
                                        tall.
                                    </p>
                                </div>
                            </div>

                            <hr className="" />

                            {/* Form */}
                            <div className="info">
                                {/* First name */}
                                <div className="">
                                    <label
                                        className="form-label"
                                        htmlFor="fname"
                                    >
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        id="fname"
                                        className="form-control"
                                        placeholder="First Name"
                                        required=""
                                        onChange={handleProfileChange}
                                        name="full_name"
                                        value={profileData?.full_name}
                                    />
                                </div>

                                {/* About Me */}
                                <div className="">
                                    <label
                                        className="form-label"
                                        htmlFor="lname"
                                    >
                                        About Me
                                    </label>
                                    <textarea
                                        onChange={handleProfileChange}
                                        name="about"
                                        id=""
                                        cols="30"
                                        // value={profileData?.about}
                                        rows="5"
                                        className="form-control"
                                    ></textarea>
                                </div>

                                {/* Bio */}
                                <div className="">
                                    <label
                                        className="form-label"
                                        htmlFor="editCountry"
                                    >
                                        Bio
                                    </label>
                                    <input
                                        type="text"
                                        id="bio"
                                        className="form-control"
                                        placeholder="bio"
                                        required=""
                                        value={profileData?.bio}
                                        onChange={handleProfileChange}
                                        name="bio"
                                    />
                                </div>

                                {/* Ggovernorate */}
                                <div className="">
                                    <label
                                        className="form-label"
                                        htmlFor="editCountry"
                                    >
                                        Ggovernorate
                                    </label>
                                    <input
                                        type="text"
                                        id="country"
                                        className="form-control"
                                        placeholder="Governorate"
                                        required=""
                                        value={profileData?.country || ""}
                                        onChange={handleProfileChange}
                                        name="country"
                                    />
                                </div>

                                {/* Facebook */}
                                <div className="">
                                    <label
                                        className="form-label"
                                        htmlFor="editCountry"
                                    >
                                        Facebook
                                    </label>

                                    <input
                                        type="text"
                                        id="facebook"
                                        className="form-control"
                                        name="facebook"
                                        placeholder="facebook"
                                        value={profileData?.facebook}
                                        onChange={handleProfileChange}
                                        required=""
                                    />
                                </div>

                                {/* Twitter */}
                                <div className="">
                                    <label
                                        className="form-label"
                                        htmlFor="editCountry"
                                    >
                                        Twitter
                                    </label>
                                    <input
                                        type="text"
                                        id="twitter"
                                        className="form-control"
                                        placeholder="twitter"
                                        required=""
                                        value={profileData?.twitter}
                                        onChange={handleProfileChange}
                                        name="twitter"
                                    />
                                </div>
                            </div>

                            {/* Button */}
                            <div className="buttons">
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Update Profile
                                </button>

                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                    onClick={() => {
                                        navigate(`/${App_User}/profile`);
                                    }}
                                >
                                    Cancal
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateProfile;
