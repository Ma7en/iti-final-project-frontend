// import
import React, { useEffect, useState } from "react";

// utils
import api from "../../../utils/api";

// project components
import DetailProject from "../detailproject/DetailProject";

function CreateProject() {
    const [projects, setProjects] = useState([]);

    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [amount, setAmount] = useState("");
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
        formData.append("amount", amount);
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
            <div>
                <div>
                    <h2>Notes</h2>
                    {projects.map((project, index) => (
                        <DetailProject
                            project={project}
                            onDelete={deleteProject}
                            key={index}
                        />
                    ))}
                </div>

                <h2>Create a Note</h2>
                <form onSubmit={createProject}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <br />
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
                        <br />
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
                        <label htmlFor="amount">amount:</label>
                        <br />
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            required
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="image">Image:</label>
                        <br />
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>

                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </>
    );
}

export default CreateProject;
