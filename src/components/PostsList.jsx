import BlogPost from "./BlogPost.jsx";
import {useRouteLoaderData, json} from "react-router-dom";
import Pagination from "./Pagination.jsx";

const PostsList = () => {
    const {postsData} = useRouteLoaderData('homePageData');

    const posts = postsData.posts;
    const meta = postsData.meta;

    return (<>
        <ul>
            {posts && posts.map((post) => ((<BlogPost key={post.id} post={post}/>)))}
        </ul>
        <Pagination meta={meta}/>
    </>)
}

export default PostsList;

export const postsLoader = async () => {
    const response = await fetch('http://blog-back.cc/api/homepage/posts', {
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
        return resData;
    }
}