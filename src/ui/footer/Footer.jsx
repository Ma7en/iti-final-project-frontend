/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// assets
import logoLight from "../../assets/images/logo/logo-light.png";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-brand">
                            <Link to={`/`} className="logo">
                                <img
                                    src={`${logoLight}`}
                                    alt="Homeverse logo"
                                />
                            </Link>
                            <p className="section-text">
                                At Apartment finishing, we're dedicated to
                                providing inspiration and resources for
                                apartment finishing and interior design. Our
                                goal is to help you transform your living space
                                into a stylish and functional home that reflects
                                your unique personality.
                            </p>
                            <ul className="contact-list">
                                <li>
                                    <a href="#" className="contact-link">
                                        <ion-icon name="location-outline" />
                                        <address>
                                            Brooklyn, New York, United States
                                        </address>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel:+0123456789"
                                        className="contact-link"
                                    >
                                        <ion-icon name="call-outline" />
                                        <span>+0123-456789</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:contact@homeverse.com"
                                        className="contact-link"
                                    >
                                        <ion-icon name="mail-outline" />
                                        <span>contact@homeverse.com</span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="social-list">
                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-youtube" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-link-box">
                            <ul className="footer-list">
                                <li>
                                    <p className="footer-list-title">Company</p>
                                </li>
                                <li>
                                    <Link to={`/about`} className="footer-link">
                                        About
                                    </Link>
                                </li>
                                {/* <li>
                                    <a href="#" className="footer-link">
                                        Blog
                                    </a>
                                </li> */}
                                <li>
                                    <Link
                                        to={`/ourworkspage`}
                                        className="footer-link"
                                    >
                                        All Products
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/servicepage`}
                                        className="footer-link"
                                    >
                                        Service
                                    </Link>
                                </li>
                                {/* <li>
                                    <a href="#" className="footer-link">
                                        FAQ
                                    </a>
                                </li> */}
                                <li>
                                    <Link
                                        to={`/contact`}
                                        className="footer-link"
                                    >
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                            <ul className="footer-list">
                                <li>
                                    <p className="footer-list-title">
                                        Services
                                    </p>
                                </li>
                                <li>
                                    <Link
                                        to={`/contact`}
                                        className="footer-link"
                                    >
                                        Order
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/servicepage`}
                                        className="footer-link"
                                    >
                                        Service
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/login`} className="footer-link">
                                        login
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/login`} className="footer-link">
                                        My account
                                    </Link>
                                </li>
                                {/* <li>
                                    <a href="#" className="footer-link">
                                        Terms &amp; Conditions
                                    </a>
                                </li> */}
                                {/* <li>
                                    <a href="#" className="footer-link">
                                        Promotional Offers
                                    </a>
                                </li> */}
                            </ul>
                            <ul className="footer-list">
                                <li>
                                    <p className="footer-list-title">
                                        Customer Care
                                    </p>
                                </li>
                                <li>
                                    <Link to={`/login`} className="footer-link">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/login`} className="footer-link">
                                        My account
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/ourworkspage`}
                                        className="footer-link"
                                    >
                                        Wish List
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/contact`}
                                        className="footer-link"
                                    >
                                        Order
                                    </Link>
                                </li>
                                {/* <li>
                                    <a href="#" className="footer-link">
                                        FAQ
                                    </a>
                                </li> */}
                                <li>
                                    <Link
                                        to={`/contact`}
                                        className="footer-link"
                                    >
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <p className="copyright">
                            © {new Date().getFullYear()} <a href="#">Team</a>.
                            All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
