import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// bootstrap
import { Button } from "react-bootstrap";

// context
import themeContext from "../../../contexts/themeContext";
import languageContext from "../../../contexts/languageContext";

function NotFound() {
    const navigate = useNavigate();

    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    return (
        <>
            <div
                className={`${darkMode ? "text-bg-dark" : "text-bg-light"}`}
                id="NotFound"
            >
                <div
                    className="container"
                    style={{
                        minHeight: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "30px",
                    }}
                >
                    <div className="fs-1 fw-bold">
                        <h2>Error 404 NotFound</h2>
                    </div>

                    <div>
                        <Button
                            className="bg-warning fs-3 text-capitalize px-5 py-3"
                            variant="warning"
                            onClick={() => {
                                navigate(`/`);
                            }}
                        >
                            back to home
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NotFound;
