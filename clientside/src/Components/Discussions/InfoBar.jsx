import Avatar from '@material-ui/core/Avatar';
import React from 'react'
import styled from "styled-components"
import AvatarGroup from '@material-ui/lab/AvatarGroup';



const InfoBar = ({room, users}) => {
    return (
        <Wrapper>
            <h3>Quick Discussions</h3>
            <AvatarGroup max={2}>
            { users &&
                users?.map((i) =>
                    <Avatar>{i.name[0]}</Avatar>
                    )
                }
                </AvatarGroup>
        </Wrapper>
    )
}

export {InfoBar}

const Wrapper = styled.div`
    display: flex;
    /* gap: 15px; */
    justify-content: space-between;
    h3 {
        color: #263A7C;
    }
`

const Container = styled.div`
    /* display: flex; */
    /* gap:10px; */
    width: 10%;
`