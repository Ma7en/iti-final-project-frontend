import React from "react";
import { useNavigate } from "react-router-dom";

function Cta() {
    const navigate = useNavigate();

    return (
        <>
            <section className="cta">
                <div className="container">
                    <div className="cta-card">
                        <div className="card-content">
                            <h2 className="h2 card-title">
                                Ready to Transform Your Space?
                            </h2>

                            <p className="card-text">
                                Contact us today to discuss your project and
                                schedule a consultation. We can't wait to help
                                you create your dream space!
                            </p>
                        </div>

                        <button
                            className="btn cta-btn"
                            onClick={() => {
                                navigate(`/contact`);
                            }}
                        >
                            <span>Explore Finishes</span>
                            <ion-icon name="arrow-forward-outline" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cta;
