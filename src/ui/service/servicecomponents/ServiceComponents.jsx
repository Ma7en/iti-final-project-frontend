import React from "react";
import Loader from "../../loader/Loader";
import { Link } from "react-router-dom";

function ServiceComponents({ category }) {
    if (!category) return <Loader />;
    console.log(`category`, category);
    const { id, title, details, image } = category;

    return (
        <>
            <li>
                <div className="service-card">
                    <div className="card-icon">
                        <img src={`${image}`} alt={`${title}`} />
                    </div>
                    <h3 className="h3 card-title">
                        <Link to={`/detailscategory/${id}`}>{title}</Link>
                    </h3>
                    <p className="card-text">{details}</p>
                    <Link to={`/contact`} className="card-link">
                        <span>Contact</span>
                        <ion-icon name="arrow-forward-outline" />
                    </Link>
                </div>
            </li>
        </>
    );
}

export default ServiceComponents;
