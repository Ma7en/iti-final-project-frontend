import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import
import "./DetailsProject.css";

// utils
import apiInstance from "../../../utils/axios";

// project components
import DetailsProjectComponents from "./detailsprojectcomponents/DetailsProjectComponents";

// ui components
import Property from "../../property/Property";
import Loader from "../../../ui/loader/Loader";

// assets
import service3 from "../../../assets/images/service/service-3.png";

function DetailsProject() {
    const { id } = useParams();
    // console.log("id", id);
    const [project, setProject] = useState(null);

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                const response = await apiInstance.get(
                    `project/detail/${id}/`
                );
                setProject(response.data);
            } catch (error) {
                console.error("Error fetching project details:", error);
            }
        };
        fetchProjectDetails();
    }, [id]);

    if (!project) return <Loader />;
    // console.log(project);

    return (
        <>
            <div className="detailsproject">
                <div className="container">
                    <p className="section-subtitle">Our Services</p>
                    <h2 className="h2 section-title">Our Main Focus</h2>

                    <ul className="service-list">
                        <DetailsProjectComponents project={project} />
                    </ul>
                </div>
            </div>
            <Property />
        </>
    );
}

export default DetailsProject;
