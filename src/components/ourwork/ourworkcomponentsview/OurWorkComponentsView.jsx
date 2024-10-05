/* eslint-disable jsx-a11y/anchor-is-valid */
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
import company1 from "../../../assets/images/company/company1.png";

function OurWorkComponentsView({ ourwork: packagecomponents }) {
    const navigate = useNavigate();
    const userId = useUserData()?.user_id;
    const param = useParams();
    // const { id, title, full_name, typeunit } = packagecomponents;
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

    if (!packagecomponents) return <Loader />;
    // console.log(`233`, packagecomponents);
    const {
        id,
        date,
        title,
        description,
        slug,
        thumbnail,
        image1,
        image2,
        image3,
        image4,
    } = packagecomponents;
    console.log(`333`, packagecomponents);

    return (
        <>
            <li
            // onClick={() => {
            //     // window.open(`/detailsourwork/${slug}`, "_blank");
            //     navigate(`/detailsourwork/${slug}`);
            // }}
            >
                <div className="property-card">
                    <figure
                        className="card-banner"
                        onClick={() => {
                            // window.open(`/detailsourwork/${slug}`, "_blank");
                            navigate(`/detailsourwork/${slug}`);
                        }}
                    >
                        <a href="#">
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
                                <address>Belmont Gardens, Chicago</address>
                            </button>
                            <button className="banner-actions-btn">
                                <ion-icon name="camera" />
                                <span>4</span>
                            </button> */}
                            <button className="banner-actions-btn">
                                <ion-icon name="film" />
                                <span>4</span>
                            </button>
                        </div>
                    </figure>

                    <div
                        className="card-content"
                        onClick={() => {
                            // window.open(`/detailsourwork/${slug}`, "_blank");
                            navigate(`/detailsourwork/${slug}`);
                        }}
                    >
                        {/* <div className="card-price">
                                        <strong>$34,900</strong>/Month
                                    </div> */}
                        <h3 className="h3 card-title">
                            <a>{title}</a>
                        </h3>
                        <p className="card-text">{description}</p>
                        <ul className="card-list">
                            {/* <li className="card-item">
                                <strong>3000</strong>
                                <ion-icon name="cash-outline" />
                                <span>money</span>
                            </li> */}
                            <li className="card-item">
                                <strong>30</strong>
                                <ion-icon name="calendar-outline" />
                                <span>Days</span>
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
                                    <a href="#">William Seklo</a>
                                </p>
                                <p className="author-title">Estate Agents</p>
                            </div>
                        </div>
                        <div className="card-footer-actions">
                            <button
                                className="card-footer-actions-btn"
                                onClick={() => {
                                    // window.open(
                                    //     `/detailsourwork/${slug}`,
                                    //     "_blank"
                                    // );
                                    navigate(`/detailsourwork/${slug}`);
                                }}
                            >
                                <ion-icon name="resize-outline" />
                            </button>
                            <button className="card-footer-actions-btn">
                                <ion-icon name="heart-outline" />
                            </button>
                            <button
                                className="card-footer-actions-btn"
                                onClick={() => {
                                    // window.open(
                                    //     `/detailsourwork/${slug}`,
                                    //     "_blank"
                                    // );
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
        </>
    );
}

export default OurWorkComponentsView;
