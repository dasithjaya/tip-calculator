import "./App.css";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return (
    <div>
      <BillInput />
      <SelectPercentage>
        <p>How did you like the service?</p>{" "}
      </SelectPercentage>
      <SelectPercentage>
        {" "}
        <p>How did your friend like the service?</p>
      </SelectPercentage>
      <Output />
      <Reset />
    </div>
  );
}

function BillInput() {
  return (
    <div>
      <label>How much was the bill?</label>
      <input type="text" placeholder="Bill amount" />
    </div>
  );
}

function SelectPercentage({ children }) {
  return (
    <div className="flex">
      <label>{children}</label>
      <select>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Output() {
  return (
    <h3>You pay x ($A + $B tip)</h3>
  )
}

function Reset() {
  return <button>Reset</button>
}

export default App;
