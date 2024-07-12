import {json, Link, useRouteLoaderData} from "react-router-dom";

const CategoriesList = () => {
    const {categories} = useRouteLoaderData('homePageData');
    return (
        <div className="mb-8 p-4 bg-gray-100 rounded">
        <h4 className="text-xl font-bold mb-4">Categories</h4>
        <div className="flex flex-wrap">
            <div>
                <ul className="list-none">
                    {categories.map((category) => (
                        <li key={category.id} className="text-blue-500">
                            <Link
                                to={`/?category=${category.slug}`}
                            >
                                {category.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    )
}

export default CategoriesList;

export const categoriesLoader = async () => {
    const response = await fetch('http://blog-back.cc/api/homepage/categories', {
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
        return resData.categories;
    }
}