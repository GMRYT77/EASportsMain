import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
function SettingMenu() {
  function settingMenuClose(e) {
    e.preventDefault();
    const settingsMenu = document.getElementById("settingSecID");
    settingsMenu.classList.remove("setting-menu-active");

    const htmlBodyTag = document.getElementById("bodyID");
    const bodyGradientCSS = document.getElementById("bodyGradientCSS");
    htmlBodyTag.classList.remove("bodyTag");
    bodyGradientCSS.classList.remove("bodyGradientClassVisible");
    bodyGradientCSS.classList.add("bodyGradientClassHidden");
  }

  function lightMode(e) {
    e.preventDefault();
    const lightModeID = document.getElementById("lightModeID");
    const darkModeID = document.getElementById("darkModeID");
    lightModeID.classList.add("active-mode");
    darkModeID.classList.remove("active-mode");
  }
  function darkMode(e) {
    e.preventDefault();
    const lightModeID = document.getElementById("lightModeID");
    const darkModeID = document.getElementById("darkModeID");
    lightModeID.classList.remove("active-mode");
    darkModeID.classList.add("active-mode");
  }

  return (
    <section id="settingSecID" className="settings-sec ">
      <div className="container">
        <div className="top-cont">
          <span>Settings</span>
          <div className="settings-menu-cross-icon" onClick={settingMenuClose}>
            <CloseRoundedIcon />
          </div>
        </div>
        <div className="bottom-cont">
          <div className="ld-mode-cont">
            <span>Mode</span>
            <div className="ld-mode-btn">
              <span
                id="lightModeID"
                className="light-mode-btn "
                onClick={lightMode}
              >
                <LightModeRoundedIcon fontSize="small" /> Light
              </span>
              <span
                id="darkModeID"
                className="dark-mode-btn active-mode"
                onClick={darkMode}
              >
                <DarkModeRoundedIcon fontSize="small" /> Dark
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SettingMenu;
