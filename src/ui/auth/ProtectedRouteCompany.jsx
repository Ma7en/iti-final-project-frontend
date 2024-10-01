// Import the 'Navigate' component from the 'react-router-dom' library.
import { Navigate, useNavigate } from "react-router-dom";

// Import the 'useAuthStore' function from a custom 'auth' store.
import { useAuthStore } from "../../store/auth";
import { useEffect, useState } from "react";
import useUserData from "../../plugin/useUserData";
import apiInstance from "../../utils/axios";

// Define the 'PrivateRoute' component as a functional component that takes 'children' as a prop.
const ProtectedRouteCompany = ({ children }) => {
    // Use the 'useAuthStore' hook to check the user's authentication status.
    // It appears to be using a state management solution like 'zustand' or 'mobx-state-tree'.
    const loggedIn = useAuthStore((state) => state.isLoggedIn)();

    // company
    const [profileData, setProfileData] = useState();
    const userId = useUserData()?.user_id;

    const fetchProfile = () => {
        apiInstance.get(`user/profile/${userId}/`).then((res) => {
            setProfileData(res.data);
        });
    };
    useEffect(() => {
        fetchProfile();
    }, []);

    // console.log(`--->`, profileData?.user?.is_superuser);
    if (!profileData?.user?.is_superuser) return <Navigate to="/admin" />;

    // Conditionally render the children if the user is authenticated.
    // If the user is not authenticated, redirect them to the login page.
    return loggedIn ? <>{children}</> : <Navigate to="/admin" />;
};

// Export the 'ProtectedRouteCompany' component to make it available for use in other parts of the application.
export default ProtectedRouteCompany;
