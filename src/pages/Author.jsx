import React from "react";
import AuthorBanner from "../images/author_single/author_banner.jpg";
import AuthorThumbnail from "../images/author_single/author_thumbnail.jpg";
import AuthorImage from "../images/author/author-1.jpg";
import AuthorPorto1 from "../images/author_single/porto-1.jpg";
import AuthorPorto2 from "../images/author_single/porto-2.jpg";
import AuthorPorto3 from "../images/author_single/porto-3.jpg";
import AuthorPorto4 from "../images/author_single/porto-4.jpg";

const Author = () => {
  return (
    <div id="wrapper">
      <header class="header-light scroll-light">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="de-flex sm-pt10">
                <div class="de-flex-col">
                  <div class="de-flex-col">
                    <div id="logo">
                      <a href="index.html">
                        <img alt="" src="images/logo-1.png" />
                      </a>
                    </div>
                  </div>
                  <div class="de-flex-col">
                    <input
                      id="quick_search"
                      class="xs-hide"
                      name="quick_search"
                      placeholder="search item here..."
                      type="text"
                    />
                  </div>
                </div>
                <div class="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    <li>
                      <a href="index.html">
                        Home<span></span>
                      </a>
                      <ul>
                        <li>
                          <a href="03_grey-index.html">Grey Scheme</a>
                        </li>
                        <li>
                          <a href="05_black-index.html">Black Scheme</a>
                        </li>
                        <li>
                          <a href="06_clivus-index.html">Clivus Scheme</a>
                        </li>
                        <li>
                          <a href="04_retro-index.html">Retro Scheme</a>
                        </li>
                        <li>
                          <a href="index.html">Homepage 1</a>
                        </li>
                        <li>
                          <a href="index-2.html">Homepage 2</a>
                        </li>
                        <li>
                          <a href="index-3.html">Homepage 3</a>
                        </li>
                        <li>
                          <a href="index-4.html">Homepage 4</a>
                        </li>
                        <li>
                          <a href="index-5.html">Homepage 5</a>
                        </li>
                        <li>
                          <a href="index-6.html">Homepage 6</a>
                        </li>
                        <li>
                          <a href="index-7.html">Homepage 7</a>
                        </li>
                        <li>
                          <a href="index-8.html">Homepage 8</a>
                        </li>
                        <li>
                          <a href="index-9.html">Homepage 9</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="explore.html">
                        Explore<span></span>
                      </a>
                      <ul>
                        <li>
                          <a href="explore.html">Explore</a>
                        </li>
                        <li>
                          <a href="explore-2.html">Explore 2</a>
                        </li>
                        <li>
                          <a href="explore-music-nft.html">New: Music NFT</a>
                        </li>
                        <li>
                          <a href="collection.html">Collections</a>
                        </li>
                        <li>
                          <a href="live-auction.html">Live Auction</a>
                        </li>
                        <li>
                          <a href="item-details.html">Item Details</a>
                        </li>
                        <li>
                          <a href="help-center.html">Help Center</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Pages<span></span>
                      </a>
                      <ul>
                        <li>
                          <a href="author.html">Author</a>
                        </li>
                        <li>
                          <a href="profile.html">Profile</a>
                        </li>
                        <li>
                          <a href="wallet.html">Wallet</a>
                        </li>
                        <li>
                          <a href="create-options.html">Create</a>
                        </li>
                        <li>
                          <a href="news.html">News</a>
                        </li>
                        <li>
                          <a href="gallery.html">Gallery</a>
                        </li>
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          <a href="login-2.html">Login 2</a>
                        </li>
                        <li>
                          <a href="register.html">Register</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Stats<span></span>
                      </a>
                      <ul>
                        <li>
                          <a href="activity.html">Activity</a>
                        </li>
                        <li>
                          <a href="rankings.html">Rankings</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Elements<span></span>
                      </a>
                      <ul>
                        <li>
                          <a href="icons-elegant.html">Elegant Icons</a>
                        </li>
                        <li>
                          <a href="icons-etline.html">Etline Icons</a>
                        </li>
                        <li>
                          <a href="icons-font-awesome.html">
                            Font Awesome Icons
                          </a>
                        </li>
                        <li>
                          <a href="accordion.html">Accordion</a>
                        </li>
                        <li>
                          <a href="alerts.html">Alerts</a>
                        </li>
                        <li>
                          <a href="counters.html">Counters</a>
                        </li>
                        <li>
                          <a href="modal.html">Modal</a>
                        </li>
                        <li>
                          <a href="popover.html">Popover</a>
                        </li>
                        <li>
                          <a href="pricing-table.html">Pricing Table</a>
                        </li>
                        <li>
                          <a href="progress-bar.html">Progress Bar</a>
                        </li>
                        <li>
                          <a href="tabs.html">Tabs</a>
                        </li>
                        <li>
                          <a href="tooltips.html">Tooltips</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div class="menu_side_area">
                    <div class="de-login-menu">
                      <a href="create-options.html" class="btn-main">
                        <i class="fa fa-plus"></i>
                        <span>Create</span>
                      </a>

                      <span
                        id="de-click-menu-notification"
                        class="de-menu-notification"
                      >
                        <span class="d-count">8</span>
                        <i class="fa fa-bell"></i>
                      </span>

                      <span id="de-click-menu-profile" class="de-menu-profile">
                        <img src={AuthorThumbnail} class="img-fluid" alt="" />
                      </span>

                      <div id="de-submenu-notification" class="de-submenu">
                        <div class="de-flex">
                          <div>
                            <h4>Notifications</h4>
                          </div>
                          <a href="#">Show all</a>
                        </div>

                        <ul>
                          <li>
                            <a href="#">
                              <img
                                class="lazy"
                                src="images/author/author-2.jpg"
                                alt=""
                              />
                              <div class="d-desc">
                                <span class="d-name">
                                  <b>Mamie Barnett</b> started following you
                                </span>
                                <span class="d-time">1 hour ago</span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                class="lazy"
                                src="images/author/author-3.jpg"
                                alt=""
                              />
                              <div class="d-desc">
                                <span class="d-name">
                                  <b>Nicholas Daniels</b> liked your item
                                </span>
                                <span class="d-time">2 hours ago</span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                class="lazy"
                                src="images/author/author-4.jpg"
                                alt=""
                              />
                              <div class="d-desc">
                                <span class="d-name">
                                  <b>Lori Hart</b> started following you
                                </span>
                                <span class="d-time">18 hours ago</span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                class="lazy"
                                src="images/author/author-5.jpg"
                                alt=""
                              />
                              <div class="d-desc">
                                <span class="d-name">
                                  <b>Jimmy Wright</b> liked your item
                                </span>
                                <span class="d-time">1 day ago</span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                class="lazy"
                                src="images/author/author-6.jpg"
                                alt=""
                              />
                              <div class="d-desc">
                                <span class="d-name">
                                  <b>Karla Sharp</b> started following you
                                </span>
                                <span class="d-time">3 days ago</span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div id="de-submenu-profile" class="de-submenu">
                        <div class="d-name">
                          <h4>Monica Lucas</h4>
                          <a href="profile.html">Set display name</a>
                        </div>
                        <div class="spacer-10"></div>
                        <div class="d-balance">
                          <h4>Balance</h4>
                          12.858 ETH
                        </div>
                        <div class="spacer-10"></div>
                        <div class="d-wallet">
                          <h4>My Wallet</h4>
                          <span id="wallet" class="d-wallet-address">
                            DdzFFzCqrhshMSxb9oW3mRo4MJrQkusV3fGFSTwaiu4wPBqMryA9DYVJCkW9n7twCffG5f5wX2sSkoDXGiZB1HPa7K7f865Kk4LqnrME
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </div>

                        <div class="d-line"></div>

                        <ul class="de-submenu-profile">
                          <li>
                            <a href="author.html">
                              <i class="fa fa-user"></i> My profile
                            </a>
                          </li>
                          <li>
                            <a href="profile.html">
                              <i class="fa fa-pencil"></i> Edit profile
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-sign-out"></i> Sign out
                            </a>
                          </li>
                        </ul>
                      </div>
                      <span id="menu-btn"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          class="text-light"
          data-bgimage="url(images/author_single/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="d_profile de-flex">
                  <div class="de-flex-col">
                    <div class="profile_avatar">
                      <img src={AuthorThumbnail} alt="" />
                      <i class="fa fa-check"></i>
                      <div class="profile_name">
                        <h4>
                          Monica Lucas
                          <span class="profile_username">@monicaaa</span>
                          <span id="wallet" class="profile_wallet">
                            DdzFFzCqrhshMSxb9oW3mRo4MJrQkusV3fGFSTwaiu4wPBqMryA9DYVJCkW9n7twCffG5f5wX2sSkoDXGiZB1HPa7K7f865Kk4LqnrME
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="profile_follow de-flex">
                    <div class="de-flex-col">
                      <div class="profile_follower">500 followers</div>
                    </div>
                    <div class="de-flex-col">
                      <a href="#" class="btn-main">
                        Follow
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="de_tab tab_simple">
                  <ul class="de_nav">
                    <li class="active">
                      <span>On Sale</span>
                    </li>
                    <li>
                      <span>Created</span>
                    </li>
                    <li>
                      <span>Liked</span>
                    </li>
                  </ul>

                  <div class="de_tab_content">
                    <div class="tab-1">
                      <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
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
                                <img class="lazy" src={AuthorImage} alt="" />
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
                                  src={AuthorPorto1}
                                  class="lazy nft__item_preview"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="nft__item_info">
                              <a href="item-details.html">
                                <h4>Pinky Ocean</h4>
                              </a>
                              <div class="nft__item_click">
                                <span></span>
                              </div>
                              <div class="nft__item_price">
                                0.08 ETH<span>1/20</span>
                              </div>
                              <div class="nft__item_action">
                                <a href="#">Place a bid</a>
                              </div>
                              <div class="nft__item_like">
                                <i class="fa fa-heart"></i>
                                <span>50</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                          <div class="nft__item">
                            <div class="author_list_pp">
                              <a href="author.html">
                                <img class="lazy" src={AuthorImage} alt="" />
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
                                  src={AuthorPorto2}
                                  class="lazy nft__item_preview"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="nft__item_info">
                              <a href="item-details.html">
                                <h4>The Animals</h4>
                              </a>
                              <div class="nft__item_click">
                                <span></span>
                              </div>
                              <div class="nft__item_price">
                                0.06 ETH<span>1/22</span>
                              </div>
                              <div class="nft__item_action">
                                <a href="#">Place a bid</a>
                              </div>
                              <div class="nft__item_like">
                                <i class="fa fa-heart"></i>
                                <span>80</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
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
                                <img class="lazy" src={AuthorImage} alt="" />
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
                                  src={AuthorPorto3}
                                  class="lazy nft__item_preview"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="nft__item_info">
                              <a href="item-details.html">
                                <h4>Three Donuts</h4>
                              </a>
                              <div class="nft__item_click">
                                <span></span>
                              </div>
                              <div class="nft__item_price">
                                0.05 ETH<span>1/11</span>
                              </div>
                              <div class="nft__item_action">
                                <a href="#">Place a bid</a>
                              </div>
                              <div class="nft__item_like">
                                <i class="fa fa-heart"></i>
                                <span>97</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                          <div class="nft__item">
                            <div class="author_list_pp">
                              <a href="author.html">
                                <img class="lazy" src={AuthorImage} alt="" />
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
                                  src={AuthorPorto4}
                                  class="lazy nft__item_preview"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="nft__item_info">
                              <a href="item-details.html">
                                <h4>Graffiti Colors</h4>
                              </a>
                              <div class="nft__item_click">
                                <span></span>
                              </div>
                              <div class="nft__item_price">
                                0.02 ETH<span>1/15</span>
                              </div>
                              <div class="nft__item_action">
                                <a href="#">Place a bid</a>
                              </div>
                              <div class="nft__item_like">
                                <i class="fa fa-heart"></i>
                                <span>73</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="tab-2">
                      <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
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
                                <img class="lazy" src={AuthorImage} alt="" />
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
                                  src={AuthorPorto3}
                                  class="lazy nft__item_preview"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="nft__item_info">
                              <a href="item-details.html">
                                <h4>Three Donuts</h4>
                              </a>
                              <div class="nft__item_click">
                                <span></span>
                              </div>
                              <div class="nft__item_price">
                                0.05 ETH<span>1/11</span>
                              </div>
                              <div class="nft__item_action">
                                <a href="#">Place a bid</a>
                              </div>
                              <div class="nft__item_like">
                                <i class="fa fa-heart"></i>
                                <span>97</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
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
                                <img class="lazy" src={AuthorImage} alt="" />
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
                                  src={AuthorPorto1}
                                  class="lazy nft__item_preview"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="nft__item_info">
                              <a href="item-details.html">
                                <h4>Pinky Ocean</h4>
                              </a>
                              <div class="nft__item_click">
                                <span></span>
                              </div>
                              <div class="nft__item_price">
                                0.08 ETH<span>1/20</span>
                              </div>
                              <div class="nft__item_action">
                                <a href="#">Place a bid</a>
                              </div>
                              <div class="nft__item_like">
                                <i class="fa fa-heart"></i>
                                <span>50</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                          <div class="nft__item">
                            <div class="author_list_pp">
                              <a href="author.html">
                                <img class="lazy" src={AuthorImage} alt="" />
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
                                  src={AuthorPorto2}
                                  class="lazy nft__item_preview"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="nft__item_info">
                              <a href="item-details.html">
                                <h4>The Animals</h4>
                              </a>
                              <div class="nft__item_click">
                                <span></span>
                              </div>
                              <div class="nft__item_price">
                                0.06 ETH<span>1/22</span>
                              </div>
                              <div class="nft__item_action">
                                <a href="#">Place a bid</a>
                              </div>
                              <div class="nft__item_like">
                                <i class="fa fa-heart"></i>
                                <span>80</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                          <div class="nft__item">
                            <div class="author_list_pp">
                              <a href="author.html">
                                <img class="lazy" src={AuthorImage} alt="" />
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
                                  src={AuthorPorto4}
                                  class="lazy nft__item_preview"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="nft__item_info">
                              <a href="item-details.html">
                                <h4>Graffiti Colors</h4>
                              </a>
                              <div class="nft__item_click">
                                <span></span>
                              </div>
                              <div class="nft__item_price">
                                0.02 ETH<span>1/15</span>
                              </div>
                              <div class="nft__item_action">
                                <a href="#">Place a bid</a>
                              </div>
                              <div class="nft__item_like">
                                <i class="fa fa-heart"></i>
                                <span>73</span>
                              </div>
                            </div>
                          </div>
                        </div>
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
