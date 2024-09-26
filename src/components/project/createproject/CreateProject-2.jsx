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

    // const getProjects = async () => {
    //     const accessToken = localStorage.getItem("access");

    //     if (!accessToken) {
    //         console.log("No access token found. Redirecting to login.");
    //         // يمكنك إعادة توجيه المستخدم إلى صفحة تسجيل الدخول إذا لم يكن الـ access token غير موجود
    //         return;
    //     }

    //     try {
    //         const response = await api.get("/api/projects/", {
    //             headers: {
    //                 Authorization: `Bearer ${accessToken}`, // استخدام الـ access token في الطلب
    //             },
    //         });

    //         setProjects(response.data); // تعيين البيانات
    //         console.log("Projects:", response.data);
    //     } catch (error) {
    //         console.error("Error fetching projects:", error.message);

    //         if (error.response && error.response.status === 401) {
    //             console.log("Access token expired. Trying to refresh...");
    //             refreshAccessToken(); // استدعاء الدالة لتحديث الـ token عند انتهاء صلاحيته
    //         }
    //     }
    // };

    // const refreshAccessToken = async () => {
    //     const refreshToken = localStorage.getItem("refresh");

    //     if (!refreshToken) {
    //         console.log("No refresh token found. Redirecting to login.");
    //         // إعادة توجيه المستخدم لتسجيل الدخول مجددًا إذا لم يكن الـ refresh token موجودًا
    //         return;
    //     }

    //     try {
    //         const response = await api.post("/api/token/refresh/", {
    //             refresh: refreshToken,
    //         });

    //         // تحديث الـ access token الجديد
    //         localStorage.setItem("access", response.data.access);
    //         console.log("Access token refreshed successfully.");

    //         // بعد تحديث الـ access token بنجاح، استدعي getProjects مرة أخرى لجلب البيانات
    //         getProjects();
    //     } catch (refreshError) {
    //         console.error("Error refreshing token:", refreshError.message);
    //         // في حال فشل التحديث، قد ترغب في تسجيل المستخدم خروجًا أو إعادة توجيهه لتسجيل الدخول
    //     }
    // };

    const getProjects = async () => {
        try {
            const response = await api.get("/api/projects/", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access")}`,
                },
            });
            setProjects(response.data);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                // Token refresh logic here
                try {
                    const refreshResponse = await api.post(
                        "/api/token/refresh/",
                        {
                            refresh: localStorage.getItem("refresh"),
                        }
                    );
                    localStorage.setItem("access", refreshResponse.data.access);
                    // Retry fetching projects
                    getProjects();
                } catch (refreshError) {
                    console.error(
                        "Token refresh failed:",
                        refreshError.message
                    );
                }
            } else {
                console.error("Error fetching projects:", error.message);
            }
        }
    };

    const deleteProject = async (id) => {
        try {
            const response = await api.delete(`/api/projects/delete/${id}/`);
            if (response.status === 204) {
                alert("(Project) deleted!");
            } else {
                alert("Failed to delete (Project).");
            }
            getProjects();
        } catch (error) {
            console.log("Error deleting project:", error.message);
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
            const response = await api.post("/api/projects/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem("access")}`, // تأكد من إضافة الـ token عند إنشاء المشروع
                },
            });

            if (response.status === 201) {
                alert("Project created!");
            } else {
                alert("Failed to create Project.");
            }

            getProjects(); // إعادة جلب المشاريع بعد الإضافة
        } catch (error) {
            console.log("Error creating Project:", error.message);
        }
    };

    useEffect(() => {
        getProjects(); // جلب المشاريع عند تحميل الصفحة
    }, []);

    return (
        <>
            <div>
                <div>
                    <h2>Projects</h2>
                    {projects.map((project, index) => (
                        <DetailProject
                            project={project}
                            onDelete={deleteProject}
                            key={index}
                        />
                    ))}
                </div>

                <h2>Create a Project</h2>
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
                        <label htmlFor="details">Details:</label>
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
                        <label htmlFor="amount">Amount:</label>
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

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}

export default CreateProject;
