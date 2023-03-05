import "./App.css";
import styled from "styled-components";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Faq from "./component/Faq";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import { useState, useEffect } from "react";

function App() {
  const [jumpTo, setJumpTo] = useState("");
  const [linkChange, setLinkChange] = useState("");

  useEffect(() => {
    setJumpTo(localStorage.getItem("link"));
  }, [linkChange]);

  return (
    <Router>
      <Wrapper className="App">
        <Navbar linkState={setLinkChange} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path={"/shop/" + jumpTo}
            element={<Shop directTo={jumpTo} />}
          />
          <Route path="/shop/show" element={<Shop directTo="show" />} />
          <Route
            path="/shop/teracotta"
            element={<Shop directTo="teracotta" />}
          />
          <Route path="/shop/frames" element={<Shop directTo="frames" />} />
          <Route
            path="/shop/essentials"
            element={<Shop directTo="essentials" />}
          />
          <Route path="/shop/clock" element={<Shop directTo="clock" />} />
        </Routes>
        <Faq />
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;

const Wrapper = styled.div`
  color: grey;
`;
