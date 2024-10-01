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
import UpdateProfile from "../pages/user/updateprofile/UpdateProfile";

// project components
import AboutPage from "../pages/app/aboutpages/AboutPage";
import Contact from "../ui/contact/Contact";

// ui Category components
import ListCategory from "../components/categories/listcategory/ListCategory";
import CreateCategory from "../components/categories/createcategory/CreateCategory";
import DetailsCategory from "../components/categories/detailscategory/DetailsCategory";
import UpdateCategory from "../components/categories/updatecategory/UpdateCategory";

// ui project components
import CreateProject from "../components/project/createproject/CreateProject";
import FinishingDetails from "../pages/app/finishingPage/FinishingDetails";
import ServicePage from "../pages/app/servicePage/ServicePage";
import WriteDetails from "../pages/app/writeDetails/WriteDetails";
import ServiceDetails from "../pages/app/serviceDetails/ServiceDetails";
import ListProject from "../components/project/listproject/ListProject";
import DetailsProject from "../components/project/detailsproject/DetailsProject";
import UpdateProject from "../components/project/updateproject/UpdateProject";

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
                            path={`${App_Company}`}
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
                            <Route
                                exact
                                path={`${App_Company}`}
                                component={Router}
                            />
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
                                path={`/${App_Company}profile`}
                                element={<AppCompany />}
                            />
                            <Route
                                path={`/${App_Company}-profile`}
                                element={<AppCompany />}
                            />
                            <Route
                                path={`/${App_Company}/companyprofile`}
                                element={<AppCompany />}
                            />
                            <Route
                                path={`/${App_Company}/company-profile`}
                                element={<AppCompany />}
                            />

                            {/* categories or services */}
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
                            <Route
                                path={`/${App_Company}/list/categories`}
                                element={<ListCategory />}
                            />
                            <Route
                                path={`/${App_Company}/services`}
                                element={<ListCategory />}
                            />
                            <Route
                                path={`/${App_Company}/listservices`}
                                element={<ListCategory />}
                            />
                            <Route
                                path={`/${App_Company}/services/list`}
                                element={<ListCategory />}
                            />
                            <Route
                                path={`/${App_Company}/list/services`}
                                element={<ListCategory />}
                            />

                            {/* create category */}
                            <Route
                                path={`/${App_Company}/createcategory`}
                                element={<CreateCategory />}
                            />
                            <Route
                                path={`/${App_Company}/categorycreate`}
                                element={<CreateCategory />}
                            />
                            <Route
                                path={`/${App_Company}/category/create`}
                                element={<CreateCategory />}
                            />
                            <Route
                                path={`/${App_Company}/create/category`}
                                element={<CreateCategory />}
                            />
                            <Route
                                path={`/${App_Company}/createservice`}
                                element={<CreateCategory />}
                            />
                            <Route
                                path={`/${App_Company}/servicecreate`}
                                element={<CreateCategory />}
                            />
                            <Route
                                path={`/${App_Company}/service/create`}
                                element={<CreateCategory />}
                            />
                            <Route
                                path={`/${App_Company}/create/service`}
                                element={<CreateCategory />}
                            />

                            {/* update category */}
                            <Route
                                path={`/${App_Company}/updatecategory/:id`}
                                element={<UpdateCategory />}
                            />
                            <Route
                                path={`/${App_Company}/categoryupdate/:id`}
                                element={<UpdateCategory />}
                            />
                            <Route
                                path={`/${App_Company}/category/update/:id`}
                                element={<UpdateCategory />}
                            />
                            <Route
                                path={`/${App_Company}/update/category/:id`}
                                element={<UpdateCategory />}
                            />
                            <Route
                                path={`/${App_Company}/updateservice/:id`}
                                element={<UpdateCategory />}
                            />
                            <Route
                                path={`/${App_Company}/serviceupdate/:id`}
                                element={<UpdateCategory />}
                            />
                            <Route
                                path={`/${App_Company}/service/update/:id`}
                                element={<UpdateCategory />}
                            />
                            <Route
                                path={`/${App_Company}/update/service/:id`}
                                element={<UpdateCategory />}
                            />

                            {/* details category */}
                            <Route
                                path={`/${App_Company}/detailscategory/:id`}
                                element={<DetailsCategory />}
                            />
                            <Route
                                path={`/${App_Company}/categorydetails/:id`}
                                element={<DetailsCategory />}
                            />
                            <Route
                                path={`/${App_Company}/category/details/:id`}
                                element={<DetailsCategory />}
                            />
                            <Route
                                path={`/${App_Company}/details/category/:id`}
                                element={<DetailsCategory />}
                            />
                            <Route
                                path={`/${App_Company}/detailsservice/:id`}
                                element={<DetailsCategory />}
                            />
                            <Route
                                path={`/${App_Company}/servicedetails/:id`}
                                element={<DetailsCategory />}
                            />
                            <Route
                                path={`/${App_Company}/service/details/:id`}
                                element={<DetailsCategory />}
                            />
                            <Route
                                path={`/${App_Company}/details/service/:id`}
                                element={<DetailsCategory />}
                            />

                            {/* project */}
                            {/* create project */}
                            <Route
                                path={`/${App_Company}/createproject`}
                                element={<CreateProject />}
                            />
                            <Route
                                path={`/${App_Company}/projectcreate`}
                                element={<CreateProject />}
                            />
                            <Route
                                path={`/${App_Company}/project/create`}
                                element={<CreateProject />}
                            />
                            <Route
                                path={`/${App_Company}/create/project`}
                                element={<CreateProject />}
                            />
                            <Route
                                path={`/${App_Company}/companycreateproject`}
                                element={<CreateProject />}
                            />
                            <Route
                                path={`/${App_Company}/companyprojectcreate`}
                                element={<CreateProject />}
                            />
                            <Route
                                path={`/${App_Company}/companycreate/project`}
                                element={<CreateProject />}
                            />
                            <Route
                                path={`/${App_Company}/companyproject/create`}
                                element={<CreateProject />}
                            />

                            {/* update project */}
                            <Route
                                path={`/${App_Company}/updateproject/:id`}
                                element={<UpdateProject />}
                            />
                            <Route
                                path={`/${App_Company}/projectupdate/:id`}
                                element={<UpdateProject />}
                            />
                            <Route
                                path={`/${App_Company}/update/project/:id`}
                                element={<UpdateProject />}
                            />
                            <Route
                                path={`/${App_Company}/project/update/:id`}
                                element={<UpdateProject />}
                            />
                            <Route
                                path={`/${App_Company}/companyproject/update/:id`}
                                element={<UpdateProject />}
                            />
                            <Route
                                path={`/${App_Company}/projectcompany/update/:id`}
                                element={<UpdateProject />}
                            />
                            <Route
                                path={`/${App_Company}/projectcompanyupdate/:id`}
                                element={<UpdateProject />}
                            />
                            <Route
                                path={`/${App_Company}/updateprojectcompany/:id`}
                                element={<UpdateProject />}
                            />

                            {/* list project */}
                            <Route
                                path={`/${App_Company}/listproject`}
                                element={<ListProject />}
                            />
                            <Route
                                path={`/${App_Company}/list/project`}
                                element={<ListProject />}
                            />
                            <Route
                                path={`/${App_Company}/projectlist`}
                                element={<ListProject />}
                            />
                            <Route
                                path={`/${App_Company}/project/list`}
                                element={<ListProject />}
                            />

                            {/* details project */}
                            <Route
                                path={`/${App_Company}/detailsproject/:id`}
                                element={<DetailsProject />}
                            />
                            <Route
                                path={`/${App_Company}/details/project/:id`}
                                element={<DetailsProject />}
                            />
                            <Route
                                path={`/${App_Company}/projectdetails/:id`}
                                element={<DetailsProject />}
                            />
                            <Route
                                path={`/${App_Company}/project/details/:id`}
                                element={<DetailsProject />}
                            />
                            <Route
                                path={`/${App_Company}/companyproject/details/:id`}
                                element={<DetailsProject />}
                            />
                        </Route>

                        {/* user */}
                        <Route
                            path={`/${App_User}`}
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

                            <Route
                                exact
                                path={`/${App_User}`}
                                component={Router}
                            />
                            <Route path={`${App_User}`} element={<AppUser />} />
                            <Route
                                path={`/${App_User}/profile`}
                                element={<AppUser />}
                            />
                            <Route
                                path={`/${App_User}/${App_User}/profile`}
                                element={<AppUser />}
                            />
                            <Route
                                path={`/${App_User}profile`}
                                element={<AppUser />}
                            />
                            <Route
                                path={`/${App_User}-profile`}
                                element={<AppUser />}
                            />
                            <Route
                                path={`/${App_User}/userprofile`}
                                element={<AppUser />}
                            />

                            {/* update profile */}
                            <Route
                                path={`/${App_User}/updateprofile/:id`}
                                element={<UpdateProfile />}
                            />
                            <Route
                                path={`/${App_User}/update/profile/:id`}
                                element={<UpdateProfile />}
                            />
                            <Route
                                path={`/${App_User}/profile/update/:id`}
                                element={<UpdateProfile />}
                            />
                            <Route
                                path={`/${App_User}/editprofile/:id`}
                                element={<UpdateProfile />}
                            />
                            <Route
                                path={`/${App_User}/edit/profile/:id`}
                                element={<UpdateProfile />}
                            />
                            <Route
                                path={`/${App_User}/profileedit/:id`}
                                element={<UpdateProfile />}
                            />
                            <Route
                                path={`/${App_User}/profile/edit/:id`}
                                element={<UpdateProfile />}
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

                            {/* categories or services */}
                            {/* details category  */}
                            <Route
                                path={`/detailscategory/:id`}
                                element={<DetailsCategory />}
                            />
                            <Route
                                path={`/categorydetails/:id`}
                                element={<DetailsCategory />}
                            />
                            <Route
                                path={`/category/details/:id`}
                                element={<DetailsCategory />}
                            />
                            <Route
                                path={`/details/category/:id`}
                                element={<DetailsCategory />}
                            />
                            <Route
                                path={`/detailsservice/:id`}
                                element={<DetailsCategory />}
                            />
                            <Route
                                path={`/servicedetails/:id`}
                                element={<DetailsCategory />}
                            />
                            <Route
                                path={`/service/details/:id`}
                                element={<DetailsCategory />}
                            />
                            <Route
                                path={`/details/service/:id`}
                                element={<DetailsCategory />}
                            />

                            {/* project */}
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
