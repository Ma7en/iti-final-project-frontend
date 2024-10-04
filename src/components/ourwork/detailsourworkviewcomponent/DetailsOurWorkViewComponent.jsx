import React from "react";

// ui bootstrap components
import { Button } from "react-bootstrap";

import Loader from "../../../ui/loader/Loader";
import { useNavigate } from "react-router-dom";
import { App_User } from "../../../utils/constants";

function DetailsProjectViewComponent({ project }) {
    const navigate = useNavigate();
    // console.log(`333`, project);
    if (!project) return <Loader />;

    // const {image,} = project;
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
                                Book the package
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailsProjectViewComponent;
