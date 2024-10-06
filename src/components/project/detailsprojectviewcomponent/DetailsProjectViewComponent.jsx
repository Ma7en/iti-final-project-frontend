import React from "react";
import { useNavigate } from "react-router-dom";

// ui bootstrap components
import { Button } from "react-bootstrap";

// utils
import { App_User } from "../../../utils/constants";

// ui components
import Loader from "../../../ui/loader/Loader";

function DetailsProjectViewComponent({ project }) {
    const navigate = useNavigate();
    if (!project) return <Loader />;

    return (
        <>
            <div className="content">
                <div className="info">
                    <div className="image ">
                        <img className="mb-4" src={project?.image} alt="" />
                    </div>

                    <div className="details">
                        <p className="h3">
                            Service:
                            <span>{project?.category?.title}</span>
                        </p>
                        <p className="h3">
                            Title:
                            <span>{project?.title}</span>
                        </p>
                        <p className="h3 price">
                            price:
                            <span>{project?.price_per_unit}</span>
                            <span>EGP</span>
                        </p>
                    </div>

                    <div className="components">
                        {project?.comments?.map((component, index) => (
                            <div className="component" key={index}>
                                <p className="h3">
                                    <strong>Title:</strong>
                                    <span>{component?.title}</span>
                                </p>
                                <p className="h3 description">
                                    <strong>description:</strong>
                                    {/* <span>{component?.description}</span> */}
                                    {component?.description
                                        ?.split(".")
                                        .map((line, index) => (
                                            <span key={index}>
                                                {line.trim() && (
                                                    <>
                                                        {line.trim()}
                                                        <br />
                                                    </>
                                                )}
                                            </span>
                                        ))}
                                </p>
                            </div>
                        ))}

                        <div className="buttons">
                            <Button
                                className="btn update-btn"
                                onClick={() => {
                                    navigate(
                                        `/${App_User}/createregisterorder`
                                    );
                                }}
                            >
                                Book package
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailsProjectViewComponent;
