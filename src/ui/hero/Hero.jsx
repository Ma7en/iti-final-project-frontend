import React from "react";
import { Link as LinkScroll } from "react-scroll";

// assets
import heroBanner from "../../assets/images/hero/hero-banner.png";

function Hero() {
    return (
        <>
            <section className="hero" id="home">
                <div className="container">
                    <div className="hero-content">
                        <p className="hero-subtitle">
                            <ion-icon name="home" />
                            <span>
                                Quality in details, beauty in finishing!
                            </span>
                        </p>
                        <h2 className="h1 hero-title">Finishing Touch</h2>
                        <p className="hero-text">
                            "Connecting you to the best finishing companies for
                            all your needs."
                        </p>
                        <LinkScroll
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            // href="/contact"
                            className="btn"
                        >
                            About
                        </LinkScroll>
                    </div>

                    <figure className="hero-banner">
                        <img
                            src={`${heroBanner}`}
                            alt="Modern house model"
                            className="w-100"
                        />
                    </figure>
                </div>
            </section>
        </>
    );
}

export default Hero;
