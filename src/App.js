import React, { useState } from "react";
import * as math from "mathjs";
import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [theme, setTheme] = useState("dark");

  const addToText = (val) => {
    setText((text) => [...text, val]);
  };

  const calculateResult = () => {
    const input = text.join("");
    const rawResult = math.evaluate(input);
    const roundedResult = parseFloat(rawResult.toFixed(4));
    setResult(roundedResult);
  };

  const resetInput = () => {
    setText([]);
    setResult("");
  };

  const handleKeyPress = (event) => {
    const key = event.key;
    
    // Check if the pressed key is a number, operator, or Enter
    if (/[0-9/*\-+=.]/.test(key)) {
      addToText(key);
    } else if (key === "Enter") {
      calculateResult();
    }
  };

  const handleLight = () => {
    setTheme("light");
  };

  const handleDark = () => {
    setTheme("dark");
  };

  // const buttonColor = "rgb(19, 137, 205)";

  const buttonColor = theme === "dark" ? "rgb(19, 137, 205)" : "orange";
  const backgroundColor2 = theme === "dark" ? "rgb(42, 42, 45)" : "white";
  const textColor = theme === "dark" ? "white" : "black";

  return (
    <div>
    <div className="Navbar">
      <h1>My Calculator</h1>
      <ul>
        <li><a onClick={handleDark} >Dark</a></li>
        <li><a onClick={handleLight} >Light</a></li>
        {/* <li>Theme 3</li> */}
      </ul>
    </div>
    <div className="App" style={{ backgroundColor: backgroundColor2 }} onKeyDown={handleKeyPress} tabIndex="0">

      <div className="calc-wrapper" color={textColor}>
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="-" color={buttonColor} handleClick={addToText} />
        </div>
        <Button symbol="Clear" color={buttonColor}  handleClick={resetInput} />
      </div>
      <div className="Footer" style={{ color: textColor }} >Created by Chinmay Dawalbaje</div>
    </div>
    </div>
  );
};

export default App;
