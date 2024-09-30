import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import style
import "./ListCategory.css";

// bootstrap components
import { Button } from "react-bootstrap";

// utils
import apiInstance from "../../../utils/axios";

// ui components
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";

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
                            {categories.map((cat) => (
                                <li key={cat.id} className="item">
                                    <div className="info">
                                        <span className="id">{cat.id})</span>

                                        <span className="title">
                                            {cat.title}
                                        </span>
                                    </div>

                                    <div className="buttons">
                                        <Button
                                            className="btn view-btn"
                                            onClick={() =>
                                                navigate(
                                                    `/category/details/${cat.id}`
                                                )
                                            }
                                        >
                                            View
                                        </Button>
                                        <Button
                                            className="btn update-btn"
                                            onClick={() => {
                                                // handleEdit(cat)
                                            }}
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            className="btn delete-btn"
                                            onClick={() => {
                                                // handleDelete(cat.id);
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListCategory;
