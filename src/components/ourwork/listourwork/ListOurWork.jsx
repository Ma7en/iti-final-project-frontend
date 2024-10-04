import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import styles
import "./ListOurWork.css";

// ui bootstrap components
import { Button } from "react-bootstrap";

// plugin
import Toast from "../../../plugin/Toast";
import useUserData from "../../../plugin/useUserData";

// utils
import apiInstance from "../../../utils/axios";
import { App_Company } from "../../../utils/constants";

// package components

// ui components
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
import Loader from "../../../ui/loader/Loader";

function ListOurWork() {
    const navigate = useNavigate();
    // const [posts, setPosts] = useState([]);
    // const [popularPosts, setPopularPosts] = useState([]);
    // const [category, setCategory] = useState([]);
    // const userId = useUserData()?.user_id;

    // const fetchPosts = async () => {
    //     const response = await apiInstance.get(`post/lists/`);
    //     setPosts(response.data);
    //     console.log(`response.data>-`, response.data);
    // };

    // const fetchPopularPost = () => {
    //     const sortedPopularPost = posts?.sort((a, b) => b.view - a.view);
    //     setPopularPosts(sortedPopularPost);
    //     // console.log(`sortedPopularPost->`, sortedPopularPost);
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

    // const handleLikePost = async (postId) => {
    //     const jsonData = {
    //         user_id: userId,
    //         post_id: postId,
    //     };
    //     const response = await apiInstance.post(`post/like-post/`, jsonData);
    //     console.log(response.data);
    //     fetchPosts();

    //     Toast("success", response.data.message, "");
    // };

    // const handleBookmarkPost = async (postId) => {
    //     const jsonData = {
    //         user_id: userId,
    //         post_id: postId,
    //     };
    //     const response = await apiInstance.post(
    //         `post/bookmark-post/`,
    //         jsonData
    //     );
    //     // console.log(response.data);
    //     fetchPosts();

    //     Toast("success", response.data.message, "");
    // };

    // if (!posts) return <Loader />;

    return (
        <>
            <ScrollToTopPages />
            <div className="listourwork">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">Our Work List</h2>
                    </div>

                    <div className="content">
                        <ul className="list">
                            {/* {posts.length > 0 ? (
                                posts.map((project, index) => (
                                    <ProjectComponents
                                        project={project}
                                        key={index}
                                    />
                                ))
                            ) : (
                                <NotPackage />
                            )} */}
                        </ul>
                    </div>

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
        </>
    );
}

export default ListOurWork;
