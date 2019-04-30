import React from "react";
import ReactDOM from "react-dom";

const MyApp = () => {
  const getButtonText = "Click Me!"
  return (
    <div>
      <label htmlFor="name">Enter name: </label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{ getButtonText }</button>
    </div>
  );
}

ReactDOM.render(
  <MyApp />,
  document.querySelector("#root")
)