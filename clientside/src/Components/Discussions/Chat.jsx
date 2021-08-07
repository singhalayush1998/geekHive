import React, { useEffect, useState } from 'react'
import queryString from "query-string"
import io from "socket.io-client"
// import "./chat.css"
import {InfoBar} from "./InfoBar"
import {InputBox} from "./InputBox"
import {Messages} from "./Messages"
import { useParams } from 'react-router-dom'
import styled from "styled-components"


const ENDPOINT = 'localhost:2244'
let socket;

const Chat = () => {
    let {id} = useParams()
    const [name, setName] = useState('isha');
    const [room, setRoom] = useState(id);
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    // useEffect(() => {
    //     axios.get("")
    // })

    useEffect(() => {

        socket = io(ENDPOINT);


        socket.emit('join', { name, room }, (error) => {
            console.log(room, name)
            if(error) {
              alert(error);
            }
        });
        
    },[ENDPOINT])

    useEffect(() => {
        socket.on('message', message => {
        setMessages(messages => [ ...messages, message ]);
        });
        
        socket.on("roomData", ({ users }) => {
        setUsers(users);
        });
    },[])

    //function for sending message
    const sendMessage = (event) => {
        event.preventDefault();
    
        if(message) {
          socket.emit('sendMessage', message, () => setMessage(''));
        }
    }


    return (
        <Wrapper>
            <div>
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <InputBox message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        {/* <TextContainer users={users}/> */}
        </Wrapper>
    )
}

export {Chat}