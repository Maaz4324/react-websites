import React from "react";
import styled from "styled-components";
import Accordion from "./Accordion";
import { faqData } from "../assets/faq";

function Faq() {
  return (
    <Wrapper>
      <Container>
        <Left>
          <h1>FAQ</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem
            quam laboriosam perspiciatis dolores aspernatur corrupti, laudantium
            perferendis voluptas ipsam inventore iure pariatur eos, aperiam
            ipsum soluta consectetur consequuntur. Neque?
          </p>
        </Left>
        <Right>
          {faqData.map(({ title, content, idx }) => (
            <div key={idx}>
              <Accordion title={title} content={content} />
            </div>
          ))}
        </Right>
      </Container>
    </Wrapper>
  );
}

export default Faq;

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1247px;
  width: 100%;
  margin: 120px auto;
  @media (max-width: 930px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

const Left = styled.div`
  width: 100%;
  @media (max-width: 930px) {
    margin-bottom: 20px;
  }
`;

const Right = styled.div`
  background-color: var(--lightgray);
  padding: 30px;
  width: 100%;
  border-radius: 10px;
  @media (max-width: 630px) {
    padding: 30px 0;
  }
`;
