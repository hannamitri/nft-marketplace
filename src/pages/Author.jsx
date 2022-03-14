import React from "react";
import AuthorBanner from "../images/author_single/author_banner.jpg";
import AuthorThumbnail from "../images/author_single/author_thumbnail.jpg";
import {
  authorDataTab1,
  authorDataTab2,
  authorDataTab3,
} from "../data/authorData";
import AuthorItems from "../components/author/AuthorItems";

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

                  <AuthorItems />
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
