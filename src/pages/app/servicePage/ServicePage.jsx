import React from "react";
import { useEffect, useState } from "react";

// utils
import apiInstance from "../../../utils/axios";

// components
import ServiceComponents from "../../../ui/service/servicecomponents/ServiceComponents";

// ui components
import Loader from "../../../ui/loader/Loader";
import NotService from "../servicePage/notservice/NotService";

function ServicePage() {
    const [categories, setCategories] = useState([]);
    // const navigate = useNavigate();

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
            <section className="service" id="service">
                <div className="container">
                    <p className="section-subtitle">Our Services</p>
                    <h2 className="h2 section-title">Our Main Focus</h2>

                    <ul className="service-list">
                        {categories.length > 0 ? (
                            categories.map((category, index) => (
                                <ServiceComponents
                                    category={category}
                                    key={index}
                                />
                            ))
                        ) : (
                            <NotService />
                        )}
                    </ul>
                </div>
            </section>
        </>
    );
}
export default ServicePage;
