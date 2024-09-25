// import
import { Outlet } from "react-router-dom";

// ui component
import Header from "../../ui/header/Header";

function AppUserLayout() {
    return (
        <>
            {/* <Information /> */}
            <Header />
            <Outlet />
        </>
    );
}

export default AppUserLayout;
