import "./header.css";

import { Link } from "react-router-dom";

const Header = () => {

    // react router dom 

    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                    <li>
                        <Link to='about' >About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;