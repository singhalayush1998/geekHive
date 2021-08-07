import React from 'react'
import ScrollToBottom from "react-scroll-to-bottom"
import {IndividualMessage} from "./IndividualMessage"

const Messages = ({ messages, name }) => {
    return (
        <ScrollToBottom className="messages">
            {messages.map((message, i) => <div key={i}><IndividualMessage message={message} name={name}/></div>)}
        </ScrollToBottom>
    )
}

export {Messages}