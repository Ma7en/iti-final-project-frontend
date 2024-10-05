import React, { useEffect, useState } from "react";

// assets
// property
import property1 from "../../assets/images/property/property-1.jpg";
import property2 from "../../assets/images/property/property-2.jpg";
import property3 from "../../assets/images/property/property-3.jpg";
import property4 from "../../assets/images/property/property-4.png";

// author
import author from "../../assets/images/author/author.jpg";

// company
import company1 from "../../assets/images/company/company1.png";
import company2 from "../../assets/images/company/company2.png";
import company3 from "../../assets/images/company/company3.png";
import company4 from "../../assets/images/company/company4.png";
import Loader from "../../ui/loader/Loader";
import { useNavigate } from "react-router-dom";
import useUserData from "../../plugin/useUserData";
import apiInstance from "../../utils/axios";
import NotComponent from "../../ui/error/NotComponent";
import OurWorkComponentsView from "../ourwork/ourworkcomponentsview/OurWorkComponentsView";

function Property() {
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
            <section className="property" id="property">
                <div className="container">
                    <p className="section-subtitle">Our Works</p>
                    <h2 className="h2 section-title">Featured Listings</h2>

                    <ul className="property-list has-scrollbar">
                        {posts.length > 0 ? (
                            posts.map((ourwork, index) => (
                                <OurWorkComponentsView
                                    ourwork={ourwork}
                                    key={index}
                                />
                            ))
                        ) : (
                            <NotComponent name="work" />
                        )}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Property;
