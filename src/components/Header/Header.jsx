import React from "react";
import "./Header.scss";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="header_container">
            <span>Free Shipping Over $50</span>
            <h1>happy kids</h1>
            <nav className="menu_bar">
                <a href="#" onClick={() => navigate(`/`)}>
                    Home
                </a>
                <a href="#" onClick={() => navigate(`/shopcollection`)}>
                    Shop Collection
                </a>
                <a href="#" onClick={() => navigate(`/story`)}>
                    Our Story
                </a>
                <a href="#" onClick={() => navigate(`/contact`)}>
                    Contact
                </a>
                <a href="#">
                    <BsCart3 />
                </a>
            </nav>
        </div>
    );
};

export default Header;
