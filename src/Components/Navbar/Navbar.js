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

function Navbar() {
  const siteLogo = require("../Images/site-logo.png");
  const profilePic = require("../Images/blank-profile-picture.png");

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

  function showProfileMenu(e) {
    e.preventDefault();
    const profileMenu = document.getElementById("userProfileID");
    const userDropDownArrow = document.getElementById("user-down-arrow");
    profileMenu.classList.toggle("user-profile-dropdown-active");
    userDropDownArrow.classList.toggle("userDropDownArrowActive");
    userDropDownArrow.classList.remove("userDropDownArrowRest");
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

            <li className="search-li">
              <SearchIcon />
              <div className="search-bar">search</div>
            </li>

            <li>
              <Link to="/m">
                <NotificationsIcon />
              </Link>
            </li>
          </ul>
          <div className="cont2">
            <a href="/">
              <img src={siteLogo} alt="Site Logo" />
            </a>
          </div>
          <div className="cont3">
            <div className="user-profile" onClick={showProfileMenu}>
              <div className="logged-in-user-name">
                <span>Eshaan</span>
              </div>
              <div className="logged-in-user-pic" id="logged-in-user-pic-ID">
                <img src={profilePic} alt="user pic" />
              </div>
              <div id="user-down-arrow">
                <KeyboardArrowDownRoundedIcon fontSize="small" />
              </div>
              <ProfileMenu />
            </div>
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
            <div className="subscribe-menu">
              <span>subscribe</span>
              <div className="sub-dropdown">
                <div className="sub-cont">
                  <span>hey</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SettingMenu />
      <Menubar />
    </>
  );
}

export default Navbar;
