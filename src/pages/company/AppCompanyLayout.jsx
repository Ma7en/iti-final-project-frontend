// import
import { Outlet } from "react-router-dom";

// ui component
import Header from "../../ui/header/Header";

function AppCompanyLayout() {
    return (
        <>
            {/* <Information /> */}
            <Header />
            <Outlet />
        </>
    );
}

export default AppCompanyLayout;
