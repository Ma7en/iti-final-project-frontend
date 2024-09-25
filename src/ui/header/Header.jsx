/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// bootstrap
import { Nav, Navbar } from "react-bootstrap";

// font awsome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFilm,
    faHeart,
    faMoon,
    faSun,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/react-fontawesome";

// context
import themeContext from "../../contexts/themeContext";
import languageContext from "../../contexts/languageContext";

// assets
import logo from "../../assets/images/logo/logo.png";

function Header() {
    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    const [navbar, setNavbar] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setNavbar(false);
        });
    }, []);

    return (
        <>
            <header className="header" data-header>
                <div
                    className={`overlay ${navbar !== false ? "active" : ""}`}
                    data-overlay
                ></div>

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
                            <button className="header-top-btn">
                                Add Listing
                            </button>
                        </div>
                    </div>
                </div>

                <div className="header-bottom">
                    <div className="container">
                        <Link to={`/`} className="logo">
                            <img src={`${logo}`} alt="Homeverse logo" />
                        </Link>

                        <nav
                            className={`navbar ${
                                navbar !== false ? "active" : ""
                            }`}
                            data-navbar
                        >
                            <div className="navbar-top">
                                <Link to={`/`} className="logo">
                                    <img src={`${logo}`} alt="Homeverse logo" />
                                </Link>

                                <button
                                    className="nav-close-btn"
                                    data-nav-close-btn
                                    aria-label="Close Menu"
                                    onClick={() => {
                                        setNavbar(!navbar);
                                    }}
                                >
                                    <ion-icon name="close-outline" />
                                </button>
                            </div>

                            <div className="navbar-bottom">
                                <ul className="navbar-list">
                                    <li>
                                        <Link
                                            to={`/`}
                                            className="navbar-link"
                                            data-nav-link
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            href="#about"
                                            className="navbar-link"
                                            data-nav-link
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#service"
                                            className="navbar-link"
                                            data-nav-link
                                        >
                                            Service
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#property"
                                            className="navbar-link"
                                            data-nav-link
                                        >
                                            Property
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#blog"
                                            className="navbar-link"
                                            data-nav-link
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#contact"
                                            className="navbar-link"
                                            data-nav-link
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <div className="header-bottom-actions">
                            <button
                                className="header-bottom-actions-btn"
                                aria-label="Search"
                            >
                                <ion-icon name="search-outline" />
                                <span>Search</span>
                            </button>

                            <button
                                className="header-bottom-actions-btn"
                                aria-label="Profile"
                            >
                                <NavLink to="/login">
                                    <ion-icon name="person-outline" />
                                    <span>Profile</span>
                                </NavLink>
                            </button>
                            <button
                                className="header-bottom-actions-btn"
                                aria-label="Cart"
                            >
                                <ion-icon name="cart-outline" />
                                <span>Cart</span>
                            </button>
                            <button
                                className="header-bottom-actions-btn"
                                data-nav-open-btn
                                aria-label="Open Menu"
                                onClick={() => {
                                    setNavbar(!navbar);
                                }}
                            >
                                <ion-icon name="menu-outline" />
                                <span>Menu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
