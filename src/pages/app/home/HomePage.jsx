// import
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// centext
import themeContext from "../../../contexts/themeContext";
import languageContext from "../../../contexts/languageContext";
import Footer from "../../../ui/footer/Footer";
import Cta from "../../../ui/cta/Cta";
import Hero from "../../../ui/hero/Hero";
import About from "../../../ui/about/About";
import Service from "../../../ui/service/Service";
import Property from "../../../components/property/Property";
import Features from "../../../ui/features/Features";
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";

// import components

function HomePage() {
    const navigate = useNavigate();

    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    // if (!moviesList) return <Loader />;

    return (
        <>
            <ScrollToTopPages />
            <main>
                <article>
                    <Hero />
                    <About />
                    <Service />
                    <Property />
                    <Features />
                </article>
            </main>
            <Cta />
            <Footer />
        </>
    );
}

export default HomePage;
