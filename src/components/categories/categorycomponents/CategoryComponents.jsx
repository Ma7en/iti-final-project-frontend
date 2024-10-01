import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// bootstrap components
import { Button } from "react-bootstrap";

// plugin
import Toast from "../../../plugin/Toast";

// utils
import apiInstance from "../../../utils/axios";
import { App_Company } from "../../../utils/constants";

// ui components
import Loader from "../../../ui/loader/Loader";

function CategoryComponents({ category: categorycomponents }) {
    const navigate = useNavigate();

    const { id, title } = categorycomponents;

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState({
        title: "",
        details: "",
        image: null,
        slug: "",
    });

    //
    const fetchCategories = async () => {
        try {
            const response = await apiInstance.get("category/list/");
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    // Handle deletion of a category
    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "This will permanently delete the category!",
            icon: "warning",
            showCancelButton: true,
        });
        if (confirm.isConfirmed) {
            try {
                await apiInstance.delete(`category/delete/${id}/`);
                Toast("success", "Category deleted successfully!");
                fetchCategories();
                navigate(`/${App_Company}/profile`);
            } catch (error) {
                Toast("error", "Error while deleting category!");
            }
        }
    };

    if (!categorycomponents) return <Loader />;
    return (
        <>
            <li className="item">
                <div className="info">
                    <span className="id">{id})</span>

                    <span className="title">{title}</span>
                </div>

                <div className="buttons">
                    <Button
                        className="btn view-btn"
                        onClick={() =>
                            window.open(`/detailscategory/${id}`, "_blank")
                        }
                    >
                        View
                    </Button>
                    <Button
                        className="btn update-btn"
                        onClick={() => {
                            // handleEdit(cat)
                            navigate(`/${App_Company}/updatecategory/${id}`);
                        }}
                    >
                        Update
                    </Button>
                    <Button
                        className="btn delete-btn"
                        onClick={() => {
                            handleDelete(id);
                        }}
                    >
                        Delete
                    </Button>
                </div>
            </li>
        </>
    );
}

export default CategoryComponents;
