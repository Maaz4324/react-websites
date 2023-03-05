import React, { useState } from "react";
import styled from "styled-components";
import minus from "../images/minus.png";
import plus from "../images/plus.png";

export default function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Wrapper>
      <AccordionContainer>
        <AccordionItem>
          <AccordionTitle onClick={() => setIsActive(!isActive)}>
            <div>
              <h5>{title}</h5>
            </div>
            <div>
              {isActive ? (
                <img src={minus} alt="" />
              ) : (
                <img src={plus} alt="" />
              )}
            </div>
          </AccordionTitle>
          {isActive && (
            <AccordionContent>
              <p>{content}</p>
            </AccordionContent>
          )}
        </AccordionItem>
      </AccordionContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const AccordionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AccordionItem = styled.div`
  width: 90%;
  border-bottom: 1px solid var(--gray);
`;

const AccordionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  cursor: pointer;
  opacity: 0.5;
  h5 {
    font-size: 14px;
    font-weight: 700;
  }
  img {
    width: 16px;
  }
  &:hover {
    transition: all 0.3s;
    opacity: 1;
  }
`;

const AccordionContent = styled.div`
  padding: 20px 2px;
`;
