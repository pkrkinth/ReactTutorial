import React, { useState } from "react";

const DigiClock = () => {
  let currentTime = new Date().toLocaleTimeString();

  const [cTime, setTime] = useState(currentTime);

  const UpdateTime = () => {
    currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
    return cTime;
  };

  //SetInterval is sued to update the time with fix time
  setInterval(UpdateTime, 1000);
  return (
    <>
      <h1>Digital Clock: {cTime}</h1>
      {/* <button onClick={UpdateTime}>Click</button> */}
    </>
  );
};

export default DigiClock;
