import React from "react";
import { detailsData } from "../../data/detailsData";
import Author10 from "../../images/author/author-10.jpg";

const Details = () => {
  return (
    <>
      <h6>Owner</h6>
      <div className="item_author">
        <div className="author_list_pp">
          <a href="author.html">
            <img className="lazy" src={Author10} alt="" />
            <i className="fa fa-check"></i>
          </a>
        </div>
        <div className="author_list_info">
          <a href="author.html">Stacy Long</a>
        </div>
      </div>

      <div className="spacer-40"></div>
      <h6>Properties</h6>
      <div className="row gx-2">
        {detailsData.map((item, index) => (
          <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
            <a href="#" className="nft_attr">
              <h5>{item.title}</h5>
              <h4>{item.trait}</h4>
              <span>{item.percentageTrait}% have this trait</span>
            </a>
          </div>
        ))}
      </div>
      <div className="spacer-30"></div>
    </>
  );
};

export default Details;
