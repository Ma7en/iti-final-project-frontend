// import
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//
import "./Login.css";

// utils
import api from "../../utils/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../utils/constants";

// ui components
import LoadingIndicator from "../loader/LoadingIndicator";

function Login() {
    // = 2
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        setLoading(true);
        setError(false);
        e.preventDefault();

        try {
            const res = await api.post("/api/token/", {
                username,
                password,
            });
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate("/user/profile");
        } catch (error) {
            // alert("Error: " + error.message);
            setError("Username Or password Error");
        } finally {
            setLoading(false);
        }
    };

    const handleSignupRedirect = () => {
        navigate("/signup");
    };
    const handleResetPasswordRedirect = () => {
        navigate("/resetpassword");
    };

    return (
        <>
            <div className="login">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="title">Login</h2>

                            <form onSubmit={handleLoginSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Username:
                                    </label>
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
                                    <label className="form-label">
                                        Password:
                                    </label>
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
                                        onClick={handleSignupRedirect}
                                    >
                                        Sign up
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
                </div>
            </div>
        </>
    );
}

export default Login;
