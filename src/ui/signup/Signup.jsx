// import
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//
import "./Signup.css";

// store
import { useAuthStore } from "../../store/auth";

// utils
import api from "../../utils/api";
import { register } from "../../utils/auth";

// ui component
import LoadingIndicator from "../loader/LoadingIndicator";
import ScrollToTopPages from "../scrolltotoppages/ScrollToTopPages";
import Toast from "../../plugin/Toast";

function Signup() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);
    const [bioData, setBioData] = useState({
        full_name: "",
        email: "",
        password: "",
        password2: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

    const handleBioDataChange = (event) => {
        setError(false);
        setBioData({
            ...bioData,
            [event.target.name]: event.target.value,
        });
    };

    const resetForm = () => {
        setBioData({
            full_name: "",
            email: "",
            password: "",
            password2: "",
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(false);

        const { error } = await register(
            bioData.full_name,
            bioData.email,
            bioData.password,
            bioData.password2
        );
        if (
            error ||
            !bioData.full_name ||
            !bioData.email ||
            !bioData.password ||
            !bioData.password2
        ) {
            // alert(JSON.stringify(error));
            Toast("error", `${JSON.stringify(error)}.`, "");
            setError(`${JSON.stringify(error)}.`);
            resetForm();
        } else {
            navigate(`/login`);
        }

        // Reset isLoading to false when the operation is complete
        setIsLoading(false);
    };

    return (
        <>
            <ScrollToTopPages />
            <div className="signup">
                <div className="container">
                    <h2 className="title">Sign Up</h2>

                    <form onSubmit={handleRegister}>
                        <div className="mb-3">
                            <label className="form-label">Full Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="full_name"
                                id="full_name"
                                onChange={handleBioDataChange}
                                value={bioData.full_name}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                onChange={handleBioDataChange}
                                value={bioData.email}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password:</label>
                            <input
                                type={!showPassword ? "password" : "text"}
                                className="form-control"
                                id="password"
                                name="password"
                                onChange={handleBioDataChange}
                                value={bioData.password}
                                required
                            />
                            {!showPassword ? (
                                <ion-icon
                                    name="eye-outline"
                                    className="icon-icon"
                                    onClick={() =>
                                        setShowPassword((show) => !show)
                                    }
                                />
                            ) : (
                                <ion-icon
                                    name="eye-outline"
                                    className="icon-icon"
                                    onClick={() =>
                                        setShowPassword((show) => !show)
                                    }
                                />
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Confirm Password:
                            </label>
                            <input
                                type={!showPassword ? "password" : "text"}
                                className="form-control"
                                name="password2"
                                id="password"
                                onChange={handleBioDataChange}
                                value={bioData.password2}
                                required
                            />
                        </div>

                        {isLoading && <LoadingIndicator />}
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
