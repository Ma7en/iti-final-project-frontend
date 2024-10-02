import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
import apiInstance from "../../../utils/axios"; 
import Toast from "../../../plugin/Toast"; 

function UpdateWorks() {
    const navigate = useNavigate();
    const { id } = useParams(); // Get the project ID from the URL
    const [work, setWork] = useState({
        title: "",
        details: "",
        image: null,
        slug: "",
        meter: "",
        days: "",
    });

    useEffect(() => {
        const fetchWork = async () => {
            try {
                const response = await apiInstance.get(`work/${id}/`); // Fetch work data
                setWork(response.data);
            } catch (error) {
                console.error("Error fetching work:", error);
                Toast("error", "Failed to fetch work data.");
            }
        };
        fetchWork();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "title") {
            // Auto-generate slug from title
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", work.title);
        formData.append("details", work.details);
        formData.append("image", work.image);
        formData.append("slug", work.slug);
        formData.append("meter", work.meter);
        formData.append("days", work.days);

        try {
            await apiInstance.put(`work/update/${id}/`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            Toast("success", "work updated successfully!");
            navigate("/worklist");
        } catch (error) {
            console.error("Error during work update:", error.response.data);
            Toast("error", "Error while updating work!");
        }
    };

    return (
        <>
            <ScrollToTopPages />
            <div className="createproject">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">Update work</h2>
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
                                    Update work
                                </Button>

                                <Button
                                    className="btn"
                                    type="button"
                                    onClick={() => navigate("/ourworks")}
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

export default UpdateWorks;
