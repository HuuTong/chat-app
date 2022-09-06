import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();
    console.log(message)
  useEffect(() => {
    console.log(ref);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const covertTime = () => {
    let unix_timestamp = message.date.seconds
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  }
  return (
    <div
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>{covertTime()}</span>
      </div>
      <div className="messageContent" ref={ref}>
        {message.text != "" && <p>{message.text}</p> }
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
