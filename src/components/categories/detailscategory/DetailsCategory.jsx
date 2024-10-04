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
import DetailsProjectViewComponent from "../../project/detailsprojectviewcomponent/DetailsProjectViewComponent";
import NotComponent from "../../../ui/error/NotComponent";

function DetailsCategory() {
    const { slug } = useParams();
    // console.log(`eee`, slug);
    // console.log("id", id);
    const [category, setCategory] = useState(null);

    const fetchCategoryDetails = async () => {
        try {
            const response = await apiInstance.get(`category/detail/${slug}/`);
            setCategory(response.data);
            // console.log(`ddd`, response.data);
        } catch (error) {
            console.error("Error fetching category details:", error);
        }
    };

    useEffect(() => {
        fetchCategoryDetails();
    }, [slug]);
    // console.log(`333`, category);

    // if (!category) return <Loader />;
    // console.log(category);

    // =================================================================
    // =2
    // const [posts, setPosts] = useState([]);
    // const [popularPosts, setPopularPosts] = useState([]);
    // const [category, setCategory] = useState([]);

    // const fetchPosts = async () => {
    //     const response = await apiInstance.get(`post/lists/`);
    //     setPosts(response.data);
    // };

    // const fetchPopularPost = () => {
    //     const sortedPopularPost = posts?.sort((a, b) => b.view - a.view);
    //     setPopularPosts(sortedPopularPost);
    // };

    // const fetchCategory = async () => {
    //     const response = await apiInstance.get(`post/category/list/`);
    //     setCategory(response.data);
    // };

    // useEffect(() => {
    //     fetchPosts();
    //     fetchCategory();
    // }, []);

    // useEffect(() => {
    //     fetchPopularPost();
    // }, [posts]);

    // // Pagination
    // const itemsPerPage = 4;
    // const [currentPage, setCurrentPage] = useState(1);
    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const postItems = posts.slice(indexOfFirstItem, indexOfLastItem);
    // const totalPages = Math.ceil(posts.length / itemsPerPage);
    // const pageNumbers = Array.from(
    //     { length: totalPages },
    //     (_, index) => index + 1
    // );
    // // console.log(`333`, category);
    // if (!posts || !postItems) return <Loader />;
    // console.log(`3333---->`, postItems);
    // =================================================================
    const [posts, setPosts] = useState([]);
    const param = useParams();
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        try {
            const response = await apiInstance.get(
                `post/category/posts/${param.slug}/`
            );
            setPosts(response.data);
            setLoading(false);
        } catch (error) {
            console.log(`${error}`);
        }
    };
    useEffect(() => {
        fetchPosts();
    }, []);

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
