import "./css/bootstrap.min.css";
import "./css/bootstrap-grid.min.css";
import "./css/bootstrap-reboot.min.css";
import "./css/animate.css";
import "./css/owl.carousel.css";
import "./css/owl.theme.css";
import "./css/owl.transitions.css";
import "./css/magnific-popup.css";
import "./css/jquery.countdown.css";
import "./css/style.css";
import "./css/colors/scheme-01.css";
import "./css/coloring.css";

import Home from "./pages/Home";
import WOW from "wowjs";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();

    // $(document).ready(function () {
    //   $(".owl-carousel").owlCarousel();
    // });

    // $(".owl-carousel").owlCarousel({
    //   stagePadding: 50,
    //   loop: true,
    //   margin: 10,
    //   nav: true,
    //   responsive: {
    //     0: {
    //       items: 1,
    //     },
    //     600: {
    //       items: 3,
    //     },
    //     1000: {
    //       items: 2,
    //     },
    //   },
    // });

    // <ScriptTag type="text/javascript" src="./js/easing.js" />;
  }, []);

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/author" element={<Author />} />
          <Route path="/item-details" element={<ItemDetails />} />
        </Routes>
        <Footer />
      </Router>

      <Helmet>
        <script src="js/easing.js" type="text/javascript" />
        <script src="js/designesia.js" type="text/javascript" />
      </Helmet>
    </>
  );
}

export default App;
