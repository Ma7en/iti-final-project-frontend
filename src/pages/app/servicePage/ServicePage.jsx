import React from "react";
// import Service from "../../../ui/service/Service";
import service1 from "../../../assets/images/service/service-1.png";
import service2 from "../../../assets/images/service/service-2.png";
import service3 from "../../../assets/images/service/service-3.png";
import ServiceComponents from "../../app/servicePage/servicecomponent/ServiceComponents"
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
                                    <ServiceComponentsnts
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
export default ServicePage;
