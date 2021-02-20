import React from "react";
import CallMadeIcon from "@material-ui/icons/CallMade";
import "./Activity.css";

function Activity({ status }) {
  return (
    <div className="activity__row">
      <ul>
        <li>
          {" "}
          <CallMadeIcon
            style={{
              padding: "10px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "100%"
            }}
          />
        </li>
        <li>Bitcoin</li>
        <li>10:43:23 AM</li>
        <li>+1545,00</li>
        <li>{status}</li>
      </ul>
    </div>
  );
}

export default Activity;
