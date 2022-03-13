import React, { useState } from "react";
import LogoLight from "../images/logo-light.png";
import Logo from "../images/logo.png";

const Nav = () => {
  const [fixedNav, setFixedNav] = useState("");
  window.onscroll = () => {
    window.scrollY > 1 ? setFixedNav("smaller") : setFixedNav("");
  };

  return (
    <header className={`transparent header-light scroll-light smaller`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div className="de-flex-col">
                  <div id="logo">
                    <a href="index.html">
                      <img alt="" className="logo" src={LogoLight} />
                      <img alt="" className="logo-2" src={Logo} />
                    </a>
                  </div>
                </div>
                <div className="de-flex-col">
                  <input
                    id="quick_search"
                    className="xs-hide"
                    name="quick_search"
                    placeholder="search item here..."
                    type="text"
                  />
                </div>
              </div>
              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu">
                  <li className="menu-item-has-children has-child">
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
                  <li className="menu-item-has-children has-child">
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
                  <li className="menu-item-has-children has-child">
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
                  <li className="menu-item-has-children has-child">
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
                  <li className="menu-item-has-children has-child">
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
                        <a href="icons-font-awesome.html">Font Awesome Icons</a>
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
                <div className="menu_side_area">
                  <a href="wallet.html" className="btn-main btn-wallet">
                    <i className="icon_wallet_alt"></i>
                    <span>Connect Wallet</span>
                  </a>
                  <span id="menu-btn"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
