import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

// bootstrap components
import { Button } from "react-bootstrap";

// plugin
import Toast from "../../../plugin/Toast";
import useUserData from "../../../plugin/useUserData";

// utils
import apiInstance from "../../../utils/axios";
import { App_Company } from "../../../utils/constants";

// ui components
import Loader from "../../../ui/loader/Loader";

function ProjectComponents({ project: packagecomponents }) {
    const navigate = useNavigate();
    const userId = useUserData()?.user_id;
    const param = useParams();
    const { id, title } = packagecomponents;

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
            text: "This will permanently delete the package!",
            icon: "warning",
            showCancelButton: true,
        });
        if (confirm.isConfirmed) {
            try {
                await apiInstance.delete(
                    `author/dashboard/post-delete/${userId}/${id}/`
                );
                Toast("success", "Package deleted successfully!");
                fetchProjects();
                navigate(`/${App_Company}/profile`);
            } catch (error) {
                Toast("error", `Error while deleting project! ${error}`);
            }
        }
    };

    if (!packagecomponents) return <Loader />;
    // console.log(`233`, packagecomponents);
    const { slug } = packagecomponents;

    return (
        <>
            <li className="item">
                <div className="info">
                    <span className="id">{id})</span>

                    <span className="title">{title}</span>
                </div>

                <div className="buttons">
                    <Button
                        className="btn add-btn"
                        onClick={() => {
                            navigate(`/${App_Company}/detailsproject/${slug}`);
                        }}
                    >
                        Component
                    </Button>
                    <Button
                        className="btn view-btn"
                        onClick={() =>
                            window.open(`/detailsproject/${slug}`, "_blank")
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
