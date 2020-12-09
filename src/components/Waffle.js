import React from "react";
import WaffleHeader from "../screens/waffleHeader";
import SendIcon from "@material-ui/icons/Send";
import Message from "../screens/Message";

const Waffle = () => {
  return (
    <div className="waffle">
      <WaffleHeader />

      <div className="waffle__messages">
        <Message />
      </div>

      <div className="waffle__input">
        <form>
          <input type="text" placeholder={`Message #Channel Name`} />
          <button type="submit" className="waffle__input-btn">
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Waffle;
