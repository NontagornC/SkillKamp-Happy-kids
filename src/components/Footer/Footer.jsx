import React from "react";
import EmailBox from "./EmailBox/EmailBox";
import "./Footer.scss";
import { FaFacebook } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div className="footer_container">
                <h1>happy kids</h1>
                <div className="detail_box">
                    <div className="detail">
                        <p>Home</p>
                        <p>Shop Collection</p>
                        <p>Our Story</p>
                        <p>Contact</p>
                    </div>
                    <div className="social">
                        <div className="social_icon">
                            <FaFacebook />
                            <FaPinterestP />
                            <AiOutlineInstagram />
                        </div>
                    </div>
                    <div className="detail">
                        <p>Shipping & Returns</p>
                        <p>Store</p>
                        <p>Payment Methods</p>
                        <p>FAQ</p>
                    </div>
                </div>
                <EmailBox />
                <h4>© 2035 by happy kids. Powered and secured by Wix</h4>
            </div>
        </footer>
    );
};

export default Footer;
