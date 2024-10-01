import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ListProject.css"; 
import apiInstance from "../../../utils/axios"; 
import Toast from "../../../plugin/Toast"; 
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
import { Button } from "react-bootstrap";

function ListProject() {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await apiInstance.get("project/list/"); 
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
                Toast("error", "Failed to fetch project list.");
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    if (loading) {
        return <div>Loading...</div>; 
    }

    return (
        <>
            <ScrollToTopPages />
            <div className="list-project">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">Project List</h2>
                    </div>

                    <div className="content">
                        {projects.length === 0 ? (
                            <p>No projects found.</p>
                        ) : (
                            <ul className="project-list">
                                {projects.map((project) => (
                                    <li key={project.id} className="project-item">
                                        <h3>{project.title}</h3>
                                        <p>{project.details}</p>
                                        <Button onClick={() => navigate(`/project/${project.id}`)}>
                                            View Details
                                        </Button>
                                        <Button onClick={() => navigate(`/updateproject/${project.id}`)}>
                                            Edit
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="buttons">
                        <Button onClick={() => navigate("/createproject")}>
                            Create New Project
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListProject;
