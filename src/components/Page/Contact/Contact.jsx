import React from "react";
import "./Contact.scss";

const Contact = () => {
    return (
        <div className="contact_container">
            <h1>Contact Us</h1>
            <div className="contact_box">
                <div className="contact_detail">
                    <span>VISIT US</span>
                    <ul>
                        <li>500 Terry Francois St.</li>
                        <li>San Francisco, CA 94158</li>
                        <li>123-456-7890</li>
                    </ul>
                </div>
                <div className="contact_detail">
                    <span>OPENING HOURS</span>
                    <ul>
                        <li>Mon - Fri: 7am - 10pm</li>
                        <li>Saturday: 8am - 10pm</li>
                        <li>Sunday: 8am - 11pm</li>
                    </ul>
                </div>
                <div className="contact_detail">
                    <span>CUSTOMER SERVICE</span>
                    <ul>
                        <li>1-800-000-000</li>
                        <li>123-456-7890</li>
                        <li>info@mysite.com</li>
                    </ul>
                </div>
            </div>
            <div className="form_container">
                <span>FOR ANY QUESTIONS, PLEASE SEND US A MESSAGE</span>
                <div className="form_box">
                    <form
                        className="generated-form"
                        method="GET"
                        action="submit.php"
                        target="_self">
                        <div className="form-group">
                            <div className="form-row">
                                <div className="col">
                                    <label htmlFor="fname">First name</label>
                                    <input type="text" id="fname" name="fname" />
                                </div>
                                <div className="col">
                                    <label htmlFor="lname">Last name</label>
                                    <input type="text" id="lname" name="lname" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        </div>
                        <input className="submit" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
