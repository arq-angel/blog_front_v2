import {NavLink, useRouteLoaderData} from "react-router-dom";

const GuestNavigation = () => {
    const navLinks = useRouteLoaderData('navLinks');

    const isAuthenticated = false;
    return (<header className="bg-gray-800 w-full top-0">
        <nav className="mx-48 flex flex-row items-center justify-between h-16">
            <ul className="flex flex-row items-end gap-3">
                <li>
                    <NavLink
                        to="/"
                        className={({isActive}) =>
                            `rounded-md text-2xl font-bold text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white
                            ${isActive ? "active" : ""}`
                        }
                    >
                        Blog Home
                    </NavLink>
                </li>
                {navLinks && navLinks.map((navLink) => (
                    <li key={navLink.slug}>
                        <NavLink
                            to={`?category=${navLink.slug}`}
                            className={({isActive}) =>
                                `rounded-md font-bold text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white
                            ${isActive ? "active" : ""}`
                            }
                        >
                            {navLink.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <ul className="flex flex-row items-end gap-3">
                {isAuthenticated ? (<li>
                    <NavLink
                        to="/app/dashboard"
                        className={({isActive}) =>
                            `rounded-md font-bold text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white
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
                                `rounded-md font-bold text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white
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
                                `rounded-md font-bold text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white
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
