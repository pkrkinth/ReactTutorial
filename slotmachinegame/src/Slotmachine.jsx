import React from "react";

const SlotMachine = (props) => {
  //   let x = "😄";
  //   let y = "😄";
  //   let z = "😀";

  let { x, y, z } = props;
  if (x === y && y === z) {
    return (
      <div className="slot_inner">
        <h1>
          {x} {y} {z}
        </h1>
        <h1>Hurray! It is matching.</h1>
      </div>
    );
  } else {
    return (
      <div className="slot_inner">
        <h1>
          {x} {y} {z}
        </h1>
        <h1>Oops! It is not matching.</h1>
      </div>
    );
  }
};

export default SlotMachine;
