// import
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//
import "./Signup.css";

// utils
import api from "../../utils/api";

// ui component
import LoadingIndicator from "../loader/LoadingIndicator";

function Signup() {
    localStorage.clear();

    // =2
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [profileImage, setProfileImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        setLoading(true);
        setError(false);
        e.preventDefault();

        const formData = new FormData();
        formData.append("username", username);
        formData.append("first_name", firstName);
        formData.append("last_name", lastName);
        formData.append("email", email);
        formData.append("password", password);
        // if (profileImage) {
        //     formData.append("profile_image", profileImage);
        // }

        try {
            await api.post("/api/user/register/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            navigate("/login");
        } catch (error) {
            // alert("Registration failed: " + error.message);
            setError("Please enter the data correctly");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="signup">
                <div className="container">
                    <h2 className="title">Sign Up</h2>

                    <form onSubmit={handleSignup}>
                        <div className="mb-3">
                            <label className="form-label">Username:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                    setError(false);
                                }}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">First Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                    setError(false);
                                }}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Last Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                    setError(false);
                                }}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError(false);
                                }}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError(false);
                                }}
                                required
                            />
                        </div>

                        {loading && <LoadingIndicator />}
                        {error && (
                            <div className="Error alert alert-danger">
                                {error}
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary w-100">
                            Sign Up
                        </button>
                    </form>

                    <div className="other">
                        <p className="mt-3 text-center ">
                            Do you have an account?
                        </p>

                        <div>
                            <button
                                className="btn btn-link "
                                onClick={() => {
                                    navigate(`/login`);
                                }}
                            >
                                Login
                            </button>

                            <button
                                className="btn btn-link "
                                onClick={() => {
                                    navigate("/resetpassword");
                                }}
                            >
                                Forgot Password?
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
