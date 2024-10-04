/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link as LinkScroll } from "react-scroll";

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

// store
import { useAuthStore } from "../../store/auth";

// utils
import { App_User } from "../../utils/constants";

// assets
import logo from "../../assets/images/logo/logo.png";

function Header() {
    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    const [navbar, setNavbar] = useState(false);
    const navigate = useNavigate();

    // const access = localStorage.getItem("access");
    // authentication
    const [isLoggedIn, user] = useAuthStore((state) => [
        state.isLoggedIn,
        state.user,
    ]);

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
                        <Link to={`/`} className="logo" title="homeverse">
                            <img src={`${logo}`} alt="Homeverse logo" />
                        </Link>

                        <nav
                            className={`navbar ${
                                navbar !== false ? "active" : ""
                            }`}
                            data-navbar
                        >
                            <div className="navbar-top">
                                <Link
                                    to={`/`}
                                    className="logo"
                                    title="homeverse"
                                >
                                    <img src={`${logo}`} alt="Homeverse logo" />
                                </Link>

                                <button
                                    className="nav-close-btn"
                                    data-nav-close-btn
                                    aria-label="Close Menu"
                                    onClick={() => {
                                        setNavbar(!navbar);
                                    }}
                                    title="Close Menu"
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
                                            title="homeverse"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={`/about`}
                                            className="navbar-link"
                                            data-nav-link
                                            title="About"
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/servicepage"
                                            // href="#service"
                                            className="navbar-link"
                                            title="Service"
                                        >
                                            Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/ourworkspage"
                                            className="navbar-link"
                                            title="Property"
                                        >
                                            Our Works
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={`/contact`}
                                            className="navbar-link"
                                            data-nav-link
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <div className="header-bottom-actions">
                            <button
                                className="header-bottom-actions-btn"
                                aria-label="Search"
                                title="Search"
                            >
                                <ion-icon name="search-outline" />
                                <span>Search</span>
                            </button>

                            {isLoggedIn() && (
                                <button
                                    className="header-bottom-actions-btn"
                                    aria-label="Logout"
                                    title="Logout"
                                >
                                    <a
                                        onClick={() => {
                                            navigate(`/logout`);
                                        }}
                                    >
                                        <ion-icon name="log-out-outline" />
                                        <span>Logout</span>
                                    </a>
                                </button>
                            )}

                            <button
                                className="header-bottom-actions-btn"
                                aria-label="Profile"
                            >
                                {isLoggedIn() ? (
                                    <a
                                        title="Profile"
                                        onClick={() => {
                                            navigate(`/${App_User}/profile`);
                                        }}
                                    >
                                        <ion-icon name="person-outline" />
                                        <span>Profile</span>
                                    </a>
                                ) : (
                                    <a
                                        title="Login"
                                        onClick={() => {
                                            navigate(`/login`);
                                        }}
                                    >
                                        <ion-icon name="person-outline" />
                                        <span>Login</span>
                                    </a>
                                )}
                            </button>

                            <button
                                className="header-bottom-actions-btn"
                                aria-label="Cart"
                                title="Cart"
                                onClick={() => {
                                    navigate(`${App_User}/createregisterorder`);
                                }}
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
                                title="Menu"
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
