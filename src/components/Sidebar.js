import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "../screens/sidebarChannel";
import { Avatar } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Waffle</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channels-header">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>text channels</h4>
          </div>
          <AddIcon className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channels-list">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar />
        <div className="sidebar__profileInfo">
          <h3>@jcmaker0627</h3>
          <p>#thisIsMyID</p>
        </div>
        <div className="sidebar_profileIcon">
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
