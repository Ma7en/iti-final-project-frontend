import React from "react";
import { useAuthStore } from "../../store/auth";

function AppCompany() {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn)();
    console.log(`eee`, useAuthStore());

    return (
        <>
            <div>App_Company</div>
        </>
    );
}

export default AppCompany;
