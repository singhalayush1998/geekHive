import React, { useEffect, useState } from 'react'
import io from "socket.io-client"
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
        
    },[ENDPOINT, id])

    useEffect(() => {
        socket.on('message', message => {
        setMessages(messages => [ ...messages, message ]);
        });
        
        socket.on("roomData", ({ users }) => {
        setUsers(users);
        });
    },[])
    console.log(users)

    //function for sending message
    const sendMessage = (event) => {
        event.preventDefault();
    
        if(message) {
          socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <Wrapper>
            <Container>
                <InfoBar room={room} />
                    <Messages messages={messages} name={name} />
                <InputBox message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </Container>
            <Users>
                {
                    users?.map((i) => (
                        <div key={i.id}>
                            
                        </div>
                    ))
                }
            </Users>
        </Wrapper>
    )
}

export {Chat}

const Wrapper = styled.div`
    padding: 3% 2%;
    display: flex;
    flex-direction: column;
`
const Container = styled.div`

`

const Users = styled.div`

`