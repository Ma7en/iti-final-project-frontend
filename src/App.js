import "./App.css";
import "./style.css";
import { useState } from "react";

// store

// context
import themeContext from "./contexts/themeContext";
import languageContext from "./contexts/languageContext";
import vars from "./contexts/vars";

// route
import Router from "./routes/Router";
import MainWrapper from "./components/layouts/MainWrapper";
// import ChatBotCom from "./ui/chatbot/ChatBot";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState("en");
    const [packageA, setPackageA] = useState("");
    const [loginLog, setLoginLog] = useState(false);

    return (
        <>
            <themeContext.Provider value={{ darkMode, setDarkMode }}>
                <languageContext.Provider value={{ language, setLanguage }}>
                    <vars.Provider
                        value={{ packageA, setPackageA, loginLog, setLoginLog }}
                    >
                        <MainWrapper>
                            <Router />
                        </MainWrapper>
                        {/* <ChatBotCom /> */}
                    </vars.Provider>
                </languageContext.Provider>
            </themeContext.Provider>
        </>
    );
}

export default App;
