import React from "react";
import AuthorBanner from "../images/author_single/author_banner.jpg";
import AuthorThumbnail from "../images/author_single/author_thumbnail.jpg";

import Author1 from "../images/author/author-1.jpg";
import Author2 from "../images/author/author-2.jpg";
import Author3 from "../images/author/author-3.jpg";
import Author4 from "../images/author/author-4.jpg";

import Porto1 from "../images/author_single/porto-1.jpg";
import Porto2 from "../images/author_single/porto-2.jpg";
import Porto3 from "../images/author_single/porto-3.jpg";
import Porto4 from "../images/author_single/porto-4.jpg";

import Anime1 from "../images/items/anim-4.webp";
import Anime2 from "../images/items/anim-2.webp";
import Anime4 from "../images/items/anim-4.webp";
import Anime5 from "../images/items/anim-5.webp";
import {
  authorDataTab1,
  authorDataTab2,
  authorDataTab3,
} from "../data/authorData";

const Author = () => {
  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_single/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      <img src={AuthorThumbnail} alt="" />
                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        <h4>
                          Monica Lucas
                          <span className="profile_username">@monicaaa</span>
                          <span id="wallet" className="profile_wallet">
                            DdzFFzCqrhshMSxb9oW3mRo4MJrQkusV3fGFSTwaiu4wPBqMryA9DYVJCkW9n7twCffG5f5wX2sSkoDXGiZB1HPa7K7f865Kk4LqnrME
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">500 followers</div>
                    </div>
                    <div className="de-flex-col">
                      <a href="#" className="btn-main">
                        Follow
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <ul className="de_nav">
                    <li className="active">
                      <span>On Sale</span>
                    </li>
                    <li>
                      <span>Created</span>
                    </li>
                    <li>
                      <span>Liked</span>
                    </li>
                  </ul>

                  <div className="de_tab_content">
                    <div class="tab-1">
                      <div class="row">
                        {authorDataTab1.map((item, index) => (
                          <div
                            class="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                            key={index}
                          >
                            <div class="nft__item">
                              <div
                                class="de_countdown"
                                data-year="2022"
                                data-month="3"
                                data-day="16"
                                data-hour="8"
                              ></div>
                              <div class="author_list_pp">
                                <a href="author.html">
                                  <img class="lazy" src={item.author} alt="" />
                                  <i class="fa fa-check"></i>
                                </a>
                              </div>
                              <div class="nft__item_wrap">
                                <div class="nft__item_extra">
                                  <div class="nft__item_buttons">
                                    <button onclick="location.href='item-details.html'">
                                      Buy Now
                                    </button>
                                    <div class="nft__item_share">
                                      <h4>Share</h4>
                                      <a
                                        href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io"
                                        target="_blank"
                                      >
                                        <i class="fa fa-facebook fa-lg"></i>
                                      </a>
                                      <a
                                        href="https://twitter.com/intent/tweet?url=https://gigaland.io"
                                        target="_blank"
                                      >
                                        <i class="fa fa-twitter fa-lg"></i>
                                      </a>
                                      <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io">
                                        <i class="fa fa-envelope fa-lg"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <a href="item-details.html">
                                  <img
                                    src={item.backgroundImage}
                                    class="lazy nft__item_preview"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div class="nft__item_info">
                                <a href="item-details.html">
                                  <h4>{item.title}</h4>
                                </a>
                                <div class="nft__item_click">
                                  <span></span>
                                </div>
                                <div class="nft__item_price">
                                  {item.eth} ETH<span>1/20</span>
                                </div>
                                <div class="nft__item_action">
                                  <a href="#">Place a bid</a>
                                </div>
                                <div class="nft__item_like">
                                  <i class="fa fa-heart"></i>
                                  <span>{item.likes}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div class="tab-2">
                      <div class="row">
                        {authorDataTab2.map((item, index) => (
                          <div
                            class="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                            key={index}
                          >
                            <div class="nft__item">
                              <div
                                class="de_countdown"
                                data-year="2022"
                                data-month="3"
                                data-day="14"
                                data-hour="8"
                              ></div>
                              <div class="author_list_pp">
                                <a href="author.html">
                                  <img class="lazy" src={item.author} alt="" />
                                  <i class="fa fa-check"></i>
                                </a>
                              </div>
                              <div class="nft__item_wrap">
                                <div class="nft__item_extra">
                                  <div class="nft__item_buttons">
                                    <button onclick="location.href='item-details.html'">
                                      Buy Now
                                    </button>
                                    <div class="nft__item_share">
                                      <h4>Share</h4>
                                      <a
                                        href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io"
                                        target="_blank"
                                      >
                                        <i class="fa fa-facebook fa-lg"></i>
                                      </a>
                                      <a
                                        href="https://twitter.com/intent/tweet?url=https://gigaland.io"
                                        target="_blank"
                                      >
                                        <i class="fa fa-twitter fa-lg"></i>
                                      </a>
                                      <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io">
                                        <i class="fa fa-envelope fa-lg"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <a href="item-details.html">
                                  <img
                                    src={item.backgroundImage}
                                    class="lazy nft__item_preview"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div class="nft__item_info">
                                <a href="item-details.html">
                                  <h4>{item.title}</h4>
                                </a>
                                <div class="nft__item_click">
                                  <span></span>
                                </div>
                                <div class="nft__item_price">
                                  {item.eth} ETH<span>1/11</span>
                                </div>
                                <div class="nft__item_action">
                                  <a href="#">Place a bid</a>
                                </div>
                                <div class="nft__item_like">
                                  <i class="fa fa-heart"></i>
                                  <span>{item.likes}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div class="tab-3">
                      <div class="row">
                        {authorDataTab3.map((item, index) => (
                          <div class="col-lg-3 col-md-6" key={index}>
                            <div class="nft__item">
                              <div class="author_list_pp">
                                <a href="author.html">
                                  <img class="lazy" src={item.author} alt="" />
                                  <i class="fa fa-check"></i>
                                </a>
                              </div>
                              <div class="nft__item_wrap">
                                <a href="item-details.html">
                                  <img
                                    src={item.backgroundImage}
                                    class="lazy nft__item_preview"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div class="nft__item_info">
                                <a href="item-details.html">
                                  <h4>The Truth</h4>
                                </a>
                                <div class="nft__item_click">
                                  <span></span>
                                </div>
                                <div class="nft__item_price">
                                  {item.eth} ETH<span>1/20</span>
                                </div>
                                <div class="nft__item_action">
                                  <a href="#">Place a bid</a>
                                </div>
                                <div class="nft__item_like">
                                  <i class="fa fa-heart"></i>
                                  <span>{item.likes}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <a href="#" id="back-to-top"></a>
    </div>
  );
};

export default Author;
