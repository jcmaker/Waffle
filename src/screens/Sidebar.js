import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

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
      </div>
    </div>
  );
};

export default Sidebar;
