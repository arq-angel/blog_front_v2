import {Outlet} from "react-router-dom";
import GuestNavigation from "../components/GuestNavigation.jsx";
import Footer from "../components/Footer.jsx";

const GuestLayout = () => {
    return (
        <>
            <GuestNavigation />
            <main className="min-h-screen mx-48 py-6">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default GuestLayout;