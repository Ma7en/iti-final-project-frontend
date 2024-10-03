import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";

function CreateWorks() {
    const navigate = useNavigate();
    const [work, setWork] = useState({
        title: "",
        details: "",
        image: null,
        slug: "",
        meter: "", 
        days: "",  
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "title") {
            const generatedSlug = value
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "");
            setWork({ ...work, title: value, slug: generatedSlug });
        } else {
            setWork({ ...work, [name]: value });
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setWork({ ...work, image: file });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

  
        const imageURL = work.image ? URL.createObjectURL(work.image) : "";

        const existingWorks = JSON.parse(localStorage.getItem('works')) || [];
      
        existingWorks.push({ ...work, image: imageURL });
        
        localStorage.setItem('works', JSON.stringify(existingWorks));

        // Reset form after submission
        setWork({
            title: "",
            details: "",
            image: null,
            slug: "",
            meter: "", 
            days: "",  
        });

        // Navigate to the view works page
        navigate("/viewworks");
    };

    return (
        <>
            <ScrollToTopPages />
            <div className="createproject">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">Create New Work</h2>
                    </div>

                    <div className="content">
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="image">
                                    Image:
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="image"
                                    id="image"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="title">
                                    Title:
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    id="title"
                                    value={work.title}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="details">
                                    Details:
                                </label>
                                <textarea
                                    className="form-control"
                                    name="details"
                                    id="details"
                                    value={work.details}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="meter">
                                    Meter:
                                </label>
                                <input
                                    type="number"
                                    name="meter"
                                    className="form-control"
                                    id="meter"
                                    value={work.meter}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="days">
                                    Days:
                                </label>
                                <input
                                    type="number"
                                    name="days"
                                    className="form-control"
                                    id="days"
                                    value={work.days}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="buttons">
                                <Button className="btn" type="submit">
                                    Create Work
                                </Button>

                                <Button
                                    className="btn"
                                    type="button"
                                    onClick={() => navigate("/viewworks")}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateWorks;
