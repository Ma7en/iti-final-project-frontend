import React from "react";
import "login.css";
function Login() {
    return (
        <>
            <div className="login-container">
                <form className="login-form">
                    <h2 className="section-title">Login</h2>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" className="form-input" placeholder="Enter your username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-input" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" className="btn">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;
