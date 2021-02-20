import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./Table.css";

const PriceData = [
  {
    Price: 89.03,
    Amount: 0.12,
    Total: "$126,00"
  },
  {
    Price: 94.02,
    Amount: 0.22,
    Total: "$126,00"
  },
  {
    Price: 92.05,
    Amount: 0.18,
    Total: "$252,00"
  },
  {
    Price: 95.2,
    Amount: 0.22,
    Total: "$176,00"
  },
  {
    Price: 95.3,
    Amount: 0.26,
    Total: "$226,00"
  },
  {
    Price: 92.01,
    Amount: 0.35,
    Total: "$2326,00"
  },
  {
    Price: 97.34,
    Amount: 0.53,
    Total: "$2243,00"
  }
];

function Table() {
  return (
    <div className="table">
      <div className="table__heading">
        <h3>Sell Order</h3>

        <MoreVertIcon style={{ color: "white" }} />
      </div>

      <div className="table__list">
        <table>
          <thead>
            <tr>
              <th>Price</th>
              <th>Amount</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {PriceData.map((data, i) => (
              <tr key={i}>
                <td>{data.Price}</td>
                <td>{data.Amount}</td>
                <td>{data.Total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
