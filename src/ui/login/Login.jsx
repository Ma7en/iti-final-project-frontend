import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Form from "../form/Form";

const Login = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [error, setError] = useState("");
    // const navigate = useNavigate();

    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     setError("");

    //     if (!email || !password) {
    //         setError("Please fill in all fields");
    //         return;
    //     }

    //     if (email === "user@example.com" && password === "password") {
    //         console.log("Logged in:", { email });
    //     } else {
    //         setError("Invalid email or password");
    //     }
    // };

    // const handleSignupRedirect = () => {
    //     navigate("/signup");
    // };

    // const handleResetPasswordRedirect = () => {
    //     navigate("/resetpassword");
    // };

    // return (
    //     <div className="container mt-5 loginContainer">
    //         <div className="card shadow-sm">
    //             <div className="card-body">
    //                 <h2 className="text-center loginheader">Login</h2>
    //                 {error && <div className="alert alert-danger">{error}</div>}
    //                 <form onSubmit={handleLogin}>
    //                     <div className="mb-3">
    //                         <label className="form-label">Email:</label>
    //                         <input
    //                             type="email"
    //                             className="form-control"
    //                             value={email}
    //                             onChange={(e) => setEmail(e.target.value)}
    //                             required
    //                         />
    //                     </div>
    //                     <div className="mb-3">
    //                         <label className="form-label">Password:</label>
    //                         <input
    //                             type="password"
    //                             className="form-control"
    //                             value={password}
    //                             onChange={(e) => setPassword(e.target.value)}
    //                             required
    //                         />
    //                     </div>
    //                     <button type="submit" className="btn btn-primary w-100">
    //                         Login
    //                     </button>
    //                 </form>
    //                 <p className="mt-3 text-center ">
    //                     Don't have an account?{" "}
    //                     <button
    //                         className="btn btn-link "
    //                         onClick={handleSignupRedirect}
    //                     >
    //                         Sign up
    //                     </button>
    //                 </p>
    //                 <p className="text-center ">
    //                     <button
    //                         className="btn btn-link  btnReset "
    //                         onClick={handleResetPasswordRedirect}
    //                     >
    //                         Forgot Password?
    //                     </button>
    //                 </p>
    //             </div>
    //         </div>
    //     </div>
    // );

    return <Form route="/api/token/" method="login" />;
};

export default Login;
