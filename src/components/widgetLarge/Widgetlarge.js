import React from "react";
import "./Widgetlarge.css";
function Widgetlarge() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://png.pngitem.com/pimgs/s/130-1300253_female-user-icon-png-download-user-image-color.png"
                alt="User Profile"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Song Pitou</span>
            </td>
            <td className="widgetLgDate">02 June 2021</td>
            <td className="widgetLgAmount">$132.00</td>
            <td className="widgetLgStatus">
              <Button type="Approve" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://png.pngitem.com/pimgs/s/130-1300253_female-user-icon-png-download-user-image-color.png"
                alt="User Profile"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Song Pitou</span>
            </td>
            <td className="widgetLgDate">02 June 2021</td>
            <td className="widgetLgAmount">$132.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://png.pngitem.com/pimgs/s/130-1300253_female-user-icon-png-download-user-image-color.png"
                alt="User Profile"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Song Pitou</span>
            </td>
            <td className="widgetLgDate">02 June 2021</td>
            <td className="widgetLgAmount">$132.00</td>
            <td className="widgetLgStatus">
              <Button type="Approve" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://png.pngitem.com/pimgs/s/130-1300253_female-user-icon-png-download-user-image-color.png"
                alt="User Profile"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Song Pitou</span>
            </td>
            <td className="widgetLgDate">02 June 2021</td>
            <td className="widgetLgAmount">$132.00</td>
            <td className="widgetLgStatus">
              <Button type="Decline" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Widgetlarge;
