import {Outlet} from "react-router-dom";
import AppNavigation from "../components/AppNavigation.jsx";

const AppLayout = () => {
    return (
        <>
            <AppNavigation />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default AppLayout;