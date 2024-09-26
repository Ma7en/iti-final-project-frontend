import React, { useState } from "react";

//
import "./Contact.css";

// ui component
import Footer from "../footer/Footer";
const Contact = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(formData);
    };

    return (
        <>
            <div className="contact">
                <div className="contact-container">
                    <h1>Contact Us</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                // value={formData.name}
                                // onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                // value={formData.email}
                                // onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                // value={formData.message}
                                // onChange={handleChange}
                                required
                            />
                        </div>

                        <button className="btn" type="submit">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
