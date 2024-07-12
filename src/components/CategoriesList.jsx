import {Link, useRouteLoaderData} from "react-router-dom";

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

export const categoriesLoader = () => {
    return [
        {
            "id": 1, "title": "Artificial Intelligence", "slug": "artificial-intelligence"
        }, {
            "id": 2, "title": "Machine Learning", "slug": "machine-learning"
        }, {
            "id": 3, "title": "Data Science", "slug": "data-science"
        }, {
            "id": 4, "title": "Cybersecurity", "slug": "cybersecurity"
        }, {
            "id": 5, "title": "Blockchain", "slug": "blockchain"
        }, {
            "id": 6, "title": "Cloud Computing", "slug": "cloud-computing"
        }, {
            "id": 7, "title": "Internet of Things", "slug": "internet-of-things"
        }, {
            "id": 8, "title": "Software Development", "slug": "software-development"
        }, {
            "id": 9, "title": "Mobile Development", "slug": "mobile-development"
    }, {
        "id": 10, "title": "Web Development", "slug": "web-development"
    }
    ]
}