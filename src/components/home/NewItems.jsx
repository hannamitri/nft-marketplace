import React from "react";
import OwlCarousel from "react-owl-carousel";
import { newItemsData } from "../../data/newItemsData";

const NewItems = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <OwlCarousel className="owl-theme" {...options}>
            {newItemsData.map((item, index) => (
              <div className="nft__item" key={index}>
                <div
                  class="de_countdown"
                  data-year="2022"
                  data-month="3"
                  data-day="16"
                  data-hour="8"
                ></div>
                <div class="author_list_pp">
                  <a
                    href="author.html"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Creator: Monica Lucas"
                  >
                    <img class="lazy" src={item.author} alt="" />
                    <i class="fa fa-check"></i>
                  </a>
                </div>
                <div class="nft__item_wrap">
                  <div class="nft__item_extra">
                    <div class="nft__item_buttons">
                      <button>
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
                  <div class="nft__item_price">{item.eth} ETH</div>
                  <div class="nft__item_action">
                    <a href="#">Place a bid</a>
                  </div>
                  <div class="nft__item_like">
                    <i class="fa fa-heart"></i>
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
