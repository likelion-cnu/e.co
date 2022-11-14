import styled from "styled-components";
import Header from "../components/Header";

function Home(){
  return (
    <Body>
    <Header/>
    Home
    </Body>
  )
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.bgGradient};
`;

export default Home;
