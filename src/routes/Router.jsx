// import
import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Loader
import Loader from "../ui/loader/Loader";
import NotFound from "../pages/app/NotFound/NotFound";
import HomepageLayout from "../components/layouts/Homepagelayout";

// lazy loading pages
import HomePage from "../pages/app/home/HomePage";
import ProtectedRouteUser from "../ui/auth/ProtectedRoute";

// constants
import { App_Url, App_User, App_Company } from "../utils/constants";
import Login from "../ui/login/Login";
import Signup from "../ui/signup/Signup";
import ResetPassword from "../ui/resetpassword/ResetPassword";

function Router() {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <BrowserRouter>
                    <Routes>
                        {/* <Route
                            // path="app"
                            element={
                                <ProtectedRouteUser>
                                    <AppLayout />
                                </ProtectedRouteUser>
                            }
                        >
                            <Route
                                index
                                element={
                                    <Navigate replace to={`${App_User}/home`} />
                                }
                            />
                            <Route exact path="/app" component={Router} />
                            <Route
                                path={`${App_User}/home`}
                                element={<AppHome />}
                            />
                        </Route> */}

                        <Route path="/" element={<HomepageLayout />}>
                            {/* home page */}
                            <Route path="/" element={<HomePage />} />
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/homeverse" element={<HomePage />} />
                            <Route path="/verse" element={<HomePage />} />
                            <Route
                                path="/homeverseapp"
                                element={<HomePage />}
                            />

                            {/* Verify user */}
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route
                                path="/resetpassword"
                                element={<ResetPassword />}
                            />
                        </Route>

                        {/* NotFound or Error pages */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    );
}

export default Router;
