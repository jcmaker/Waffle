import React, { useState, useEffect } from "react";
import WaffleHeader from "../screens/waffleHeader";
import SendIcon from "@material-ui/icons/Send";
import Message from "../screens/Message";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { selectChannelId, selectChannelName } from "../features/appSlice";
import db from "../fbManager";
import firebase from "firebase";

const Waffle = () => {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("channels").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });
    setInput("");
  };

  return (
    <div className="waffle">
      <WaffleHeader channelName={channelName} />

      <div className="waffle__messages">
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>

      <div className="waffle__input">
        <form>
          <input
            type="text"
            disabled={!channelId}
            placeholder={`Message in #${channelName}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="waffle__input-btn"
            onClick={sendMessage}
          >
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Waffle;
