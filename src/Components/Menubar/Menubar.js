import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";

function Menubar() {
  function menuBarClose(e) {
    e.preventDefault();
    const menuBar = document.getElementById("MenuBarID");
    const htmlBodyTag = document.getElementById("bodyID");
    const bodyGradientCSS = document.getElementById("bodyGradientCSS");
    htmlBodyTag.classList.remove("bodyTag");
    menuBar.classList.remove("menu-sec-active");
    bodyGradientCSS.classList.remove("bodyGradientClassVisible");
    bodyGradientCSS.classList.add("bodyGradientClassHidden");
  }

  const siteLogo = require("../Images/site-logo.png");

  return (
    <>
      <div
        id="bodyGradientCSS"
        aria-hidden="true"
        className="bodyGradientClassHidden"
        onClick={menuBarClose}
      ></div>
      <section className="menu-sec" id="MenuBarID">
        <div className="mb-container">
          <div className="top-cont">
            <div className="mb-site-logo">
              <a href="/">
                <img src={siteLogo} alt="Site Logo" />
              </a>
            </div>
            <div className="menu-bar-cross-icon" onClick={menuBarClose}>
              <CloseRoundedIcon />
            </div>
          </div>
          <nav role="navigation" className="middle-cont">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="collapse up">
                <a href="/" className="clollapse-a">
                  Entertainment
                </a>
                <span className="clollapse-span">
                  <KeyboardArrowDownSharpIcon />
                </span>
                <ul className="clollapse-ul">
                  <li>a</li>
                  <li>b</li>
                  <li>c</li>
                  <li>d</li>
                </ul>
              </li>
              <li className="collapse up">
                <a href="/" className="clollapse-a">
                  Homekjgkddnfjwkfkjsf
                </a>
                <span className="clollapse-span">
                  <KeyboardArrowDownSharpIcon />
                </span>
                <ul className="clollapse-ul">
                  <li>a</li>
                  <li>b</li>
                  <li>c</li>
                  <li>d</li>
                </ul>
              </li>
              <li className="collapse up">
                <a href="/" className="clollapse-a">
                  Homekjgkddnfjwkfkjsf
                </a>
                <span className="clollapse-span">
                  <KeyboardArrowDownSharpIcon />
                </span>
                <ul className="clollapse-ul">
                  <li>a</li>
                  <li>b</li>
                  <li>c</li>
                  <li>d</li>
                </ul>
              </li>
              <li className="collapse">
                <a href="/">Home</a>
                <span>
                  <KeyboardArrowDownSharpIcon />
                </span>
              </li>
              <li className="collapse">
                <a href="/">Home</a>
                <span>
                  <KeyboardArrowDownSharpIcon />
                </span>
              </li>
              <li className="collapse">
                <a href="/">Home</a>
                <span>
                  <KeyboardArrowDownSharpIcon />
                </span>
              </li>

              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </nav>
          <div className="bottom-cont">Container 3</div>
        </div>
      </section>
    </>
  );
}

export default Menubar;
