import React from 'react'
import styled from "styled-components"

const InfoBar = ({room}) => {
    return (
        <Wrapper>
            <img className="onlineIcon" src="onlineIcon" alt="" />
            <h3>Quick Discussions</h3>
        </Wrapper>
    )
}

export {InfoBar}

const Wrapper = styled.div`
    display: flex;
    gap: 15px;
    h3 {
        color: #263A7C;
    }

`