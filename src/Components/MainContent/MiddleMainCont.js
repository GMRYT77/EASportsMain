import React from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function MiddleMainCont() {
  const latestNewsArray = [
    {
      title:
        "nfnin snf sofo oifo sfisf sfsn fs fjsnfsn isfhi jnv jn hg hhkj i kbugub uguybjg jbj jb jhbjb jbj hbj jb",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      category: "Cricket",
      publishDate: "21 May 22",
      publishTime: "3PM",
    },
    {
      title: "hfsh jsfn jfnfjnj j jdf bjnf ksjfnsn fj",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&usqp=CAU",
      category: "Entertainment",
      publishDate: "21 May 22",
      publishTime: "3PM",
    },
    {
      title: "fsn fnk jfj dbfj fhusd fbdnvn ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKHPsvNDJHY9tWpkHrfkfo8Dkf0LvZU3Hdg&usqp=CAU",
      category: "Football",
      publishDate: "21 May 22",
      publishTime: "3PM",
    },
    {
      title: "sf aj knkansfub ndb fbdb js vs vbvhs v vxv cbdd",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&usqp=CAU",
      category: "Cricket",
      publishDate: "21 May 22",
      publishTime: "3PM",
    },
    {
      title: "dj fhvfhv vudf v vu bc vfim fj v ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVTU89MIWSq3LP_chJmHwSTWGLHolHRbkPXw&usqp=CAU",
      category: "Basketball",
      publishDate: "21 May 22",
      publishTime: "3PM",
    },
    {
      title: "sfd n mnj njusnfn uun vunjnvjjv  bv n  nvj nvmcn v",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU",
      category: "Hockey",
      publishDate: "21 May 22",
      publishTime: "3PM",
    },
    {
      title: "jnd fknfninf n i n kf jnkfn nd ka idas ins fmsm fis s vis",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyNtCM2SBewRilvmRiBDM5uPsXV7jb6KeBw&usqp=CAU",
      category: "Football",
      publishDate: "21 May 22",
      publishTime: "3PM",
    },
  ];

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
              <div className="right-cont">
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
              <div className="post-right-cont">
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
    </div>
  );
}

export default MiddleMainCont;
