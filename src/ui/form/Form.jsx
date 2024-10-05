import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import style
import "./Form.css";

// utils
import api from "../../utils/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../utils/constants";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [profileImage, setProfileImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const title = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            let res;
            if (method === "register") {
                const formData = new FormData();
                formData.append("username", username);
                formData.append("first_name", firstName);
                formData.append("last_name", lastName);
                formData.append("email", email);
                formData.append("password", password);
                // if (profileImage) {
                //     formData.append("profile_image", profileImage);
                // }

                res = await api.post(route, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                navigate("/login");
            } else {
                res = await api.post(route, {
                    username,
                    password,
                });
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/user");
            }
        } catch (error) {
            alert("Error: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="form-container"
                encType="multipart/form-data"
            >
                <h1>{title}</h1>
                <input
                    className="form-input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                {/*  */}
                {method === "register" && (
                    <>
                        <input
                            className="form-input"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                        />
                        <input
                            className="form-input"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                        />
                        <input
                            className="form-input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                        {/* <input
                            className="form-input"
                            type="file"
                            onChange={(e) => setProfileImage(e.target.files[0])}
                        /> */}
                    </>
                )}
                <input
                    className="form-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />

                {loading && <div>Loading...</div>}
                <button className="form-button" type="submit">
                    {title}
                </button>
            </form>
        </>
    );
}

export default Form;
