// import
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//
import "./Login.css";

// store
import { useAuthStore } from "../../store/auth";

// utils
import api from "../../utils/api";
import { ACCESS_TOKEN, App_User, REFRESH_TOKEN } from "../../utils/constants";
import { login } from "../../utils/auth";

// ui components
import LoadingIndicator from "../loader/LoadingIndicator";
import ScrollToTopPages from "../scrolltotoppages/ScrollToTopPages";
import Toast from "../../plugin/Toast";

function Login() {
    // = 2
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    // const navigate = useNavigate();

    // const handleLoginSubmit = async (e) => {
    //     setLoading(true);
    //     setError(false);
    //     e.preventDefault();

    //     try {
    //         const res = await api.post("/api/token/", {
    //             username,
    //             password,
    //         });
    //         localStorage.setItem(ACCESS_TOKEN, res.data.access);
    //         localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
    //         navigate("/user/profile");
    //     } catch (error) {
    //         // alert("Error: " + error.message);
    //         setError("Please enter the data correctly");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // =================================================================
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);
    const [bioData, setBioData] = useState({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const navigate = useNavigate();

    const handleBioDataChange = (event) => {
        setError(false);
        setBioData({
            ...bioData,
            [event.target.name]: event.target.value,
        });
    };

    const resetForm = () => {
        setBioData({
            email: "",
            password: "",
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(false);

        const { error } = await login(bioData.email, bioData.password);
        if (error) {
            // alert(JSON.stringify(error));
            Toast("error", `${JSON.stringify(error)}.`, "");
            setError(`${JSON.stringify(error)}.`);
            resetForm();
        } else {
            navigate(`/${App_User}/profile`);
        }

        // Reset isLoading to false when the operation is complete
        setIsLoading(false);
    };

    return (
        <>
            <ScrollToTopPages />
            <div className="login">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="title">Login</h2>

                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label className="form-label">Email:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        onChange={handleBioDataChange}
                                        value={bioData.email}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Password:
                                    </label>
                                    <input
                                        type={
                                            !showPassword ? "password" : "text"
                                        }
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        onChange={handleBioDataChange}
                                        value={bioData.password}
                                        required
                                    />
                                    {!showPassword ? (
                                        <ion-icon
                                            name="eye-off-outline"
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

                                {isLoading && <LoadingIndicator />}
                                {error && (
                                    <div className="Error alert alert-danger">
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                >
                                    Login
                                </button>
                            </form>

                            <div className="other">
                                <p className="mt-3 text-center ">
                                    Don't have an account?
                                </p>

                                <div>
                                    <button
                                        className="btn btn-link "
                                        onClick={() => {
                                            navigate("/signup");
                                        }}
                                    >
                                        Sign up
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
                </div>
            </div>
        </>
    );
}

export default Login;
