import BlogSearch from "../components/BlogSearch.jsx";
import CategoriesList from "../components/CategoriesList.jsx";
import RecentPostsList from "../components/RecentPostsList.jsx";
import {useRouteLoaderData} from "react-router-dom";
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

export const loader = async () => {
    const POST = {
        "id": 1,
        "title": "Mr. Aiden Leuschke MD",
        "slug": "explicabo-dolorem-veniam-assumenda-exercitationem-repellat-ipsam",
        "author": "Dovie Weber",
        "user": "wilfred42",
        "image": "https://via.placeholder.com/640x480.png/00aa33?text=sint",
        "content": "Itaque voluptatem ut rerum enim nihil quia. Deserunt possimus id debitis sed. Eligendi laborum cumque possimus vel sunt culpa. Laborum nulla ut sunt. Id quae pariatur aut accusamus id et.\n\nUt occaecati omnis voluptatem velit rerum sapiente. Nobis eum et aut reiciendis. Quis placeat velit iste tempora illum enim voluptatem. Nesciunt quia laborum rerum amet repellat occaecati modi nulla.\n\nFuga qui ea suscipit voluptatibus libero et. Delectus consequuntur voluptatem corrupti et rem. Neque fugit ut vel adipisci in illo exercitationem. Ut qui autem dolore rerum.\n\nDeserunt et ut nemo sequi quae officia. Rerum omnis perspiciatis esse dolorum et non. Dicta in laudantium mollitia. Assumenda aliquam nisi nihil.\n\nNihil illo accusamus possimus ab. Quia id accusantium quia architecto. Dolorum consequatur explicabo sed sed quibusdam. Voluptate ipsa aut error quo qui laborum. Error esse enim voluptas placeat consequatur cum.",
        "tags": "rerum,laboriosam,quidem,et,deleniti",
        "comments_count": "8",
        "views_count": "353",
        "likes_count": "375",
        "created_at": "2024-07-03T12:31:10.000000Z",
        "category": {
            "id": 4,
            "title": "Cybersecurity",
            "slug": "cybersecurity"
        }
    }

    return POST;
}