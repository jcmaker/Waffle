import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";

const WaffleHeader = ({ channelName }) => {
  return (
    <div className="waffle-header">
      <div className="waffleHeader-left">
        <h3>
          <span className="header__hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="waffleHeader-right">
        <PersonIcon />
        <SettingsIcon />
      </div>
    </div>
  );
};
export default WaffleHeader;
