import {NavLink} from "react-router-dom";

const GuestNavigation = () => {

    const isAuthenticated = false;
    return (<header className="bg-gray-800 w-full top-0">
        <nav className="container mx-48 flex items-center justify-between h-16">
            <ul className="flex items-center gap-3">
                <li>
                    <NavLink
                        to="/"
                        className={({isActive}) =>
                            `rounded-md text-xl font-bold text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white
                            ${isActive ? "active" : ""}`
                        }
                    >
                        Blog Home
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                {isAuthenticated ? (<li>
                    <NavLink
                        to="/app/dashboard"
                        className={({isActive}) =>
                            `rounded-md text-sm font-bold text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white 
                                    ${isActive ? "active" : ""}`
                        }
                    >
                        Dashboard
                    </NavLink>
                </li>) : (<>
                    <li>
                        <NavLink
                            to="/auth/login"
                            className={({isActive}) =>
                                `rounded-md text-sm font-bold text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white 
                                    ${isActive ? "active" : ""}`
                            }
                        >
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/auth/register"
                            className={({isActive}) =>
                                `rounded-md text-sm font-bold text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white 
                                    ${isActive ? "active" : ""}`
                            }
                        >
                            Register
                        </NavLink>
                    </li>
                </>)}
            </ul>
        </nav>
    </header>)
}

export default GuestNavigation;