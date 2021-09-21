import React from "react";
import "./SidebarLabel.scss";

import logo from "../../assets/images/logo-small.jpg";

const SidebarLabel = () => {
  return (
    <div className="sidebar__label shadow-4 p-3">
      <img src={logo} alt="logo" className="sidebar__label--logo mr-3" />
      <span className="sidebar__label--title">Brewdog Punk-API</span>
    </div>
  );
};

export default SidebarLabel;
