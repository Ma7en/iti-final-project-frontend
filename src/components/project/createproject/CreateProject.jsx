import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import style
import "./CreateProject.css";

// plugin
import useUserData from "../../../plugin/useUserData";
import Toast from "../../../plugin/Toast";

// utils
import apiInstance from "../../../utils/axios";
import { App_Company } from "../../../utils/constants";

// bootstrap components
import { Button } from "react-bootstrap";

// ui components
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";

function CreateProject() {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState({
        title: "",
        details: "",
        image: null,
        slug: "",
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const userId = useUserData()?.user_id;

    const fetchProjects = async () => {
        try {
            const response = await apiInstance.get("project/list/");
            setProjects(response.data);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "title") {
            // Auto-generate slug from title
            const generatedSlug = value
                .toLowerCase()
                .replace(/ /g, "-") // replace spaces with hyphens
                .replace(/[^\w-]+/g, ""); // remove non-alphanumeric characters
            setProject({ ...project, title: value, details: generatedSlug });
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

        try {
            await apiInstance.post("project/create/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            Toast("success", "Project created successfully!");
            fetchProjects(); // Refresh projects list after creation
            navigate(`/${App_Company}/profile`);
        } catch (error) {
            console.error(
                "Error during project submission:",
                error.response.data
            );
            Toast("error", "Error while saving project!");
            Toast("error", "Project with this slug already exists.");
        }
    };

    return (
        <>
            <ScrollToTopPages />
            <div className="createproject">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">Create New Project</h2>
                    </div>

                    <div className="content">
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
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
                                    type="text"
                                    className="form-control"
                                    name="details"
                                    id="details"
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>

                            <div className="buttons">
                                <Button className="btn " type="submit">
                                    Create Project
                                </Button>

                                <Button
                                    className="btn "
                                    type="button"
                                    onClick={() => {
                                        navigate(`/${App_Company}/profile`);
                                    }}
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

export default CreateProject;
