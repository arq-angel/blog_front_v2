import {useRouteError} from "react-router-dom";
import GuestNavigation from "../components/GuestNavigation.jsx";

const ErrorPage = () => {
    const error = useRouteError();
    let title = "An error occurred";
    let message = "Something went wrong";

    if (error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 404) {
        title = "Not Found!";
        message = "Could not find resource or page";
    }

    return (
        <>
            <GuestNavigation />
            <main className="flex items-center">
                <h1>{title}</h1>
                <p>{message}</p>
            </main>
        </>
    )
}

export default ErrorPage;