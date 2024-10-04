import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// import style
import "./DetailsOrder.css";

// ui bootstrap components
import { Button } from "react-bootstrap";

// plugin
import Toast from "../../../plugin/Toast";

// utils
import apiInstance from "../../../utils/axios";
import { App_Company, App_User } from "../../../utils/constants";

// ui component
import Loader from "../../../ui/loader/Loader";
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
import Cookies from "js-cookie"; // Import the 'js-cookie' library for managing cookies

function DetailsOrder() {
    const navigate = useNavigate();
    const [post, setPost] = useState([]);
    const [tags, setTags] = useState([]);
    const accessToken = Cookies.get("access_token");

    const param = useParams();
    // console.log(param);

    const fetchPost = async () => {
        try {
            const response = await apiInstance.get(
                // `registerorder/detail/${param.slug}/`
                `registerorder/detail/${param.slug}/`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`, // استبدل 'token' برمز المصادقة الخاص بك
                    },
                }
            );
            setPost(response.data);

            const tagArray = response.data?.tags?.split(",");
            setTags(tagArray);
            console.log(`333`, response.data);
        } catch (error) {
            console.log(`Error:- ${error}`);
        }
    };

    useEffect(() => {
        fetchPost();
    }, []);

    if (!post) return <Loader />;
    // console.log(`333`, post);

    return (
        <>
            <ScrollToTopPages />
            <div className="detailsorder">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">Package Component</h2>
                    </div>

                    <div className="content">
                        <div className="info">
                            <div className="details">
                                {/* <table>
                                    <thead>
                                        <tr>
                                            <th>info</th>
                                            <th>Content</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>t</td>
                                            <td>t</td>
                                        </tr>
                                    </tbody>
                                </table> */}

                                <p className="h3">
                                    <strong>Full Name:</strong>
                                    <span>{post?.full_name}</span>
                                </p>
                                <p className="h3">
                                    <strong>phone:</strong>
                                    <span>{post?.phone}</span>
                                </p>
                                <p className="h3">
                                    <strong>Governorate:</strong>
                                    <span>{post?.governorate}</span>
                                </p>
                                <p className="h3">
                                    <strong>City:</strong>
                                    <span>{post?.city}</span>
                                </p>
                                <p className="h3">
                                    <strong>The area:</strong>
                                    <span>{post?.area}</span>
                                </p>
                                <p className="h3">
                                    <strong>Type of Residential Unit:</strong>
                                    <span>{post?.typeunit}</span>
                                </p>
                                <p className="h3">
                                    <strong>Required Works:</strong>
                                    <span>{post?.requiredworks}</span>
                                </p>
                                <p className="h3">
                                    <strong>Skills:</strong>
                                    <span>{post?.skills}</span>
                                </p>
                                <p className="h3">
                                    <strong>Condition of the Unit:</strong>
                                    <span>{post?.conditionoftheunit}</span>
                                </p>
                                <p className="h3">
                                    <strong>Space:</strong>
                                    <span>{post?.space}</span>
                                </p>
                                <p className="h3">
                                    <strong>Number of rooms:</strong>
                                    <span>{post?.numberroom}</span>
                                </p>
                                <p className="h3">
                                    <strong>Number of bathrooms:</strong>
                                    <span>{post?.numberbathroom}</span>
                                </p>
                                <p className="h3">
                                    <strong>Note:</strong>
                                    <span>{post?.description}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="back">
                        <Button
                            className="btn update-btn"
                            onClick={() => {
                                navigate(`/${App_Company}/listorders`);
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

export default DetailsOrder;
