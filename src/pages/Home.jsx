import PostsList from "../components/PostsList.jsx";
import {postsLoader} from "../components/PostsList.jsx";
import CategoriesList, {categoriesLoader} from "../components/CategoriesList.jsx";
import RecentPostsList, {recentPostsLoader} from "../components/RecentPostsList.jsx";
import BlogSearch from "../components/BlogSearch.jsx";

const HomePage = () => {
    return (<>
            <div className="flex flex-wrap">
                {/* Blog Entries Column */}
                <div className=" md:w-2/3 lg:w-3/4 pe-4">
                    <PostsList/>
                </div>

                {/* Blog Sidebar Widgets Column */}
                <div className=" md:w-1/3 lg:w-1/4 ps-4">
                    {/* Blog Search Well */}
                    <BlogSearch />

                    {/* Blog Categories Well */}
                    <CategoriesList/>

                    {/* Side Widget Well */}
                    <RecentPostsList/>
                </div>
            </div>
        </>
    )
}

export default HomePage;

export const loader = async () => {
    const [postsData, categories, recentPosts] = await Promise.all([postsLoader(), categoriesLoader(), recentPostsLoader()]);
    return {postsData, categories, recentPosts};
}
