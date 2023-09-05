import navbarStyle from "../style/navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className={navbarStyle.navbar}>
            <Link to="/writePost">Write post</Link>
            <Link to="/posts">Posts</Link>
        </nav>
    );
}

export default Navbar;