import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import TransactionForm from "./TransactionForm";
const OverView = ({
  addtransaction,
  income,
  expense,
  searchInputShow,
  setSearchInputShow,
}) => {
  const [isShow, setIsShow] = useState(false);
  const [statusShow, setStatusShow] = useState(false);

  return (
    <>
      <div className="navbar">
        <BsSearch
          className="Icons"
          title="Search your Transactions"
          onClick={() => setSearchInputShow(!searchInputShow)}
        />
        <p
          onClick={() => setStatusShow(!statusShow)}
          title="your account status"
        >
          My Wallet
        </p>
        <BsPlusLg
          title="Add New Transacion!"
          className="Icons"
          onClick={() => setIsShow(!isShow)}
        />
      </div>
      {isShow && (
        <TransactionForm
          addtransaction={addtransaction}
          setIsShow={setIsShow}
        />
      )}
      {statusShow && (
        <div className="status-container">
          <div className="blance-section">
            <p className="blance-text">Income</p>
            <p className="status-fee">${income}</p>
          </div>
          <div className="blance-section">
            <p className="blance-text">Expense</p>
            <p className="status-fee">${expense}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default OverView;
