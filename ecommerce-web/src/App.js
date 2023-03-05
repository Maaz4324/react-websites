import "./App.css";
import styled from "styled-components";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Wrapper className="App">
      <Navbar />
      <Home />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  color: grey;
`;
