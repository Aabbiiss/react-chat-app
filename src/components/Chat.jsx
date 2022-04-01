import React, { useState, useEffect, useRef } from "react";
import { db, auth} from "../firebase";
import SignOut from "./SignOut";
import SendMessage from "./SendMessage";

const Chat = () => {
  const scroll=useRef()
  const [chats, setChats] = useState([]);
  //console.log(chats);
  // const fetchMessages=async()=>{
  //   const response=db.collection('chats').limit(50)
  //   // .onSnapshot(snapshot =>{
  //   //   setChats(snapshot.docs.map(doc =>doc.data()))

  //   ;
  //   const data=await response.get();
  //   data.docs.forEach(item=>{
  //    setChats([...chats,item.data()])
  //   })
  // }

  // useEffect(() =>{
  //   fetchMessages()
  // },[])

  useEffect(() => {
    db.collection("chats")
    .orderBy('createdAt')
      .limit(50)
      .onSnapshot((snapshot) => {
        setChats(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  // const Chat= chats.map(({id,text,photoURL}) =>(

  //   <div key={id}>
  //     <img src={photoURL} alt="pp" />
  //     <p>{text}</p>
  //     </div>
  // ),[])
  // console.log(Chat)

  return (
    <div>
      <SignOut />
<div className="msgs">
      {chats.map(({ id, text, photoURL,uid }) => {
        return (
          <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
            <img src={photoURL} alt="" />
            <p>{text}</p>
          </div>
        );
      })}
</div>
      <SendMessage  scroll={scroll}/>
      <div ref={scroll}></div>
  
    </div>
  );
};

export default Chat;
