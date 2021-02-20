import React from "react";
import "./styles.css";
import { Avatar, Button } from "@material-ui/core";
import Icons from "./Components/Icons/Icons";
import Search from "./Components/Search/Search";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import MoneyIcon from "@material-ui/icons/Money";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import SettingsIcon from "@material-ui/icons/Settings";
import HistoryIcon from "@material-ui/icons/History";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FilterListIcon from "@material-ui/icons/FilterList";
import CardInfo from "./Components/Card/CardInfo";
import Chart from "./Components/Chart/Chart";
import Table from "./Components/Table/Table";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Activity from "./Components/Activity/Activity";
import BitcoinLogo from "./images/bitcoin-logo.svg";
import Ethereum from "./images/ethereum.svg";
import Litecoin from "./images/litecoin.svg";

export default function App() {
  return (
    <div className="app">
      <div className="app__header">
        <div className="app__logo">
          <h1>Wallet</h1>
        </div>
        <Search />

        <Icons />
      </div>
      <div className="app__main">
        <div className="app__left">
          <div className="app__left-user">
            <Avatar
              style={{ height: "100px", width: "100px", marginLeft: "100px" }}
            />
            <h3> Gulam </h3>
            <p>Product Designer</p>
          </div>
          <div className="app__left-userlist">
            <ul>
              <li>
                {" "}
                <a href="/">
                  {" "}
                  <DashboardIcon
                    style={{ marginRight: "30px", color: "black" }}
                  />{" "}
                  Dashboard
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/">
                  {" "}
                  <AccountBalanceWalletIcon
                    style={{ marginRight: "30px", color: "black" }}
                  />{" "}
                  My Wallet
                </a>
              </li>
              <li>
                {" "}
                <a href="/">
                  {" "}
                  <MoneyIcon
                    style={{ marginRight: "30px", color: "black" }}
                  />{" "}
                  Transaction
                </a>
              </li>
              <li>
                {" "}
                <a href="/">
                  {" "}
                  <MonetizationOnIcon
                    style={{ marginRight: "30px", color: "black" }}
                  />{" "}
                  Crypto
                </a>
              </li>
              <li>
                {" "}
                <a href="/">
                  {" "}
                  <ImportExportIcon
                    style={{ marginRight: "30px", color: "black" }}
                  />{" "}
                  Exchange
                </a>
              </li>
              <li>
                {" "}
                <a href="/">
                  {" "}
                  <SettingsIcon
                    style={{ marginRight: "30px", color: "black" }}
                  />{" "}
                  Setting
                </a>
              </li>
            </ul>
          </div>
          <div className="app__left-history">
            <div className="app__left-historyicon">
              <Button onClick="">
                <HistoryIcon style={{ color: "white" }} />
              </Button>

              <Button>
                <MoreVertIcon style={{ color: "white" }} />
              </Button>
            </div>

            <div className="app__left-historytext">
              <h3>History available</h3>

              <br />
              <p>Check your weekly transaction reports</p>
            </div>
          </div>
        </div>
        <div className="app__right">
          <div className="dashboard">
            <h3 className="dashboard__text">Dashboard</h3>
            <div className="dasboard__filter">
              <Button style={{ border: "1px solid black" }}>
                <p>filters</p>

                <FilterListIcon />
              </Button>
            </div>
          </div>
          <div className="dashboard__card">
            <CardInfo logo={BitcoinLogo} money="$122,22" />
            <CardInfo logo={Ethereum} money="$98,544" />
            <CardInfo logo={Litecoin} money="$67,548" />
          </div>

          <div className="dashboard__chart-list">
            <div className="chart">
              <div className="chart__heading">
                <div className="chart__heading-text">
                  <h3>Market Overview</h3>
                  <p>Price value update</p>
                </div>

                <div className="chart__heading-weekly">
                  <Button style={{ border: "1px solid black" }}>
                    <p>Weekly (2020) </p>

                    <ArrowDropDownIcon />
                  </Button>
                </div>
              </div>

              <Chart />

              <div className="activity">
                <h3>Recent Activities</h3>

                <Activity status="completed" />
                <Activity status="pending" />
              </div>
            </div>
            <div className="table-list">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
