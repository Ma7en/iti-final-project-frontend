import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// import style
import "./DetailsProject.css";

// ui bootstrap components
import { Button } from "react-bootstrap";

// plugin
import Toast from "../../../plugin/Toast";

// utils
import apiInstance from "../../../utils/axios";
import { App_Company } from "../../../utils/constants";

// ui component
import Loader from "../../../ui/loader/Loader";
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";

// assests
import imagecomponents from "../../../assets/images/package/package1.png";
import LoadingIndicator from "../../../ui/loader/LoadingIndicator";

function DetailsProject() {
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const [post, setPost] = useState([]);
    const [tags, setTags] = useState([]);
    const [createComment, setCreateComment] = useState({
        full_name: "",
        title: "",
        description: "",
        email: "",
        comment: "",
    });

    const param = useParams();

    const fetchPost = async () => {
        const response = await apiInstance.get(`post/detail/${param.slug}/`);
        setPost(response.data);

        const tagArray = response.data?.tags?.split(",");
        setTags(tagArray);
    };

    useEffect(() => {
        fetchPost();
    }, []);

    const handleCreateCommentChange = (event) => {
        setIsLoading(false);
        setError(false);

        setCreateComment({
            ...createComment,
            [event.target.name]: event.target.value,
        });
    };

    const handleCreateCommentSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!createComment.title || !createComment.description) {
            Toast("error", "All Fields Are Required To Create A Component");
            // setIsLoading(false);
            return;
        }

        const jsonData = {
            post_id: post?.id,
            name: createComment.full_name,
            title: createComment.title,
            description: createComment.description,
            email: createComment.email,
            comment: createComment.comment,
        };

        try {
            const response = await apiInstance.post(
                `post/comment-post/`,
                jsonData
            );
            console.log(response);
            fetchPost();
            setIsLoading(false);
            Toast("success", "Components Posted.", "");
            navigate(`/${App_Company}/listproject`);
            setCreateComment({
                full_name: "",
                email: "",
                title: "",
                description: "",
                comment: "",
            });
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    if (!post) return <Loader />;
    // console.log(`333`, post);

    return (
        <>
            <ScrollToTopPages />
            <div className="detailsproject">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">Package Component</h2>
                    </div>

                    <div className="content">
                        <div className="info">
                            <div className="image ">
                                <img
                                    className="mb-4"
                                    src={post?.image || imagecomponents}
                                    alt=""
                                />
                            </div>

                            <div className="details">
                                <p className="h3">
                                    Service:
                                    <span>{post?.category?.title}</span>
                                </p>
                                <p className="h3">
                                    Title:
                                    <span>{post?.title}</span>
                                </p>
                                <p className="h3">
                                    price:
                                    <span>{post?.price_per_unit}</span>
                                    <span>EGP</span>
                                </p>
                            </div>

                            <div className="components">
                                {post?.comments?.map((component, index) => (
                                    <div className="component" key={index}>
                                        <p className="h3">
                                            <strong>Title:</strong>
                                            <span>{component?.title}</span>
                                        </p>
                                        <p className="h3 description">
                                            <strong>description:</strong>
                                            <span>
                                                {/* {component?.description} */}
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
                                            </span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="form">
                            <form
                                className="row g-3 mt-2"
                                onSubmit={handleCreateCommentSubmit}
                            >
                                <div className=" ">
                                    <label
                                        className="form-label"
                                        htmlFor="title"
                                    >
                                        Title:
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="form-control"
                                        onChange={handleCreateCommentChange}
                                        value={createComment.title}
                                        aria-label="First name"
                                        required
                                    />
                                </div>

                                <div className=" ">
                                    <label className="form-label">
                                        Description
                                    </label>
                                    <textarea
                                        onChange={handleCreateCommentChange}
                                        name="description"
                                        value={createComment.description}
                                        className="form-control"
                                        rows={4}
                                        required
                                    />
                                </div>

                                {isLoading && <LoadingIndicator />}
                                {error && (
                                    <div className="Error alert alert-danger">
                                        {error}
                                    </div>
                                )}

                                <div className="buttons">
                                    <Button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Add Component
                                    </Button>
                                </div>
                            </form>
                        </div>

                        {/* <div className="buttons">
                            <Button
                                onClick={() => {
                                    // navigate(`/updateproject/${id}`);
                                }}
                            >
                                Add Components
                            </Button>
                        </div> */}
                    </div>

                    <div className="back">
                        <Button
                            className="btn update-btn"
                            onClick={() => {
                                navigate(`/${App_Company}/listproject`);
                            }}
                        >
                            Back to List
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailsProject;
