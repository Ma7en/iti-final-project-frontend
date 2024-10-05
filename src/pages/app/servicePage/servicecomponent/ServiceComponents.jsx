import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// plugin
import Toast from "../../../../plugin/Toast";

// utils
import apiInstance from "../../../../utils/axios";
import { App_Company } from "../../../../utils/constants";

// ui components
import Loader from "../../../../ui/loader/Loader";

function ServiceComponents({ category: categorycomponents }) {
    const navigate = useNavigate();

    const { id, title, details, image } = categorycomponents;

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
            <li>
                <div className="service-card">
                    <div className="card-icon">
                        <img src={`${image}`} alt="Service icon" />
                    </div>
                    <h3 className="h3 card-title">
                        <a href="#">{title} </a>
                    </h3>
                    <p className="card-text">{details}</p>
                    <a href="/servicedetails" className="card-link">
                        <span>Details</span>
                        <ion-icon name="arrow-forward-outline" />
                    </a>
                </div>
            </li>
        </>
    );
}

export default ServiceComponents;
