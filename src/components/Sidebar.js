import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "../screens/sidebarChannel";
import { Avatar } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../fbManager";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new Channel Name");
    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };
  return (
    <>
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
            <AddIcon
              className="sidebar__addChannel"
              onClick={handleAddChannel}
            />
          </div>
          <div className="sidebar__channels-list">
            {channels.map(({ id, channel }) => (
              <SidebarChannel
                key={id}
                id={id}
                channelName={channel.channelName}
              />
            ))}
          </div>
        </div>
        <div className="sidebar__profile">
          <Avatar src={user.photo} />
          <div className="sidebar__profileInfo">
            <h3>{user.displayName}</h3>
            <p>#{user.uid.substring(0, 6)}</p>
          </div>
          <div className="sidebar_profileIcon">
            <SettingsIcon />
            <a href="/">
              <MeetingRoomIcon onClick={() => auth.signOut()} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
