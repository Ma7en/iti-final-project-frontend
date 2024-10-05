/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

function Information() {
    const navigate = useNavigate();

    return (
        <>
            <div className="header-top">
                <div className="container">
                    <ul className="header-top-list">
                        <li>
                            <a
                                href="mailto:info@homeverse.com"
                                className="header-top-link"
                            >
                                <ion-icon name="mail-outline" />
                                <span>info@homeverse.com</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="header-top-link"
                                target="_blank"
                            >
                                <ion-icon name="location-outline" />
                                <address>15/A, Nest Tower, NYC</address>
                            </a>
                        </li>
                    </ul>

                    <div className="wrapper">
                        <ul className="header-top-social-list">
                            <li>
                                <a
                                    href="#"
                                    className="header-top-social-link"
                                    target="_blank"
                                >
                                    <ion-icon name="logo-facebook" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="header-top-social-link"
                                    target="_blank"
                                >
                                    <ion-icon name="logo-twitter" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="header-top-social-link"
                                    target="_blank"
                                >
                                    <ion-icon name="logo-instagram" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="header-top-social-link"
                                    target="_blank"
                                >
                                    <ion-icon name="logo-pinterest" />
                                </a>
                            </li>
                        </ul>
                        <button
                            className="header-top-btn"
                            onClick={() => {
                                navigate(`/contact`);
                            }}
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Information;
