import React from "react";
import OwlCarousel from "react-owl-carousel";
import { hotCollectionData } from "../../data/hotCollectionData";

const HotCollections = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <OwlCarousel className="owl-theme" {...options}>
            {hotCollectionData.map((item, index) => (
              <div className="nft_coll" key={index}>
                <div className="nft_wrap">
                  <a href="collection.html">
                    <img
                      src={item.backgroundImage}
                      className="lazy img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="nft_coll_pp">
                  <a href="collection.html">
                    <img className="lazy pp-coll" src={item.author} alt="" />
                  </a>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <a href="collection.html">
                    <h4>{item.title}</h4>
                  </a>
                  <span>ERC-{item.erc}</span>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
