import { Route } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Routes from "./components/config/Routes";
import Products from "./components/feartures/products/Products";
import SliderPage from "./components/feartures/slider/Slider";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Route
        render={(props) => (
          <>
            <Header {...props} />
            <Routes />
            <Footer />
          </>
        )}
      />
    </div>
  );
}

export default App;
