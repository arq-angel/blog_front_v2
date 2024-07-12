import {Link, useRouteLoaderData} from "react-router-dom";

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

export const recentPostsLoader = () => {
    return [
        {
            "id": 1,
            "title": "Mr. Aiden Leuschke MD",
            "slug": "explicabo-dolorem-veniam-assumenda-exercitationem-repellat-ipsam",
            "author": "Dovie Weber",
            "image": "https://via.placeholder.com/640x480.png/00aa33?text=sint"
        },
        {
            "id": 2,
            "title": "Prof. Aniya Yost",
            "slug": "sapiente-minima-quia-voluptate-asperiores-nemo",
            "author": "Miss Erica Runolfsdottir Sr.",
            "image": "https://via.placeholder.com/640x480.png/00dd66?text=sed"
        },
        {
            "id": 3,
            "title": "Adaline Willms Jr.",
            "slug": "quaerat-tempore-voluptatem-tempore-debitis-corporis-et",
            "author": "Noemie Klein II",
            "image": "https://via.placeholder.com/640x480.png/001188?text=praesentium"
        },
        {
            "id": 4,
            "title": "Anastacio Turner",
            "slug": "quod-corporis-quis-laboriosam-perspiciatis-consequuntur-corporis",
            "author": "Dr. Ellsworth Wilderman",
            "image": "https://via.placeholder.com/640x480.png/009977?text=nihil"
        },
        {
            "id": 5,
            "title": "Mrs. Mona Champlin I",
            "slug": "et-aut-odio-fuga-vel",
            "author": "Miss Daphne Reichert II",
            "image": "https://via.placeholder.com/640x480.png/003399?text=ipsa"
        },
        {
            "id": 6,
            "title": "Alfreda Steuber",
            "slug": "molestiae-quisquam-sint-neque-illum-suscipit-nulla-qui",
            "author": "Mae Labadie",
            "image": "https://via.placeholder.com/640x480.png/008877?text=est"
        },
        {
            "id": 7,
            "title": "Mr. Seth Kunde",
            "slug": "nihil-laborum-inventore-provident-voluptatem-laborum",
            "author": "Clifton Mann",
            "image": "https://via.placeholder.com/640x480.png/0011bb?text=esse"
        },
        {
            "id": 8,
            "title": "Yvonne Kozey",
            "slug": "et-explicabo-nihil-sunt-fugit",
            "author": "Lennie Swift",
            "image": "https://via.placeholder.com/640x480.png/00ff99?text=ipsum"
        },
        {
            "id": 9,
            "title": "Alex Hamill",
            "slug": "est-dolor-eius-necessitatibus-deserunt-aut-labore-eos",
            "author": "Brannon Terry",
            "image": "https://via.placeholder.com/640x480.png/0066ee?text=neque"
        },
        {
            "id": 10,
            "title": "Prof. Haylee Labadie",
            "slug": "quo-enim-aut-voluptas-eaque-reprehenderit",
            "author": "Prof. Savanna Schuppe V",
            "image": "https://via.placeholder.com/640x480.png/0099dd?text=eum"
        }
    ]
}