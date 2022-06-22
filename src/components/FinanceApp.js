import { useEffect, useState } from "react";
import OverView from "./OverView";
import TransactionsComponent from "./TransactionsComponent";
const FinanceApp = () => {
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [searchInputShow, setSearchInputShow] = useState(false);

  useEffect(() => {
    transactions.forEach((t) => {
      let initIncome = 0;
      let initExpense = 0;
      transactions.forEach((t) => {
        t.type === "expense"
          ? (initExpense = initExpense + parseFloat(t.amount))
          : (initIncome = initIncome + parseFloat(t.amount));
      });
      setExpense(initExpense);
      setIncome(initIncome);
    });
  }, [transactions]);

  const addtransaction = (formValues) => {
    setTransactions([...transactions, { ...formValues, id: Date.now() }]);
  };

  return (
    <div className="container">
      <OverView
        addtransaction={addtransaction}
        income={income}
        expense={expense}
        searchInputShow={searchInputShow}
        setSearchInputShow={setSearchInputShow}
      />
      <div className="blance-section">
        <p className="blance-text">Balance</p>
        <p className="blance-fee">${income - expense}</p>
      </div>
      <TransactionsComponent
        transactions={transactions}
        searchInputShow={searchInputShow}
        setSearchInputShow={setSearchInputShow}
      />
    </div>
  );
};

export default FinanceApp;
