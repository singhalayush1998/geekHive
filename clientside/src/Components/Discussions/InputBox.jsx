import React from 'react'
import styled from "styled-components"

const InputBox = ({ setMessage, sendMessage, message }) => {
    return (
        <>
        <Forms>
            <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button onClick={e => sendMessage(e)}>
                <img src="https://img.icons8.com/material-rounded/2x/ffffff/filled-sent.png" alt=""/>
            </button>
        </Forms>
        </>
    )
}

export {InputBox}

const Forms = styled.div`
    position : fixed;
    bottom: 0;
    margin-bottom: 30px;
    input {
        outline: none;
        width: 300px;
        border: 2px solid #263A77;
        border-radius: 22px;
        padding: 12px;
        font-size: 18px;
    }
    button {
        background: #263A77;
        height: 47px;
        width: 47px;
        border-radius: 50%; 
        outline: none;
        border: none;
        margin-left: 10px;
        cursor: pointer;
        margin-top: 50px;
    }
    img {
        /* margin-top: 5px; */
        width: 60%;
        padding-top: 2px;
    }
    

`

