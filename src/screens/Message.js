import React from "react";
import { Avatar } from "@material-ui/core";

const Message = () => {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          jcmaker0627
          <span className="message__timestamp">thursday, Dec 09</span>
        </h4>
        <p>Message~~~~~~</p>
      </div>
    </div>
  );
};

export default Message;
