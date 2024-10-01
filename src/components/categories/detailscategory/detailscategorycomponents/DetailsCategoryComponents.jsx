/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

// import styles
import "./DetailsCategoryComponents.css";

// ui components
import Loader from "../../../../ui/loader/Loader";

function DetailsCategoryComponents({ category }) {
    if (!category) return <Loader />;
    const { id, title, details, image } = category;

    return (
        <>
            <li className="categorycomponents">
                <div className="service-card">
                    <div className="card-icon">
                        <img src={image} alt={`${title}`} />
                    </div>
                    <h3 className="h3 card-title">
                        <a>Traditional Finishing</a>
                    </h3>
                    <p className="card-text">
                        Traditional finishing brings warmth and timeless
                        elegance, featuring classic designs, rich colors, and
                        detailed craftsmanship that create an inviting
                        atmosphere.
                    </p>
                    <Link to={`/contact`} className="card-link">
                        <span>Contact</span>
                        <ion-icon name="arrow-forward-outline" />
                    </Link>
                </div>
            </li>
        </>
    );
}

export default DetailsCategoryComponents;
