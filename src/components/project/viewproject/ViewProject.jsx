import React from "react";
import { useLocation } from "react-router-dom";

function ViewProject() {
    const location = useLocation();
    const { project } = location.state || {}; 

    if (!project) {
        return <p>No project data available.</p>;
    }

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.details}</p>
            <p>Meter: {project.meter}</p>
            {/* Add more project details as needed */}
            {project.image && <img src={project.image} alt={project.title} />}
        </div>
    );
}

export default ViewProject;
