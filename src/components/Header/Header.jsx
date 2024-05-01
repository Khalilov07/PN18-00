import "./header.css";

import { Link } from "react-router-dom";

const Header = () => {

    // react router dom 

    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav__list">
                    <li>
                        <Link className="nav__link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav__link" to='/about'>About</Link>
                    </li>
                    <li>
                        <Link className="nav__link" to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link className="nav__link" to='/addcourse'>Add Course</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;