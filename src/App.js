import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentageMe, setPercentageMe] = useState(0);
  const [percentageFriend, setPercentageFriend] = useState(0);

  let tip = ((percentageMe + percentageFriend) / 2) * 0.01 * bill;

  function handleClick() {
    setBill("");
    setPercentageMe(0);
    setPercentageFriend(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage
        percentage={percentageMe}
        onSetPercentage={setPercentageMe}
      >
        <p>How did you like the service?</p>{" "}
      </SelectPercentage>
      <SelectPercentage
        percentage={percentageFriend}
        onSetPercentage={setPercentageFriend}
      >
        <p>How did your friend like the service?</p>
      </SelectPercentage>
      {bill && (
        <div>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleClick} />
        </div>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill amount"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ percentage, onSetPercentage, children }) {
  return (
    <div className="flex">
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      <h3>
        You pay ${bill + tip} (${bill} + ${tip} tip)
      </h3>
    </div>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
