/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

// assets
import property1 from "../../../assets/images/property/property-1.jpg";

function FinishingDetails() {
    return (
        <>
            <section className="property" id="property">
                <div className="container">
                    <p className="section-subtitle">Our Works</p>
                    <h2 className="h2 section-title">Featured Listings</h2>

                    <ul className="property-list has-scrollbar">
                        <li>
                            <div className="property-card">
                                <figure className="card-banner">
                                    <a href="#">
                                        <img
                                            src={property1}
                                            alt="New Apartment Nice View"
                                            className="w-100"
                                        />
                                    </a>
                                    <div className="banner-actions">
                                        <button className="banner-actions-btn">
                                            <ion-icon name="location" />
                                            <address>
                                                Belmont Gardens, Chicago
                                            </address>
                                        </button>
                                        <button className="banner-actions-btn">
                                            <ion-icon name="camera" />
                                            <span>4</span>
                                        </button>
                                        <button className="banner-actions-btn">
                                            <ion-icon name="film" />
                                            <span>2</span>
                                        </button>
                                    </div>
                                </figure>

                                <div className="card-content">
                                    <h3 className="h3 card-title">
                                        <a href="#">
                                            Modern Villa Facade Finishing
                                        </a>
                                    </h3>
                                    {/* Display total price */}
                                    <p className="card-text">
                                        This project involves finishing the
                                        facade of a modern villa with a
                                        contemporary design. A blend of natural
                                        stone and reflective glass is used to
                                        provide an elegant and attractive look.
                                        The facade includes large windows with
                                        wide openings to offer a stunning
                                        panoramic view, along with the
                                        installation of LED light fixtures
                                        artistically distributed across the
                                        exterior walls to enhance the night-time
                                        aesthetics. The design features straight
                                        lines and simple geometric shapes that
                                        emphasize the mode.
                                    </p>
                                    <ul className="card-list">
                                        <li className="card-item">
                                            <strong>30</strong>
                                            <ion-icon name="calendar-outline" />
                                            <span>Days</span>
                                        </li>
                                        <li className="card-item">
                                            <ion-icon name="square-outline" />
                                            <span>Square Ft</span>
                                            <span></span>{" "}
                                            {/* Display price per square meter */}
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer">
                                    <div className="card-author">
                                        <figure className="author-avatar">
                                            <img
                                                src={property1}
                                                alt="New Apartment Nice View"
                                                className="w-100"
                                            />
                                        </figure>
                                        <div>
                                            <p className="author-name">
                                                <a href="#">William Seklo</a>
                                            </p>
                                            <p className="author-title">
                                                Estate Agents
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default FinishingDetails;
