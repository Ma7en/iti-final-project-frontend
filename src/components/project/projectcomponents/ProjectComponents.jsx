import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// bootstrap components
import { Button } from "react-bootstrap";

// plugin
import Toast from "../../../plugin/Toast";

// utils
import apiInstance from "../../../utils/axios";
import { App_Company } from "../../../utils/constants";

// ui components
import Loader from "../../../ui/loader/Loader";

function ProjectComponents({ category: projectcomponents }) {
    const navigate = useNavigate();

    const { id, title } = projectcomponents;

    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState({
        title: "",
        details: "",
        image: null,
        slug: "",
    });

    //
    const fetchProjects = async () => {
        try {
            const response = await apiInstance.get("project/list/");
            setProjects(response.data);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    // Handle deletion of a project
    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "This will permanently delete the project!",
            icon: "warning",
            showCancelButton: true,
        });
        if (confirm.isConfirmed) {
            try {
                await apiInstance.delete(`project/delete/${id}/`);
                Toast("success", "project deleted successfully!");
                fetchProjects();
                navigate(`/${App_Company}/profile`);
            } catch (error) {
                Toast("error", "Error while deleting project!");
            }
        }
    };

    if (!projectcomponents) return <Loader />;
    return (
        <>
            <li className="item">
                <div className="info">
                    <span className="id">{id})</span>

                    <span className="title">{title}</span>
                </div>

                <div className="buttons">
                    <Button
                        className="btn view-btn"
                        onClick={() =>
                            window.open(`/detailsproject/${id}`, "_blank")
                        }
                    >
                        View
                    </Button>
                    <Button
                        className="btn update-btn"
                        onClick={() => {
                        
                            navigate(`/${App_Company}/updateproject/${id}`);
                        }}
                    >
                        Update
                    </Button>
                    <Button
                        className="btn delete-btn"
                        onClick={() => {
                            handleDelete(id);
                        }}
                    >
                        Delete
                    </Button>
                </div>
            </li>
        </>
    );
}

export default ProjectComponents;
