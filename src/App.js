import "./App.css";
import "./style.css";
import { useState } from "react";

// store

// context
import themeContext from "./contexts/themeContext";
import languageContext from "./contexts/languageContext";

// route
import Router from "./routes/Router";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState("en");

    return (
        <>
            <themeContext.Provider value={{ darkMode, setDarkMode }}>
                <languageContext.Provider value={{ language, setLanguage }}>
                    <Router />
                </languageContext.Provider>
            </themeContext.Provider>
        </>
    );
}

export default App;
