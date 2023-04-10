import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import Story from "./components/Page/Story/Story";
// import Contact from "./components/Page/Contact/Contact";
import HomePage from "./components/Page/Home/HomePage";

function App() {
    return (
        <div className="App">
            <Header />
            {/* <Contact />
            <Story /> */}
            <HomePage />
            <Footer />
        </div>
    );
}

export default App;
