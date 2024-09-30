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

// ui admin company
import ProtectedRouteCompany from "../ui/auth/ProtectedRouteCompany";
import AppCompanyLayout from "../pages/company/AppCompanyLayout";
import LoginAdmin from "../ui/loginadmin/LoginAdmin";
import AppCompany from "../pages/company/AppCompany";

// ui components
import ProtectedRoute from "../ui/auth/ProtectedRoute";
import Login from "../ui/login/Login";
import Logout from "../ui/logout/Logout";
import Signup from "../ui/signup/Signup";
import ResetPassword from "../ui/resetpassword/ResetPassword";

// user components
import AppUser from "../pages/user/AppUser";
import AppUserLayout from "../pages/user/AppUserLayout";
import EditProfile from "../pages/user/edit/EditProfile";

// project components
import AboutPage from "../pages/app/aboutpages/AboutPage";
import Contact from "../ui/contact/Contact";

// ui Category components
import ListCategory from "../components/categories/listcategory/ListCategory";
import CreateCategory from "../components/categories/createcategory/CreateCategory";
import EditCategory from "../components/categories/editcategory/EditCategory";

// ui project components
import FinishingDetails from "../pages/app/finishingPage/FinishingDetails";
import ServicePage from "../pages/app/servicePage/ServicePage";
import WriteDetails from "../pages/app/writeDetails/WriteDetails";
import ServiceDetails from "../pages/app/serviceDetails/ServiceDetails";

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

                        {/* company */}
                        <Route
                            path="/company"
                            element={
                                <ProtectedRouteCompany>
                                    <AppCompanyLayout />
                                </ProtectedRouteCompany>
                            }
                        >
                            <Route
                                index
                                element={
                                    <Navigate
                                        replace
                                        to={`${App_Company}/profile`}
                                    />
                                }
                            />
                            <Route exact path="/company" component={Router} />
                            <Route
                                path={`${App_Company}`}
                                element={<AppCompany />}
                            />
                            <Route
                                path={`/${App_Company}/profile`}
                                element={<AppCompany />}
                            />
                            <Route
                                path={`/${App_Company}/${App_Company}/profile`}
                                element={<AppCompany />}
                            />
                            <Route
                                path={`/companyprofile`}
                                element={<AppCompany />}
                            />

                            {/* categories */}
                            {/* list category */}
                            <Route
                                path={`/${App_Company}/categories`}
                                element={<ListCategory />}
                            />
                            <Route
                                path={`/${App_Company}/listcategories`}
                                element={<ListCategory />}
                            />
                            <Route
                                path={`/${App_Company}/categories/list`}
                                element={<ListCategory />}
                            />

                            {/* create category */}
                            <Route
                                path={`/${App_Company}/category/create`}
                                element={<CreateCategory />}
                            />
                            
                            {/* update category */}
                            {/* <Route
                                path={`/${App_Company}/updatecategory`}
                                element={<EditCategory />}
                            /> */}

                            {/* project */}
                            {/* <Route
                                path={`${App_User}/createproject`}
                                element={<CreateProject />}
                            /> */}
                        </Route>

                        {/* user */}
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
                                path={`/${App_User}/profile`}
                                element={<AppUser />}
                            />
                            <Route
                                path={`/userprofile`}
                                element={<AppUser />}
                            />

                            {/* edit profile */}
                            <Route
                                path={`/${App_User}/editprofile`}
                                element={<EditProfile />}
                            />
                            <Route
                                path={`/${App_User}/profileedit`}
                                element={<EditProfile />}
                            />
                        </Route>

                        <Route path="/" element={<HomepageLayout />}>
                            {/* home page */}
                            <Route path="/" element={<HomePage />} />
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/homeverse" element={<HomePage />} />
                            <Route path="/verse" element={<HomePage />} />
                            <Route path="/verseapp" element={<HomePage />} />
                            <Route
                                path="/homeverseapp"
                                element={<HomePage />}
                            />

                            {/* pages */}
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/about" element={<AboutPage />} />

                            {/* project */}
                            <Route
                                path="/createcategory"
                                element={<CreateCategory />}
                            />
                            <Route
                                path="/editCategory"
                                element={<EditCategory />}
                            />

                            <Route
                                path="/finishing"
                                element={<FinishingDetails />}
                            />
                            <Route
                                path="/servicePage"
                                element={<ServicePage />}
                            />
                            <Route
                                path="/writeDetails"
                                element={<WriteDetails />}
                            />
                            <Route
                                path="/servicedetails"
                                element={<ServiceDetails />}
                            />

                            {/* Verify admin */}
                            <Route path="/admin" element={<LoginAdmin />} />

                            {/* Verify user */}
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route
                                path="/resetpassword"
                                element={<ResetPassword />}
                            />
                            <Route path="/logout" element={<Logout />} />
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
