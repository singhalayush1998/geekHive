import React from 'react'
import ReactEmoji from "react-emoji"
import styled from "styled-components"

const IndividualMessage = ({ message: { text, user }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }
    return (
        <Wrapper ownMessage={isSentByCurrentUser}>
            {isSentByCurrentUser
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
                )}
        </Wrapper>
    )
}

export {IndividualMessage}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:${props=>props.ownMessage?"flex-end":"flex-start"};
`
const OwnMessage = styled.div`
    min-height: 50px;
    margin: 5px 0px;
    width: 60%;
    div {
        background: #273876;
        color: #fff;
        padding: 5px 15px;
        border-radius: 10px;
        word-wrap: break-word;
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
        color: #c7c7c7;
        text-align: right;
    }
`

const UserMessage = styled.div`
    min-height: 50px;
    width: 60%;
    div {
        background: whitesmoke;
        color: #273876;
        padding: 5px 15px;
        word-wrap: break-word;
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

