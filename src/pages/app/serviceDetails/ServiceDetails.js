import React from "react";
function ServiceDetails(){
    (
        <>
         <div className="container">
                    <p className="section-subtitle">Our Services</p>
                    <h2 className="h2 section-title">Our Main Focus</h2>
                    <ul className="service-list">
                        <li>
                            <div className="service-card">
                                <div className="card-icon">
                                    <img
                                        src={`${service3}`}
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
                                <a href="/contact" className="card-link">
                                    <span>Contact</span>
                                    <ion-icon name="arrow-forward-outline" />
                                </a>
                            </div>
                        </li>
                     </ul>
                     </div>
        </>
    )
}
export  default ServiceDetails;