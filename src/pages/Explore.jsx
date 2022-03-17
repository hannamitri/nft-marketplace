import React, { useEffect } from "react";
import SubHeader from "../images/background/subheader.jpg";
import HeaderExplore from "../components/explore/HeaderExplore";
import ExploreItems from "../components/explore/ExploreItems";
import WOW from "wowjs";
import $ from "jquery";

const Explore = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();

    window.scrollTo(0, 0);

    dropdown("#item_category");
    dropdown("#buy_category");
    dropdown("#items_type");
  });

  function dropdown(e) {
    var obj = $(e + ".dropdown");
    var btn = obj.find(".btn-selector");
    var dd = obj.find("ul");
    var opt = dd.find("li");

    obj
      .on("mouseenter", function () {
        dd.show();
        $(this).css("z-index", 1000);
      })
      .on("mouseleave", function () {
        dd.hide();
        $(this).css("z-index", "auto");
      });

    opt.on("click", function () {
      dd.hide();
      var txt = $(this).text();
      opt.removeClass("active");
      $(this).addClass("active");
      btn.text(txt);
    });
  }

  useEffect(() => {}, []);

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
            </div>
          </div>
        </section>
      </div>

      <a href="#" id="back-to-top"></a>
    </div>
  );
};

export default Explore;
