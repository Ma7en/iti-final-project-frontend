/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

// assets
// property
import property1 from "../../assets/images/property/property-1.jpg";
import property2 from "../../assets/images/property/property-2.jpg";
import property3 from "../../assets/images/property/property-3.jpg";
import property4 from "../../assets/images/property/property-4.png";

// author
import author from "../../assets/images/author/author.jpg";

// company
import company1 from "../../assets/images/company/company1.png";
import company2 from "../../assets/images/company/company2.png";
import company3 from "../../assets/images/company/company3.png";
import company4 from "../../assets/images/company/company4.png";

function Property() {
    return (
        <>
            <section className="property" id="property">
                <div className="container">
                    <p className="section-subtitle">Our Works</p>
                    <h2 className="h2 section-title">Featured Listings</h2>

                    <ul className="property-list has-scrollbar">
                        <li>
                            <div className="property-card">
                                <figure className="card-banner">
                                    <a href="#">
                                        <img
                                            src={`${property1}`}
                                            alt="New Apartment Nice View"
                                            className="w-100"
                                        />
                                    </a>
                                    {/* <div className="card-badge green">
                                        For Rent
                                    </div> */}
                                    <div className="banner-actions">
                                        <button className="banner-actions-btn">
                                            <ion-icon name="location" />
                                            <address>
                                                Belmont Gardens, Chicago
                                            </address>
                                        </button>
                                        <button className="banner-actions-btn">
                                            <ion-icon name="camera" />
                                            <span>4</span>
                                        </button>
                                        <button className="banner-actions-btn">
                                            <ion-icon name="film" />
                                            <span>2</span>
                                        </button>
                                    </div>
                                </figure>

                                <div className="card-content">
                                    {/* <div className="card-price">
                                        <strong>$34,900</strong>/Month
                                    </div> */}
                                    <h3 className="h3 card-title">
                                        <a href="#">
                                            Modern Villa Facade Finishing
                                        </a>
                                    </h3>
                                    <p className="card-text">
                                        This project involves finishing the
                                        facade of a modern villa with a
                                        contemporary design. A blend of natural
                                        stone and reflective glass is used to
                                        provide an elegant and attractive look.
                                        The facade includes large windows with
                                        wide openings to offer a stunning
                                        panoramic view, along with the
                                        installation of LED light fixtures
                                        artistically distributed across the
                                        exterior walls to enhance the night-time
                                        aesthetics. The design features straight
                                        lines and simple geometric shapes that
                                        emphasize the mode
                                    </p>
                                    <ul className="card-list">
                                        {/* <li className="card-item">
                                            <strong>30</strong>
                                            <ion-icon name="calendar-outline" />
                                            <span>Bedrooms</span>
                                        </li> */}
                                        <li className="card-item">
                                            <strong>30</strong>
                                            <ion-icon name="calendar-outline" />
                                            <span>Days</span>
                                        </li>
                                        <li className="card-item">
                                            <strong>350</strong>
                                            <ion-icon name="square-outline" />
                                            <span>Square Ft</span>
                                        </li>
                                    </ul>
                                    <button><a href="/finishing" className="btn">Details</a></button>
                                </div>
                                <div className="card-footer">
                                    <div className="card-author">
                                        <figure className="author-avatar">
                                            <img
                                                src={`${company1}`}
                                                alt="William Seklo"
                                                className="w-100"
                                            />
                                        </figure>
                                        <div>
                                            <p className="author-name">
                                                <a href="#">William Seklo</a>
                                            </p>
                                            <p className="author-title">
                                                Estate Agents
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card-footer-actions">
                                        <button className="card-footer-actions-btn">
                                            <ion-icon name="resize-outline" />
                                        </button>
                                        <button className="card-footer-actions-btn">
                                            <ion-icon name="heart-outline" />
                                        </button>
                                        <button className="card-footer-actions-btn">
                                            <ion-icon name="add-circle-outline" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="property-card">
                                <figure className="card-banner">
                                    <a href="#">
                                        <img
                                            src={`${property2}`}
                                            alt="Modern Apartments"
                                            className="w-100"
                                        />
                                    </a>
                                    {/* <div className="card-badge orange">
                                        For Sales
                                    </div> */}
                                    <div className="banner-actions">
                                        <button className="banner-actions-btn">
                                            <ion-icon name="location" />
                                            <address>
                                                Belmont Gardens, Chicago
                                            </address>
                                        </button>
                                        <button className="banner-actions-btn">
                                            <ion-icon name="camera" />
                                            <span>4</span>
                                        </button>
                                        <button className="banner-actions-btn">
                                            <ion-icon name="film" />
                                            <span>2</span>
                                        </button>
                                    </div>
                                </figure>
                                <div className="card-content">
                                    {/* <div className="card-price">
                                        <strong>$34,900</strong>/Month
                                    </div> */}
                                    <h3 className="h3 card-title">
                                        <a href="#">
                                            Interior Wall Finishing for a Modern
                                            Apartment
                                        </a>
                                    </h3>
                                    <p className="card-text">
                                        This project involves the interior wall
                                        finishing of a modern apartment using
                                        high-quality paints in contemporary
                                        colors that provide a sense of comfort
                                        and space. Matte paints are used in
                                        living rooms and bedrooms to avoid
                                        reflections and enhance natural
                                        lighting. The finishing also includes
                                        adding decorative touches such as
                                        suspended gypsum and modern decorative
                                        frames that add a touch of luxury. In
                                        some rooms, wallpaper with modern
                                        geometric designs is installed, matching
                                        the modern theme of the apartment.
                                    </p>
                                    <ul className="card-list">
                                        {/* <li className="card-item">
                                            <strong>3</strong>
                                            <ion-icon name="bed-outline" />
                                            <span>Bedrooms</span>
                                        </li> */}
                                        <li className="card-item">
                                            <strong>30</strong>
                                            <ion-icon name="calendar-outline" />
                                            <span>Days</span>
                                        </li>
                                        <li className="card-item">
                                            <strong>300</strong>
                                            <ion-icon name="square-outline" />
                                            <span>Square Ft</span>
                                        </li>
                                    </ul>
                                    <button><a href="/finishing" className="btn">Details</a></button>
                                </div>
                                <div className="card-footer">
                                    <div className="card-author">
                                        <figure className="author-avatar">
                                            <img
                                                src={`${company2}`}
                                                alt="William Seklo"
                                                className="w-100"
                                            />
                                        </figure>
                                        <div>
                                            <p className="author-name">
                                                <a href="#">William Seklo</a>
                                            </p>
                                            <p className="author-title">
                                                Estate Agents
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card-footer-actions">
                                        <button className="card-footer-actions-btn">
                                            <ion-icon name="resize-outline" />
                                        </button>
                                        <button className="card-footer-actions-btn">
                                            <ion-icon name="heart-outline" />
                                        </button>
                                        <button className="card-footer-actions-btn">
                                            <ion-icon name="add-circle-outline" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="property-card">
                                <figure className="card-banner">
                                    <a href="#">
                                        <img
                                            src={`${property3}`}
                                            alt="Comfortable Apartment"
                                            className="w-100"
                                        />
                                    </a>
                                    {/* <div className="card-badge green">
                                        For Rent
                                    </div> */}
                                    <div className="banner-actions">
                                        <button className="banner-actions-btn">
                                            <ion-icon name="location" />
                                            <address>
                                                Belmont Gardens, Chicago
                                            </address>
                                        </button>
                                        <button className="banner-actions-btn">
                                            <ion-icon name="camera" />
                                            <span>4</span>
                                        </button>
                                        <button className="banner-actions-btn">
                                            <ion-icon name="film" />
                                            <span>2</span>
                                        </button>
                                    </div>
                                </figure>
                                <div className="card-content">
                                    {/* <div className="card-price">
                                        <strong>$34,900</strong>/Month
                                    </div> */}
                                    <h3 className="h3 card-title">
                                        <a href="#">
                                            Entrance and Exit Finishing for a
                                            Luxury Villa
                                        </a>
                                    </h3>
                                    <p className="card-text">
                                        This project involves finishing the
                                        entrances and exits of a luxury villa
                                        using high-end construction materials
                                        and unique designs. The main entrance is
                                        covered with premium Italian marble and
                                        equipped with hidden LED lighting to
                                        highlight the design details at night.
                                        The main doors are made of solid wood
                                        with wrought iron decorations. The rear
                                        exit features an electronic gate that
                                        opens to the backyard, and the design
                                        includes a paved path connecting the
                                        entrance and exit using slip-resistant s
                                    </p>
                                    <ul className="card-list">
                                        {/* <li className="card-item">
                                            <strong>3</strong>
                                            <ion-icon name="bed-outline" />
                                            <span>Bedrooms</span>
                                        </li> */}
                                        <li className="card-item">
                                            <strong>10</strong>
                                            <ion-icon name="calendar-outline" />
                                            <span>Days</span>
                                        </li>

                                        <li className="card-item">
                                            <strong>100</strong>
                                            <ion-icon name="square-outline" />
                                            <span>Square Ft</span>
                                        </li>
                                    </ul>
                                    <button><a href="/finishing" className="btn">Details</a></button>
                                </div>
                                <div className="card-footer">
                                    <div className="card-author">
                                        <figure className="author-avatar">
                                            <img
                                                src={`${company3}`}
                                                alt="William Seklo"
                                                className="w-100"
                                            />
                                        </figure>
                                        <div>
                                            <p className="author-name">
                                                <a href="#">William Seklo</a>
                                            </p>
                                            <p className="author-title">
                                                Estate Agents
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card-footer-actions">
                                        <button className="card-footer-actions-btn">
                                            <ion-icon name="resize-outline" />
                                        </button>
                                        <button className="card-footer-actions-btn">
                                            <ion-icon name="heart-outline" />
                                        </button>
                                        <button className="card-footer-actions-btn">
                                            <ion-icon name="add-circle-outline" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="property-card">
                                <figure className="card-banner">
                                    <a href="#">
                                        <img
                                            src={`${property4}`}
                                            alt="Luxury villa in Rego Park"
                                            className="w-100"
                                        />
                                    </a>
                                    <div className="card-badge green">
                                        For Rent
                                    </div>
                                    <div className="banner-actions">
                                        <button className="banner-actions-btn">
                                            <ion-icon name="location" />
                                            <address>
                                                Belmont Gardens, Chicago
                                            </address>
                                        </button>
                                        <button className="banner-actions-btn">
                                            <ion-icon name="camera" />
                                            <span>4</span>
                                        </button>
                                        <button className="banner-actions-btn">
                                            <ion-icon name="film" />
                                            <span>2</span>
                                        </button>
                                    </div>
                                </figure>
                                <div className="card-content">
                                    {/* <div className="card-price">
                                        <strong>$34,900</strong>/Month
                                    </div> */}
                                    <h3 className="h3 card-title">
                                        <a href="#">
                                            Ceramic Floor Finishing for Kitchen
                                            and Bathrooms
                                        </a>
                                    </h3>
                                    <p className="card-text">
                                        This project involves the installation
                                        of ceramic flooring in the kitchen and
                                        bathrooms using high-quality
                                        water-resistant and slip-resistant
                                        ceramic tiles. Light-colored tiles are
                                        chosen to complement the modern kitchen
                                        décor and luxury bathrooms. The tiles
                                        are installed consistently to ensure
                                        continuity of design across all spaces,
                                        with precise grout lines to prevent
                                        future cracks. The project also includes
                                        the installation of marble thresholds at
                                        room entrances to prevent water leakage.
                                    </p>
                                    <ul className="card-list">
                                        {/* <li className="card-item">
                                            <strong>3</strong>
                                            <ion-icon name="bed-outline" />
                                            <span>Bedrooms</span>
                                        </li> */}
                                        <li className="card-item">
                                            <strong>20</strong>
                                            <ion-icon name="calendar-outline" />
                                            <span>Days</span>
                                        </li>
                                        <li className="card-item">
                                            <strong>250</strong>
                                            <ion-icon name="square-outline" />
                                            <span>Square Ft</span>
                                        </li>
                                    </ul>
                               <button>     <a href="/finishing" className="btn">Details</a></button>

                                </div>
                                <div className="card-footer">
                                    <div className="card-author">
                                        <figure className="author-avatar">
                                            <img
                                                src={`${company4}`}
                                                alt="William Seklo"
                                                className="w-100"
                                            />
                                        </figure>
                                        <div>
                                            <p className="author-name">
                                                <a href="#">William Seklo</a>
                                            </p>
                                            <p className="author-title">
                                                Estate Agents
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card-footer-actions">
                                        <button className="card-footer-actions-btn">
                                            <ion-icon name="resize-outline" />
                                        </button>
                                        <button className="card-footer-actions-btn">
                                            <ion-icon name="heart-outline" />
                                        </button>
                                        <button className="card-footer-actions-btn">
                                            <ion-icon name="add-circle-outline" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
     
                </div>
            </section>
        </>
    );
}

export default Property;
