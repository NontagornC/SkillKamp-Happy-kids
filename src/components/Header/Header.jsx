import React from "react";
import "./Header.scss";
import { FaUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
    return (
        <div className="header_container">
            <span>Free Shipping Over $50</span>
            <h1>happy kids</h1>
            <nav className="menu_bar">
                <a href="#">Home</a>
                <a href="#">Shop Collection</a>
                <a href="#">Our Story</a>
                <a href="#">Contact</a>
                <div className="user_container">
                    <div className="user_box">
                        <FaUserCircle />
                        <span>Log in</span>
                    </div>
                    <div className="user_box">
                        <BsCart3 />
                        <span className="right">15</span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
