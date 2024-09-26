import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//
import "./AppUser.css";

// utils
import api from "../../utils/api";
import { App_User } from "../../utils/constants";

// bootstrap components
import { Button } from "react-bootstrap";

// assets
import ProfileImage from "../../assets/images/author/avatar.png";
import Loader from "../../ui/loader/Loader";

function AppUser() {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await api.get("/api/user/me/", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user data", error);
            }
        };

        fetchUserData();
    }, []);

    if (!user) return <Loader />;
    // if (!user) return <p>Loading...</p>;
    // console.log(`user`, user);
    const { username, email, first_name, last_name } = user;

    return (
        <>
            <div className="userprofile">
                <div className="container">
                    <div className="section-title">
                        <h1 className="h2">User Profile</h1>
                    </div>

                    <div className="content">
                        <div className="info">
                            <p className="h3">Username: {username}</p>
                            <p className="h3">Email: {email}</p>
                            <p className="h3">First Name: {first_name}</p>
                            <p className="h3">Last Name: {last_name}</p>
                        </div>

                        <div className="image">
                            <img src={`${ProfileImage}`} alt={`${username}`} />
                        </div>
                    </div>

                    <div className="mt-5">
                        <Button
                            className="btn bg-warning fs-3 text-capitalize px-5 py-3"
                            onClick={() => {
                                navigate(
                                    `/${App_User}/${App_User}/createproject`
                                );
                            }}
                        >
                            Create Project
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppUser;
