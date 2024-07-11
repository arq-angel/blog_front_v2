import {SITE_NAME, SITE_YEAR} from "../config/SiteConfig.jsx";

const Footer = () => {
    return (<footer className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
            <div className="text-center text-white">
                <p>Copyright &copy; {SITE_NAME} {SITE_YEAR}</p>
            </div>
        </div>
    </footer>)
}

export default Footer;