import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { exploreData } from "../../data/exploreData";

const ExploreItems = () => {
  const [itemCount, setItemCount] = useState(8);

  return (
    <>
      {exploreData.slice(0, itemCount).map((item, index) => (
        <div
          key={index}
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          style={{ display: "block", backgroundSize: "cover" }}
        >
          <div className="nft__item">
            <div className="author_list_pp">
              <Link
                to="/author"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Creator: Monica Lucas"
              >
                <img className="lazy" src={item.author} alt="" />
                <i className="fa fa-check"></i>
              </Link>
            </div>
            <div className="nft__item_wrap">
              <div className="nft__item_extra">
                <div className="nft__item_buttons">
                  <button>Buy Now</button>
                  <div className="nft__item_share">
                    <h4>Share</h4>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io"
                      target="_blank"
                    >
                      <i className="fa fa-facebook fa-lg"></i>
                    </a>
                    <a
                      href="https://twitter.com/intent/tweet?url=https://gigaland.io"
                      target="_blank"
                    >
                      <i className="fa fa-twitter fa-lg"></i>
                    </a>
                    <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io">
                      <i className="fa fa-envelope fa-lg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <Link to="/item-details">
                <img
                  src={item.backgroundImage}
                  className="lazy nft__item_preview"
                  alt=""
                />
              </Link>
            </div>
            <div className="nft__item_info">
              <Link to="/item-details">
                <h4>{item.title}</h4>
              </Link>
              <div className="nft__item_click">
                <span></span>
              </div>
              <div className="nft__item_price">
                {item.eth} ETH<span>{item.date}</span>
              </div>
              <div className="nft__item_action">
                <a href="#">Place a bid</a>
              </div>
              <div className="nft__item_like">
                <i className="fa fa-heart"></i>
                <span>{item.likes}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="col-md-12 text-center">
        {itemCount < exploreData.length && (
          <Link
            onClick={() => setItemCount(itemCount + 4)}
            to=""
            id="loadmore"
            className="btn-main wow fadeInUp lead"
          >
            Load more
          </Link>
        )}
      </div>
    </>
  );
};

export default ExploreItems;
