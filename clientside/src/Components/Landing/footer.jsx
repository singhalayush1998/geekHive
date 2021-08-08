import React from 'react'
import styled from "styled-components"

const Footer = () => {
    return (
        <Wrapper>
            <Container>
            <p>2020 © Geek's Hive. All rights reserved.</p>
            <br/>
            <p>When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for study purposes.</p>
            {/* <img src="" alt="/"/> */}
            </Container>
        </Wrapper>
    )
}

export {Footer}

const Wrapper = styled.div`
    margin-top: 60px;
    background: #25397B;
    width: 100%;
`
const Container = styled.div`
    width: 60%;
    margin: auto;
    padding: 4%;
    color: lightgray;
    text-align: center;

`
