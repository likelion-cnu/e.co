import styled from "styled-components";
import Header from "../components/Header";
import Comment from "../components/Comment";

function Home(){
  return (
    <Body>
    <Header/>
    <Comment />
    </Body>
  )
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.bgGradient};
`;

export default Home;
