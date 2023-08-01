
import { Link } from "react-router-dom";
import './NavBar.css'

function HomeLink() {

    return (
        <div className="NavBar">
        <Link to="/">
            Go Back Home
        </Link>
        </div>
    )
}

export default HomeLink;


