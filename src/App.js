import "./App.css";
import "./style.css";
import { useState } from "react";

// store

// context
import themeContext from "./contexts/themeContext";
import languageContext from "./contexts/languageContext";

// route
import Router from "./routes/Router";
import MainWrapper from "./components/layouts/MainWrapper";
// import ChatBotCom from "./ui/chatbot/ChatBot";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState("en");

    return (
        <>
            <themeContext.Provider value={{ darkMode, setDarkMode }}>
                <languageContext.Provider value={{ language, setLanguage }}>
                    <MainWrapper>
                        <Router />
                    </MainWrapper>
                    {/* <ChatBotCom /> */}
                </languageContext.Provider>
            </themeContext.Provider>
        </>
    );
}

export default App;
