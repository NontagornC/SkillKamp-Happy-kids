import React, { useState, useEffect } from "react";
import "./Header.scss";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart/Cart";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="header_container">
            <span>Free Shipping Over $50</span>
            <h1>happy kids</h1>
            <nav className={`menu_bar ${scrolled ? "sticky-header" : ""}`}>
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
                    <BsCart3 onClick={() => setShowCart(true)} />
                </a>
            </nav>
            {showCart && <Cart setShowCart={setShowCart} />}
        </div>
    );
};

export default Header;
