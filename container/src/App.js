import React from "react";
import MyCounterApp from "./components/MyCounterApp";
import MyVueApp from "./components/MyVueApp";

export const App = () => (
  <div style={{ background: "lightgrey" }}>
    <h1>This is the Host!</h1>
    <h2>Remote App:</h2>
    <MyCounterApp />
    <MyVueApp />
    <br />
  </div>
);
export default App;
