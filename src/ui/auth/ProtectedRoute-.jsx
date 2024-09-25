// import
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ui component
import Loader from "../loader/Loader";

// styled component
const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`;

function ProtectedRouteUser({ children }) {
    const navigate = useNavigate();

    // 1) authenticated user
    // const { isLoading, isAuthenticated } = useUser();
    const { isLoading, isAuthenticated } = [""];

    // 2) is thre is no authenticated user, redirect to the /login
    useEffect(
        function () {
            if (!isAuthenticated && !isLoading) {
                // navigate("/login");
                navigate("/home");
            }
            // else if (isAuthenticated) {
            //     // Redirect to the specified URL if authenticated
            //     navigate("/app/account");
            // }
        },
        [isAuthenticated, isLoading, navigate]
    );

    // 3) while loading , show a spinner
    if (isLoading)
        return (
            <>
                <FullPage>
                    <Loader />;
                </FullPage>
            </>
        );

    // 4) if there is a user, render the app
    if (isAuthenticated) return children;
}

export default ProtectedRouteUser;
