// import
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleReset = (e) => {
        e.preventDefault();
        setError("");
        setMessage("");

        if (!email) {
            setError("Please enter your email");
            return;
        }

        const isValidEmail = email === "shroukeltokhy2000@gmail.com";

        if (isValidEmail) {
            console.log("Password reset link sent to:", email);
            setMessage("Password reset link has been sent to your email.");
            setTimeout(() => navigate("/"), 2000); // Redirect to login after 2 seconds
        } else {
            setError("Email not found");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Reset Password</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {message && <div className="alert alert-success">{message}</div>}
            <form onSubmit={handleReset}>
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
                <button type="submit" className="btn btn-primary w-100">
                    Send Reset Link
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;
