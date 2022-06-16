import React from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import BookmarksRoundedIcon from "@mui/icons-material/BookmarksRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import LabelImportantRoundedIcon from "@mui/icons-material/LabelImportantRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";

function ProfileMenu() {
  return (
    <ul className="user-profile-dropdown" id="userProfileID">
      <li>
        <a href="/">
          <AccountCircleRoundedIcon fontSize="small" />
          <span>Profile</span>
        </a>
      </li>
      <li>
        <a href="/">
          <BookmarksRoundedIcon fontSize="small" />
          <span>Bookmarks</span>
        </a>
      </li>
      <li>
        <a href="/">
          <FavoriteRoundedIcon fontSize="small" />
          <span>Favorites</span>
        </a>
      </li>
      <li>
        <a href="/">
          <NotificationsIcon fontSize="small" />
          <span>Notifications</span>
        </a>
      </li>
      <li>
        <a href="/">
          <LabelImportantRoundedIcon fontSize="small" />
          <span>Labels</span>
        </a>
      </li>
      <li>
        <a href="/">
          <LogoutRoundedIcon fontSize="small" />
          <span>Log out</span>
        </a>
      </li>
    </ul>
  );
}

export default ProfileMenu;
