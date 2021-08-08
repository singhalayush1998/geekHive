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
    let loginedUserId = localStorage.getItem("user")
    loginedUserId = JSON.parse(loginedUserId)
    console.log(loginedUserId?.username)
    const [name, setName] = useState(loginedUserId?.username);
    const [room, setRoom] = useState(id);
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    // useEffect(() => {
    //     axios.get("")
    // })
    
    // useEffect(() => {
    //     socket.current=io("ws://localhost:2512")
    //     socket.current.on("getMessage", (data) => {
    //         setArrivalMessage({
    //           senderId: data.senderId,
    //           text: data.text,
    //           createdAt: Date.now(),
    //         });
    //       });
    // }, [])
    
    // useEffect(() => {
    //     arrivalMessage &&
    //     (loginedUserId._id === arrivalMessage.senderId || friendId === arrivalMessage.senderId) &&
    //     setCurrentChat((prev) => [...prev, arrivalMessage]);
    // }, [arrivalMessage]);

    // useEffect(() => {
    //     socket.current.emit("addUser",loginedUserId._id)
    //     socket.current.on("getUsers",users=>{
    // })
    // }, [loginedUserId])

    // useEffect(async ()=>{
    //     if(friendId !== undefined){
    //         await axios.get(`http://localhost:2511/users/${friendId}`).then((res)=> setFriendDetails(res.data.data))
    //     }
    // },[friendId])
    // useEffect(async () => {     
    //     await axios.get(`http://localhost:2511/message/${conversationId}`).then((res)=>setCurrentChat([...res.data]))
    // }, [conversationId])
    // const handleSendMessage=async (text)=>{
    //     const payload = {
    //         conversationId: conversationId,
    //         senderId: loginedUserId._id ,
    //         text: text
    //     }

    //     socket?.current.emit("sendMessage",{
    //         senderId:loginedUserId._id,
    //         receiverId:friendId,
    //         text:text
    //     })

    //     await axios.post("http://localhost:2511/message",payload).then((res)=>setCurrentChat([...currentChat,res.data]))
    // }

    useEffect(() => {
        if(room !== undefined){
            socket = io(ENDPOINT);
            socket.emit('join', { name, room }, (error) => {
                console.log(room, name)
                if(error) {
                  alert(error);
                }
            });
            
        }
    },[ENDPOINT, room])

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
        // const payload = {
        //     groupid: ,
        //     senderid: loginedUserId._id ,
        //     text: text
        // }
        if(message) {
          socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <Wrapper>
            <Container>
                <InfoBar room={room} users={users} />
                    <Messages messages={messages} name={name} />
                <InputBox message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </Container>
            {/* <Users>
                {
                    users?.map((i) => (
                        <div key={i.id}>
                            
                        </div>
                    ))
                }
            </Users> */}
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