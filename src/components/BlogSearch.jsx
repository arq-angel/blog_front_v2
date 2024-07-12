import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const BlogSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const onSearchHandler = () => {
        if (searchQuery.trim()) {
            navigate(`/search?query=${searchQuery}`);
        }
    }

    return (
        <div className="mb-8 p-4 bg-gray-100 rounded">
            <h4 className="text-xl font-bold mb-4">Blog Search</h4>
            <div>
                <form className="flex" onSubmit={onSearchHandler}>
                    <input
                        type="text"
                        className="form-control p-2 flex-grow border border-gray-300 rounded-l"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="bg-gray-300 text-gray-600 px-4 py-2 rounded-r">
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default BlogSearch;