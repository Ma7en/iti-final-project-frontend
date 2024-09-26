// import
import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// constants
import { App_Url, App_User, App_Company } from "../utils/constants";

// Loader
import Loader from "../ui/loader/Loader";

// lazy loading pages
import NotFound from "../pages/app/NotFound/NotFound";
import HomepageLayout from "../components/layouts/Homepagelayout";
import HomePage from "../pages/app/home/HomePage";
// import ProtectedRouteUser from "../ui/auth/ProtectedRoute-";

// ui components
import ProtectedRoute from "../ui/auth/ProtectedRoute";
import Login from "../ui/login/Login";
import Logout from "../ui/logout/Logout";
import Signup from "../ui/signup/Signup";
import Profile from "../ui/profile/Profile";
import Contact from "../ui/contact/Contact"
// import About from "../pages/app/about/About";
import ResetPassword from "../ui/resetpassword/ResetPassword";

// user components
import AppUser from "../pages/user/AppUser";
import AppUserLayout from "../pages/user/AppUserLayout";

// project components
import CreateProject from "../components/project/createproject/CreateProject";

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

                        {/* ProtectedRoute */}
                        <Route
                            path="/user"
                            element={
                                <ProtectedRoute>
                                    <AppUserLayout />
                                </ProtectedRoute>
                            }
                        >
                            <Route
                                index
                                element={
                                    <Navigate
                                        replace
                                        to={`${App_User}/profile`}
                                    />
                                }
                            />
                            <Route exact path="/user" component={Router} />
                            <Route path={`${App_User}`} element={<AppUser />} />
                            <Route
                                path={`${App_User}/profile`}
                                element={<AppUser />}
                            />
                            <Route
                                path={`/userprofile`}
                                element={<AppUser />}
                            />

                            {/* project */}
                            <Route
                                path={`${App_User}/createproject`}
                                element={<CreateProject />}
                            />
                        </Route>

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
                             <Route path="/contact" element={<Contact/>}/>
                             {/* <Route path="/about" element={<About/>}/> */}

                            {/* -- */}
                            {/* about */}
                            {/* contact */}

                            {/* Verify user */}
                            <Route path="/login" element={<Login />} />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/profile" element={<Profile />} />

                            <Route
                                path="/resetpassword"
                                element={<ResetPassword />}
                            />
                        </Route>

                        {/* NotFound or 404 Error pages */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    );
}

export default Router;
