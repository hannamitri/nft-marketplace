import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  authorDataTab1,
  authorDataTab2,
  authorDataTab3,
} from "../../data/authorData";

const AuthorItems = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <ul className="de_nav">
        <li className={`${activeTab === 1 ? "active" : ""}`}>
          <span onClick={() => setActiveTab(1)}>On Sale</span>
        </li>
        <li className={`${activeTab === 2 ? "active" : ""}`}>
          <span onClick={() => setActiveTab(2)}>Created</span>
        </li>
        <li className={`${activeTab === 3 ? "active" : ""}`}>
          <span onClick={() => setActiveTab(3)}>Liked</span>
        </li>
      </ul>

      <div className="de_tab_content">
        {activeTab === 1 && (
          <div className="tab-1">
            <div className="row">
              {authorDataTab1.map((item, index) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  key={index}
                >
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <Link to="/author">
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
                        {item.eth} ETH<span>1/20</span>
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
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="tab-2">
            <div className="row">
              {authorDataTab2.map((item, index) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  key={index}
                >
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <Link to="author">
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
                        {item.eth} ETH<span>1/11</span>
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
            </div>
          </div>
        )}

        {activeTab === 3 && (
          <div className="tab-3">
            <div className="row">
              {authorDataTab3.map((item, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <Link to="author">
                        <img className="lazy" src={item.author} alt="" />
                        <i className="fa fa-check"></i>
                      </Link>
                    </div>
                    <div className="nft__item_wrap">
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
                        {item.eth} ETH<span>1/20</span>
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
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AuthorItems;
