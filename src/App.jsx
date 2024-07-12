import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import GuestLayout, {navLinksLoader} from "./pages/Guest.jsx";
import ErrorPage from "./pages/Error.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import HomePage, {loader as homePageLoader} from "./pages/Home.jsx";
import PostPage, {loader as postDetailLoader} from "./pages/Post.jsx";
import SearchPage from "./pages/Search.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        errorElement: <ErrorPage />,
        id: "navLinks",
        loader: navLinksLoader,
        children: [
            {
                path: "/",
                id: "homePageData",
                loader: homePageLoader,
                children: [
                    {
                        index: true,
                        element: <HomePage />,
                    },
                    {
                        path: 'posts/:postSlug',
                        id: "postDetail",
                        loader: postDetailLoader,
                        element: <PostPage />
                    },
                    {
                        path: 'search',
                        element: <SearchPage /> // SearchPage is the same as HomePage and the data is fetched by the homePageLoader but adding the search query in api call
                    }
                ]
            },

        ],
    },
    {
        path: "/app",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [],
    },
]);

const App = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default App
