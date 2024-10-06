import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import styles
import "./ListOurWork.css";

// ui bootstrap components
import { Button } from "react-bootstrap";

// plugin
import useUserData from "../../../plugin/useUserData";

// utils
import apiInstance from "../../../utils/axios";
import { App_Company } from "../../../utils/constants";

// package components
import OurWorkComponents from "../ourworkcomponents/OurWorkComponents";

// ui components
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
import Loader from "../../../ui/loader/Loader";
import NotComponent from "../../../ui/error/NotComponent";

function ListOurWork() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [popularPosts, setPopularPosts] = useState([]);
    const [category, setCategory] = useState([]);
    const userId = useUserData()?.user_id;

    const fetchPosts = async () => {
        try {
            const response = await apiInstance.get(`ourwork/lists/`);
            setPosts(response.data);
            console.log(`response.data>-`, response.data);
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

    if (!posts) return <Loader />;

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
                            {posts.length > 0 ? (
                                posts.map((ourwork, index) => (
                                    <OurWorkComponents
                                        ourwork={ourwork}
                                        key={index}
                                    />
                                ))
                            ) : (
                                <NotComponent name="our work" />
                            )}
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
