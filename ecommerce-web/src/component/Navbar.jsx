import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.jpeg";
import search from "../images/search.svg";
import phone from "../images/phone.svg";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ linkState }) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState();

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchInput.trim() != "") {
      navigate(`/shop/${searchInput.trim().toLowerCase()}`);
      localStorage.setItem("search", searchInput.trim());
      linkState(searchInput);
      setSearchInput("");
    }
  };

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
  }

  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
  }

  function setLink(to) {
    localStorage.setItem("link", to);
    linkState(to);
  }

  return (
    <Wrapper>
      <Container>
        <Nav>
          <Logo>
            <ImgContainer>
              <img src={logo} alt="Sri venkateshwara trading logo" />
            </ImgContainer>
            <h2>SVT</h2>
          </Logo>
          <Right>
            <Navlinks>
              <Links>
                <ul>
                  <li>
                    <Link to="/">
                      <h5>Home</h5>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop/teracotta"
                      onClick={() => setLink("teracotta")}
                    >
                      <h5>Teracotta</h5>
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop/frames" onClick={() => setLink("frames")}>
                      <h5>Frames</h5>
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop/clock" onClick={() => setLink("clock")}>
                      <h5>Clock</h5>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <h5>Contact</h5>
                    </Link>
                  </li>
                </ul>
              </Links>
              <Collapse>
                <Sidebar id="mySidebar">
                  <Link
                    to="javascript:void(0)"
                    onClick={closeNav}
                    className="closebtn"
                  >
                    ×
                  </Link>
                  <ul>
                    <li>
                      <Link to="/">
                        <h5>Home</h5>
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop/teracotta">
                        <h5>Teracotta</h5>
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop/frames">
                        <h5>Frames</h5>
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop/wall-clock">
                        <h5>Clock</h5>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <h5>Contact</h5>
                      </Link>
                    </li>
                  </ul>
                </Sidebar>

                <div id="main">
                  <Openbtn className="openbtn" onClick={openNav}>
                    ☰
                  </Openbtn>
                </div>
              </Collapse>
            </Navlinks>
            <Search>
              <img src={search} alt="sri venkateswara trading search" />
              <input
                type="text"
                placeholder="search here"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </Search>
            <Phone>
              <img src={phone} alt="Sri venkateshwara trading shop" />
            </Phone>
          </Right>
        </Nav>
      </Container>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.div``;

const Container = styled.div`
  width: 100%;
  padding: 0 10px;
  position: absolute;
`;

const Nav = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  width: 100%;
  @media (max-width: 522px) {
    grid-template-columns: 50% 50%;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  @media (max-width: 522px) {
    flex-direction: row;
    width: 100%;
    h2 {
      font-size: 30px;
    }
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  max-width: 112px;
  padding: 5px 10px;
  img {
    width: 100%;
  }
  @media (max-width: 522px) {
    width: 100%;
    padding: 5px 0;
    width: 70px;
    img {
      width: 100%;
    }
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    justify-content: end;
    flex-direction: row-reverse;
  }
`;

const Navlinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  @media (max-width: 1200px) {
    margin: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 17px;
  }
  li {
    list-style: none;
    margin: 0 10px;
    &:hover {
      color: black;
    }
  }
  h5 {
    padding: 7px 15px;
    color: var(--textgray);
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Collapse = styled.div`
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
`;

const Search = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 20px;
  background-color: rgb(255 255 255 / 24%);
  box-shadow: 0.4px 0.6px 5px rgb(223 223 223);
  min-width: 180px;
  img {
    width: 30px;
  }
  input {
    width: 100%;
    padding: 3px 7px;
    background-color: rgba(255, 255, 255, 0.099);
    outline: none;
    border: 0;
    font-size: 20px;
  }
  @media (max-width: 1200px) {
    background-color: rgb(255 255 255 / 24%);
    box-shadow: 0.4px 0.6px 5px rgb(223 223 223);
    input {
      display: block;
    }
  }
  @media (max-width: 522px) {
    margin: 0 4px;
    position: absolute;
    top: 100px;
    left: 5px;
    width: 95%;
  }
`;

const Phone = styled.div`
  img {
    width: 30px;
  }
  @media (max-width: 1279px) {
    display: none;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Sidebar = styled.div`
  .closebtn {
    @media (max-width: 1200px) {
      position: absolute;
      top: 0;
      right: 25px;
      font-size: 36px;
      margin-left: 50px;
    }
  }
  @media (max-width: 1200px) {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.929);
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    a {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 25px;
      color: #818181;
      display: block;
      transition: 0.3s;
      &:hover {
        color: #f1f1f1;
      }
    }
    li {
      list-style: none;
    }
  }

  @media screen and (max-height: 450px) {
    padding-top: 15px;
    a {
      font-size: 18px;
    }
  }
`;

const Openbtn = styled.button`
  font-size: 25px;
  cursor: pointer;
  background-color: #ffffff00;
  color: rgb(0, 0, 0);
  padding: 10px 15px;
  border: none;
  &:hover {
    background-color: #e9e9e9;
  }
`;
