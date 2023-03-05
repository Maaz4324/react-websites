import React from "react";
import styled from "styled-components";
import { teracottaData } from "../assets/teracotta";
import { essentialData } from "../assets/essential";
import { frameData } from "../assets/frame";
import { showData } from "../assets/show";
import { clockData } from "../assets/clock";
import { useState, useEffect } from "react";

function Shop({ directTo }) {
  const [pageData, setPageData] = useState([]);
  const [head, setHead] = useState(directTo);
  const dataArray = [
    teracottaData,
    essentialData,
    frameData,
    showData,
    clockData,
  ];

  useEffect(() => {
    let elemNo = 0;
    for (let i = 0; i < dataArray.length; i++) {
      const element = dataArray[i].filter((data) => data.keyword == directTo);
      if (element.length != 0) {
        setPageData(element);
        elemNo++;
      }
    }
    if (elemNo == 0) {
      setPageData([]);
    }
  }, [directTo]);

  useEffect(() => {
    // localStorage.setItem("search", directTo);
    if (directTo == "teracotta") {
      setPageData(teracottaData);
    }
    if (directTo == "show") {
      setPageData(showData);
    }
    if (directTo == "frames") {
      setPageData(frameData);
    }
    if (directTo == "essentials") {
      setPageData(essentialData);
    }
    if (directTo == "clock") {
      setPageData(clockData);
    }
    setHead(directTo.charAt(0).toUpperCase() + directTo.slice(1));
  }, [directTo]);

  return (
    <Wrapper>
      <Container>
        <h1>{head}</h1>
        <hr />
        <ItemContainer>
          {pageData.map((data, idx) => (
            <Item key={idx}>
              <ImgContainer>
                <img src={data.img} alt={data.name} />
              </ImgContainer>
              <Txt>
                <h5>{data.name}</h5>
              </Txt>
            </Item>
          ))}
        </ItemContainer>
      </Container>
    </Wrapper>
  );
}

export default Shop;

const Wrapper = styled.div``;

const Container = styled.div`
  padding-top: 150px;
  width: 96%;
  max-width: 947px;
  margin: 0 auto;
  min-height: 100vh;
  @media (max-width: 700px) {
    padding-top: 180px;
  }
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 32.3% 32.3% 32.3%;
  grid-gap: 10px;
  @media (max-width: 700px) {
    grid-template-columns: 50% 50%;
    padding-right: 10px;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

const Txt = styled.div`
  display: none;
  h5 {
    font-size: 25px;
    font-weight: 500;
    text-align: center;
    word-wrap: break-word;
    @media (max-width: 554px) {
      font-size: 16px;
      height: 100%;
    }
  }
  @media (max-width: 554px) {
    padding-top: 60px;
  }
`;

const Item = styled.div`
  background: var(--lightgray);
  padding: 30px;
  &:hover {
    transition: all 0.8s;
    background: rgb(139, 182, 224);
    cursor: pointer;
  }
  &:hover ${ImgContainer} {
    transition: all 0.8s;
    display: none;
    border: 2px solid red;
  }
  &:hover ${Txt} {
    transition: all 0.8s;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  @media (max-width: 554px) {
    padding: 10px;
    min-height: 27vh;
  }
`;
