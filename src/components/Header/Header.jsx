import { useState } from "react";
import "./header.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

    // react router dom

    const user = useSelector(state => state.user.user)

    console.log(user);
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav__list">
                    {
                        user === null ?
                            <>
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
                                    <Link className="nav__link" to='/signup'>SIGN UP</Link>
                                </li>
                                <li>
                                    <Link className="nav__link" to='/signin'>SIGN IN</Link>
                                </li>
                            </>
                            :
                            <>
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
                            </>
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;