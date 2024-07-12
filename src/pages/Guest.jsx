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

export const navLinksLoader = () => {
    return [
        {
            "id": 1,
            "title": "Artificial Intelligence",
            "slug": "artificial-intelligence"
        },
        {
            "id": 2,
            "title": "Machine Learning",
            "slug": "machine-learning"
        },
        {
            "id": 3,
            "title": "Data Science",
            "slug": "data-science"
        },
        {
            "id": 4,
            "title": "Cybersecurity",
            "slug": "cybersecurity"
        },
        {
            "id": 5,
            "title": "Blockchain",
            "slug": "blockchain"
        },
        {
            "id": 6,
            "title": "Cloud Computing",
            "slug": "cloud-computing"
        },
        {
            "id": 7,
            "title": "Internet of Things",
            "slug": "internet-of-things"
        },
        {
            "id": 8,
            "title": "Software Development",
            "slug": "software-development"
        }
    ]
}
