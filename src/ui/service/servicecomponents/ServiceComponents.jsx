import React from "react";
import { Link, useNavigate } from "react-router-dom";

// import ui components
import Loader from "../../loader/Loader";

function ServiceComponents({ category }) {
    const navigate = useNavigate();

    if (!category) return <Loader />;
    const { id, title, details, image, slug } = category;

    return (
        <>
            <li
                onClick={() => {
                    navigate(`/detailscategory/${id}`);
                }}
            >
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
