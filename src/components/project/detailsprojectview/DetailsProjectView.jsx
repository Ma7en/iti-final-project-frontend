import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// import style
import "./DetailsProjectView.css";

// utils
import apiInstance from "../../../utils/axios";

// ui components
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";

function DetailsProjectView() {
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

    return (
        <>
            <ScrollToTopPages />
            <div className="detailsprojectview">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">Package ({post?.title})</h2>
                    </div>

                    <div className="content">
                        <div className="info">
                            <div className="image ">
                                <img
                                    className="mb-4"
                                    src={post?.image}
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
                                <p className="h3 price">
                                    price:
                                    <span>{post?.price_per_unit}</span>
                                </p>
                            </div>

                            <div className="components">
                                {post?.comments?.map((component, index) => (
                                    <div className="component" key={index}>
                                        <p className="h3">
                                            Title:
                                            <span>{component?.title}</span>
                                        </p>
                                        <p className="h3">
                                            description:
                                            <span>
                                                {component?.description}
                                            </span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailsProjectView;
