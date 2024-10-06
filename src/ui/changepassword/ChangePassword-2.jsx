import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import apiInstance from "../../utils/axios";
import "./ChangePassword.css";
import ScrollToTopPages from "../scrolltotoppages/ScrollToTopPages";
import LoadingIndicator from "../loader/LoadingIndicator";
import Toast from "../../plugin/Toast";

function ChangePassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const otp = searchParams.get("otp");
    const uidb64 = searchParams.get("uidb64");
    const reset_token = searchParams.get("reset_token");

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (password !== confirmPassword) {
            setIsLoading(false);
            Toast().fire({
                icon: "warning",
                text: "Password Does Not Match",
            });
            return;
        }

        const formData = new FormData();
        formData.append("otp", otp);
        formData.append("uidb64", uidb64);
        formData.append("reset_token", reset_token);
        formData.append("password", password);

        try {
            const res = await apiInstance.post(
                "user/password-change/",
                formData
            );
            Toast().fire({
                icon: "success",
                text: "Password Changed Successfully!",
            });
            navigate("/login");
        } catch (error) {
            // console.error("Error changing password:", error);
            console.log(`eeee`, error);
            setError("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <ScrollToTopPages />
            <div className="changepassword">
                <div className="container">
                    <h2 className="title">Change Password</h2>

                    <form onSubmit={handlePasswordSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="password">
                                Password:
                            </label>
                            <input
                                type={!showPassword ? "password" : "text"}
                                className="form-control"
                                id="password"
                                placeholder="**************"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <ion-icon
                                name={
                                    !showPassword
                                        ? "eye-off-outline"
                                        : "eye-outline"
                                }
                                className="icon-icon"
                                onClick={() => setShowPassword((prev) => !prev)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="password2">
                                Confirm Password:
                            </label>
                            <input
                                type={!showPassword ? "password" : "text"}
                                className="form-control"
                                id="password2"
                                required
                                placeholder="**************"
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                        </div>

                        {isLoading && <LoadingIndicator />}
                        {error && (
                            <div className="Error alert alert-danger">
                                {error}
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary w-100">
                            Change Password
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ChangePassword;
