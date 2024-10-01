import React, { useEffect, useState } from "react";
import api from "../../../utils/api";
import DetailProject from "../detailproject/DetailProject";

function ListProject() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await api.get("/api/projects/");
                console.log("Fetched projects:", response.data); // Log fetched projects
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching projects:", error.message);
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
        <div>
            <h1>Your Projects</h1>
            <div>
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <DetailProject key={project.id} project={project} />
                    ))
                ) : (
                    <p>No projects found.</p>
                )}
            </div>
        </div>
    );
}

export default ListProject;
