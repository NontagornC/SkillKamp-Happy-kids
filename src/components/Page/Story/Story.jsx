import React from "react";
import "./Story.scss";
import { Banner4 } from "../../../assets/Happy kids-Materials";

const Story = () => {
    return (
        <div className="story_container">
            <img src={Banner4} alt="Our Story" />
            <div className="text_box">
                <h1>Our Story</h1>
                <span>
                    I'm a paragraph. Click here to add your own text and edit me. It's easy. Just
                    click “Edit Text” or double click me and you can start adding your own content
                    and make changes to the font. Feel free to drag and drop me anywhere you like on
                    your page. I’m a great place for you to tell a story and let your users know a
                    little more about you.
                </span>
                <span>
                    ​This is a great space to write long text about your company and your services.
                    You can use this space to go into a little more detail about your company. Talk
                    about your team and what services you provide. Tell your visitors the story of
                    how you came up with the idea for your business and what makes you different
                    from your competitors. Make your company stand out and show your visitors who
                    you are.
                </span>
            </div>
        </div>
    );
};

export default Story;
