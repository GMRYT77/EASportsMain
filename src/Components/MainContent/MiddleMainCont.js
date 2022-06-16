import React from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import latestNewsArray from "../../Arrays/LatestPostArray";

function MiddleMainCont() {
  return (
    <div className="middle-cont ">
      <div className="top-news-cont common-cont">
        <div className="news-title">
          <span className="headlines-headings">Top News</span>
        </div>
        <div className="top-news-box">
          <div className="cont1">
            <div className="top-cont">
              <div className="category">
                <a href="/">
                  <LocalOfferIcon sx={{ fontSize: 13 }} />
                  Category
                </a>
              </div>
              <div className="title">
                <a href="/">
                  <span>
                    MEA denies Iran foreign minister raised Prophet Mohammed
                    remarks in meeting
                  </span>
                </a>
              </div>
            </div>
            <a className="img-cont">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU"
                alt=""
              />
            </a>
            <div className="bottom-cont">
              <div className="publish-date">
                <span>Published: 10 May 22, 5PM</span>
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
            <div className="corousal-bar">
              <div className="bar active"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
          <div className="cont2">
            <div className="top-cont">
              <div className="category">
                <a href="/">
                  <LocalOfferIcon sx={{ fontSize: 13 }} />
                  Category
                </a>
              </div>
              <div className="title">
                <a href="/">
                  <span>
                    MEA denies Iran foreign minister raised Prophet Mohammed
                    remarks in meeting
                  </span>
                </a>
              </div>
            </div>
            <a className="img-cont">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKHPsvNDJHY9tWpkHrfkfo8Dkf0LvZU3Hdg&usqp=CAU"
                alt=""
              />
            </a>
            <div className="bottom-cont">
              <div className="publish-date">
                <span>Published: 10 May 22, 5PM</span>
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
          </div>
          <div className="cont3">
            <div className="top-cont">
              <div className="category">
                <a href="/">
                  <LocalOfferIcon sx={{ fontSize: 13 }} />
                  Category
                </a>
              </div>
              <div className="title">
                <a href="/">
                  <span>
                    MEA denies Iran foreign minister raised Prophet Mohammed
                    remarks in meeting
                  </span>
                </a>
              </div>
            </div>
            <a className="img-cont">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVTU89MIWSq3LP_chJmHwSTWGLHolHRbkPXw&usqp=CAU"
                alt=""
              />
            </a>
            <div className="bottom-cont">
              <div className="publish-date">
                <span>Published: 10 May 22, 5PM</span>
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
          </div>
          <div className="cont4">
            <div className="top-cont">
              <div className="category">
                <a href="/">
                  <LocalOfferIcon sx={{ fontSize: 13 }} />
                  Category
                </a>
              </div>
              <div className="title">
                <a href="/">
                  <span>
                    MEA denies Iran foreign minister raised Prophet Mohammed
                    remarks in meeting
                  </span>
                </a>
              </div>
            </div>
            <a className="img-cont">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&usqp=CAU"
                alt=""
              />
            </a>
            <div className="bottom-cont">
              <div className="publish-date">
                <span>Published: 10 May 22, 5PM</span>
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
            <div className="corousal-bar">
              <div className="bar active"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="post-cont common-cont">
        <div className="news-title">
          <span className="headlines-headings">Posts</span>
        </div>

        <div className="post-wrapper">
          {latestNewsArray.map((latestNewsArray) => (
            <div className="single-post">
              <a href="/" className="img-cont">
                <img src={latestNewsArray.img} alt={latestNewsArray.title} />
              </a>
              <div className="p-cont">
                <div className="top-cont">
                  <div className="category">
                    <a href="/">
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
                <div className="bottom-cont">
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
              </div>
            </div>
          ))}
        </div>
        <button className="btn">
          View More <ArrowForwardIosOutlinedIcon sx={{ fontSize: 20 }} />
        </button>
      </div>

      <div className="post-cont dont-miss common-cont">
        <div className="news-title">
          <span className="headlines-headings">Don't Miss</span>
        </div>

        <div className="post-wrapper">
          {latestNewsArray.map((latestNewsArray) => (
            <div className="single-post">
              <a href="/" className="img-cont">
                <img src={latestNewsArray.img} alt={latestNewsArray.title} />
              </a>
              <div className="p-cont">
                <div className="top-cont">
                  <div className="category">
                    <a href="/">
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
                <div className="bottom-cont">
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
              </div>
            </div>
          ))}
        </div>
        <button className="btn">
          View More <ArrowForwardIosOutlinedIcon sx={{ fontSize: 20 }} />
        </button>
      </div>

      <div className="ads ">ads</div>
    </div>
  );
}

export default MiddleMainCont;
