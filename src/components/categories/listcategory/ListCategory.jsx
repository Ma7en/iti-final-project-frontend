import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import style
import "./ListCategory.css";

// bootstrap components
import { Button } from "react-bootstrap";

// utils
import apiInstance from "../../../utils/axios";
import { App_Company } from "../../../utils/constants";

// category components
import CategoryComponents from "../categorycomponents/CategoryComponents";
import NotCategory from "../notcategory/NotCategory";

// ui components
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
import Loader from "../../../ui/loader/Loader";

function ListCategory() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await apiInstance.get("category/list/");
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    if (!categories) return <Loader />;

    return (
        <>
            <ScrollToTopPages />
            <div className="listcategory">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">List Categories</h2>
                    </div>

                    <div className="content">
                        <ul className="list">
                            {categories.length > 0 ? (
                                categories.map((category, index) => (
                                    <CategoryComponents
                                        category={category}
                                        key={index}
                                    />
                                ))
                            ) : (
                                <NotCategory />
                            )}
                        </ul>

                        <div className="back">
                            <Button
                                className="btn update-btn"
                                onClick={() => {
                                    navigate(`/${App_Company}/profile`);
                                }}
                            >
                                Back to Profile
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListCategory;
