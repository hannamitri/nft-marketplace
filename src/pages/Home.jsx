import React from "react";
import BrowseByCategory from "../components/BrowseByCategory";
import Footer from "../components/Footer";
import HotCollections from "../components/HotCollections";
import Landing from "../components/Landing";
import LandingIntro from "../components/LandingIntro";
import Nav from "../components/Nav";
import NewItems from "../components/NewItems";
import TopSellers from "../components/TopSellers";

const Home = () => {
  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <Landing />
        <LandingIntro />
        <HotCollections />
        <NewItems />
        <TopSellers />
        <BrowseByCategory />
      </div>
      <a href="#" id="back-to-top"></a>
    </div>
  );
};

export default Home;
