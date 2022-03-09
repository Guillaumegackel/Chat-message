import React, { useState } from "react";
import "./Chat.css";

function Chat() {

  const [input, setInput] = useState("");
  const sendMessage = (event)=>{
    event.preventDefault();

    setInput("");

  };

  return (
    <div className="Chat">
      <div className="chat_header">
        <h4>
          To:<span className="chat_name">Channel Name</span>
        </h4>
        <strong>Details</strong>
      </div>  
    
    <div className="chat_input">
        <form>
          <input
          value={input}
          onChange={(e)=> setInput(e.target.value)}
          placeholder="IMessage" 
          type="text" />
          <button onClick={sendMessage}>Send Message</button>
        </form>
      </div>
      </div>

  );
}

export default Chat;
