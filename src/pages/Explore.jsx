import React from "react";
import SubHeader from "../images/background/subheader.jpg";
import Static1 from "../images/items/static-1.jpg";
import Static2 from "../images/items/static-2.jpg";
import Static3 from "../images/items/static-3.jpg";
import Static4 from "../images/items/static-4.jpg";
import Static5 from "../images/items/static-5.jpg";
import Static6 from "../images/items/static-6.jpg";
import Static7 from "../images/items/static-7.jpg";
import Static8 from "../images/items/static-8.jpg";

import Author1 from "../images/author/author-1.jpg";
import Author2 from "../images/author/author-2.jpg";
import Author3 from "../images/author/author-3.jpg";
import Author4 from "../images/author/author-4.jpg";
import Author5 from "../images/author/author-5.jpg";
import Author6 from "../images/author/author-6.jpg";
import Author7 from "../images/author/author-7.jpg";
import Author8 from "../images/author/author-8.jpg";
import Author9 from "../images/author/author-9.jpg";
import Author10 from "../images/author/author-10.jpg";
import Author11 from "../images/author/author-11.jpg";
import Author12 from "../images/author/author-12.jpg";

import Anime1 from "../images/items/anim-1.webp";
import Anime2 from "../images/items/anim-2.webp";
import Anime3 from "../images/items/anim-3.webp";
import Anime4 from "../images/items/anim-4.webp";
import Anime5 from "../images/items/anim-5.webp";
import Anime6 from "../images/items/anim-6.webp";
import Anime7 from "../images/items/anim-7.webp";
import Anime8 from "../images/items/anim-8.webp";

const Explore = () => {
  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="subheader"
          className="text-light"
          //   data-bgimage="url(images/background/subheader.jpg) top"
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
              <div className="col-lg-12">
                <div className="items_filter">
                  <form
                    action="blank.php"
                    className="row form-dark"
                    id="form_quick_search"
                    method="post"
                    name="form_quick_search"
                  >
                    <div className="col text-center">
                      <input
                        className="form-control"
                        id="name_1"
                        name="name_1"
                        placeholder="search item here..."
                        type="text"
                      />{" "}
                      <a href="#" id="btn-submit">
                        <i className="fa fa-search bg-color-secondary"></i>
                      </a>
                      <div className="clearfix"></div>
                    </div>
                  </form>

                  <div id="item_category" className="dropdown">
                    <a href="#" className="btn-selector">
                      All categories
                    </a>
                    <ul>
                      <li className="active">
                        <span>All categories</span>
                      </li>
                      <li>
                        <span>Art</span>
                      </li>
                      <li>
                        <span>Music</span>
                      </li>
                      <li>
                        <span>Domain Names</span>
                      </li>
                      <li>
                        <span>Virtual World</span>
                      </li>
                      <li>
                        <span>Trading Cards</span>
                      </li>
                      <li>
                        <span>Collectibles</span>
                      </li>
                      <li>
                        <span>Sports</span>
                      </li>
                      <li>
                        <span>Utility</span>
                      </li>
                    </ul>
                  </div>

                  <div id="buy_category" className="dropdown">
                    <a href="#" className="btn-selector">
                      Buy Now
                    </a>
                    <ul>
                      <li className="active">
                        <span>Buy Now</span>
                      </li>
                      <li>
                        <span>On Auction</span>
                      </li>
                      <li>
                        <span>Has Offers</span>
                      </li>
                    </ul>
                  </div>

                  <div id="items_type" className="dropdown">
                    <a href="#" className="btn-selector">
                      All Items
                    </a>
                    <ul>
                      <li className="active">
                        <span>All Items</span>
                      </li>
                      <li>
                        <span>Single Items</span>
                      </li>
                      <li>
                        <span>Bundles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
              >
                <div className="nft__item">
                  <div
                    className="de_countdown"
                    data-year="2022"
                    data-month="3"
                    data-day="16"
                    data-hour="8"
                  ></div>
                  <div className="author_list_pp">
                    <a
                      href="author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Monica Lucas"
                    >
                      <img className="lazy" src={Author1} alt="" />
                      <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button onclick="location.href='item-details.html'">
                          Buy Now
                        </button>
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
                    <a href="item-details.html">
                      <img
                        src={Static1}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Pinky Ocean</h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                      0.08 ETH<span>1/20</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>50</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
              >
                <div className="nft__item">
                  <div className="author_list_pp">
                    <a
                      href="author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Stacy Long"
                    >
                      <img className="lazy" src={Author10} alt="" />
                      <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button onclick="location.href='item-details.html'">
                          Buy Now
                        </button>
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
                    <a href="item-details.html">
                      <img
                        src={Static2}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Deep Sea Phantasy</h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                      0.06 ETH<span>1/22</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
              >
                <div className="nft__item">
                  <div
                    className="de_countdown"
                    data-year="2022"
                    data-month="3"
                    data-day="14"
                    data-hour="8"
                  ></div>
                  <div className="author_list_pp">
                    <a
                      href="author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Ida Chapman"
                    >
                      <img className="lazy" src={Author11} alt="" />
                      <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button onclick="location.href='item-details.html'">
                          Buy Now
                        </button>
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
                    <a href="item-details.html">
                      <img
                        src={Static3}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Rainbow Style</h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                      0.05 ETH<span>1/11</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>97</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
              >
                <div className="nft__item">
                  <div className="author_list_pp">
                    <a
                      href="author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Fred Ryan"
                    >
                      <img className="lazy" src={Author11} alt="" />
                      <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button onclick="location.href='item-details.html'">
                          Buy Now
                        </button>
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
                    <a href="item-details.html">
                      <img
                        src={Static4}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Two Tigers</h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                      0.02 ETH<span>1/15</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>73</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
              >
                <div className="nft__item">
                  <div className="author_list_pp">
                    <a
                      href="author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Franklin Greer"
                    >
                      <img className="lazy" src={Author9} alt="" />
                      <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button onclick="location.href='item-details.html'">
                          Buy Now
                        </button>
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
                    <a href="item-details.html">
                      <img
                        src={Anime4}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>The Truth</h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                      0.06 ETH<span>1/20</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>26</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
              >
                <div className="nft__item">
                  <div
                    className="de_countdown"
                    data-year="2022"
                    data-month="3"
                    data-day="6"
                    data-hour="8"
                  ></div>
                  <div className="author_list_pp">
                    <a
                      href="author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Mamie Barnett"
                    >
                      <img className="lazy" src={Author2} alt="" />
                      <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button onclick="location.href='item-details.html'">
                          Buy Now
                        </button>
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
                    <a href="item-details.html">
                      <img
                        src={Anime2}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Running Puppets</h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                      0.03 ETH<span>1/24</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>45</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
              >
                <div className="nft__item">
                  <div className="author_list_pp">
                    <a
                      href="author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Nicholas Daniels"
                    >
                      <img className="lazy" src={Author3} alt="" />
                      <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button onclick="location.href='item-details.html'">
                          Buy Now
                        </button>
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
                    <a href="item-details.html">
                      <img
                        src={Anime1}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>USA Wordmation</h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                      0.09 ETH<span>1/25</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>76</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
              >
                <div className="nft__item">
                  <div
                    className="de_countdown"
                    data-year="2022"
                    data-month="3"
                    data-day="8"
                    data-hour="8"
                  ></div>
                  <div className="author_list_pp">
                    <a
                      href="author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Lori Hart"
                    >
                      <img className="lazy" src={Author4} alt="" />
                      <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button onclick="location.href='item-details.html'">
                          Buy Now
                        </button>
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
                    <a href="item-details.html">
                      <img
                        src={Anime5}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Loop Donut</h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                      0.09 ETH<span>1/14</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>94</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
              >
                <div className="nft__item">
                  <div
                    className="de_countdown"
                    data-year="2022"
                    data-month="3"
                    data-day="16"
                    data-hour="8"
                  ></div>
                  <div className="author_list_pp">
                    <a
                      href="author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Jimmy Wright"
                    >
                      <img className="lazy" src={Author5} alt="" />
                      <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button onclick="location.href='item-details.html'">
                          Buy Now
                        </button>
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
                    <a href="item-details.html">
                      <img
                        src={Anime3}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Lady Copter</h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                      0.08 ETH<span>1/21</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>75</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
              >
                <div className="nft__item">
                  <div className="author_list_pp">
                    <a
                      href="author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Gayle Hicks"
                    >
                      <img className="lazy" src={Author7} alt="" />
                      <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button onclick="location.href='item-details.html'">
                          Buy Now
                        </button>
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
                    <a href="item-details.html">
                      <img
                        src={Static5}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Purple Planet</h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                      0.02 ETH<span>1/18</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>93</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
              >
                <div className="nft__item">
                  <div
                    className="de_countdown"
                    data-year="2022"
                    data-month="3"
                    data-day="16"
                    data-hour="8"
                  ></div>
                  <div className="author_list_pp">
                    <a
                      href="author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Karla Sharp"
                    >
                      <img className="lazy" src={Author6} alt="" />
                      <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button onclick="location.href='item-details.html'">
                          Buy Now
                        </button>
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
                    <a href="item-details.html">
                      <img
                        src={Anime6}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Oh Yeah!</h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                      0.025 ETH<span>1/12</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>6</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
              >
                <div className="nft__item">
                  <div className="author_list_pp">
                    <a
                      href="author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Claude Banks"
                    >
                      <img className="lazy" src={Author8} alt="" />
                      <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button onclick="location.href='item-details.html'">
                          Buy Now
                        </button>
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
                    <a href="item-details.html">
                      <img
                        src={Anime7}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>This is Our Story</h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                      0.035 ETH<span>1/8</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>21</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
              >
                <div className="nft__item">
                  <div className="author_list_pp">
                    <a
                      href="author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Franklin Greer"
                    >
                      <img className="lazy" src={Author9} alt="" />
                      <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button onclick="location.href='item-details.html'">
                          Buy Now
                        </button>
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
                    <a href="item-details.html">
                      <img
                        src={Static6}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Pixel World</h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                      0.015 ETH<span>1/25</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>46</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
              >
                <div className="nft__item">
                  <div className="author_list_pp">
                    <a
                      href="author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Fred Ryan"
                    >
                      <img className="lazy" src={Author12} alt="" />
                      <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button onclick="location.href='item-details.html'">
                          Buy Now
                        </button>
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
                    <a href="item-details.html">
                      <img
                        src={Anime8}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>I Believe I Can Fly</h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                      0.055 ETH<span>1/4</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>54</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
              >
                <div className="nft__item">
                  <div className="author_list_pp">
                    <a
                      href="author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Lori Hart"
                    >
                      <img className="lazy" src={Author4} alt="" />
                      <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button onclick="location.href='item-details.html'">
                          Buy Now
                        </button>
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
                    <a href="item-details.html">
                      <img
                        src={Static7}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Cute Astronout</h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                      0.005 ETH<span>1/30</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>32</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
              >
                <div className="nft__item">
                  <div className="author_list_pp">
                    <a
                      href="author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Monica Lucas"
                    >
                      <img className="lazy" src={Author1} alt="" />
                      <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button onclick="location.href='item-details.html'">
                          Buy Now
                        </button>
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
                    <a href="item-details.html">
                      <img
                        src={Static8}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Teal Ocean</h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                      0.025 ETH<span>1/12</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>24</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 text-center">
                <a href="#" id="loadmore" className="btn-main wow fadeInUp lead">
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
