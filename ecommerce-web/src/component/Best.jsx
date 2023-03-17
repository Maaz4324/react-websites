import { bestData } from "../assets/best";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Best() {
  return (
    <Wrapper>
      <Container>
        <h1>Best Sellers</h1>
        <ItemContainer>
          {bestData.map((data, idx) => (
            <Item key={idx}>
              <ImgContainer>
                <LazyLoadImage src={data.img} alt={data.name} />
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

const Container = styled.div`
  padding: 40px 30px;
  max-width: 1327px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 520px) {
    h1 {
      font-size: 50px;
    }
  }
`;

const ItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 24.3% 24.3% 24.3% 24.3%;
  grid-gap: 10px;

  @media (max-width: 1047px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 860px) {
    grid-template-columns: repeat(3, 1fr);
    padding-right: 10px;
  }
  @media (max-width: 520px) {
    grid-template-columns: 50% 50%;
    padding-right: 10px;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    background: var(--lightgray);
    padding: 20px;
  }
`;

const Txt = styled.div`
  display: none;
  h5 {
    font-size: 25px;
    font-weight: 500;
    text-align: center;
    word-wrap: break-word;
  }
`;

const Item = styled.div`
  cursor: pointer;
  background: var(--lightgray);
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transition: all 0.8s;
    background: rgb(139, 182, 224);
  }
  &:hover ${ImgContainer} {
    transition: all 0.8s;
    display: none;
  }
  &:hover ${Txt} {
    transition: all 0.8s;
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  @media (max-width: 554px) {
    min-height: 27vh;
  }
  @media (max-width: 480px) {
    height: 40vh;
  }
  @media (max-width: 370px) {
    height: 32vh;
  }
`;
