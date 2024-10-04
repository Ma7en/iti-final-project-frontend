import React from "react";
import Loader from "../../loader/Loader";
import { Link, useNavigate } from "react-router-dom";

function ServiceComponents({ category }) {
    const navigate = useNavigate();

    if (!category) return <Loader />;
    // console.log(`category`, category);
    const { id, title, details, image, slug } = category;
    //

    return (
        <>
            <li
                onClick={() => {
                    navigate(`/detailscategory/${slug}`);
                }}
            >
                <div className="service-card">
                    <div className="card-icon">
                        <img src={`${image}`} alt={`${title}`} />
                    </div>
                    <h3 className="h3 card-title">
                        <Link to={`/detailscategory/${slug}`}>{title}</Link>
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
