import React from "react";
import "./ShopCollection.scss";

const ShopCollection = ({ data }) => {
    return (
        <div className="shop_container">
            <h1>Shop Collection</h1>
            <div className="shop_box">
                {Array.isArray(data) &&
                    data.map((e) => {
                        return (
                            <div className="item_box" key={e.id}>
                                <img
                                    src={e.media[0].url}
                                    className="img-fluid rounded-top"
                                    alt=""
                                />
                                <h3>I'm a product</h3>
                                <h1>{e.formattedDiscountedPrice}</h1>
                                <button>
                                    <h1>Add to cart</h1>
                                </button>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default ShopCollection;
