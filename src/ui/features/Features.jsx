import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Features() {
    return (
        <>
            <section className="features">
                <div className="container">
                    <p className="section-subtitle">Our Aminities</p>
                    <h2 className="h2 section-title">Finishing Facilities</h2>

                    <ul className="features-list">
                        <li>
                            <Link to={`/about`} className="features-card">
                                <div className="card-icon">
                                    <ion-icon name="home-outline" />
                                </div>
                                <h3 className="card-title"> Apartments </h3>
                                <div className="card-btn">
                                    <ion-icon name="arrow-forward-outline" />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/about`} className="features-card">
                                <div className="card-icon">
                                    <ion-icon name="fitness-outline" />
                                </div>
                                <h3 className="card-title">Clinics</h3>
                                <div className="card-btn">
                                    <ion-icon name="arrow-forward-outline" />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/about`} className="features-card">
                                <div className="card-icon">
                                    <ion-icon name="shield-checkmark-outline" />
                                </div>
                                <h3 className="card-title">Pharmacies</h3>
                                <div className="card-btn">
                                    <ion-icon name="arrow-forward-outline" />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/about`} className="features-card">
                                <div className="card-icon">
                                    <ion-icon name="briefcase-outline" />
                                </div>
                                <h3 className="card-title">Offices</h3>
                                <div className="card-btn">
                                    <ion-icon name="arrow-forward-outline" />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/about`} className="features-card">
                                <div className="card-icon">
                                    <ion-icon name="medkit-outline" />
                                </div>
                                <h3 className="card-title">Hospitals</h3>
                                <div className="card-btn">
                                    <ion-icon name="arrow-forward-outline" />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/about`} className="features-card">
                                <div className="card-icon">
                                    <ion-icon name="construct-outline" />
                                </div>
                                <h3 className="card-title">Companies</h3>
                                <div className="card-btn">
                                    <ion-icon name="arrow-forward-outline" />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/about`} className="features-card">
                                <div className="card-icon">
                                    <ion-icon name="storefront-outline" />
                                </div>
                                <h3 className="card-title">Stores</h3>
                                <div className="card-btn">
                                    <ion-icon name="arrow-forward-outline" />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/about`} className="features-card">
                                <div className="card-icon">
                                    <ion-icon name="restaurant-outline" />
                                </div>
                                <h3 className="card-title">Resturants</h3>
                                <div className="card-btn">
                                    <ion-icon name="arrow-forward-outline" />
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link to={`/about`} className="features-card">
                                <div className="card-icon">
                                    <ion-icon name="cafe-outline" />
                                </div>
                                <h3 className="card-title">Cafe</h3>
                                <div className="card-btn">
                                    <ion-icon name="arrow-forward-outline" />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Features;
