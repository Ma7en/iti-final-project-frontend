import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import
import "./DetailsCategory.css";

// utils
import apiInstance from "../../../utils/axios";

// ui components
import Property from "../../property/Property";

// assets
import service3 from "../../../assets/images/service/service-3.png";

function DetailsCategory() {
    const { id } = useParams();
    console.log("id", id);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        const fetchCategoryDetails = async () => {
            try {
                const response = await apiInstance.get(`category/detail/${id}/`);
                setCategory(response.data);
            } catch (error) {
                console.error("Error fetching category details:", error);
            }
        };
        fetchCategoryDetails();
    }, [id]);

    if (!category) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="detailscategory">
                <div className="container">
                    <p className="section-subtitle">Our Services</p>
                    <h2 className="h2 section-title">Our Main Focus</h2>

                    <ul className="service-list">
                        <li>
                            <div className="service-card">
                                <div className="card-icon">
                                    <img src={service3} alt="Service icon" />
                                </div>
                                <h3 className="h3 card-title">
                                    <a href="#">Traditional Finishing</a>
                                </h3>
                                <p className="card-text">
                                    Traditional finishing brings warmth and
                                    timeless elegance, featuring classic
                                    designs, rich colors, and detailed
                                    craftsmanship that create an inviting
                                    atmosphere.
                                </p>
                                <a href="/contact" className="card-link">
                                    <span>Contact</span>
                                    <ion-icon name="arrow-forward-outline" />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Property />
        </>
    );
}

export default DetailsCategory;
