import axios from 'axios';
import React, { useState } from 'react';
import styled from "styled-components"
// import imageicon from "./loginicon.jpg"
// import iconimg from "./iconimg.jpeg"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState([])

    console.log(email, password)

    const handleLogin = () => {
        axios.post("http://localhost:1997/login", {
            email: email,
            password: password
        })
        .then((res) => setUser(res.data.data))
        .catch((err) => console.log(err))
        console.log(user)
        localStorage.setItem("user",user)
    }

    return (
        <>
            <Wrapper>
                <Container1>
                    <div>
                        <h1>Login to your Account</h1>
                        <button>Login From Google</button>
                        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        <input placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                        <button onClick={handleLogin} >LOGIN</button>
                    </div>
                </Container1>
                <Container2>

                </Container2>
            </Wrapper>
        </>
    )
}

export {Login}

const Wrapper = styled.div`
    display: flex;
`

const Container1 = styled.div`
    width: 50%;
    background: #C4DBF5;
`
const Container2 = styled.div`
    width: 50%;
    background: #1D1E6B

`    

    