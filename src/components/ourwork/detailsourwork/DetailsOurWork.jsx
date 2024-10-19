/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// import style
import "./DetailsOurWork.css";

// ui bootstrap component
import { Button } from "react-bootstrap";

// utils
import apiInstance from "../../../utils/axios";
import { App_User } from "../../../utils/constants";
import { formatDate } from "../../../utils/helpers";

// ui components
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
import Loader from "../../../ui/loader/Loader";

// assets
import company1 from "../../../assets/images/company/company1.png";
import { error } from "ajv/dist/vocabularies/applicator/dependencies";

function DetailsOurWork() {
    const errorimage = "http://127.0.0.1:8000/media/undefined";
    const navigate = useNavigate();
    const [post, setPost] = useState([]);
    const [tags, setTags] = useState([]);

    const param = useParams();

    const fetchPost = async () => {
        const response = await apiInstance.get(`ourwork/detail/${param.slug}/`);
        setPost(response.data);

        const tagArray = response.data?.tags?.split(",");
        setTags(tagArray);
    };

    useEffect(() => {
        fetchPost();
    }, []);

    // console.log(`3333`, post);
    if (!post) return <Loader />;
    const {
        id,
        title,
        description,
        thumbnail,
        image1,
        image2,
        image3,
        image4,
        date,
    } = post;
    console.log(`image1`, image1);
    // if (image1 === "http://127.0.0.1:8000/media/undefined")
    //     return console.log(`image1 error`, image1);

    return (
        <>
            <ScrollToTopPages />
            <div className="detailsourwork">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">Work ({title})</h2>
                    </div>

                    <div className="content">
                        <ul className="property-list ">
                            <li>
                                <div className="property-card">
                                    <figure className="card-banner">
                                        <a>
                                            <img
                                                src={`${thumbnail}`}
                                                alt="New Apartment Nice View"
                                                className="w-100"
                                            />
                                        </a>
                                        {/* <div className="card-badge green">
                                        For Rent
                                    </div> */}
                                        <div className="banner-actions">
                                            {/* <button className="banner-actions-btn">
                                                <ion-icon name="location" />
                                                <address>
                                                    Belmont Gardens, Chicago
                                                </address>
                                            </button> */}
                                            <button className="banner-actions-btn">
                                                <ion-icon name="camera" />
                                                <span>4</span>
                                            </button>
                                            {/* <button className="banner-actions-btn">
                                                <ion-icon name="film" />
                                                <span>2</span>
                                            </button> */}
                                        </div>
                                    </figure>

                                    <div className="card-content">
                                        <div className="images">
                                            {image1 === errorimage ? (
                                                ""
                                            ) : (
                                                <figure className="card-banner">
                                                    <a>
                                                        <img
                                                            src={`${
                                                                image1 ||
                                                                thumbnail
                                                            }`}
                                                            alt="New Apartment Nice View"
                                                            className="w-100"
                                                        />
                                                    </a>
                                                </figure>
                                            )}

                                            {image2 === errorimage ? (
                                                ""
                                            ) : (
                                                <figure className="card-banner">
                                                    <a>
                                                        <img
                                                            src={`${
                                                                image2 ||
                                                                thumbnail
                                                            }`}
                                                            alt="New Apartment Nice View"
                                                            className="w-100"
                                                        />
                                                    </a>
                                                </figure>
                                            )}

                                            {image3 === errorimage ? (
                                                ""
                                            ) : (
                                                <figure className="card-banner">
                                                    <a>
                                                        <img
                                                            src={`${
                                                                image3 ||
                                                                thumbnail
                                                            }`}
                                                            alt="New Apartment Nice View"
                                                            className="w-100"
                                                        />
                                                    </a>
                                                </figure>
                                            )}

                                            {image4 === errorimage ? (
                                                ""
                                            ) : (
                                                <figure className="card-banner">
                                                    <a>
                                                        <img
                                                            src={`${
                                                                image4 ||
                                                                thumbnail
                                                            }`}
                                                            alt="New Apartment Nice View"
                                                            className="w-100"
                                                        />
                                                    </a>
                                                </figure>
                                            )}
                                        </div>
                                        {/* <div className="card-price">
                                        <strong>$34,900</strong>/Month
                                    </div> */}
                                        <h3 className="h3 card-title">
                                            <a>{title}</a>
                                        </h3>
                                        <p className="card-text">
                                            {description}
                                        </p>
                                        <ul className="card-list">
                                            {/* <li className="card-item">
                                                <strong>3000</strong>
                                                <ion-icon name="cash-outline" />
                                                <span>money</span>
                                            </li> */}
                                            <li className="card-item">
                                                <strong>
                                                    {formatDate(date)}
                                                </strong>
                                                <ion-icon name="calendar-outline" />
                                                {/* <span>Days</span> */}
                                            </li>
                                            {/* <li className="card-item">
                                                <strong>350</strong>
                                                <ion-icon name="square-outline" />
                                                <span>Square Ft</span>
                                            </li> */}
                                        </ul>
                                    </div>

                                    <div className="card-footer">
                                        <div className="card-author">
                                            <figure className="author-avatar">
                                                <img
                                                    src={`${company1}`}
                                                    alt="William Seklo"
                                                    className="w-100"
                                                />
                                            </figure>
                                            <div>
                                                <p className="author-name">
                                                    <Link to={`/`}>
                                                        Homeverse
                                                    </Link>
                                                </p>
                                                <p className="author-title">
                                                    {/* {post?.user?.full_name} */}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer-actions">
                                            {/* <button className="card-footer-actions-btn">
                                                <ion-icon name="resize-outline" />
                                            </button> */}
                                            <button className="card-footer-actions-btn">
                                                <ion-icon name="heart-outline" />
                                            </button>
                                            <button
                                                className="card-footer-actions-btn"
                                                onClick={() => {
                                                    navigate(
                                                        `/${App_User}/createregisterorder`
                                                    );
                                                }}
                                            >
                                                <ion-icon name="add-circle-outline" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div className="back">
                            <Button
                                className="btn update-btn"
                                onClick={() => {
                                    navigate(`/`);
                                }}
                            >
                                Back to Home
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailsOurWork;
