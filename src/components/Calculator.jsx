import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [screenValue, setScreenValue] = useState("");

  const handleButtonClick = (value) => {
    setScreenValue(screenValue + value);
  };

  const handleClearButtonClick = () => {
    setScreenValue("");
  };

  const handleEqualButtonClick = () => {
    if (screenValue === "") {
      setScreenValue("Please enter");
    } else {
      try {
        const answer = eval(screenValue);
        setScreenValue(answer.toString());
      } catch (error) {
        setScreenValue("Error");
      }
    }
  };

  return (
    <section className="calculator">
      <form>
        <input type="text" className="screen" value={screenValue} readOnly />
      </form>
      <div className="buttons">
        <button className="btn btn-yellow" onClick={() => handleButtonClick("*")}>
          *
        </button>
        <button className="btn btn-yellow" onClick={() => handleButtonClick("/")}>
          /
        </button>
        <button className="btn btn-yellow" onClick={() => handleButtonClick("-")}>
          -
        </button>
        <button className="btn btn-yellow" onClick={() => handleButtonClick("+")}>
          +
        </button>

        <button className="btn btn-grey" onClick={() => handleButtonClick("9")}>
          9
        </button>
        <button className="btn btn-grey" onClick={() => handleButtonClick("8")}>
          8
        </button>
        <button className="btn btn-grey" onClick={() => handleButtonClick("7")}>
          7
        </button>
        <button className="btn btn-grey" onClick={() => handleButtonClick("6")}>
          6
        </button>
        <button className="btn btn-grey" onClick={() => handleButtonClick("5")}>
          5
        </button>
        <button className="btn btn-grey" onClick={() => handleButtonClick("4")}>
          4
        </button>
        <button className="btn btn-grey" onClick={() => handleButtonClick("3")}>
          3
        </button>
        <button className="btn btn-grey" onClick={() => handleButtonClick("2")}>
          2
        </button>
        <button className="btn btn-grey" onClick={() => handleButtonClick("1")}>
          1
        </button>
        <button className="btn btn-grey" onClick={() => handleButtonClick("0")}>
          0
        </button>
        <button className="btn btn-grey" onClick={() => handleButtonClick(".")}>
          .
        </button>

        <button className="btn-equal" onClick={handleEqualButtonClick}>
          =
        </button>
        <button className="btn-clear" onClick={handleClearButtonClick}>
          C
        </button>
      </div>
    </section>
  );
}

export default Calculator;
