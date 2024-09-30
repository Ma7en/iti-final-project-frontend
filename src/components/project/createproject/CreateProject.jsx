// import
import React, { useEffect, useState } from "react";

//
import "./CreateProject.css";

// utils
import api from "../../../utils/api";

// project components
import DetailProject from "../detailproject/DetailProject";
import { useNavigate } from "react-router-dom";
import { App_User } from "../../../utils/constants";

function CreateProject() {
    const navigate = useNavigate();

    const [projects, setProjects] = useState([]);

    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [meter, setMeter] = useState("");
    const [day, setDay] = useState("");

    const [image, setImage] = useState("");

    //
    // const accessToken = localStorage.getItem("access");
    // console.log("Access Token:", accessToken);

    useEffect(() => {
        // getProjects();
    }, []);

    // const getProjects = async () => {
    //     try {
    //         const response = await api.get("/api/projects/", {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("access")}`,
    //             },
    //         });
    //         setProjects(response.data);
    //         console.log(`Data:`, response.data);
    //     } catch (error) {
    //         console.log(`Error Get Projects:`, error.message);
    //         if (error.response && error.response.status === 401) {
    //             console.log("Unauthorized, attempting to refresh token...");
    //             // await refreshAccessToken(); // محاولة تجديد التوكن
    //         }
    //     }
    // };

    const deleteProject = (id) => {
        api.delete(`/api/projects/delete/${id}/`)
            .then((response) => {
                if (response.status === 204) {
                    alert("(Project) deleted!");
                } else {
                    alert("Failed to delete (Project).");
                }
                // getProjects();
            })
            .catch((error) => {
                // alert(error);
                console.log(`Error deleting project`, error.message);
            });
    };

    const createProject = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("title", title);
        formData.append("details", details);
        formData.append("meter", meter);
        if (image) {
            formData.append("image", image);
        }

        try {
            const response = await api.post("/api/projects/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem("access")}`, // استخدام التوكن
                },
            });
            if (response.status === 201) {
                alert("Project created!");
                // getProjects(); // جلب المشاريع بعد الإنشاء
            } else {
                alert("Failed to create project.");
            }
        } catch (error) {
            console.error("Error creating Project:", error.message);
            if (error.response && error.response.status === 401) {
                console.log("Unauthorized, attempting to refresh token...");
                // await refreshAccessToken(); // محاولة تجديد التوكن
                // بعد التجديد، يمكنك إعادة المحاولة لإنشاء المشروع إذا كنت ترغب في ذلك
            }
        }
    };

    return (
        <>
            <div className="createproject">
                <div className="container">
                    <div className="section-title">
                        <h1 className="h2">Create project</h1>
                    </div>

                    <div>
                        {projects.map((project, index) => (
                            <DetailProject
                                project={project}
                                onDelete={deleteProject}
                                key={index}
                            />
                        ))}
                    </div>

                    <form onSubmit={createProject}>
                        <div>
                            <label htmlFor="title">Title:</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                required
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                        </div>

                        <div>
                            <label htmlFor="details">details:</label>
                            <textarea
                                id="details"
                                name="details"
                                required
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                            ></textarea>
                            <br />
                        </div>

                        <div>
                            <label htmlFor="amount">meter:</label>
                            <input
                                type="number"
                                id="meter"
                                name="meter"
                                required
                                value={meter}
                                onChange={(e) => setMeter(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="amount">Days:</label>
                            <input
                                type="number"
                                id="meter"
                                name="meter"
                                required
                                value={day}
                                onChange={(e) => setDay(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="image">Image:</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </div>

                        <button
                            // disabled
                            type="submit"
                            className="btn btn-primary w-100"
                            onClick={() => {
                                navigate(`/viewproject`);
                            }}
                            
                        >
                            Submit
                        </button>
                    </form>

                    <div className="other">
                        <div>
                            <button
                                className="btn btn-link "
                                onClick={() => {
                                    navigate(`/${App_User}/profile`);
                                }}
                            >
                                Profile
                            </button>

                            <button
                                className="btn btn-link "
                                onClick={() => {
                                    navigate(`/`);
                                }}
                            >
                                Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateProject;
