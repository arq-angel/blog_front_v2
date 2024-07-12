import {json, Link, useRouteLoaderData} from "react-router-dom";

const RecentPostsList = () => {
    const {recentPosts} = useRouteLoaderData('homePageData');
    return (
        <div className="mb-8 p-4 bg-gray-100 rounded">
            <h4 className="text-xl font-bold mb-4">Recent Posts</h4>

            <div className="flex flex-col justify-between space-y-2">
                {recentPosts.map((post) => (<div key={post.id} className="flex flex-row items-start justify-between">
                    <div className="flex flex-col items-start">
                        <Link
                            to={`/posts/${post.slug}`}
                            className="rounded-md font-bold text-blue-500 ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                        >
                            {post.title}
                        </Link>
                        <div className="text-sm">
                            By<span className="ms-1">{post.author}</span>
                        </div>
                    </div>
                    <div className="pt-1 max-h-10 max-w-10 overflow-hidden">
                        <img
                            className="object-cover w-full h-full"
                            src={post.image}
                            alt={post.title}
                        />
                    </div>
                </div>))}
            </div>
        </div>
    )
}

export default RecentPostsList;

export const recentPostsLoader = async () => {
    const response = await fetch('http://blog-back.cc/api/homepage/recentPosts', {
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
        return resData.recentPosts;
    }
}