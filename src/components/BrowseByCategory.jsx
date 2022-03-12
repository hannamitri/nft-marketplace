import React from "react";

const BrowseByCategory = () => {
  return (
    <section id="section-category" className="no-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Browse by category</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div
            className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight"
            data-wow-delay=".1s"
          >
            <a href="explore.html" className="icon-box style-2 rounded">
              <i className="fa fa-image"></i>
              <span>Art</span>
            </a>
          </div>
          <div
            className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight"
            data-wow-delay=".2s"
          >
            <a href="explore.html" className="icon-box style-2 rounded">
              <i className="fa fa-music"></i>
              <span>Music</span>
            </a>
          </div>
          <div
            className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight"
            data-wow-delay=".3s"
          >
            <a href="explore.html" className="icon-box style-2 rounded">
              <i className="fa fa-search"></i>
              <span>Domain Names</span>
            </a>
          </div>
          <div
            className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight"
            data-wow-delay=".4s"
          >
            <a href="explore.html" className="icon-box style-2 rounded">
              <i className="fa fa-globe"></i>
              <span>Virtual Worlds</span>
            </a>
          </div>
          <div
            className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight"
            data-wow-delay=".5s"
          >
            <a href="explore.html" className="icon-box style-2 rounded">
              <i className="fa fa-vcard"></i>
              <span>Trading Cards</span>
            </a>
          </div>
          <div
            className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight"
            data-wow-delay=".6s"
          >
            <a href="explore.html" className="icon-box style-2 rounded">
              <i className="fa fa-th"></i>
              <span>Collectibles</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
