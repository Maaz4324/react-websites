import React from "react";
import styled from "styled-components";
import clock from "../images/clock.png";

function HeroSec() {
  return (
    <Wrapper>
      <Container>
        <Left>
          <h1>Wall clock</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            mollitia recusandae earum quas explicabo illo sequi similique
            aliquam odio, asperiores vel? Ad alias odit debitis modi ullam
            dolorem iure doloribus?
          </p>
          <button>Shop now</button>
        </Left>
        <Right>
          <div className="imgContainer">
            <img src={clock} alt="wall clock" />
          </div>
        </Right>
      </Container>
    </Wrapper>
  );
}

export default HeroSec;

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 150px;
  min-height: 100vh;
  background: var(--bg);
  @media (max-width: 991px) {
    flex-direction: column;
    padding-top: 170px;
  }
`;

const Left = styled.div`
  width: 100%;
  max-width: 897px;
  padding: 30px;
  padding-left: 10%;
  button {
    padding: 10px 30px;
    font-weight: 600;
    background-color: black;
    color: white;
    border: 2px solid black;
    font-size: 14px;
    margin: 10px 0;
  }
  &:hover {
    transition: all 0.3s;
    background-color: rgba(255, 255, 255, 0);
    color: rgb(0, 0, 0);
  }
  @media (max-width: 991px) {
    width: 90%;
    padding-left: 30px;
    background: transparent;
  }
`;

const Right = styled.div`
  width: 100%;
  max-width: 897px;
  text-align: center;
  img {
    width: 100%;
    max-width: 500px;
  }
  @media (max-width: 991px) {
    width: 90%;
    text-align: center;
    img {
      width: 100%;
    }
  }
`;
