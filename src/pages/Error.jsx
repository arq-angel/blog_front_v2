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
            <main className="flex flex-col pt-20 gap-3 items-center mx-48">
                <h1 className="text-4xl">{title}</h1>
                <p className="text-2xl">{message}</p>
            </main>
        </>
    )
}

export default ErrorPage;