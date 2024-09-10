import React, { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [input, setInput] = useState("0"); // Stores the input or result
  const [prevInput, setPrevInput] = useState(""); // Stores previous input
  const [operator, setOperator] = useState(""); // Stores the current operator
  const [isEvaluated, setIsEvaluated] = useState(false);

  const handleButtonClick = (value) => {
    if (isEvaluated) {
      setInput(value);
      setIsEvaluated(false);
    } else {
      if (input === "0" && value !== ".") {
        setInput(value);
      } else {
        setInput((prev) => prev + value);
      }
    }
  };

  const handleOperatorClick = (op) => {
    if (operator) {
      calculateResult();
    }
    setPrevInput(input);
    setOperator(op);
    setInput("0");
  };

  const calculateResult = () => {
    let result;
    const current = parseFloat(input);
    const previous = parseFloat(prevInput);

    switch (operator) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "*":
        result = previous * current;
        break;
      case "/":
        result = previous / current;
        break;
      default:
        result = input;
    }
    setInput(result.toString());
    setPrevInput("");
    setOperator("");
    setIsEvaluated(true);
  };

  const handleClear = () => {
    setInput("0");
    setPrevInput("");
    setOperator("");
  };

  const handleDecimal = () => {
    if (!input.includes(".")) {
      setInput((prev) => prev + ".");
    }
  };

  return (
    <div id="calculator" className="calculator">
      <Display value={input} />
      <div className="button-grid">
        <Button id="clear" value="C" onClick={handleClear} />
        <Button id="divide" value="/" onClick={() => handleOperatorClick("/")} />
        <Button id="multiply" value="*" onClick={() => handleOperatorClick("*")} />
        <Button id="subtract" value="-" onClick={() => handleOperatorClick("-")} />
        <Button id="nine" value="9" onClick={() => handleButtonClick("9")} />
        <Button id="eight" value="8" onClick={() => handleButtonClick("8")} />
        <Button id="seven" value="7" onClick={() => handleButtonClick("7")} />
        <Button id="equals" value="=" onClick={calculateResult} />
        <Button id="six" value="6" onClick={() => handleButtonClick("6")} />
        <Button id="five" value="5" onClick={() => handleButtonClick("5")} />
        <Button id="four" value="4" onClick={() => handleButtonClick("4")} />
        <Button id="add" value="+" onClick={() => handleOperatorClick("+")} />
        <Button id="one" value="1" onClick={() => handleButtonClick("1")} />
        <Button id="two" value="2" onClick={() => handleButtonClick("2")} />
        <Button id="three" value="3" onClick={() => handleButtonClick("3")} />
        <Button id="zero" value="0" onClick={() => handleButtonClick("0")} />
        <Button id="decimal" value="." onClick={handleDecimal} />
      </div>
    </div>
  );
};

const Display = ({ value }) => <div id="display" className="display">{value}</div>;

const Button = ({ id, value, onClick }) => (
  <button id={id} className="button" onClick={onClick}>
    {value}
  </button>
);

export default Calculator;
