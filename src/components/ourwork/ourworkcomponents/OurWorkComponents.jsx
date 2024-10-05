import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

// bootstrap components
import { Button } from "react-bootstrap";

// plugin
import Toast from "../../../plugin/Toast";

// utils
import apiInstance from "../../../utils/axios";
import { App_Company, App_User } from "../../../utils/constants";

// ui components
import Loader from "../../../ui/loader/Loader";
import useUserData from "../../../plugin/useUserData";

function OurWorkComponents({ ourwork: packagecomponents }) {
    const navigate = useNavigate();
    const userId = useUserData()?.user_id;
    const param = useParams();
    const { id, title, full_name, typeunit } = packagecomponents;
    // console.log(`-->`, packagecomponents);

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
            const response = await apiInstance.get("ourwork/list/");
            setProjects(response.data);
        } catch (error) {
            console.error("Error fetching Works:", error);
        }
    };

    // Handle deletion of a project
    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "This will permanently delete the order!",
            icon: "warning",
            showCancelButton: true,
        });
        if (confirm.isConfirmed) {
            try {
                await apiInstance.delete(`ourwork/delete/${userId}/${id}/`);
                Toast("success", "Work deleted successfully!");
                fetchProjects();
                navigate(`/${App_Company}/profile`);
            } catch (error) {
                Toast("error", `Error while deleting Work! ${error}`);
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
                        className="btn view-btn"
                        onClick={() => {
                            window.open(`/detailsourwork/${slug}`, "_blank");
                            // navigate(`/${App_User}/detailsorder/${slug}`);
                        }}
                    >
                        View
                    </Button>

                    <Button
                        className="btn update-btn"
                        onClick={() => {
                            navigate(`/${App_Company}/updateourwork/${slug}`);
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

export default OurWorkComponents;
