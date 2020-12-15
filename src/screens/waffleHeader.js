import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { auth } from "../fbManager";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const WaffleHeader = ({ channelName }) => {
  return (
    <div className="waffle-header">
      <ExpandMoreIcon className="sidebar-expand" />
      <div className="waffleHeader-left">
        <h3>
          <span className="header__hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="waffleHeader-right">
        <a href="/" title="Logout">
          <MeetingRoomIcon onClick={() => auth.signOut()} />
        </a>
        <PersonIcon />
        <SettingsIcon />
      </div>
    </div>
  );
};
export default WaffleHeader;
