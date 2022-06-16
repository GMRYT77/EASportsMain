import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import ProfileMenu from "./ProfileMenu";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import SettingMenu from "../Menubar/SettingMenu";
import { Link } from "react-router-dom";
import Menubar from "../Menubar/Menubar";

function SemiNavbar() {
  const siteLogo = require("../Images/site-logo.png");

  function menuBarOpen(e) {
    e.preventDefault();
    const menuBar = document.getElementById("MenuBarID");
    menuBar.classList.add("menu-sec-active");

    const htmlBodyTag = document.getElementById("bodyID");
    const bodyGradientCSS = document.getElementById("bodyGradientCSS");
    const profileMenu = document.getElementById("userProfileID");
    profileMenu.classList.remove("user-profile-dropdown-active");
    htmlBodyTag.classList.add("bodyTag");
    bodyGradientCSS.classList.add("bodyGradientClassVisible");
    bodyGradientCSS.classList.remove("bodyGradientClassHidden");
  }

  document.addEventListener("mouseup", function (e) {
    e.preventDefault();
    var profileMenu = document.getElementById("userProfileID");
    const userDropDownArrow = document.getElementById("user-down-arrow");
    const y = document.getElementById("language-menu");

    if (!profileMenu.contains(e.target)) {
      profileMenu.classList.remove("user-profile-dropdown-active");
      userDropDownArrow.classList.remove("userDropDownArrowActive");
      userDropDownArrow.classList.add("userDropDownArrowRest");
      y.classList.remove("language-menu-active");
    }
  });

  document.addEventListener("mouseup", function (e) {
    e.preventDefault();
    var settingSecID = document.getElementById("settingSecID");
    if (!settingSecID.contains(e.target)) {
      settingSecID.classList.remove("setting-menu-active");
    }
  });

  function clicko(e) {
    e.preventDefault();
    const y = document.getElementById("language-menu");
    y.classList.toggle("language-menu-active");
  }

  function settingMenuToggle(e) {
    e.preventDefault();

    const settingsMenu = document.getElementById("settingSecID");
    settingsMenu.classList.toggle("setting-menu-active");

    const htmlBodyTag = document.getElementById("bodyID");
    const bodyGradientCSS = document.getElementById("bodyGradientCSS");

    htmlBodyTag.classList.add("bodyTag");
    bodyGradientCSS.classList.add("bodyGradientClassVisible");
    bodyGradientCSS.classList.remove("bodyGradientClassHidden");
  }

  function sos(e) {
    e.preventDefault();
    console.log(e.target);
  }

  return (
    <>
      <section className="nav-sec">
        <div className="container">
          <ul className="cont1">
            <li id="lii" onClick={menuBarOpen}>
              <a href="/">
                <MenuIcon />
              </a>
            </li>
            <li onMouseDown={sos}>
              <Link to="/">
                <HomeIcon />
              </Link>
            </li>
          </ul>
          <div className="cont2">
            <Link to="/">
              <img src={siteLogo} alt="Site Logo" />
            </Link>
          </div>
          <div className="cont3">
            <ul className="nav-menu-icons">
              <li onClick={clicko}>
                <a href="/" id="langMenuID">
                  <LanguageRoundedIcon />
                </a>
                <ul id="language-menu" className="hhhk">
                  <li>
                    <span id="Eng-lang">English (US)</span>
                  </li>
                  <li>
                    <span id="Hin-lang">Hindi</span>
                  </li>
                </ul>
              </li>
              <li onClick={settingMenuToggle}>
                <a href="/">
                  <SettingsIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <SettingMenu />
      <Menubar />
    </>
  );
}

export default SemiNavbar;
