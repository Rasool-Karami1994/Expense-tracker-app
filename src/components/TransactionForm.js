import { useState } from "react";

const TransactionForm = ({ addtransaction, setIsShow }) => {
  const [formValues, setFormValues] = useState({
    description: "",
    amount: 0,
    type: "expense",
  });
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addtransaction(formValues);
    setIsShow(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={changeHandler}
        type="text"
        placeholder="Description"
        name="description"
      ></input>
      <input
        onChange={changeHandler}
        type="number"
        placeholder="Amount"
        name="amount"
      ></input>
      <div className="check-box">
        <input
          type="radio"
          name="type"
          value="expense"
          onChange={changeHandler}
          checked={formValues.type === "expense"}
        ></input>
        <label>Expense</label>

        <input
          type="radio"
          name="type"
          value="income"
          onChange={changeHandler}
          checked={formValues.type === "income"}
        ></input>
        <label>Income</label>
      </div>

      <button type="submit">Add New</button>
    </form>
  );
};

export default TransactionForm;
