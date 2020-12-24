import React from "react";
import logo from "../../assests/insta-tag.png";
import InputField from "../shared/inputfield";
import HomeIcon from "@material-ui/icons/Home";
import ForumIcon from "@material-ui/icons/Forum";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { IconButton } from "@material-ui/core";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-inside">
        <div className="logo">
          <a href="#">
            <img src={logo}></img>
          </a>
        </div>
        <div className="searchbar">
          <InputField type="text" placeholder="Search"></InputField>
        </div>
        <div className="icons">
          <HomeIcon style={{ marginRight: '10px'}}/>
          <ForumIcon style={{ marginRight: '10px'}}/>
          <ExploreIcon style={{ marginRight: '10px'}}/>
          <FavoriteIcon style={{ marginRight: '2px'}}/>
        </div>
        <div className="profile">
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
