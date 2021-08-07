import React from 'react'
import styled from "styled-components"

const Details2 = () => {
    return (
        <Wrapper>
            <Container1>
                <div>
                    <h1>Virtual Study Rooms?</h1>
                    <p>Virtual Rooms are collaborative space for studies. You can join a public room or create your own private room.</p>
                    <p>Joining rooms and studying is another way of group studies where you can collaborate with other participants and discuss study materials.</p>
                </div>
                <img src="https://i.pinimg.com/originals/1b/7c/1c/1b7c1cc33ed71468d51392c456010e09.png" alt=""/>
            </Container1>
            <Container2>
                <img height="350px" width="200px" src="https://www.pinclipart.com/picdir/big/388-3886471_online-exam-system-boy-pic-study-png-clipart.png" alt=""/>
                <div>
                    <h1>Experince the magic of Social Accountability?</h1>
                    <p>Many studies have repeatedly shown that when you are accountable to a group you are more likely to stick to your goals.</p>
                    <p>So, whenever you want to be productive just visit our website, share your screen or camera, and then get to study. It’s that simple.</p>
                </div>
            </Container2>
        </Wrapper>
    )
}

export {Details2}

const Wrapper = styled.div`
    margin: auto;
    margin-top: -90px;
    /* display: flex; */


`
const Container1 = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 80px;
    h1{
        margin-top: 180px;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: #25397B;
        padding-left: 15%;
        /* padding-right: 5%; */
    }
    p{
        padding-left: 15%;
        /* padding-right: 5%; */
        font-size: 20px;
        color: gray;
    }
    img {
        width: 50%;
        padding: 5%;
    }
`
const Container2 = styled.div`
    display: flex;
    gap: 25px;
    margin-top: 80px;
    h1{
        margin-top: 50px;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS';
        color: #25397B;
        padding-left: 2%;
        padding-right: 15%;
    }
    p{
        padding-left: 2%;
        padding-right: 15%;
        font-size: 20px;
        color: gray;
    }
    img {
        width: 50%;
        padding: 0% 8%;
    }
`