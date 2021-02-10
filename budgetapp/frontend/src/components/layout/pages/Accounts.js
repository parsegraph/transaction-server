import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/accounts")
      .then((res) => {
        console.log(res);
        setAccounts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>{account.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Accounts;
