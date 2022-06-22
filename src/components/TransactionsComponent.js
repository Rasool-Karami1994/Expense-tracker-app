import { useState, useEffect } from "react";

const TransactionsComponent = ({
  transactions,
  searchInputShow,
  setSearchInputShow,
}) => {
  const [input, setInput] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const changeHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.vlue);
    filterHandler(e.target.value);
  };

  const filterHandler = (input) => {
    if (!input && input === "") {
      setFilteredTransactions(transactions);
    }
    const filtered = transactions.filter((t) =>
      t.description.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };
  useEffect(() => {
    filterHandler(input);
  }, [transactions]);

  if (!transactions.length) return <></>;

  return (
    <section>
      {searchInputShow && (
        <div className="search-box">
          <input
            value={input}
            type="text"
            onChange={changeHandler}
            placeholder="Search Transactions"
          ></input>
        </div>
      )}
      {filteredTransactions.length ? (
        filteredTransactions.map((t) => (
          <div key={t.id} className="transactions-item">
            <p className="tnx-dec ">{t.description}</p>
            <p
              className="tnx-amount"
              style={{ color: t.type === "income" && "#65BCBF" }}
            >
              ${t.amount}
            </p>
          </div>
        ))
      ) : (
        <p className="no-Item">No Item matches!</p>
      )}
    </section>
  );
};

export default TransactionsComponent;
