import { Button, Input } from "@mantine/core";
import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";

const SendMessage = ({scroll}) => {
  const [msg, setMsg] = useState("");
  async function sendMessage(e) {
    console.log("the function worked");
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection("chats").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
    scroll.current.scrollIntoView({behavior:"smooth"})
  }
  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
        console.log("Enter")
      sendMessage()
    }
  }
  return (
    <from className="sendMsg">
      <Input onkeyPress={handleKeyPress}
        style={{
          width: "78%",
          fontSize: "15px",
          fontWeight: "550",
          marginLeft: "5px",
          marginBottom: "-3px",
        }}
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Message..."
      ></Input>
      <Button
        style={{
          width: "18%",
          fontSize: "15px",
          fontWeight: "550",
          margin: "4px 5% -13px 5%",
          maxWidth: "200px",
        }}
        type="submit"
        onClick={sendMessage}
      >
        Send
      </Button>
    </from>
  );
};

export default SendMessage;
