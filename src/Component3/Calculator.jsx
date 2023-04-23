import React, { useState } from "react";

function Calculator() {
  const [Calculator, setCalculator] = useState({
    n1: "",
    n2: "",
    option: "+",
    result: " ",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setCalculator((prev) => ({ ...prev, [name]: value }));
  };
  const onSelect = (e) => {
    const { value } = e.target;
    setCalculator((prev) => ({ ...prev, option: value }));
  };
  const onClick = () => {
    let res = eval(`${Calculator.n1}${Calculator.option}${Calculator.n2}`);
    console.log(res);
    setCalculator((prev) => ({ ...prev, result: res }));
  };
  const reset = () => {
    setCalculator((prev) => ({
      ...prev,
      n1: "",
      n2: "",
      option: "+",
      result: " ",
    }));
  };
  console.log(Calculator);
  return (
    <div>
      <h3>Calculator</h3>
      <input
        type="text"
        placeholder="number"
        onChange={onChange}
        name="n1"
        value={Calculator.n1}
      />
      <select onChange={onSelect} value={Calculator.option}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="%">%</option>
      </select>
      <input
        type="text"
        placeholder="number2"
        onChange={onChange}
        name="n2"
        value={Calculator.n2}
      />
      <button onClick={onClick} style={{ width: "50px" }}>
        =
      </button>
      <button onClick={reset} style={{ width: "50px" }}>
        C
      </button>
    </div>
  );
}
export default Calculator;
