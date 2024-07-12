import BlogSearch from "../components/BlogSearch.jsx";
import CategoriesList from "../components/CategoriesList.jsx";
import RecentPostsList from "../components/RecentPostsList.jsx";
import {json, useRouteLoaderData} from "react-router-dom";
import BlogPost from "../components/BlogPost.jsx";

const PostPage = () => {
    const blogPost = useRouteLoaderData('postDetail');
    return (
        <>
            <div className="flex flex-wrap">
                {/* Blog Entries Column */}
                <div className=" md:w-2/3 lg:w-3/4 pe-4">
                    <BlogPost post={blogPost} isSinglePost={true}/>
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

export default PostPage;

export const loader = async ({request, params}) => {
    const postSlug = params.postSlug
    const response = await fetch('http://blog-back.cc/api/posts/'+ postSlug, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            "Public-Token": "2|LTBqZlXejYRxYHgpC6rHTSrnKSlIzimx9Jnxb73973c10e72",
        }
    })

    if (!response.ok) {
        throw json({message: "Could not fetch posts"}, {status: 500});
    } else {
        const resData = await response.json();
        return resData.post;
    }
}