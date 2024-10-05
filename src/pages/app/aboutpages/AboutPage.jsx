import React from "react";

// import
import "./AboutPage.css";

// pages components
import Testimonials from "../../../ui/testimonials/Testimonials";
import Cta from "../../../ui/cta/Cta";
import Footer from "../../../ui/footer/Footer";

// ui components
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";

function AboutPage() {
    return (
        <>
            <ScrollToTopPages />
            <section className="service" id="service">
                <div className="container">
                    <p className="section-subtitle">About US</p>
                    <h2 className="h2 section-title">Our Main Focus</h2>
                    <ul className="service-list">
                        <li>
                            <div className="service-card">
                                <div className="card-icon"></div>
                                <h3 className="h3 card-title">
                                    <a href="#">Inspiration</a>
                                </h3>
                                <p className="card-text">
                                    Discover a wealth of ideas to revitalize
                                    your apartment. Whether you’re looking for
                                    bold colors, minimalist aesthetics, or cozy
                                    accents, our curated collections showcase
                                    designs that inspire creativity and
                                    self-expression. Explore different styles
                                    and find what resonates with you!
                                </p>
                                <a href="/contact" className="card-link">
                                    <span>Contact</span>
                                    <ion-icon name="arrow-forward-outline" />
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="service-card">
                                <h3 className="h3 card-title">
                                    <a href="#"> Guide & Tips</a>
                                </h3>
                                <p className="card-text">
                                    Our comprehensive guides and practical tips
                                    provide you with the knowledge needed to
                                    tackle any apartment finishing project. From
                                    selecting the right materials to DIY
                                    techniques, we empower you to make informed
                                    decisions and achieve stunning results.
                                    Whether you're a beginner or an experienced
                                    DIYer
                                </p>
                                <a href="/contact" className="card-link">
                                    <span>Contact</span>
                                    <ion-icon name="arrow-forward-outline" />
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="service-card">
                                <h3 className="h3 card-title">
                                    <a href="#">Trends</a>
                                </h3>
                                <p className="card-text">
                                    Stay updated with the latest trends in
                                    apartment design and finishing. Our insights
                                    into emerging styles, color palettes, and
                                    materials ensure that your home remains
                                    contemporary and chic. Discover what’s
                                    popular right now and how you can
                                    incorporate these trends into your space for
                                    a fresh and modern look.
                                </p>
                                <a href="/contact" className="card-link">
                                    <span>Contact</span>
                                    <ion-icon name="arrow-forward-outline" />
                                </a>
                            </div>
                        </li>

                        <li>
                            <div className="service-card">
                                <h3 className="h3 card-title">
                                    <a href="#">Expert Insights</a>
                                </h3>
                                <p className="card-text">
                                    Benefit from expert insights shared by
                                    seasoned interior designers and industry
                                    professionals. Our articles and interviews
                                    provide a deeper understanding of the design
                                    process and offer tips on how to elevate
                                    your space. Learn from the best and gain the
                                    confidence to create your ideal living
                                    environment.
                                </p>
                                <a href="/contact" className="card-link">
                                    <span>Contact</span>
                                    <ion-icon name="arrow-forward-outline" />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <Testimonials />
            <Cta />
            <Footer />
        </>
    );
}

export default AboutPage;
