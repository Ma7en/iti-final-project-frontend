import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// utils
import api from "../../utils/api";
import { App_User } from "../../utils/constants";

// bootstrap components
import { Button } from "react-bootstrap";

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

    if (!user) return <p>Loading...</p>;
    // console.log(`user`, user);

    return (
        <>
            <div>
                <h1>User Profile</h1>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>First Name: {user.first_name}</p>
                <p>Last Name: {user.last_name}</p>
            </div>
            <div>div user</div>

            <div>
                <Button
                    className="bg-warning fs-3 text-capitalize px-5 py-3"
                    variant="warning"
                    onClick={() => {
                        navigate(`/${App_User}/${App_User}/createproject`);
                    }}
                >
                    create project
                </Button>
            </div>

            <div>
                <Button
                    className="bg-warning fs-3 text-capitalize px-5 py-3"
                    variant="warning"
                    onClick={() => {
                        navigate(`/logout`);
                    }}
                >
                    logout
                </Button>
            </div>
        </>
    );
}

export default AppUser;
