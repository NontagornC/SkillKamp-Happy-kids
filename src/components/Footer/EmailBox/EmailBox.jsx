import React from "react";
import "./EmailBox.scss";

const EmailBox = () => {
    return (
        <div className="newsletter_section">
            <div className="newsletter_content">
                <span className="header_text">Join Our Mailing List</span>
                <div className="form">
                    <input type="text" placeholder="Enter your email here" />
                    <button>Subscribe Now</button>
                </div>
            </div>
        </div>
    );
};

export default EmailBox;
