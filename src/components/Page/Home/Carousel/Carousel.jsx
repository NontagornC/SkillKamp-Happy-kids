import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Banner1, Banner2, Banner3 } from "../../../../assets/Happy kids-Materials";
import "./Carousel.scss";

const CarouselPage = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className="d-block w-100" src={Banner1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Banner2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Banner3} alt="Third slide" />
                    <Carousel.Caption>
                        <span>New Collection</span>
                        <button>Shop Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselPage;
