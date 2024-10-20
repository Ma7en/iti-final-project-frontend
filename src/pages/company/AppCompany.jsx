import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//
import "./AppCompany.css";

// bootstrap components
import { Button } from "react-bootstrap";

// utils
import api from "../../utils/api";
import { App_Company, App_User } from "../../utils/constants";
import apiInstance from "../../utils/axios";

// authorization
import useUserData from "../../plugin/useUserData";
import Toast from "../../plugin/Toast";

// store
import { useAuthStore } from "../../store/auth";

// ui components
import Loader from "../../ui/loader/Loader";
import ScrollToTopPages from "../../ui/scrolltotoppages/ScrollToTopPages";

// assets
// import ProfileImage from "../../assets/images/author/avatar.png";
import ProfileImage from "../../assets/images/logo/logo.png";

function AppCompany() {
    const navigate = useNavigate();

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
        } catch (error) {
            console.error("Error updating profile:", error);
            Toast("error", "An Error Occured", "");
        }
    };
    // console.log("1", profileData);
    if (!profileData) return <Loader />;
    const { full_name, image } = profileData;
    // console.log(`3333`, profileData);

    return (
        <>
            <ScrollToTopPages />
            <div className="companyprofile">
                <div className="container">
                    <div className="section-title">
                        <h1 className="h2">company Profile</h1>
                    </div>

                    <div className="content">
                        <div className="info">
                            <div className="details">
                                <p className="h3">
                                    Company Name:
                                    <span>{full_name}</span>
                                </p>
                            </div>

                            <div className="buttons">
                                <Button
                                    className="btn "
                                    onClick={() => {
                                        navigate(`/logout`);
                                    }}
                                >
                                    Logout
                                </Button>
                            </div>
                        </div>

                        <div className="image">
                            <img src={`${ProfileImage}`} alt={`${full_name}`} />
                        </div>
                    </div>

                    {/* categories */}
                    <div className="categories">
                        <div className="section-title">
                            <h3 className="h3">categories</h3>
                        </div>

                        <div className="actions">
                            <Button
                                className="btn "
                                onClick={() => {
                                    navigate(`/${App_Company}/createcategory`);
                                }}
                            >
                                <span>create category</span>
                                <ion-icon name="add-outline" />
                            </Button>

                            <Button
                                className="btn "
                                onClick={() => {
                                    navigate(`/${App_Company}/categories`);
                                }}
                            >
                                <span>view categories</span>
                                <ion-icon name="eye-outline"></ion-icon>
                            </Button>
                        </div>
                    </div>

                    {/* packages */}
                    <div className="categories">
                        <div className="section-title">
                            <h3 className="h3">Packages</h3>
                        </div>

                        <div className="actions">
                            <Button
                                className="btn "
                                onClick={() => {
                                    navigate(`/${App_Company}/createproject`);
                                }}
                            >
                                <span>create package</span>
                                <ion-icon name="add-outline" />
                            </Button>

                            <Button
                                className="btn "
                                onClick={() => {
                                    navigate(`/${App_Company}/listproject`);
                                }}
                            >
                                <span>view packages</span>
                                <ion-icon name="eye-outline"></ion-icon>
                            </Button>
                        </div>
                    </div>

                    {/* our work */}
                    <div className="categories">
                        <div className="section-title">
                            <h3 className="h3">Our Works</h3>
                        </div>

                        <div className="actions">
                            <Button
                                className="btn "
                                onClick={() => {
                                    navigate(`/${App_Company}/createourwork`);
                                }}
                            >
                                <span>create work</span>
                                <ion-icon name="add-outline" />
                            </Button>

                            <Button
                                className="btn "
                                onClick={() => {
                                    navigate(`/${App_Company}/listourwork`);
                                }}
                            >
                                <span>view Our Works</span>
                                <ion-icon name="eye-outline"></ion-icon>
                            </Button>
                        </div>
                    </div>

                    {/* orders */}
                    <div className="categories">
                        <div className="section-title">
                            <h3 className="h3">Order</h3>
                        </div>

                        <div className="actions">
                            {/* <Button
                                className="btn "
                                onClick={() => {
                                    navigate(`/${App_User}/createproject`);
                                }}
                            >
                                <span>create project</span>
                                <ion-icon name="add-outline" />
                            </Button> */}

                            <Button
                                className="btn "
                                onClick={() => {
                                    navigate(`/${App_Company}/listorders`);
                                }}
                            >
                                <span>view orders</span>
                                <ion-icon name="eye-outline"></ion-icon>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppCompany;
