import React from "react";

function Tickler() {
  // function tickle() {
  //   console.log("Teehee!");
  // }

  return <button onClick={(event) => console.log(event)}>Tickle me!</button>;
}

export default Tickler;
