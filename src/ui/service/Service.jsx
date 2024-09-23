/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

// assets
import service1 from "../../assets/images/service/service-1.png";
import service2 from "../../assets/images/service/service-2.png";
import service3 from "../../assets/images/service/service-3.png";

function Service() {
    return (
        <>
            <section className="service" id="service">
                <div className="container">
                    <p className="section-subtitle">Our Services</p>
                    <h2 className="h2 section-title">Our Main Focus</h2>
                    <ul className="service-list">
                        <li>
                            <div className="service-card">
                                <div className="card-icon">
                                    <img
                                        src={`${service1}`}
                                        alt="Service icon"
                                    />
                                </div>
                                <h3 className="h3 card-title">
                                    <a href="#">Buy a home</a>
                                </h3>
                                <p className="card-text">
                                    over 1 million+ homes for sale available on
                                    the website, we can match you with a house
                                    you will want to call home.
                                </p>
                                <a href="#" className="card-link">
                                    <span>Find A Home</span>
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
                                    <a href="#">Rent a home</a>
                                </h3>
                                <p className="card-text">
                                    over 1 million+ homes for sale available on
                                    the website, we can match you with a house
                                    you will want to call home.
                                </p>
                                <a href="#" className="card-link">
                                    <span>Find A Home</span>
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
                                    <a href="#">Sell a home</a>
                                </h3>
                                <p className="card-text">
                                    over 1 million+ homes for sale available on
                                    the website, we can match you with a house
                                    you will want to call home.
                                </p>
                                <a href="#" className="card-link">
                                    <span>Find A Home</span>
                                    <ion-icon name="arrow-forward-outline" />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Service;
