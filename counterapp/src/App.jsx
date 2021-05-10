import React, { useState } from "react";

// Hooks example: useState
const App = () => {
  // const state = useState();

  const [count, setCount] = useState(0);
  const IncNumber = () => {
    //   console.log("cliked");
    setCount(count + 1);
  };

  // Example of show current time with btn click or refresh the page
  let currentTime = new Date().toLocaleTimeString();

  const [cTime, setTime] = useState(currentTime);
  const UpdateTime = () => {
    let newCurrentTime = new Date().toLocaleTimeString();
    setTime(newCurrentTime);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncNumber}> Click Me </button>

      <h1>{cTime}</h1>
      <button onClick={UpdateTime}> Get Time</button>
    </>
  );
};

export default App;
