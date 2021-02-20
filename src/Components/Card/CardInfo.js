import React from "react";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Linechart from "../../images/line-chart.svg";
import "./CardInfo.css";

function CardInfo({ logo, money }) {
  return (
    <div className="card">
      <div className="card__icon">
        <Button>
          <img src={logo} alt="Logo" className="card__icon-coin" />
        </Button>

        <Button>
          <MoreVertIcon />
        </Button>
      </div>

      <div className="card__content">
        <div className="card__money">
          <h4>{money}</h4>
          <p>45% this week</p>
        </div>

        <img src={Linechart} alt="graph" className="card__icon-graph" />
      </div>
    </div>
  );
}

export default CardInfo;
