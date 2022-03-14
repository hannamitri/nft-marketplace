import React from "react";
import { authorDataTab1, authorDataTab2, authorDataTab3 } from "../../data/authorData";

const AuthorItems = () => {
  return (
    <div className="de_tab_content">
      <div class="tab-1">
        <div class="row">
          {authorDataTab1.map((item, index) => (
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
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
                      <button>Buy Now</button>
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
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
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
                      <button>Buy Now</button>
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
  );
};

export default AuthorItems;
