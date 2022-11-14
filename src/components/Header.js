import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import routes from "../router";

function Header(){
  const navigate = useNavigate();
  return (
    <HeaderSection>
      <div className="logo" onClick={() => {navigate(routes.home)}}>e.co</div>
    </HeaderSection>
  )
};

const HeaderSection = styled.div`
  width: 100%;
  height: 70px;
  
  display: flex;
  align-items: center;

  background-color: ${props => props.theme.white};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);

  .logo {
    padding-left: 30px;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 32px;
    
    background: linear-gradient(90deg, #2FCA7F 0%, #54DE3D 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    cursor: pointer;
  }
`;

export default Header;
