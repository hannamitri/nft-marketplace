import React, { useEffect, useState } from "react";
import ItemDetailsImage from "../images/items/big-4.jpg";
import CollectionThumbnail1 from "../images/collections/coll-thumbnail-1.jpg";
import EthImage from "../images/misc/ethereum.svg";
import Author1 from "../images/author/author-1.jpg";
import Author10 from "../images/author/author-10.jpg";
import WOW from "wowjs";
import { Link } from "react-router-dom";

const ItemDetails = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();

    window.scrollTo(0, 0);
  });
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
                <img
                  src={ItemDetailsImage}
                  className="img-fluid img-rounded mb-sm-30"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  Auctions ends in
                  <h2>AnimeSailorClub #304</h2>
                  <div className="item_info_counts">
                    <div className="item_info_type">
                      <i className="fa fa-image"></i>Art
                    </div>
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>250
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>18
                    </div>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to="/author">
                            <img className="lazy" src={Author1} alt="" />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to="/author">Monica Lucas</Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h6>Collection</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to="/author">
                            <img
                              className="lazy"
                              src={CollectionThumbnail1}
                              alt=""
                            />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to="/author">AnimeSailorClub</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="spacer-40"></div>
                  <div className="de_tab tab_simple">
                    <ul className="de_nav">
                      <li className={`${activeTab === 1 ? "active" : ""}`}>
                        <span onClick={() => setActiveTab(1)}>Details</span>
                      </li>
                      <li className={`${activeTab === 2 ? "active" : ""}`}>
                        <span onClick={() => setActiveTab(2)}>Bids</span>
                      </li>
                      <li className={`${activeTab === 3 ? "active" : ""}`}>
                        <span onClick={() => setActiveTab(3)}>History</span>
                      </li>
                    </ul>
                    <div className="de_tab_content">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to="/author">
                            <img className="lazy" src={Author10} alt="" />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to="/author">Stacy Long</Link>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-10"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <img src={EthImage} alt="" />
                      <span>0.059</span>($253.67)
                    </div>
                    {/* <a
                      href="#"
                      className="btn-main btn-lg"
                      data-bs-toggle="modal"
                      data-bs-target="#buy_now"
                    >
                      Buy Now
                    </a>
                    &nbsp;
                    <a
                      href="#"
                      className="btn-main btn-lg btn-light"
                      data-bs-toggle="modal"
                      data-bs-target="#place_a_bid"
                    >
                      Place a Bid
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        className="modal fade"
        id="buy_now"
        tabIndex="-1"
        aria-labelledby="buy_now"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered de-modal">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body">
              <div className="p-3 form-border">
                <h3>Checkout</h3>
                You are about to purchase a <b>AnimeSailorClub #304</b> from
                <b>Monica Lucas</b>
                <div className="spacer-single"></div>
                <h6>
                  Enter quantity.{" "}
                  <span className="id-color-2">10 available</span>
                </h6>
                <input
                  type="text"
                  name="buy_now_qty"
                  id="buy_now_qty"
                  className="form-control"
                  defaultValue="1"
                />
                <div className="spacer-single"></div>
                <div className="de-flex">
                  <div>Your balance</div>
                  <div>
                    <b>10.67856 ETH</b>
                  </div>
                </div>
                <div className="de-flex">
                  <div>Service fee 2.5%</div>
                  <div>
                    <b>0.00325 ETH</b>
                  </div>
                </div>
                <div className="de-flex">
                  <div>You will pay</div>
                  <div>
                    <b>0.013325 ETH</b>
                  </div>
                </div>
                <div className="spacer-single"></div>
                <Link to="" className="btn-main btn-fullwidth">
                  Add funds
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="place_a_bid"
        tabIndex="-1"
        aria-labelledby="place_a_bid"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered de-modal">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body">
              <div className="p-3 form-border">
                <h3>Place a Bid</h3>
                You are about to place a bid for
                <b>AnimeSailorClub #304</b> from <b>Monica Lucas</b>
                <div className="spacer-single"></div>
                <h6>Your bid (ETH)</h6>
                <input
                  type="text"
                  name="bid_value"
                  id="bid_value"
                  className="form-control"
                  placeholder="Enter bid"
                />
                <div className="spacer-single"></div>
                <h6>
                  Enter quantity.{" "}
                  <span className="id-color-2">10 available</span>
                </h6>
                <input
                  type="text"
                  name="bid_qty"
                  id="bid_qty"
                  className="form-control"
                  defaultValue="1"
                />
                <div className="spacer-single"></div>
                <div className="de-flex">
                  <div>Your bidding balance</div>
                  <div>
                    <b>0.013325 ETH</b>
                  </div>
                </div>
                <div className="de-flex">
                  <div>Your balance</div>
                  <div>
                    <b>10.67856 ETH</b>
                  </div>
                </div>
                <div className="de-flex">
                  <div>Service fee 2.5%</div>
                  <div>
                    <b>0.00325 ETH</b>
                  </div>
                </div>
                <div className="de-flex">
                  <div>You will pay</div>
                  <div>
                    <b>0.013325 ETH</b>
                  </div>
                </div>
                <div className="spacer-single"></div>
                <Link to="" className="btn-main btn-fullwidth">
                  Place a bid
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#" id="back-to-top"></a>
    </div>
  );
};

export default ItemDetails;
