import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <Wrapper>
            <Container>
                <img src="https://www.linkpicture.com/q/Screenshot-875.png" alt=""/>
                <NavItems>
                    <p>About</p>
                    <p>Help</p>
                    <p>Contact</p>
                    <Link to="/login"><p>Login</p></Link>
                    <Link to="/signup"><button>Sign Up</button></Link>
                    
                </NavItems>
            </Container>
        </Wrapper>
    )
}

export {Navbar}

const Wrapper = styled.div`
    position: fixed;
    /* padding: 2%; */
    margin-top: 0px;
    width: 100%;
    height: 60px;
    background-color: #fff;
`
const Container = styled.div`
    width: 90%;
    margin: 0px auto 0 auto;
    height: 60px;
    img {
        width: 15%;
    }
    display: flex;
    justify-content: space-between;
`
const NavItems =styled.div`
    display: flex;
    gap: 35px;
    justify-content: space-around;
    div {
        width: 40px;
        height: 40px;
        margin-top: 6px;
        background-color: #25397B;
        color: #fff;
        /* padding: 5%; */
        border-radius: 50%;
        align-items: center;
        text-align: center;
        font-size: 28px;
        cursor:pointer; 
    }
    p{
        color: #25397B;
        font-weight: 700;
        cursor: pointer;
        :hover{
            text-decoration: underline;

        }
    }
    a{
        text-decoration: none;
    }
    button {
        outline: none;
        padding: 10%;
        width: 80px;
        background: #25397B;
        border: none;
        color: #fff;
        font-weight: 600;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 12px;
    }
`
