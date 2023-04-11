import React from "react";
import CarouselPage from "./Carousel/Carousel";
import TitleProducts from "./TitleProducts/TitleProducts";

const HomePage = ({ data }) => {
    return (
        <div>
            <CarouselPage />
            <TitleProducts data={data} />
        </div>
    );
};

export default HomePage;
