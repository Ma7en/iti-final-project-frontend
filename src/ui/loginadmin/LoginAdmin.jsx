import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//
import "./LoginAdmin.css";

// store
import { useAuthStore } from "../../store/auth";

// utils
import api from "../../utils/api";
import {
    ACCESS_TOKEN,
    App_Company,
    REFRESH_TOKEN,
} from "../../utils/constants";
import { login } from "../../utils/auth";

// ui components
import LoadingIndicator from "../loader/LoadingIndicator";
import ScrollToTopPages from "../scrolltotoppages/ScrollToTopPages";
import Toast from "../../plugin/Toast";

function LoginAdmin() {
    // =================================================================
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);
    const [bioData, setBioData] = useState({ email: "", password: "" });
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
            navigate(`/${App_Company}/profile`);
        }

        // Reset isLoading to false when the operation is complete
        setIsLoading(false);
    };

    // =================================================================
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [error, setError] = useState("");

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         // إرسال طلب تسجيل الدخول إلى Django API
    //         const response = await axios.post(
    //             "http://localhost:8000/api/v1/user/token/ ",
    //             {
    //                 username: username,
    //                 password: password,
    //             }
    //         );

    //         // الحصول على التوكن وحفظه في localStorage
    //         const token = response.data.access;
    //         localStorage.setItem("token", token);

    //         // التحقق مما إذا كان المستخدم هو superuser
    //         const userResponse = await axios.get(
    //             "http://localhost:8000/api/admin",
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //             }
    //         );

    //         const isSuperuser = userResponse.data.is_superuser;
    //         if (isSuperuser) {
    //             // توجيه المستخدم إلى لوحة تحكم Django Admin
    //             // window.location.href = "/admin";
    //             navigate(`/${App_Company}/profile`);
    //         } else {
    //             setError("You are not a Admin.");
    //         }
    //     } catch (error) {
    //         setError("Login failed. Check your username and password.");
    //     }
    // };

    return (
        <>
            <ScrollToTopPages />
            <div className="login">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="title">Admin Login</h2>

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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginAdmin;
