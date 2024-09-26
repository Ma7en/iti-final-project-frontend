// import
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//
import "./Signup.css";

// utils
import api from "../../utils/api";

// ui component
// import Form from "../form/Form";

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
            alert("Registration failed: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLoginRedirect = () => {
        navigate("/login");
    };
    const handleResetPasswordRedirect = () => {
        navigate("/resetpassword");
    };

    // =1
    // =================================================================

    // return (
    //     <>
    //         <form
    //             onSubmit={handleRegister}
    //             className="form-container"
    //             encType="multipart/form-data"
    //         >
    //             <h1>Register</h1>
    //             <input
    //                 className="form-input"
    //                 type="text"
    //                 value={username}
    //                 onChange={(e) => setUsername(e.target.value)}
    //                 placeholder="Username"
    //             />
    //             <input
    //                 className="form-input"
    //                 type="text"
    //                 value={firstName}
    //                 onChange={(e) => setFirstName(e.target.value)}
    //                 placeholder="First Name"
    //             />
    //             <input
    //                 className="form-input"
    //                 type="text"
    //                 value={lastName}
    //                 onChange={(e) => setLastName(e.target.value)}
    //                 placeholder="Last Name"
    //             />
    //             <input
    //                 className="form-input"
    //                 type="email"
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //                 placeholder="Email"
    //             />
    //             {/* <input
    //                 className="form-input"
    //                 type="file"
    //                 onChange={(e) => setProfileImage(e.target.files[0])}
    //             /> */}
    //             <input
    //                 className="form-input"
    //                 type="password"
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //                 placeholder="Password"
    //             />
    //             {loading && <div>Loading...</div>}
    //             <button className="form-button" type="submit">
    //                 Register
    //             </button>
    //         </form>
    //     </>
    // );

    // =1
    // =================================================================

    // const handleSignup = (e) => {
    //     e.preventDefault();
    //     setError("");

    //     if (!email || !password || !confirmPassword) {
    //         setError("Please fill in all fields");
    //         return;
    //     }

    //     if (password !== confirmPassword) {
    //         setError("Passwords do not match");
    //         return;
    //     }

    //     console.log("Signed up:", { email, password });
    //     navigate("/");
    // };

    // =1
    // =================================================================

    return (
        <>
            <div className="signup">
                <div className="container">
                    <h2 className="title">Sign Up</h2>
                    {error && <div className="alert alert-danger">{error}</div>}

                    <form onSubmit={handleSignup}>
                        <div className="mb-3">
                            <label className="form-label">Username:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">First Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Last Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

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
                                onClick={handleLoginRedirect}
                            >
                                Login
                            </button>

                            <button
                                className="btn btn-link "
                                onClick={handleResetPasswordRedirect}
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
