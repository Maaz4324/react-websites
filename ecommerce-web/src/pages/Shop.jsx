import React from "react";
import styled from "styled-components";
import { teracottaData } from "../assets/teracotta";
import { essentialData } from "../assets/essential";
import { frameData } from "../assets/frame";
import { showData } from "../assets/show";
import { clockData } from "../assets/clock";
import { sculptureData } from "../assets/sculpture";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #747474",
  boxShadow: 24,
  p: 4,
  "@media (max-width: 500px)": {
    width: 300,
    padding: "15px",
  },
  "@media (max-width: 360px)": {
    width: "80%",
  },
};

function Shop({ directTo }) {
  const [pageData, setPageData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [head, setHead] = useState(directTo);
  const [bigImg, setBigImg] = useState();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const dataArray = [
    teracottaData,
    essentialData,
    frameData,
    showData,
    clockData,
    sculptureData,
  ];

  useEffect(() => {
    let elemNo = 0;
    for (let i = 0; i < dataArray.length; i++) {
      const element = dataArray[i].filter((data) =>
        data.keyword.includes(directTo)
      );
      const nameWords = dataArray[i].filter((data) =>
        data.name.toLowerCase().includes(directTo.toLowerCase())
      );
      console.log("🚀 ~ file: Shop.jsx:32 ~ useEffect ~ nameWords:", nameWords);
      if (element.length != 0) {
        setPageData(element);
        elemNo++;
      } else if (nameWords.length != 0) {
        setPageData(nameWords);
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
    if (directTo == "sculpture") {
      setPageData(sculptureData);
    }
    setHead(directTo.charAt(0).toUpperCase() + directTo.slice(1));
  }, [directTo]);

  function openModal(img) {
    setBigImg(img);

    setOpen(true);
  }

  return (
    <Wrapper>
      <Container>
        <h1>{head}</h1>
        <hr />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img src={bigImg} style={{ width: "100%" }} alt="" />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              To purchase the item or for any queries contact: 8017265141 or
              e-mail here: mrityunjaysingh65@gmail.com
            </Typography>
          </Box>
        </Modal>
        <ItemContainer>
          {pageData.map((data, idx) => (
            <Item key={idx} onClick={() => openModal(data.img)}>
              <ImgContainer>
                <LazyLoadImage
                  src={data.img}
                  style={{ width: "100%" }}
                  alt={data.name}
                />
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
  grid-template-columns: 32.3% 32.3% auto;
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
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transition: all 0.8s;
    background: rgb(139, 182, 224);
    cursor: pointer;
  }
  &:hover ${ImgContainer} {
    transition: all 0.8s;
    display: none;
  }
  &:hover ${Txt} {
    transition: all 0.8s;
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

const ModalShowImg = styled.div`
  width: 500px;
  height: 400px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 20px;
  position: sticky;
  top: 0%;
  left: 50%;
  box-shadow: 0px 0px 10px #cccccc;
  border-radius: 10px;
  z-index: 1000;
  img {
    width: 50%;
  }
`;
