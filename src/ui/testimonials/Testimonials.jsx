import React from "react";

// import style
import "./Testimonials.css";

function Testimonials() {
    return (
        <>
            <section className="testimonials">
                <div className="container">
                    <h2 className=" h2 section-title">What Our Clients Say</h2>
                    <div className="testimonial-list">
                        <blockquote>
                            "FinishLine Creations transformed my home! Their
                            attention to detail and dedication to quality made
                            the process enjoyable and stress-free."
                        </blockquote>
                        <blockquote>
                            "I couldn't be happier with the results! The team
                            was professional, timely, and the finished work
                            exceeded my expectations."
                        </blockquote>
                        <blockquote>
                            "Their creative ideas helped me realize my dream
                            space. Highly recommend FinishLine Creations for any
                            renovation project!"
                        </blockquote>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonials;
