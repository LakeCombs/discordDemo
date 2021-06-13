import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import React from "react";
import "./ChatHeader.css";

const Chat = ({ channelName }) => {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="chatHeader__right">
        <NotificationsNoneIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />
        <div className="chatHeader__search">
          <input placeholder="Search" />
          <SearchRoundedIcon />
        </div>
        <SendRoundedIcon />
        <HelpRoundedIcon />
      </div>
    </div>
  );
};

export default Chat;
