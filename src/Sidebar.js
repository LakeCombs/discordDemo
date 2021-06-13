import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import Headset from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import db, { auth } from "./firebase";

function Sidebar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  const getChannel = async () => {
    await db.collection("channels").onSnapshot((snapshot) => {
      const channelList = [];
      snapshot.forEach((doc) => {
        channelList.push({ ...doc.data(), id: doc.id });
      });
      setChannels(channelList);
    });
    console.log(channels);
  };

  useEffect(() => {
    // db.collection("channels").onSnapshot((snapshot) => {
    //   setChannels(
    //     snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       channels: doc.data(),
    //     }))
    //   );
    // });

    getChannel();
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt("create a new channel name");
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
          <h3> racoon</h3>
          <ExpandMoreIcon />
        </div>
        <div className="sidebar__channels">
          <div className="sidebar__channelsHeader">
            <div className="sidebar___header">
              <ExpandMoreIcon />
              <h4>Text Channel</h4>
            </div>
            <AddIcon
              className="sidebar__addChannel"
              onClick={handleAddChannel}
            />
          </div>

          <div className="sidebar__channelList">
            {channels.map(({ channelName, id }) => (
              <SidebarChannel channelName={channelName} key={id} id={id} />
            ))}
          </div>
        </div>
        <div className="sidebar__voice">
          <SignalCellularAltIcon
            className="sidebar__voiceIcon"
            fontSize="large"
          />
          <div className="sidebar__voiceInfo">
            <h3>Voice Connected</h3>
            <p>Stream</p>
          </div>
          <div className="sidebar__voiceIcons">
            <InfoOutlinedIcon />
            <CallIcon />
          </div>
        </div>
        <div className="sidebar__profile">
          <Avatar
            src={user.photo}
            onClick={() => {
              auth.signOut();
            }}
          />
          <div className="sidebar__profileInfo">
            <h3>{user.displayName}</h3>
            <p>#{user.uid.substring(0, 5)}</p>
          </div>

          <div className="sidebar__profileIcons">
            <MicIcon />
            <Headset />
            <SettingsIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
