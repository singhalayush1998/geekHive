import axios from 'axios';
import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import styled from "styled-components"


const Signup = () => {
    const history= useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    // console.log(email, password)

    const handlesignup = () => {
        axios.post("http://localhost:1997/register", {
            username: username,
            email: email,
            password: password
        })
        .then((res) => history.push("/login"))
        .catch((err) => console.log(err))
       
      
    }

    return (
        <>
            <Wrapper>
                <Container1>
                    <InnerDiv>
                        <h1>Sign up here</h1>
                        {/* <button>Signup From Google</button> */}
                        <Input placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)}/>
                        <Input placeholder="Your Email" onChange={(e) => setEmail(e.target.value)}/>
                        <Input type="password" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)}/>
                        <div>
                            <p></p>
                            <p>Forgot Password?</p>
                        </div>
                        <button onClick={handlesignup} >Sign Up</button>
                        <p>Have an account ? <Link style={{ textDecoration:"none"}} to="/login"><span>login .</span></Link></p>
                        <Link style={{ textDecoration:"none" , marginLeft:"130px"}} to="/">back to dashboard</Link>
                    </InnerDiv>
                </Container1>
                <Middle>
                    <h4>New Updated Available</h4>
                    <p>We have added some new and awesome features.</p>
                </Middle>
                <Container2>
                    <Outerdiv>
                        <img src="https://i.ibb.co/27SR4VS/undraw-project-team-lc5a.png" />
                    </Outerdiv>
                </Container2>
            </Wrapper>
        </>
    )
}

export {Signup}

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
`

const Container1 = styled.div`
    width: 50%;
    background: #C4DBF5;
`
const Container2 = styled.div`
    width: 50%;
    background: #1D1E6B;

`    
const InnerDiv = styled.div`
    background: #fff;
    /* opacity: 0.8; */
    padding: 12%;
    width: 60%;
    position: relative;
    justify-content: right;
    height: 60vh;
    margin: 6% 0px auto 16%;
    border-radius: 15px 0px 0px 15px;
    h1{
        color: #1D1E6B;
    }
    div {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #1D1E6B;
    }
    p{
        font-size:14px ;
        text-align: center;
    }
    span{
        color: #1D1E6B;
        cursor: pointer;
    }
    button {
        background: #1D1E6B;
        color: white;
        font-weight: 600;
        text-align: center;
        font-size: 20px;
        width: 100%;
        padding: 2%;
        outline: none;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`

const Outerdiv = styled.div`
    background: #fff;
    padding: 12%;
    width: 60%;
    position: relative;
    justify-content: right;
    height: 60vh;
    margin: 6% 16% auto 0px;
    opacity: 0.7;
    border-radius: 0px 15px 15px 0px;
    
    img {
        width:150%;
        margin-top: 80px;
        margin-left: -160px
    }
`

const Middle = styled.div`
    position: fixed;
    width: 250px;
    height: 200px;
    margin-left: 72%;
    margin-top: 4%;
    color: #fff;
    text-align: right;
    /* background: white; */
    /* opacity: 1.2; */
`

const Input = styled.input`
    width: 93%;
    padding: 3%;
    outline: none;
    border: 1px solid grey;
    border-radius: 5px;
    margin: 5px;
`