import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MessageIcon from "@material-ui/icons/Message";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import SettingsIcon from "@material-ui/icons/Settings";
import "./Icons.css";

function Icons() {
  return (
    <div className="app__header-icons">
      <div className="app__header-icon">
        <a href="/">
          {" "}
          <NotificationsIcon style={{ color: "black" }} />{" "}
        </a>
      </div>
      <div className="app__header-icon">
        <a href="/">
          {" "}
          <MessageIcon style={{ color: "black" }} />{" "}
        </a>
      </div>
      <div className="app__header-icon">
        <a href="/">
          {" "}
          <CardGiftcardIcon style={{ color: "black" }} />{" "}
        </a>
      </div>
      <div className="app__header-icon">
        <a href="/">
          {" "}
          <SettingsIcon style={{ color: "black" }} />{" "}
        </a>
      </div>
    </div>
  );
}

export default Icons;
