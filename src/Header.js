import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header-left">
        <Avatar
          className="header-avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="header-search">
        <SearchIcon />
        <input placeholder="Search Programmer" />
      </div>
      <div className="header-right">
        <HelpOutlineOutlinedIcon />
      </div>
    </div>
  );
}

export default Header;
