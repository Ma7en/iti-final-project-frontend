import React from "react";

function DetailProject({ project }) {
    return (
        <div className="project-card">
            <h2>{project.title}</h2>
            <p>{project.details}</p>
            <p>Meter: {project.meter}</p>
            <p>Days: {project.days}</p>
            {project.image && <img src={project.image} alt={project.title} />}
        </div>
    );
}

export default DetailProject;
