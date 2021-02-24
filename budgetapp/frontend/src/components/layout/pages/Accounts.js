import React, { Fragment, useState, useEffect } from "react";
import "./Accounts.css";
import api from "../../../requests.js";

function Accounts() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    api
      .getAllAccounts()
      .then((res) => {
        setAccounts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <table className="accts_table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.id}</td>
              <td>{account.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Accounts;
