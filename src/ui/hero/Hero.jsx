import React from "react";

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
                            <span>Real Estate Agency</span>
                        </p>
                        <h2 className="h1 hero-title">
                        
                        </h2>
                        <p className="hero-text">
                        From Concept to Completion—We Bring Your Ideas to Life
                        </p>
                        <a href="/contact" className="btn"> Contact</a>
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
