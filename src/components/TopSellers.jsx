import React from "react";
import { topSellerData } from "../data/topSellerData";

const TopSellers = () => {
  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12 wow fadeIn">
            <ol className="author_list">
              {topSellerData.map((item, index) => (
                <li key={index}>
                  <div className="author_list_pp">
                    <a href="author.html">
                      <img className="lazy pp-author" src={item.image} alt="" />
                      <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="author_list_info">
                    <a href="author.html">{item.name}</a>
                    <span>{item.eth} ETH</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
