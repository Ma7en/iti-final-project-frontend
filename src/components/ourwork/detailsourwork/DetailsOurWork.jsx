import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
import { Button } from "react-bootstrap";
import "./DetailsOurWork.css";

function DetailsOurWork() {
    const navigate = useNavigate();
    const [works, setWorks] = useState([]);

    useEffect(() => {
        // Retrieve the works from local storage
        const storedWorks = JSON.parse(localStorage.getItem("works")) || [];
        setWorks(storedWorks);
    }, []);

    const handleDelete = (index) => {
        const updatedWorks = works.filter((_, i) => i !== index);
        setWorks(updatedWorks);
        localStorage.setItem("works", JSON.stringify(updatedWorks));
    };

    const handleEdit = (index) => {
        navigate(`/editworks/${index}`);
    };

    return (
        <>
            <ScrollToTopPages />
            <div className="list-project">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">Works List</h2>
                    </div>

                    <div className="content">
                        {works.length === 0 ? (
                            <p>No Works found.</p>
                        ) : (
                            <div className="project-grid">
                                {works.map((work, index) => (
                                    <div className="project-card" key={index}>
                                        <h3>{work.title}</h3>
                                        {work.image && (
                                            <img
                                                src={work.image}
                                                alt={work.title}
                                                className="project-image"
                                            />
                                        )}
                                        <p>{work.details}</p>
                                        <p>Meter: {work.meter}</p>
                                        <p>Days: {work.days}</p>

                                        <div className="button-group">
                                            <Button
                                                variant="primary"
                                                onClick={() =>
                                                    handleEdit(index)
                                                }
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant="danger"
                                                onClick={() =>
                                                    handleDelete(index)
                                                }
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="buttons">
                        <Button onClick={() => navigate("/createworks")}>
                            Create New Works
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailsOurWork;
