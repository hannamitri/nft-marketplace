import React from "react";
import NFT from "../images/misc/nft.png"

const Landing = () => {
  return (
    <section
      id="section-hero"
      aria-label="section"
      className="no-top no-bottom vh-100"
      data-bgimage="url(images/background/bg-shape-1.jpg) bottom"
    >
      <div className="v-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="spacer-single"></div>
              <h6 className="wow fadeInUp" data-wow-delay=".5s">
                <span className="text-uppercase id-color-2">
                  Gigaland Market
                </span>
              </h6>
              <div className="spacer-10"></div>
              <h1 className="wow fadeInUp" data-wow-delay=".75s">
                Create, sell or collect digital items.
              </h1>
              <p className="wow fadeInUp lead" data-wow-delay="1s">
                Unit of data stored on a digital ledger, called a blockchain,
                that certifies a digital asset to be unique and therefore not
                interchangeable
              </p>
              <div className="spacer-10"></div>
              <a
                href="explore.html"
                className="btn-main wow fadeInUp lead"
                data-wow-delay="1.25s"
              >
                Explore
              </a>
              <div className="mb-sm-30"></div>
            </div>
            <div className="col-md-6 xs-hide">
              <img
                src={NFT}
                className="lazy img-fluid wow fadeIn"
                data-wow-delay="1.25s"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
