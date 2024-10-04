import React from "react";
import { useEffect,useState,useNavigate } from "react";
import apiInstance from "../../../utils/axios";



import ServiceComponents from "../servicePage/servicecomponent/ServiceComponents";
import NotService from "../servicePage/notservice/NotService";
import Loader from "../../../ui/loader/Loader";
function ServicePage() {
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

    if (!categories) return <Loader />
    return (
        <>
            <section className="service" id="service">
                <div className="container">
                    <p className="section-subtitle">Our Services</p>
                    <h2 className="h2 section-title">Our Main Focus</h2>
                    <ul className="service-list">
                        {/* <li>
                            <div className="service-card">
                                <div className="card-icon">
                                    <img
                                        src={`${service1}`}
                                        alt="Service icon"
                                    />
                                </div>
                                <h3 className="h3 card-title">
                                    <a href="#">Traditional Finishing</a>
                                </h3>
                                <p className="card-text">
                                    Traditional finishing brings warmth and
                                    timeless elegance, featuring classic
                                    designs, rich colors, and detailed
                                    craftsmanship that create an inviting
                                    atmosphere.
                                </p>
                                <a href="/servicedetails" className="card-link">
                                    <span>Details</span>
                                    <ion-icon name="arrow-forward-outline" />
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="service-card">
                                <div className="card-icon">
                                    <img
                                        src={`${service2}`}
                                        alt="Service icon"
                                    />
                                </div>
                                <h3 className="h3 card-title">
                                    <a href="#"> Super Finishing</a>
                                </h3>
                                <p className="card-text">
                                    Super finishing emphasizes modern aesthetics
                                    with sleek designs, high-quality materials,
                                    and functional spaces that promote a
                                    seamless flow in your home.
                                </p>
                                <a href="/servicedetails" className="card-link">
                                    <span>Details</span>
                                    <ion-icon name="arrow-forward-outline" />
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="service-card">
                                <div className="card-icon">
                                    <img
                                        src={`${service3}`}
                                        alt="Service icon"
                                    />
                                </div>
                                <h3 className="h3 card-title">
                                    <a href="#">Superlux Finishing</a>
                                </h3>
                                <p className="card-text">
                                    Superlux finishing offers unparalleled
                                    luxury with high-end materials, bespoke
                                    designs, and smart home integration,
                                    creating a sophisticated and exclusive
                                    living experience.
                                </p>
                                <a href="/servicedetails" className="card-link">
                                    <span>Details</span>
                                    <ion-icon name="arrow-forward-outline" />
                                </a>
                            </div>
                        </li> */}
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
