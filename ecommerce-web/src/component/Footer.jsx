import React from "react";
import styled from "styled-components";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import insta from "../images/insta.svg";
import linkedin from "../images/linkedin.svg";

function Footer() {
  return (
    <Wrapper>
      <Container>
        <Left>
          <h3>Location</h3>
          <p>Some where in India</p>
        </Left>
        <Middle>
          <h3>Around the web</h3>
          <img src={facebook} alt="sri venkateswara trading facebook" />
          <img src={twitter} alt="sri venkateswara trading twitter" />
          <img src={insta} alt="sri venkateswara trading instagram" />
          <img src={linkedin} alt="sri venkateswara trading linkedin" />
        </Middle>
        <Right>
          <h3>Contact us</h3>
          <span>4204820492</span> <br />
          <span>example@mail.com</span>
        </Right>
      </Container>
      <CopyR>Copyright © Sri Venkateswara Trading 2023</CopyR>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div``;

const Container = styled.div`
  background-color: rgb(244, 244, 244);
  display: grid;
  grid-template-columns: auto auto auto;
  text-align: center;
  padding: 40px 10px;
  padding-bottom: 10px;
  width: 100%;
  min-height: 20vh;
  h3 {
    font-size: 25px;
    font-weight: 700;
  }
  @media (max-width: 991px) {
    grid-template-columns: auto;
  }
`;

const Left = styled.div`
  @media (max-width: 991px) {
    padding: 10px 0;
  }
`;

const Middle = styled.div`
  img {
    width: 40px;
    margin: 10px;
    opacity: 0.7;
    &:hover {
      transition: all 0.3s;
      cursor: pointer;
      opacity: 1;
    }
  }
  @media (max-width: 991px) {
    padding: 10px 0;
  }
`;

const Right = styled.div`
  @media (max-width: 991px) {
    padding: 10px 0;
  }
  span {
    color: var(--textgray);
  }
`;

const CopyR = styled.div`
  background-color: rgb(244, 244, 244);
  text-align: center;
  font-size: 16px;
  padding: 10px;
`;
