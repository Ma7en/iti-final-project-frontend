import React from "react";

// assets
import aboutBanner1 from "../../assets/images/about/about-banner-1.png";
import aboutBanner2 from "../../assets/images/about/about-banner-2.jpg";

function About() {
    return (
        <>
            <section className="about" id="about">
                <div className="container">
                    <figure className="about-banner">
                        <img src={`${aboutBanner1}`} alt="House interior" />
                        <img
                            src={`${aboutBanner2}`}
                            alt="House interior"
                            className="abs-img"
                        />
                    </figure>
                    <div className="about-content">
                        <p className="section-subtitle">About Us</p>
                        <h2 className="h2 section-title">
                        Welcome to Apartment Finishing

                        </h2>
                        <p className="about-text">
                       
At Apartment finishing, we’re dedicated to providing inspiration and resources for apartment finishing and interior design.
 Our goal is to help you transform your living space into a stylish and functional home that reflects your unique personality.
                        </p>
                        <ul className="about-list">
                            <li className="about-item">
                                <div className="about-item-icon">
                                    <ion-icon name="home-outline" />
                                  
                                </div>
                                <p className="about-item-text">
                                Inspiration
                                </p>
                            </li>
                            <li className="about-item">
                                <div className="about-item-icon">
                                    <ion-icon name="leaf-outline" />
                                </div>
                                <p className="about-item-text">
                                Guides & Tips                                </p>
                            </li>
                            <li className="about-item">
                                <div className="about-item-icon">
                                    <ion-icon name="wine-outline" />
                                </div>
                                <p className="about-item-text">
                                Trends
                                </p>
                            </li>
                            <li className="about-item">
                                <div className="about-item-icon">
                                    <ion-icon name="shield-checkmark-outline" />
                                </div>
                                <p className="about-item-text">
                                Expert Insights
                                </p>
                            </li>
                        </ul>
                        {/* <p className="callout">
                            "Enimad minim veniam quis nostrud exercitation
                            llamco laboris. Lorem ipsum dolor sit amet"
                        </p> */}
                        <a href="/contact" className="btn">
                            Contact
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
