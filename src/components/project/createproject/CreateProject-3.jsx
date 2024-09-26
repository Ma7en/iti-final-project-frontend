import React, { useEffect, useState } from "react";
import api from "../../../utils/api";
import DetailProject from "../detailproject/DetailProject";

function CreateProject() {
    const [projects, setProjects] = useState([]);
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [amount, setAmount] = useState("");
    const [image, setImage] = useState("");

    const getProjects = async () => {
        console.log("Fetching projects..."); // تسجيل الوقت الذي يتم فيه استدعاء الدالة
        try {
            const accessToken = localStorage.getItem("access");
            const response = await api.get("/api/projects/", {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setProjects(response.data);
            console.log("Projects fetched:", response.data);
        } catch (error) {
            console.error("Error fetching projects:", error.message);
            if (error.response && error.response.status === 401) {
                console.log("Unauthorized, refreshing token...");
                refreshAccessToken();
            }
        }
    };

    const refreshAccessToken = async () => {
        const refreshToken = localStorage.getItem("refresh");
        if (!refreshToken) {
            console.log("No refresh token found.");
            return;
        }

        try {
            const refreshResponse = await api.post("/api/token/refresh/", {
                refresh: refreshToken,
            });
            localStorage.setItem("access", refreshResponse.data.access);
            console.log("Access token refreshed successfully.");
            getProjects(); // استدعاء getProjects بعد تحديث التوكن
        } catch (refreshError) {
            console.error("Token refresh failed:", refreshError.message);
        }
    };

    const deleteProject = async (id) => {
        try {
            const response = await api.delete(`/api/projects/delete/${id}/`);
            if (response.status === 204) {
                alert("Project deleted!");
                getProjects(); // استدعاء getProjects بعد حذف المشروع
            } else {
                alert("Failed to delete project.");
            }
        } catch (error) {
            console.error("Error deleting project:", error.message);
        }
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
            const accessToken = localStorage.getItem("access");
            const response = await api.post("/api/projects/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.status === 201) {
                alert("Project created!");
                getProjects(); // استدعاء getProjects بعد إنشاء المشروع
            } else {
                alert("Failed to create project.");
            }
        } catch (error) {
            console.error("Error creating project:", error.message);
        }
    };

    useEffect(() => {
        console.log("Component mounted, fetching projects...");
        getProjects(); // جلب المشاريع عند تحميل الصفحة
    }, []); // تأكد من أن قائمة التبعيات فارغة

    return (
        <div>
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <DetailProject
                    project={project}
                    onDelete={deleteProject}
                    key={index}
                />
            ))}

            <h2>Create a Project</h2>
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
                    <label htmlFor="details">Details:</label>
                    <textarea
                        id="details"
                        name="details"
                        required
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="amount">Amount:</label>
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
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default CreateProject;
