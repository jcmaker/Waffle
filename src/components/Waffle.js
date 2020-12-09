import React from "react";
import WaffleHeader from "../screens/waffleHeader";

const Waffle = () => {
  return (
    <div className="waffle">
      <WaffleHeader />

      <div className="waffle__messages"></div>

      <div className="waffle__input"></div>
    </div>
  );
};

export default Waffle;
