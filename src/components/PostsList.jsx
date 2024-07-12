import BlogPost from "./BlogPost.jsx";
import {useRouteLoaderData} from "react-router-dom";

const PostsList = () => {
    const {posts} = useRouteLoaderData('homePageData');
    return (<>
        <ul>
            {posts && posts.map((post) => ((<BlogPost key={post.id} post={post}/>)))}
        </ul>
    </>)
}

export default PostsList;

export const postsLoader = () => {
    return [
        {
        "id": 1,
        "title": "Mr. Aiden Leuschke MD",
        "slug": "explicabo-dolorem-veniam-assumenda-exercitationem-repellat-ipsam",
        "author": "Dovie Weber",
        "user": "wilfred42",
        "image": "https://via.placeholder.com/640x480.png/00aa33?text=sint",
        "content": "Itaque voluptatem ut rerum enim nihil quia. Deserunt possimus id debitis sed. Eligendi laborum cumque possimus vel sunt culpa. Laborum nulla ut sunt. Id quae pariatur aut accusamus id et.\n\nUt occaecati omnis voluptatem velit rerum sapiente. Nobis eum et aut reiciendis. Quis placeat velit iste tempor...",
        "tags": "rerum,laboriosam,quidem,et,deleniti",
        "comments_count": "8",
        "views_count": "353",
        "likes_count": "375",
        "created_at": "2024-07-03T12:31:10.000000Z",
        "category": {
            "id": 4, "title": "Cybersecurity", "slug": "cybersecurity"
        }
    }, {
        "id": 2,
        "title": "Prof. Aniya Yost",
        "slug": "sapiente-minima-quia-voluptate-asperiores-nemo",
        "author": "Miss Erica Runolfsdottir Sr.",
        "user": "eulalia00",
        "image": "https://via.placeholder.com/640x480.png/00dd66?text=sed",
        "content": "Rerum maiores suscipit veniam repellendus sint exercitationem. Culpa at perspiciatis nobis amet. Est maiores magnam sapiente et unde dolore. Voluptates odio reiciendis natus omnis illum iste unde.\n\nAut libero ipsam neque rerum. Minus expedita et consequatur ea voluptate et. Voluptate quia eaque aspe...",
        "tags": "odit,inventore,sunt,adipisci,aut",
        "comments_count": "65",
        "views_count": "337",
        "likes_count": "135",
        "created_at": "2024-07-03T12:31:10.000000Z",
        "category": {
            "id": 8, "title": "Software Development", "slug": "software-development"
        }
    }, {
        "id": 3,
        "title": "Adaline Willms Jr.",
        "slug": "quaerat-tempore-voluptatem-tempore-debitis-corporis-et",
        "author": "Noemie Klein II",
        "user": "rollin26",
        "image": "https://via.placeholder.com/640x480.png/001188?text=praesentium",
        "content": "Sit nostrum aut consequuntur. Sint animi modi illo doloremque recusandae molestiae. Maiores quia quis dolores vitae nisi. Soluta error beatae minima omnis cum nemo accusantium.\n\nCorrupti eum possimus tempora expedita. Officia vitae omnis aut eum quis. Voluptatem esse sint sunt autem mollitia.\n\nEt re...",
        "tags": "blanditiis,eveniet,nemo,quisquam,soluta",
        "comments_count": "92",
        "views_count": "278",
        "likes_count": "485",
        "created_at": "2024-07-03T12:31:10.000000Z",
        "category": {
            "id": 7, "title": "Internet of Things", "slug": "internet-of-things"
        }
    }, {
        "id": 4,
        "title": "Anastacio Turner",
        "slug": "quod-corporis-quis-laboriosam-perspiciatis-consequuntur-corporis",
        "author": "Dr. Ellsworth Wilderman",
        "user": "fbahringer",
        "image": "https://via.placeholder.com/640x480.png/009977?text=nihil",
        "content": "Autem quae sit nesciunt dolores ad tempore. Quos eius assumenda quo minus non impedit tempore. Ut ipsam iste quidem minima voluptatem. Culpa totam accusantium sit et. Et vitae debitis sed doloribus.\n\nInventore dolores explicabo earum est suscipit. Facilis laboriosam minima saepe facere aut. Possimus...",
        "tags": "error,in,qui,commodi,rerum",
        "comments_count": "56",
        "views_count": "543",
        "likes_count": "188",
        "created_at": "2024-07-03T12:31:10.000000Z",
        "category": {
            "id": 7, "title": "Internet of Things", "slug": "internet-of-things"
        }
    }, {
        "id": 5,
        "title": "Mrs. Mona Champlin I",
        "slug": "et-aut-odio-fuga-vel",
        "author": "Miss Daphne Reichert II",
        "user": "jessy54",
        "image": "https://via.placeholder.com/640x480.png/003399?text=ipsa",
        "content": "Pariatur expedita culpa debitis aut inventore sequi commodi quia. Numquam quod aut dolore sunt dicta nihil dolores. Velit ipsa voluptatem magnam id. Quidem ut delectus suscipit qui repellendus nemo animi sit. Vel saepe tenetur exercitationem dolores.\n\nVoluptas fugit qui beatae beatae. Fuga velit qui...",
        "tags": "ipsam,in,eum,aut,necessitatibus",
        "comments_count": "52",
        "views_count": "420",
        "likes_count": "444",
        "created_at": "2024-07-03T12:31:10.000000Z",
        "category": {
            "id": 7, "title": "Internet of Things", "slug": "internet-of-things"
        }
    }];
}