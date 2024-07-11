import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import GuestLayout from "./pages/Guest.jsx";
import ErrorPage from "./pages/Error.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import HomePage from "./pages/Home.jsx";
import PostPage from "./pages/Post.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index:true,
                element: <HomePage />
                // loader: homePageLoader,
            },
            {
                path: 'posts/:postsSlug',
                id: "postDetail",
                // loader: postDetailLoader
                element: <PostPage />
            }
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
