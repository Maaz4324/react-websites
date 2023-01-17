import React from "react";
import styled from "styled-components";
import "./Navbar.css";
import facebook from "../images/facebook-icon.svg";
import instagram from "../images/instagram-icon.svg";
import twitter from "../images/twitter-icon.svg";
import youtube from "../images/youtube-icon.svg";
import logo from "../images/logo.jpg";

function Navbar() {
  return (
    <NavbarContainer>
      <NavLogo>
        <LogoImg src={logo} />
      </NavLogo>
      <MediaLinks>
        <MediaContainer>
          <H3>(423) 4243-646</H3>
          <Media>
            <MediaImg src={facebook} />
            <MediaImg src={instagram} />
            <MediaImg src={youtube} />
            <MediaImg src={twitter} />
          </Media>
        </MediaContainer>
      </MediaLinks>
      <NavLinks>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">
              Navbar
            </a> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    PATIENTS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    BLOG
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CONTACT
                  </a>
                </li>
                <MediaContainerExpanded>
                  <H3>(423) 4243-646</H3>
                  <Media>
                    <MediaImg src={facebook} />
                    <MediaImg src={instagram} />
                    <MediaImg src={youtube} />
                    <MediaImg src={twitter} />
                  </Media>
                </MediaContainerExpanded>
              </ul>
            </div>
          </div>
        </nav>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  width: 100%;
  min-height: 80px;
`;
const MediaLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 5px 30px;
  background-color: var(--white);
  @media (max-width: 992px) {
    display: none;
  }
`;
const MediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MediaContainerExpanded = styled.div`
  display: none;
  @media (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 590px) {
    flex-direction: column;
    align-items: start;
    margin-top: 10px;
  }
`;
const H3 = styled.h3`
  font-size: 20px;
  margin-right: 30px;
`;
const Media = styled.div``;

const NavLogo = styled.div`
  position: absolute;
  top: 1;
  left: 10%;
  width: 20%;
  z-index: 999;
  width: 360px;
  height: 180px;
  border-radius: 0 0 12rem 12rem;
  text-align: center;
  background-color: var(--white);
  box-shadow: 2px 3px 10px black;
  @media (max-width: 992px) {
    height: fit-content;
    width: 100%;
    max-width: 198.4px;
    border-radius: 0;
    left: 3%;
    box-shadow: 0 0 0 white;
  }
`;

const MediaImg = styled.img`
  width: 18%;
  cursor: pointer;
  padding: 0 2px;
  &:hover {
    transition: all ease 0.3s;
    background-color: var(--blue);
  }
`;

const LogoImg = styled.img`
  width: 50%;
  cursor: pointer;
`;

const NavLinks = styled.div`
  .navbar {
    background-color: var(--gray) !important;
    color: white !important;
    @media (max-width: 992px) {
      background-color: var(--white) !important;
      color: black !important;
    }
  }
  .navbar-collapse {
    width: 30% !important;
  }
  .navbar-nav {
    width: 100% !important;
    display: flex !important;
    justify-content: end;
    padding: 0 30px !important;
    @media (max-width: 992px) {
      padding-top: 50px !important;
    }
  }
  .nav-link {
    font-size: 18px;
    font-weight: 400;
    color: white;
    @media (max-width: 992px) {
      color: black !important;
    }
  }
  .container-fluid {
    @media (max-width: 992px) {
      display: flex !important;
      justify-content: end;
      padding: 0 30px !important;
    }
  }
`;
