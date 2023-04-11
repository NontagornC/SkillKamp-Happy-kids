import "./TitleProducts.scss";

const TitleProducts = ({ data }) => {
    return (
        <div className="title_container">
            <h1>New Arrivals</h1>
            <div className="item_container">
                {Array.isArray(data) &&
                    data.map((e) => {
                        return (
                            <div className="item_box" key={e.id}>
                                <img
                                    src={e.media[0].url}
                                    className="img-fluid rounded-top"
                                    alt=""
                                />
                                <span>Quick View</span>
                                <h3>I'm a product</h3>
                                <h1>{e.formattedDiscountedPrice}</h1>
                                <button>
                                    <h1>Add to cart</h1>
                                </button>
                            </div>
                        );
                    })}
            </div>
            <button className="shop">Shop now</button>
        </div>
    );
};

export default TitleProducts;
