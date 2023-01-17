import React from "react";
import styled from "styled-components";
import HomeMain from "../components/Home/HomeMain";
import Illness from "../components/Home/Illness";
import Chiropractor from "../components/Home/Chiropractor";

function Home() {
  return (
    <HomeContainer>
      <HomeMain />
      <Illness />
      <Chiropractor />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div``;
