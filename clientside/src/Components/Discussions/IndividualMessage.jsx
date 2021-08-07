import React from 'react'
import ReactEmoji from "react-emoji"
import styled from "styled-components"

const IndividualMessage = ({ message: { text, user }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }
    return (
        isSentByCurrentUser
        ? (
            <OwnMessage>
                <div>
                    <h3>{ReactEmoji.emojify(text)}</h3>
                    <p>{trimmedName}</p>
                </div>
            </OwnMessage>
            )
            : 
            (
            <UserMessage>
                <div>
                    <h3>{ReactEmoji.emojify(text)}</h3>
                    <p>{user}</p>
                </div>
            </UserMessage>
            )
    )
}

export {IndividualMessage}

const OwnMessage = styled.div`
    min-height: 50px;
    margin: 5px 0px;
    div {
        background: #273876;
        color: #fff;
        padding: 5px 15px;
        border-radius: 10px;
    }
    h3 {
        font-weight: 400;
        font-size: 16px;
        margin: 0px;
        padding: 0px;
    }
    p{
        margin: 0px;
        padding: 0px;
        font-size: 12px;
        color: whitesmoke;
        text-align: right;
    }
`

const UserMessage = styled.div`
    min-height: 50px;
    div {
        background: whitesmoke;
        color: #273876;
        padding: 5px 15px;
        border-radius: 10px;
    }
    h3 {
        font-weight: 400;
        font-size: 16px;
        margin: 0px;
        padding: 0px;
    }
    p{
        margin: 0px;
        padding: 0px;
        font-size: 12px;
        color: #273876;
        text-align: right;
    }
`

