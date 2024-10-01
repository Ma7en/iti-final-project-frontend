import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DetailsProject.css"; // Add your styles here
import apiInstance from "../../../utils/axios"; // Assuming you have an axios instance set up for API calls
import Toast from "../../../plugin/Toast"; // Assuming you have a Toast component for notifications
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
import { Button } from "react-bootstrap";

function DetailsProject() {
    const { id } = useParams(); // Get the project ID from the URL
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await apiInstance.get(`project/${id}/`); // Fetch project data
                setProject(response.data);
            } catch (error) {
                console.error("Error fetching project:", error);
                Toast("error", "Failed to fetch project details.");
            } finally {
                setLoading(false);
            }
        };
        fetchProject();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>; // Show loading state
    }

    if (!project) {
        return <div>No project found.</div>; // Handle case where no project is found
    }

    return (
        <>
            <ScrollToTopPages />
            <div className="details-project">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">{project.title}</h2>
                    </div>

                    <div className="content">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <p><strong>Details:</strong> {project.details}</p>
                        <p><strong>Meter:</strong> {project.meter}</p>
                        <p><strong>Days:</strong> {project.days}</p>
                        <p><strong>Slug:</strong> {project.slug}</p>
                    </div>

                    <div className="buttons">
                        <Button onClick={() => navigate(`/updateproject/${id}`)}>
                            Edit Project
                        </Button>
                        <Button onClick={() => navigate("/projectlist")}>
                            Back to Project List
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailsProject;
