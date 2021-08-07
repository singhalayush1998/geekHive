import React from 'react'
import ScrollToBottom from "react-scroll-to-bottom"
import {IndividualMessage} from "./IndividualMessage"
import styled from "styled-components"

const Messages = ({ messages, name }) => {
    return (
        <ScrollToBottom>
            <Box>
                {messages.map((message, i) => <Wrapper key={i}><IndividualMessage message={message} name={name}/></Wrapper>)}
            </Box>
        </ScrollToBottom>
    )
}

export {Messages}



const Wrapper = styled.div`
    color: #273876;
    width: 100%;
`
const Box = styled.div`
    padding: 2px 2px;
    /* margin: 10px 0px; */
    width: 97%;
    height: 350px;
`


// const Container = styled.div`
//     overflow: scroll;
// `