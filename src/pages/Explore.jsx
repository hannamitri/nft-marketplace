import React from "react";
import SubHeader from "../images/background/subheader.jpg";
import { exploreData } from "../data/exploreData";
import HeaderExplore from "../components/explore/HeaderExplore";
import ExploreItems from "../components/explore/ExploreItems";

const Explore = () => {
  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="subheader"
          className="text-light"
          style={{ background: `url("${SubHeader}") top` }}
        >
          <div className="center-y relative text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1>Explore</h1>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="section">
          <div className="container">
            <div className="row wow fadeIn">
              <HeaderExplore />
              <ExploreItems />
              <div className="col-md-12 text-center">
                <a
                  href="#"
                  id="loadmore"
                  className="btn-main wow fadeInUp lead"
                >
                  Load more
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <a href="#" id="back-to-top"></a>
    </div>
  );
};

export default Explore;
