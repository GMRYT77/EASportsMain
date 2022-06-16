import React from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import latestNewsArray from "../../Arrays/LatestPostArray";

function LeftMainContent() {
  return (
    <aside className="left-cont sticky">
      <div className="latest-news-cont common-cont">
        <div className="news-title">
          <span className="headlines-headings">Latest News</span>
        </div>
        <div className="latest-post-cont">
          {latestNewsArray.map((latestNewsArray) => (
            <div className="single-latest-post" key={latestNewsArray.title}>
              <a href="/" className="img-cont">
                <img src={latestNewsArray.img} alt={latestNewsArray.title} />
              </a>

              <div className="text-cont">
                <div className="category">
                  <a href={latestNewsArray.category}>
                    <LocalOfferIcon sx={{ fontSize: 13 }} />
                    {latestNewsArray.category}
                  </a>
                </div>
                <div className="title">
                  <a href="/">
                    <span>{latestNewsArray.title}</span>
                  </a>
                </div>
              </div>

              <div className="publish-date">
                <span>
                  Published: {latestNewsArray.publishDate},{" "}
                  {latestNewsArray.publishTime}
                </span>
              </div>

              <div className="share-icon">
                <div className="bookmark">
                  <BookmarkBorderOutlinedIcon sx={{ fontSize: 30 }} />
                </div>
                <div className="share">
                  <ShareOutlinedIcon sx={{ fontSize: 30 }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn">
          View More <ArrowForwardIosOutlinedIcon sx={{ fontSize: 20 }} />
        </button>
      </div>

      <div className="co common-cont">
        <div className="click">ads</div>
      </div>
    </aside>
  );
}

export default LeftMainContent;
