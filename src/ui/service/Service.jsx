/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// utils
import apiInstance from "../../utils/axios";

// category components
import ServiceComponents from "./servicecomponents/ServiceComponents";
import NotCategory from "../../components/categories/notcategory/NotCategory";

// ui components
import Loader from "../loader/Loader";

// assets
import service1 from "../../assets/images/service/service-1.png";
import service2 from "../../assets/images/service/service-2.png";
import service3 from "../../assets/images/service/service-3.png";

function Service() {
    // =================================================================
    const [posts, setPosts] = useState([]);
    const [popularPosts, setPopularPosts] = useState([]);
    const [category, setCategory] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await apiInstance.get(`post/lists/`);
            setPosts(response.data);
        } catch (error) {
            console.log(`${error}`);
        }
    };

    const fetchCategory = async () => {
        try {
            const response = await apiInstance.get(`post/category/list/`);
            setCategory(response.data);
        } catch (error) {
            console.log(`${error}`);
        }
    };

    useEffect(() => {
        fetchPosts();
        fetchCategory();
    }, []);

    if (!category) return <Loader />;
    // console.log(`333`, category);

    return (
        <>
            <section className="service" id="service">
                <div className="container">
                    <p className="section-subtitle">Our Services</p>
                    <h2 className="h2 section-title">Our Main Focus</h2>

                    <ul className="service-list">
                        {category.length > 0 ? (
                            category.map((category, index) => (
                                <ServiceComponents
                                    category={category}
                                    key={index}
                                />
                            ))
                        ) : (
                            <NotCategory />
                        )}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Service;
