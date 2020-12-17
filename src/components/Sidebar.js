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
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";

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

  const sidebaropen = document.querySelector(".sidebar");
  const sidebarclose = document.querySelector(".sidebar-menu");
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
          <h3>
            Waffle <img src="image/waffle_small_logo.png" alt="" />
          </h3>
          <ExpandMoreIcon
            className="sidebar-menu"
            onClick={() => {
              sidebaropen.classList.toggle("open");
              sidebarclose.classList.toggle("rotate");
            }}
          />
        </div>
        <div className="sidebar__channels">
          <div className="sidebar__channels-header">
            <div className="sidebar__header">
              <ExpandMoreIcon />
              <h4>Waffle channels</h4>
            </div>
            <p title="Add Channel">
              <AddIcon
                className="sidebar__addChannel"
                onClick={handleAddChannel}
              />
            </p>
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
            <a href="/" title="Logout">
              <MeetingRoomIcon onClick={() => auth.signOut()} />
            </a>
          </div>
        </div>
        <div className="sidebar__footer">
          <h5>&copy;Waffle</h5>
          <div className="footer__icons">
            <a
              href="https://www.facebook.com/justin.cho.98622"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/jcmaker0627/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <span title="jcmaker0627@gmail.com">
              <EmailIcon />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
