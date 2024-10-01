// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// // import style
// import "./ListProject.css";

// // bootstrap components
// import { Button } from "react-bootstrap";

// // utils
// import apiInstance from "../../../utils/axios";
// import { App_Company } from "../../../utils/constants";

// // project components
// import ProjectComponents from "../projectcomponents/ProjectComponents";
// import NotProject from "../notproject/NotProject";

// // ui components
// import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
// import Loader from "../../../ui/loader/Loader";

// function ListProject() {
//     const [projects, setProjects] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const response = await apiInstance.get("project/list/");
//                 setProjects(response.data);
//             } catch (error) {
//                 console.error("Error fetching projects:", error);
//             }
//         };
//         fetchProjects();
//     }, []);

//     if (!projects) return <Loader />;

//     return (
//         <>
//             <ScrollToTopPages />
//             <div className="listproject">
//                 <div className="container">
//                     <div className="section-title">
//                         <h2 className="h2">List Projects</h2>
//                     </div>

//                     <div className="content">
//                         <ul className="list">
//                             {projects.length > 0 ? (
//                                 projects.map((project, index) => (
//                                     <ProjectComponents
//                                         project={project}
//                                         key={index}
//                                     />
//                                 ))
//                             ) : (
//                                 <NotProject />
//                             )}
//                         </ul>

//                         <div className="back">
//                             <Button
//                                 className="btn update-btn"
//                                 onClick={() => {
//                                     // handleEdit(proj)
//                                     navigate(`/${App_Company}/profile`);
//                                 }}
//                             >
//                                 Back to Profile
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ListProject;




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import style
import "./ListProject.css";

// bootstrap components
import { Button } from "react-bootstrap";

// utils
import apiInstance from "../../../utils/axios";
import { App_Company } from "../../../utils/constants";

// project components
import ProjectComponents from "../projectcomponents/ProjectComponents";

// ui components
import ScrollToTopPages from "../../../ui/scrolltotoppages/ScrollToTopPages";
import Loader from "../../../ui/loader/Loader";

function ListProject() {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await apiInstance.get("project/list/");
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };
        fetchProjects();
    }, []);

    if (!projects) return <Loader />;

    return (
        <>
            <ScrollToTopPages />
            <div className="listproject">
                <div className="container">
                    <div className="section-title">
                        <h2 className="h2">List Projects</h2>
                    </div>

                    <div className="content">
                        <ul className="list">
                            {projects.length > 0 ? (
                                projects.map((project, index) => (
                                    <ProjectComponents
                                        project={project}
                                        key={index}
                                    />
                                ))
                            ) : (
                                <li>No projects available</li> // Placeholder for no projects
                            )}
                        </ul>

                        <div className="back">
                            <Button
                                className="btn update-btn"
                                onClick={() => {
                                    navigate(`/${App_Company}/profile`);
                                }}
                            >
                                Back to Profile
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListProject;
