import "./App.css";
import styled from "styled-components";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Faq from "./component/Faq";
import Footer from "./component/Footer";

function App() {
  return (
    <Wrapper className="App">
      <Navbar />
      <Home />
      <Faq />
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  color: grey;
`;
