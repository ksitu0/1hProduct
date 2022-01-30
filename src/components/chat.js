import '../assets/textStyles.css';
// import { Widget } from 'react-chat-widget';
import { useState } from 'react';
import { collection, addDoc, onSnapshot, getDocs, query, Timestamp, orderBy, limit } from "firebase/firestore";
import { db } from "../config/firebase";

import Jitsi from 'react-jitsi';

function Chat(props) {
  const [displayName, setDisplayName] = useState('')
  const [roomName, setRoomName] = useState('')
  const [password, setPassword] = useState('')
  const [onCall, setOnCall] = useState(false)

  return (
    <div className="chat">
      {onCall
        ? (
          <Jitsi
            roomName={roomName}
            displayName={displayName}
            // password={password}
            // loadingComponent={}
            config={{ prejoinPageEnabled: false }}
            containerStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onAPILoad={JitsiMeetAPI => console.log('Good Morning everyone!')}
          />)
        : (
          <>
            <h1>Crate a Meeting</h1>
            <input type='text' placeholder='Room name' value={roomName} onChange={e => setRoomName(e.target.value)} />
            <input type='text' placeholder='Your name' value={displayName} onChange={e => setDisplayName(e.target.value)} />
            <button onClick={() => setOnCall(true)}> Let&apos;s start!</button>
          </>
        )}
    </div>);
}

export default Chat;
