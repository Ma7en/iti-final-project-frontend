import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import
import "./DetailsCategory.css";

// utils
import apiInstance from "../../../utils/axios";

// category components
import DetailsCategoryComponents from "./detailscategorycomponents/DetailsCategoryComponents";

// ui components
import Property from "../../property/Property";
import Loader from "../../../ui/loader/Loader";

// assets
import service3 from "../../../assets/images/service/service-3.png";

function DetailsCategory() {
    const { id } = useParams();
    // console.log("id", id);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        const fetchCategoryDetails = async () => {
            try {
                const response = await apiInstance.get(
                    `category/detail/${id}/`
                );
                setCategory(response.data);
            } catch (error) {
                console.error("Error fetching category details:", error);
            }
        };
        fetchCategoryDetails();
    }, [id]);

    if (!category) return <Loader />;
    // console.log(category);

    return (
        <>
            <div className="detailscategory">
                <div className="container">
                    <p className="section-subtitle">Our Services</p>
                    <h2 className="h2 section-title">Our Main Focus</h2>

                    <ul className="service-list">
                        <DetailsCategoryComponents category={category} />
                    </ul>
                </div>
            </div>
            <Property />
        </>
    );
}

export default DetailsCategory;
