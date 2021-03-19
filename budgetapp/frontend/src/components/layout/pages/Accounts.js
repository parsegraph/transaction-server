import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import "./Accounts.css";

import {getAllAccounts} from '../../../redux/actions/accountsActions';

function Accounts({accounts}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAccounts());
  }, []);

  return (
    <div className="accts">
      <table className="accts table table-striped table-hover table-primary">
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

const mapStateToProps = (state)=>{
  return {accounts: state.account.accounts}
}

export default connect(mapStateToProps)(Accounts);
