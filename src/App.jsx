import "./App.css";
import styled from "styled-components";
import UniLogo from "./assets/uni_logo.png";
import RetinoLogo from "./assets/retinopathy_logo.png";
import ToolStepper from "./components/ToolStepper";

const Container = styled.div`
  width: 80%;
  max-width: 1920px;
  margin-inline: auto;
  padding-block: 1.5rem;
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Header = styled(Container)`
  padding: 2rem 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  img {
    width: 170px;
    @media (max-width: 768px) {
      width: 120px;
    }
  }
`;

const VerticalRuler = styled.span`
  height: 3rem;
  width: 2px;
  border-radius: 1rem;
  background-color: #d8d8d8;
`;

function App() {
  return (
    <>
      <Header>
        <img src={UniLogo} alt="" />
        <VerticalRuler />
        <img src={RetinoLogo} alt="" />
      </Header>
      <Container>
        <ToolStepper />
      </Container>
    </>
  );
}

export default App;
