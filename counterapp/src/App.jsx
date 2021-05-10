import React, { useState } from "react";

// Hooks example: useState
const App = () => {
  const state = useState();

  const [count, setCount] = useState(0);
  const IncNumber = () => {
    //   console.log("cliked");
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncNumber}> Click Me </button>
    </>
  );
};

export default App;
