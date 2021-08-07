import { init } from "ityped";
import { useEffect, useRef } from "react";
import styled from "styled-components"
import {Link} from "react-router-dom"

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["collaborative.", "engaging.", "fun.", "social."],
    });
  }, []);

  return (
    <>
      <Wrapper>
        <Container>
          <div>
            <h1>Learning is now more <br/> <span ref={textRef}></span></h1>
            <p>Do you find it difficult to study when you are stuck at home?
            <br/>Join the world's biggest platform for finding and creating
            <br/>Virtual Study Rooms for FREE.
            </p>
            <Link to="/dashboard">
            <Button>
              Get Started
            </Button>
            </Link>
          </div>
          <div>
            <img width="90%"
              src="https://i.imgur.com/1yub77v.png"
              alt=""/>
          </div>
        </Container>
      </Wrapper>
    </>
  );
}

export {Intro}

const Wrapper = styled.div`
    padding-top: 60px;
    background: #E6E6E6;
    height: 90vh;
`

const Container = styled.div`
    display: flex;
    h1{
        color: #25397B;
    }
    span {
        color: #5EBA47;
    }
    p{
        color: #25397B;
    }
    div{
        padding-left: 2%;
    }

`

const Button = styled.button`
    background: #25397B;
    padding: 1.5%;
    border: none;
    outline: none;
    font-size:20px;
    color: #fff;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 50px;
    /* align-self: left; */
    margin-left: -50px;
`
