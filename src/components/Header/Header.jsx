import React from "react";
import "./Header.scss";

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
                {/* <div>
                    <div>
                        <span>Log in</span>
                    </div>
                    <div>
                        <span>15</span>
                    </div>
                </div> */}
            </nav>
        </div>
    );
};

export default Header;
