import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
import apiInstance from "../../../utils/axios"; 
import Toast from "../../../plugin/Toast"; 

function UpdateProject() {
    const navigate = useNavigate();
    const { id } = useParams(); // Get the project ID from the URL
    const [project, setProject] = useState({
        title: "",
        details: "",
        image: null,
        slug: "",
        meter: "",
        days: "",
    });

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await apiInstance.get(`project/${id}/`); // Fetch project data
                setProject(response.data);
            } catch (error) {
                console.error("Error fetching project:", error);
                Toast("error", "Failed to fetch project data.");
            }
        };
        fetchProject();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "title") {
            // Auto-generate slug from title
            const generatedSlug = value
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "");
            setProject({ ...project, title: value, slug: generatedSlug });
        } else {
            setProject({ ...project, [name]: value });
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProject({ ...project, image: file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", project.title);
        formData.append("details", project.details);
        formData.append("image", project.image);
        formData.append("slug", project.slug);
        formData.append("meter", project.meter);
        formData.append("days", project.days);

        try {
            await apiInstance.put(`project/update/${id}/`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            Toast("success", "Project updated successfully!");
            navigate("/projectlist");
        } catch (error) {
            console.error("Error during project update:", error.response.data);
            Toast("error", "Error while updating project!");
        }
    };

    return (
        <>
            <ScrollToTopPages />
            <div className="createproject">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">Update Project</h2>
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
                                    value={project.title}
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
                                    value={project.details}
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
                                    value={project.meter}
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
                                    value={project.days}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="buttons">
                                <Button className="btn" type="submit">
                                    Update Project
                                </Button>

                                <Button
                                    className="btn"
                                    type="button"
                                    onClick={() => navigate("/projectlist")}
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

export default UpdateProject;
