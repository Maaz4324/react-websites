import React from "react";
import styled from "styled-components";
import teracotta from "../images/teracotta.jpg";
import frame from "../images/frame.jpg";
import clock from "../images/clock.jpg";
import showpiece from "../images/showpiece.jpg";
import essentials from "../images/essentials.jpg";
import { Link } from "react-router-dom";

function Category() {
  return (
    <Wrapper>
      <Container id="shopCategory">
        <CategoryContainer>
          <h1>Featured Categories</h1>
          <ImgContainer>
            <Link to="/shop/teracotta" className="img img1">
              <div className="img img1">
                <div className="clock one">
                  <h2>Teracotta items</h2>
                </div>
              </div>
            </Link>
            <Link to="/shop/frames" className="img img2">
              <div className="img img2">
                <div className="clock two">
                  <h2>Frames</h2>
                </div>
              </div>
            </Link>
            <Link to="/shop/clock" className="img img3">
              <div className="img img3">
                <div className="clock three">
                  <h2>Wall clock</h2>
                </div>
              </div>
            </Link>
            <Link to="/shop/show" className="img img4">
              <div>
                <div className="clock four">
                  <h2>Show pieces</h2>
                </div>
              </div>
            </Link>
            <Link to="/shop/essentials" className="img img5">
              <div>
                <div className="clock five">
                  <h2>Home essential</h2>
                </div>
              </div>
            </Link>
          </ImgContainer>
        </CategoryContainer>
      </Container>
    </Wrapper>
  );
}

export default Category;

const Wrapper = styled.div``;

const Container = styled.div`
  width: 100%;
  padding: 50px 10px;
  min-height: 100vh;
  background-color: white;
`;

const CategoryContainer = styled.div`
  width: 100%;
  max-width: 1247px;
  margin: 0 auto;
  @media (max-width: 630px) {
    h1 {
      font-size: 50px;
    }
  }
`;

const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto;
  grid-gap: 10px;
  @media (max-width: 630px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto auto auto auto;
  }
  .one {
    background: linear-gradient(
        rgba(102, 92, 17, 0.204),
        rgba(102, 92, 17, 0.204)
      ),
      url(${teracotta});
    min-height: 60vh;
  }
  .img1 {
    grid-column: 1/3;
    grid-row: 1/3;
  }
  .two {
    background: linear-gradient(
        rgba(44, 82, 28, 0.207),
        rgba(44, 82, 28, 0.207)
      ),
      url(${frame});
    min-height: 40vh;
  }
  .img2 {
    grid-column: 3/5;
    grid-row: 1/2;
  }
  .three {
    background: linear-gradient(
        rgba(104, 62, 28, 0.207),
        rgba(104, 62, 28, 0.207)
      ),
      url(${clock});
    min-height: 30vh;
  }
  .img3 {
    grid-column: 1/2;
    grid-row: 3/4;
  }
  .four {
    background: linear-gradient(
        rgba(134, 19, 19, 0.204),
        rgba(134, 19, 19, 0.204)
      ),
      url(${showpiece});
    min-height: 30vh;
  }
  .img4 {
    grid-column: 2/3;
    grid-row: 3/4;
  }
  .five {
    background: linear-gradient(
        rgba(12, 82, 68, 0.204),
        rgba(12, 82, 68, 0.204)
      ),
      url(${essentials});
    min-height: 50vh;
  }
  .img5 {
    grid-column: 3/5;
    grid-row: 2/4;
  }

  .img {
    width: 100%;
    height: fit-content;
    overflow: hidden;
    position: relative;
    border-radius: 10px;
  }

  .clock {
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    transition: all 1s;
  }
  .clock:hover {
    transform: scale(1.2);
  }
  .clock h2 {
    word-break: break-word;
    width: 70%;
    margin: 0 auto;
    text-align: center;
    color: white;
  }
  @media (max-width: 991px) {
    .one {
      min-height: 40vh;
    }
    .two {
      min-height: 30vh;
    }
    .three {
      min-height: 20vh;
    }
    .four {
      min-height: 20vh;
    }
    .five {
      min-height: 30vh;
    }
    .clock h2 {
      font-size: 30px;
    }
  }
  @media (max-width: 630px) {
    .img1 {
      grid-column: 1/3;
      grid-row: 1/3;
    }
    .img2 {
      grid-column: 1/3;
      grid-row: 4/6;
    }
    .img3 {
      grid-column: 1/3;
      grid-row: 3/4;
    }
    .img4 {
      grid-column: 1/2;
      grid-row: 6/7;
    }
    .img5 {
      grid-column: 2/3;
      grid-row: 6/7;
    }
    .five {
      min-height: 20vh;
    }
    .clock h2 {
      font-size: 24px;
    }
  }
`;
