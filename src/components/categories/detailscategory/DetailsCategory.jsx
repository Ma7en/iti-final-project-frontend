import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import
import "./DetailsCategory.css";

// utils
import apiInstance from "../../../utils/axios";

// category components
import DetailsCategoryComponents from "./detailscategorycomponents/DetailsCategoryComponents";

// package components
import DetailsProjectViewComponent from "../../project/detailsprojectviewcomponent/DetailsProjectViewComponent";

// ui components
import Loader from "../../../ui/loader/Loader";
import NotComponent from "../../../ui/error/NotComponent";

// assets
import service3 from "../../../assets/images/service/service-3.png";

function DetailsCategory() {
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    console.log(`eee`, useParams());
    // console.log("id", id);
    const [category, setCategory] = useState(null);

    const fetchCategoryDetails = async () => {
        try {
            const response = await apiInstance.get(`category/detail/${id}/`);
            setCategory(response.data);
            // console.log(`ddd`, response.data);
        } catch (error) {
            console.error("Error fetching category details:", error);
        }
    };

    useEffect(() => {
        fetchCategoryDetails();
    }, [id]);

    // =================================================================
    const [posts, setPosts] = useState([]);
    const param = useParams();
    // console.log(`3333---`, param);
    // console.log(`eee`, category?.slug);

    const fetchPosts = async () => {
        try {
            const response = await apiInstance.get(
                // `post/category/posts/${param.slug}/`
                `post/category/posts/${category?.slug}/`
            );
            setPosts(response.data);
            setLoading(false);
        } catch (error) {
            console.log(`${error}`);
        }
    };
    useEffect(() => {
        fetchPosts();
    }, [id, category]);

    // Pagination
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const postItems = posts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(posts.length / itemsPerPage);
    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );
    if (!category) return <Loader />;
    // if

    return (
        <>
            <div className="detailscategory">
                <div className="container">
                    <p className="section-subtitle">Our Services</p>
                    <h2 className="h2 section-title">Our Main Focus</h2>

                    <ul className="service-list">
                        <DetailsCategoryComponents
                            category={posts[0]?.category || category}
                        />
                    </ul>
                </div>
            </div>

            <div className="packagecagegory">
                <div className="container">
                    <div className="packageslist">
                        {postItems?.length > 0 ? (
                            postItems?.map((project, index) => (
                                <DetailsProjectViewComponent
                                    project={project}
                                    key={index}
                                />
                            ))
                        ) : (
                            <NotComponent name="package" />
                        )}
                    </div>
                </div>
            </div>
            {/* <Property /> */}
        </>
    );
}

export default DetailsCategory;
