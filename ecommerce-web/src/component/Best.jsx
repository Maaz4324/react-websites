import { bestData } from "../assets/best";
import styled from "styled-components";

export default function Best() {
  return (
    <Wrapper>
      <Container>
        <h1>Best Sellers</h1>
        <ItemContainer>
          {bestData.map((data, idx) => (
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

const Wrapper = styled.div``;

const Container = styled.div``;

const ItemContainer = styled.div``;

const Item = styled.div``;

const ImgContainer = styled.div``;

const Txt = styled.div``;
