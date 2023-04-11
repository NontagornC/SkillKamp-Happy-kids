import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Story from "./components/Page/Story/Story";
import Contact from "./components/Page/Contact/Contact";
import HomePage from "./components/Page/Home/HomePage";
import ShopCollection from "./components/Page/ShopCollection/ShopCollection";
import fetchData from "./utils/fetchData";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData("https://skillkamp-api.com/v1/api/products/");
    }, []);

    const getData = (url) => {
        fetchData(url)
            .then((result) => {
                setData(result.data.detail.data.catalog.category.productsWithMetaData.list);
                console.log("test", data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage data={data} />} />
                    <Route path="/shopcollection" element={<ShopCollection data={data} />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/story" element={<Story />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
