import React from "react";

function Addresses() {
  return (
    <>
      <table className="orderHistory orderAddress">
        <thead>
          <tr className="ohisHeading oaHeading">
            <th>Addresses</th>
            <th>
              <button>ADD ANOTHER ADDRESS</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="ohisHead1 ohisHead11 oaHead1">
            <td>
            Shri Ram Apartments, Jeevan Jyoti Colony, Satna- 485001, Madhya Pradesh
INDIA, Phone Number - 99999 99999
            </td>
            <td>
              <button>REMOVE</button>
            </td>
          </tr>
          <tr className="ohisHead1 ohisHead11 oaHead1">
            <td>
            Shri Ram Apartments, Jeevan Jyoti Colony, Satna- 485001, Madhya Pradesh
INDIA, Phone Number - +91 7000296299
            </td>
            <td>
              <button>REMOVE</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Addresses;
