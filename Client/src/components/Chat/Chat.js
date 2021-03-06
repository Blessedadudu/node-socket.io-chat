import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";


let socket;

const Chat = ({ location }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000';


    useEffect(() => {

      const { name, room } = queryString.parse(location.search);
      setRoom(room);
      setName(name);

      socket = io(ENDPOINT);

    },[ENDPOINT, location.search])

    return (
      <h1>Welcome to the chat</h1>
    ); 

}


export default Chat;